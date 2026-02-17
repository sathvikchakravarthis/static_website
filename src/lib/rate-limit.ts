type Entry = { count: number; expiresAt: number };

const store = new Map<string, Entry>();

export function checkRateLimit(
  key: string,
  maxRequests = 5,
  windowMs = 60_000
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.expiresAt < now) {
    store.set(key, { count: 1, expiresAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (existing.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  existing.count += 1;
  store.set(key, existing);
  return { allowed: true, remaining: maxRequests - existing.count };
}
