import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold">
          DataCraft Studio
        </Link>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
