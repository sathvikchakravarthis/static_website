import type { Metadata } from 'next';
import { services } from '@/content/services';
import { SectionHeader } from '@/components/section-header';
import { ButtonLink } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Power BI, Python automation, trading bot architecture, and advanced analytics services.'
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-16">
      <SectionHeader
        eyebrow="Services"
        title="Engagements designed for measurable outcomes"
        description="Choose one service or combine multiple tracks for end-to-end transformation."
      />
      {services.map((service) => (
        <Card key={service.id} className="space-y-6">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <p className="text-muted-foreground">{service.summary}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">What you get</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {service.whatYouGet.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Who it’s for</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.whoItsFor}</p>
              <h3 className="mt-4 font-semibold">Typical timeline</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.timeline}</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Deliverables</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Tech stack / tools</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.tools.join(' · ')}</p>
            </div>
          </div>
          <ButtonLink href="/contact">{service.cta}</ButtonLink>
        </Card>
      ))}
    </div>
  );
}
