import { BrandLogo } from "@/components/BrandLogo";

type FooterProps = {
  onOpenInquiry?: () => void;
};

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Footer({ onOpenInquiry }: FooterProps) {
  return (
    <footer id="contact" className="relative mt-16 border-t border-border/70 sm:mt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-4 md:gap-12">
          <div className="md:col-span-2">
            <BrandLogo size="footer" />
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              KRISHNA.WEBDESIGN builds high-ticket digital experiences for brands that demand
              premium design quality, conversion precision, and execution speed.
            </p>
            <button
              type="button"
              onClick={onOpenInquiry}
              className="mt-6 min-h-11 rounded-xl bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
            >
              Get Proposal
            </button>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-9 items-center transition hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:priyanshgaud1111@gmail.com"
                  className="inline-flex min-h-9 items-center break-all transition hover:text-foreground"
                >
                  priyanshgaud1111@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919549800436"
                  className="inline-flex min-h-9 items-center transition hover:text-foreground"
                >
                  +91 9549800436
                </a>
              </li>
              <li>Mon - Sat · 10am - 8pm</li>
            </ul>
            <a
              href="https://wa.me/919549800436"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-10 items-center rounded-lg border border-border bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wide text-foreground transition hover:bg-white/10"
            >
              WhatsApp Us
            </a>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-foreground"
              >
                Behance
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-foreground"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-6 text-center text-xs text-muted-foreground md:mt-12 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} KRISHNA.WEBDESIGN. All rights reserved.</p>
          <p>India-based. Global-grade quality.</p>
        </div>
      </div>
    </footer>
  );
}
