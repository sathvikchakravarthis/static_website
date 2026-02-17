import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:border-accent/40',
        className
      )}
      {...props}
    />
  );
}
