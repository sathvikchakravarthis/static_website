import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">DataCraft Studio</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Premium data systems for reporting, automation, and analytical decision-making.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-medium">Navigate</p>
          <Link href="/services" className="block text-muted-foreground hover:text-foreground">
            Services
          </Link>
          <Link href="/case-studies" className="block text-muted-foreground hover:text-foreground">
            Case Studies
          </Link>
          <Link href="/about" className="block text-muted-foreground hover:text-foreground">
            About
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-medium">Contact</p>
          <p className="text-muted-foreground">hello@datacraftstudio.dev</p>
          <p className="text-muted-foreground">Book a call: calendly.com/your-link</p>
          <div className="pt-2 text-xs text-muted-foreground">
            <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
