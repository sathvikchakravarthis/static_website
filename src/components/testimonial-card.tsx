import { Card } from './ui/card';

export function TestimonialCard({
  quote,
  author,
  company
}: {
  quote: string;
  author: string;
  company: string;
}) {
  return (
    <Card className="space-y-4">
      <p className="text-sm text-muted-foreground">“{quote}”</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-xs text-muted-foreground">{company}</p>
      </div>
    </Card>
  );
}
