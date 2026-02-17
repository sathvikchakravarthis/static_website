'use client';

import { useMemo, useState } from 'react';
import { caseStudies, type CaseStudyTag } from '@/content/caseStudies';
import { CaseStudyCard } from '@/components/case-study-card';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';

const tags: Array<CaseStudyTag | 'All'> = ['All', 'Power BI', 'Automation', 'Trading Bots', 'Analytics'];

export default function CaseStudiesPage() {
  const [activeTag, setActiveTag] = useState<(typeof tags)[number]>('All');

  const filtered = useMemo(
    () => caseStudies.filter((study) => activeTag === 'All' || study.tag === activeTag),
    [activeTag]
  );

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <SectionHeader
        eyebrow="Case Studies"
        title="Real builds, clear constraints, measurable outcomes"
        description="Filter by capability and review architecture, approach, and example business impact."
      />
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Button key={tag} variant={tag === activeTag ? 'solid' : 'outline'} onClick={() => setActiveTag(tag)}>
            {tag}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </div>
  );
}
