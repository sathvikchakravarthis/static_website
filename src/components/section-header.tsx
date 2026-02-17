import { Badge } from './ui/badge';

export function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 space-y-3">
      <Badge>{eyebrow}</Badge>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className="max-w-3xl text-muted-foreground">{description}</p>
    </div>
  );
}
