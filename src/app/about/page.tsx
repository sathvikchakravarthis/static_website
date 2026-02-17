import type { Metadata } from 'next';
import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About',
  description: 'Approach, principles, toolset, and industries served.'
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      <SectionHeader
        eyebrow="About"
        title="Built for outcomes, not just deliverables"
        description="I partner with teams that need practical systems they can trust every day—not fragile prototypes."
      />

      <Card className="space-y-4">
        <h2 className="text-xl font-semibold">Narrative</h2>
        <p className="text-muted-foreground">
          My work sits at the intersection of analytics engineering, automation, and business decision design. Every engagement starts with your operating constraints and ends with tools your team can actually use.
        </p>
      </Card>

      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold">Principles</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Clarity before complexity</li>
            <li>Measurable progress every week</li>
            <li>Architecture that supports iteration</li>
            <li>Documentation as part of delivery</li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Industries</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Logistics, distribution, operations-heavy services, finance workflows, and technical trading research.
          </p>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-semibold">How I work</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Discovery and success metric definition</li>
          <li>Architecture proposal with milestones</li>
          <li>Build and validation cycles</li>
          <li>Handover, training, and optimization plan</li>
        </ol>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Skills matrix</h2>
        <div className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
          <p><span className="font-medium text-foreground">BI:</span> Power BI, DAX modeling, governance, semantic layer design</p>
          <p><span className="font-medium text-foreground">Automation:</span> Python ETL, APIs, scheduling, observability</p>
          <p><span className="font-medium text-foreground">Trading systems:</span> Backtesting, modular bot architecture, risk controls</p>
          <p><span className="font-medium text-foreground">Analytics:</span> Forecasting, anomaly detection, experimentation, stakeholder communication</p>
        </div>
      </Card>
    </div>
  );
}
