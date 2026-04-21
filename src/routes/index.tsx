import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Check, ChevronDown, Sparkles, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";
import { InquiryModal } from "@/components/InquiryModal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MagneticButton } from "@/components/MagneticButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KRISHNA.WEBDESIGN | Premium Websites That Grow Businesses" },
      {
        name: "description",
        content: "High-ticket premium web design and development for serious businesses.",
      },
    ],
  }),
  component: Home,
});

const services = [
  "Luxury Business Websites",
  "Conversion-Focused Landing Pages",
  "E-Commerce Websites",
  "Premium UI/UX Redesign",
  "Brand-Focused Custom Development",
  "Performance & Optimization",
];

const trustPoints = [
  "Awwwards-level design thinking",
  "Built for serious businesses",
  "Conversion-first websites",
  "Premium support",
  "Fast communication",
  "India-based, global quality",
];

const pricingPlans = [
  {
    name: "Basic Website",
    price: "₹39,999",
    popular: false,
    features: [
      "Clean business website",
      "Responsive design",
      "Domain + hosting setup",
      "Contact form",
      "Fast delivery",
    ],
  },
  {
    name: "Standard 2D Website",
    price: "₹74,999",
    popular: true,
    features: [
      "Advanced custom design",
      "Better UI structure",
      "Admin panel",
      "Inventory or product system",
      "Analytics integration",
      "Maintenance support",
    ],
  },
  {
    name: "Ultra Luxury UI/UX Website",
    price: "₹99,999",
    popular: false,
    features: [
      "High-end custom interface",
      "Premium animations",
      "Luxury visual storytelling",
      "Conversion-focused layout",
      "Advanced section design",
      "Brand-first presentation",
      "Elite design treatment",
    ],
  },
];

const includedRows = [
  { feature: "Domain Setup", basic: true, standard: true, premium: true },
  { feature: "Hosting", basic: true, standard: true, premium: true },
  { feature: "Responsive UI", basic: true, standard: true, premium: true },
  { feature: "Admin Panel", basic: false, standard: true, premium: true },
  {
    feature: "Payment Integration",
    basic: false,
    standard: false,
    premium: true,
  },
  { feature: "Inventory System", basic: false, standard: true, premium: true },
  { feature: "Analytics", basic: false, standard: true, premium: true },
  { feature: "Maintenance", basic: false, standard: true, premium: true },
  { feature: "AI Integration", basic: false, standard: false, premium: true },
  { feature: "Animation", basic: false, standard: false, premium: true },
];

const showcase = [
  {
    title: "Cars Website",
    url: "https://cars-web-priyansh000001.netlify.app",
  },
  {
    title: "Sample Gym Website",
    url: "https://semple-gym-webshite.netlify.app",
  },
  {
    title: "Sample MG Bites",
    url: "https://semple-mg-bites.netlify.app",
  },
  {
    title: "Puma Hungry For More",
    url: "https://puma-hungry-for-more-priyansh-20260410.netlify.app",
  },
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "Basic builds ship in 7-14 days, Standard in 3-4 weeks, and Ultra Luxury in 4-6 weeks based on scope.",
  },
  {
    q: "Can you handle domain and hosting too?",
    a: "Yes. We handle complete launch setup with secure hosting, DNS, SSL, and deployment workflow.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Absolutely. We can migrate content, modernize UI/UX, improve performance, and align the site with your brand.",
  },
  {
    q: "How does inquiry onboarding work?",
    a: "Submit the proposal form, we review business goals, and share a tailored roadmap with timeline and pricing.",
  },
];

