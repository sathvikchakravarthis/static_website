import Link from 'next/link';
import type { CaseStudy } from '@/content/caseStudies';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <Badge>{study.tag}</Badge>
        <Link href={`/case-studies/${study.slug}`} className="text-sm text-accent hover:underline">
          Read case study →
        </Link>
      </div>
      <h3 className="text-xl font-semibold">{study.title}</h3>
      <p className="text-sm text-muted-foreground">{study.summary}</p>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium">Problem:</span> {study.problem}
        </p>
        <p>
          <span className="font-medium">Approach:</span> {study.approach[0]}
        </p>
        <p>
          <span className="font-medium">Results:</span> {study.outcomes[0]}
        </p>
      </div>
      <p className="text-xs text-muted-foreground">Tools: {study.tools.join(', ')}</p>
    </Card>
  );
}
