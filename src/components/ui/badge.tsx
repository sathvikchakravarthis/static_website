export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
      {children}
    </span>
  );
}