function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-hero">
      <ScrollProgress />
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />
      <Particles count={22} />

      <section id="home" className="relative px-4 pt-28 pb-14 sm:px-6 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/[0.03] px-3 py-1.5 text-[11px] tracking-[0.08em] text-accent sm:text-xs">
              <Sparkles size={12} />
              Premium Web Design Agency
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.04] sm:text-5xl md:text-6xl lg:text-7xl">
              We Build <span className="text-gradient">Premium Websites</span> That Grow Businesses
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
              Cinematic visual systems, conversion-first UX, and elite frontend engineering built to
              position your brand as premium from first scroll.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <MagneticButton
                onClick={() => setInquiryOpen(true)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Unlock Pricing
                <ArrowRight size={16} />
              </MagneticButton>
              <a
                href="https://wa.me/919549800436"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-white/5 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 pb-10 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 rounded-2xl border border-accent/20 bg-white/[0.02] p-4 sm:grid-cols-3 sm:p-5">
          {trustPoints.slice(0, 3).map((point) => (
            <p
              key={point}
              className="text-center text-xs uppercase tracking-[0.08em] text-muted-foreground sm:text-sm"
            >
              {point}
            </p>
          ))}
        </div>
      </section>

      <section id="services" className="relative px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Services crafted for premium growth"
            subtitle="Choose from focused high-ticket offerings designed for brand authority, lead quality, and conversion velocity."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.42 }}
                className="glass rounded-2xl border border-accent/10 p-5 transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
              >
                <BadgeCheck className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-lg font-semibold">{service}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Crafted with brand-first UI language, modern architecture, and measurable
                  conversion outcomes.
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Luxury pricing packages"
            subtitle="Three curated tiers with premium positioning, polished delivery, and scalable business outcomes."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.article
                key={plan.name}
                whileHover={{ y: -6 }}
                className={`glass relative rounded-2xl border p-5 sm:p-6 ${
                  plan.popular ? "border-accent/40 shadow-glow" : "border-border/70"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-4 top-4 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
                    Most Popular
                  </span>
                )}
                <h3 className="mt-2 text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-3xl font-bold text-gradient">{plan.price}</p>
                <ul className="mt-5 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-foreground">
                      <Check size={16} className="mt-0.5 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  onClick={() => setInquiryOpen(true)}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-primary-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
                >
                  Start This Plan
                </MagneticButton>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="included" className="relative px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="What's Included"
            subtitle="Choose the package that matches your business growth stage."
          />
          <div className="glass mt-8 overflow-hidden rounded-2xl border border-accent/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm">
                <thead className="border-b border-border/60 bg-white/[0.03]">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-center font-medium text-muted-foreground">
                      Basic
                    </th>
                    <th className="px-4 py-3 text-center font-medium text-muted-foreground">
                      Standard
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-accent">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {includedRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-border/50 transition hover:bg-white/[0.03] last:border-0"
                    >
                      <td className="px-4 py-3 font-medium">{row.feature}</td>
                      <td className="px-4 py-3 text-center">{renderCheck(row.basic)}</td>
                      <td className="px-4 py-3 text-center">{renderCheck(row.standard)}</td>
                      <td className="bg-accent/5 px-4 py-3 text-center">
                        {renderCheck(row.premium)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:hidden">
            {includedRows.map((row) => (
              <div
                key={`mobile-${row.feature}`}
                className="glass rounded-xl border border-border/70 p-4"
              >
                <p className="text-sm font-semibold">{row.feature}</p>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs">
                  <div>
                    <p className="mb-1 text-muted-foreground">Basic</p>
                    {renderCheck(row.basic)}
                  </div>
                  <div>
                    <p className="mb-1 text-muted-foreground">Standard</p>
                    {renderCheck(row.standard)}
                  </div>
                  <div className="rounded-lg bg-accent/10 py-1">
                    <p className="mb-1 text-accent">Premium</p>
                    {renderCheck(row.premium)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <MagneticButton
              onClick={() => setInquiryOpen(true)}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Unlock Pricing
            </MagneticButton>
            <a
              href="https://wa.me/919549800436"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-white/5 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="relative px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Selected Work"
            subtitle="High-end concepts that show positioning quality, conversion strategy, and visual depth."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {showcase.map((project) => (
              <article
                key={project.url}
                className="glass group rounded-2xl border border-border/70 p-4 transition hover:-translate-y-1 hover:border-accent/35"
              >
                <div className="h-36 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/25 to-transparent sm:h-40" />
                <h3 className="mt-4 text-base font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Premium layout system focused on trust, authority, and lead conversion.
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-accent transition group-hover:translate-x-1"
                >
                  View Project <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-4xl">
          <div className="glass relative overflow-hidden rounded-2xl border border-accent/30 p-6 text-center sm:p-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
            <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">
              Ready to Build Your Premium Website?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Let&apos;s create a high-converting website for your business.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <MagneticButton
                onClick={() => setInquiryOpen(true)}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Start Your Project
              </MagneticButton>
              <a
                href="https://wa.me/919549800436"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-white/5 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Client proof"
            subtitle="What serious businesses say after upgrading to a premium web presence."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "The quality instantly elevated our brand trust and lead quality.",
              "Our website finally matches the level of our business offering.",
              "Conversion flow feels intentional now. Better inquiries from week one.",
            ].map((quote, index) => (
              <motion.blockquote
                key={quote}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass rounded-2xl border border-border/60 p-5"
              >
                <p className="text-sm text-foreground/95">&ldquo;{quote}&rdquo;</p>
                <footer className="mt-4 text-xs text-muted-foreground">
                  Verified client feedback
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything important before we start your premium build."
          />
          <div className="mt-7 space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.q}
                  className="glass overflow-hidden rounded-xl border border-border/70"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex min-h-12 w-full items-center justify-between px-4 py-3 text-left text-sm font-medium sm:text-base"
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={16} className={`transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <p className="px-4 pb-4 text-sm text-muted-foreground">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer onOpenInquiry={() => setInquiryOpen(true)} />
      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
    </div>
  );
}

function renderCheck(value: boolean) {
  if (!value) {
    return <X size={14} className="mx-auto text-muted-foreground" />;
  }

  return (
    <Check
      size={14}
      className="mx-auto text-accent"
      style={{ filter: "drop-shadow(0 0 8px oklch(0.78 0.21 235 / 0.75))" }}
    />
  );
}
