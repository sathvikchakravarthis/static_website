import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ComponentProps, ReactNode } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'solid' | 'ghost' | 'outline';
};

export function Button({ className, variant = 'solid', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        variant === 'solid' && 'bg-accent text-accent-foreground hover:opacity-90',
        variant === 'ghost' && 'bg-transparent text-foreground hover:bg-muted',
        variant === 'outline' && 'border border-border bg-transparent hover:bg-muted',
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  className,
  variant = 'solid',
  children
}: {
  href: string;
  className?: string;
  variant?: 'solid' | 'ghost' | 'outline';
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        variant === 'solid' && 'bg-accent text-accent-foreground hover:opacity-90',
        variant === 'ghost' && 'bg-transparent text-foreground hover:bg-muted',
        variant === 'outline' && 'border border-border bg-transparent hover:bg-muted',
        className
      )}
    >
      {children}
    </Link>
  );
}
