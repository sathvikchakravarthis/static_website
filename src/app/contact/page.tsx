'use client';

import { useState } from 'react';
import { services } from '@/content/services';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type FormState = {
  name: string;
  email: string;
  company: string;
  serviceInterested: string;
  budgetRange: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  serviceInterested: '',
  budgetRange: '',
  message: ''
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const payload = await response.json();
    setStatus(payload);
    setLoading(false);

    if (payload.ok) setForm(initialState);
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-16">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">Book a project conversation</h1>
        <p className="text-muted-foreground">
          Share your goals, constraints, and timeline. You’ll receive a practical response with next steps.
        </p>
      </div>

      <Card>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Name" required value={form.name} onChange={(value) => setForm((prev) => ({ ...prev, name: value }))} />
            <Input label="Email" type="email" required value={form.email} onChange={(value) => setForm((prev) => ({ ...prev, email: value }))} />
          </div>
          <Input label="Company (optional)" value={form.company} onChange={(value) => setForm((prev) => ({ ...prev, company: value }))} />
          <div className="grid gap-4 md:grid-cols-2">
            <Select
              label="Service interested"
              required
              value={form.serviceInterested}
              onChange={(value) => setForm((prev) => ({ ...prev, serviceInterested: value }))}
              options={services.map((service) => ({ label: service.title, value: service.title }))}
            />
            <Select
              label="Budget range"
              required
              value={form.budgetRange}
              onChange={(value) => setForm((prev) => ({ ...prev, budgetRange: value }))}
              options={[
                { value: '3k-8k', label: '$3k - $8k' },
                { value: '8k-20k', label: '$8k - $20k' },
                { value: '20k+', label: '$20k+' }
              ]}
            />
          </div>
          <label className="grid gap-1 text-sm">
            Message *
            <textarea
              required
              minLength={20}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="min-h-32 rounded-xl border border-border bg-transparent p-3"
            />
          </label>

          <Button type="submit" disabled={loading} className="w-fit">
            {loading ? 'Sending...' : 'Send inquiry'}
          </Button>

          {status ? (
            <p className={status.ok ? 'text-sm text-green-500' : 'text-sm text-red-500'}>{status.message}</p>
          ) : null}
        </form>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Prefer scheduling first?</h2>
        <p className="mt-2 text-sm text-muted-foreground">Calendar link placeholder: calendly.com/your-link</p>
      </Card>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = 'text',
  required = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm">
      {label} {required ? '*' : ''}
      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-xl border border-border bg-transparent p-3"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  required = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  required?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm">
      {label} {required ? '*' : ''}
      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-xl border border-border bg-transparent p-3"
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
