import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkRateLimit } from '@/lib/rate-limit';
import { sanitizeInput } from '@/lib/utils';
import { contactSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
  const limit = checkRateLimit(ip);

  if (!limit.allowed) {
    return NextResponse.json({ ok: false, message: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  const body = await request.json();
  const sanitizedBody = {
    name: sanitizeInput(body.name ?? ''),
    email: sanitizeInput(body.email ?? ''),
    company: sanitizeInput(body.company ?? ''),
    serviceInterested: sanitizeInput(body.serviceInterested ?? ''),
    budgetRange: sanitizeInput(body.budgetRange ?? ''),
    message: sanitizeInput(body.message ?? '')
  };

  const parsed = contactSchema.safeParse(sanitizedBody);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: parsed.error.issues[0]?.message || 'Invalid input.' }, { status: 400 });
  }

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'portfolio@resend.dev',
      to: process.env.CONTACT_TO_EMAIL || 'hello@datacraftstudio.dev',
      subject: `New inquiry from ${parsed.data.name}`,
      text: JSON.stringify(parsed.data, null, 2)
    });

    return NextResponse.json({ ok: true, message: 'Message sent successfully. I will reply soon.' });
  }

  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { ok: false, message: 'Email provider not configured in this environment.' },
      { status: 500 }
    );
  }

  const dataDir = path.join(process.cwd(), 'data');
  const leadsPath = path.join(dataDir, 'leads.json');
  await fs.mkdir(dataDir, { recursive: true });

  let existing: unknown[] = [];
  try {
    const raw = await fs.readFile(leadsPath, 'utf-8');
    existing = JSON.parse(raw);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  existing.push({ ...parsed.data, createdAt: new Date().toISOString() });
  await fs.writeFile(leadsPath, JSON.stringify(existing, null, 2), 'utf-8');

  return NextResponse.json({ ok: true, message: 'Message saved locally (dev mode).' });
}
