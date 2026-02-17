import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy'
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground">This site collects inquiry data submitted via the contact form solely for responding to service requests.</p>
      <p className="text-muted-foreground">Data may include name, email, company, selected service, budget range, and message content. Information is not sold to third parties.</p>
      <p className="text-muted-foreground">You may request deletion of your inquiry data by contacting hello@datacraftstudio.dev.</p>
    </div>
  );
}
