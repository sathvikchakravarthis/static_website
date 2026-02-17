import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service'
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="text-muted-foreground">Website content is provided for informational purposes and does not constitute legal, financial, or investment advice.</p>
      <p className="text-muted-foreground">Project scopes, timelines, and deliverables are finalized through written agreements before engagement begins.</p>
      <p className="text-muted-foreground">All trademarks and third-party tool names belong to their respective owners.</p>
    </div>
  );
}
