import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArchitectureDiagram } from '@/components/architecture-diagram';
import { ButtonLink } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { caseStudies } from '@/content/caseStudies';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const studyIndex = caseStudies.findIndex((item) => item.slug === params.slug);
  if (studyIndex === -1) notFound();

  const study = caseStudies[studyIndex];
  const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm text-accent">{study.tag}</p>
        <h1 className="text-4xl font-bold">{study.title}</h1>
        <p className="max-w-4xl text-muted-foreground">{study.summary}</p>
      </header>

      <Card className="space-y-4">
        <h2 className="text-xl font-semibold">Context & Problem</h2>
        <p className="text-muted-foreground">{study.problem}</p>
      </Card>

      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold">Constraints</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {study.constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Solution Approach</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {study.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </Card>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Architecture Diagram</h2>
        <ArchitectureDiagram architecture={study.architecture} />
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold">Outcomes (example outcomes)</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {study.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Tools</h2>
          <p className="mt-3 text-sm text-muted-foreground">{study.tools.join(' · ')}</p>
          <h3 className="mt-6 text-lg font-semibold">Screenshot placeholders</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-border p-6 text-xs text-muted-foreground">Dashboard / pipeline view placeholder</div>
            <div className="rounded-xl border border-dashed border-border p-6 text-xs text-muted-foreground">Monitoring / results view placeholder</div>
          </div>
        </Card>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-border p-5">
        <p className="text-sm text-muted-foreground">Next case study</p>
        <ButtonLink href={`/case-studies/${nextStudy.slug}`} variant="outline">
          {nextStudy.title}
        </ButtonLink>
      </div>
    </div>
  );
}
