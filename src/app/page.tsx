import { caseStudies } from '@/content/caseStudies';
import { faqs } from '@/content/faqs';
import { services } from '@/content/services';
import { testimonials } from '@/content/testimonials';
import { FAQAccordion } from '@/components/faq-accordion';
import { MotionFade } from '@/components/motion-fade';
import { SectionHeader } from '@/components/section-header';
import { TestimonialCard } from '@/components/testimonial-card';
import { ButtonLink } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-20 px-6 py-16">
      <section className="space-y-7">
        <MotionFade>
          <p className="text-sm font-medium text-accent">Premium Data Systems for Teams That Need Results</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            I build trusted reporting, resilient automation, and decision-grade analytics that scale with your business.
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Specialized in Power BI, Python automation, trading bot architecture, and advanced analytics—built with clarity, speed, and long-term maintainability.
          </p>
        </MotionFade>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact">Book a Call</ButtonLink>
          <ButtonLink href="/case-studies" variant="outline">
            View Case Studies
          </ButtonLink>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Services" title="Specialized service pillars" description="Each engagement is scoped for measurable outcomes and operational adoption." />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <MotionFade key={service.id} delay={index * 0.05}>
              <Card>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
              </Card>
            </MotionFade>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Credibility"
          title="A process built for trust"
          description="Clear milestones, practical documentation, and decision-focused delivery from start to handover."
        />
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <h3 className="font-semibold">Process</h3>
            <p className="mt-2 text-sm text-muted-foreground">Discovery → architecture → implementation → QA → handover with weekly transparent checkpoints.</p>
          </Card>
          <Card>
            <h3 className="font-semibold">Guarantees</h3>
            <p className="mt-2 text-sm text-muted-foreground">Defined scope, milestone demos, and action-ready documentation with reproducible assets.</p>
          </Card>
          <Card>
            <h3 className="font-semibold">Tooling</h3>
            <p className="mt-2 text-sm text-muted-foreground">Power BI, Python, SQL, version control, CI-friendly workflows, and monitoring-first architecture.</p>
          </Card>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Featured Work" title="Case studies with measurable impact" description="Example outcomes from recent engagements."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <Card key={study.slug}>
              <h3 className="font-semibold">{study.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{study.outcomes[0]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Testimonials" title="What clients value most" description="Built around clarity, speed, and measurable business outcomes." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="FAQ" title="Common questions before we start" description="Straight answers on process, scope, and delivery." />
        <FAQAccordion items={faqs} />
      </section>
    </div>
  );
}
