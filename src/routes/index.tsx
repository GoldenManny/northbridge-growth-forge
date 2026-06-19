import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  TrendingUp,
  Settings2,
  Users,
  CheckCircle2,
  BarChart3,
  Sparkles,
  Trophy,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span
        className="grid h-8 w-8 place-items-center rounded-sm"
        style={{ background: "var(--gradient-navy)" }}
      >
        <span className="font-display text-base font-semibold text-gold">N</span>
      </span>
      <span
        className={`font-display text-lg tracking-tight ${light ? "text-background" : "text-foreground"}`}
      >
        Northbridge
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#testimonials", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/80 hover:text-background"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-gold px-5 py-2 text-sm font-medium text-navy transition-all hover:opacity-90 md:inline-flex"
        >
          Book a call
        </a>
        <button
          aria-label="Toggle menu"
          className={`rounded-md p-2 md:hidden ${scrolled ? "text-foreground" : "text-background"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-3 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--navy-deep) 0%, color-mix(in oklab, var(--navy) 80%, transparent) 60%, transparent 100%)",
        }}
      />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <span
            data-reveal
            className="reveal inline-flex items-center gap-2 rounded-full border border-gold/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gold"
          >
            <span className="h-1 w-1 rounded-full bg-gold" />
            Strategy · Operations · Leadership
          </span>
          <h1
            data-reveal
            className="reveal mt-6 text-balance text-5xl leading-[1.05] text-background md:text-7xl"
            style={{ transitionDelay: "80ms" }}
          >
            Smarter Strategy.
            <br />
            <span className="text-gold">Stronger Growth.</span>
          </h1>
          <p
            data-reveal
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-background/75"
            style={{ transitionDelay: "160ms" }}
          >
            We help ambitious companies cut through complexity and scale with confidence.
          </p>
          <div
            data-reveal
            className="reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:shadow-[0_20px_50px_-20px_var(--gold)]"
            >
              Book a Free Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-background/80 transition-colors hover:text-background"
            >
              Explore our services →
            </a>
          </div>

          <div
            data-reveal
            className="reveal mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-background/10 pt-8"
            style={{ transitionDelay: "320ms" }}
          >
            {[
              { k: "15+", v: "Years experience" },
              { k: "120+", v: "Engagements" },
              { k: "40+", v: "Industries served" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-gold">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-background/60">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4" data-reveal>
          <div className="reveal text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About
          </div>
          <h2 className="reveal mt-4 text-4xl md:text-5xl">A boutique firm. Operator-led.</h2>
        </div>
        <div className="md:col-span-8" data-reveal>
          <p className="reveal text-xl leading-relaxed text-foreground/85 md:text-2xl">
            Founded by former Fortune 500 operators, Northbridge Consulting partners with
            leadership teams to solve their toughest operational and strategic challenges.
          </p>
          <p className="reveal mt-6 text-base leading-relaxed text-muted-foreground">
            We don't hand you a slide deck and walk away. We work shoulder-to-shoulder with your
            team — designing the strategy, building the playbook, and staying on through
            execution until the numbers move.
          </p>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    body:
      "Market entry, pricing, and go-to-market plans grounded in data — built to compound across quarters, not just survive the next one.",
  },
  {
    icon: Settings2,
    title: "Operations Optimization",
    body:
      "Streamline workflows, reduce friction, and unlock margin. We diagnose bottlenecks and rebuild the systems that scale with you.",
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    body:
      "Trusted counsel for founders and executives navigating inflection points — from org design to board prep to succession.",
  },
];

function Services() {
  return (
    <section id="services" className="section-y bg-secondary">
      <div className="container-page">
        <div className="max-w-2xl" data-reveal>
          <div className="reveal text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Services
          </div>
          <h2 className="reveal mt-4 text-4xl md:text-5xl">
            Three practices. One outcome: durable growth.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              className="reveal group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-lg"
                style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)" }}
              >
                <s.icon size={22} className="text-navy" />
              </div>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground/80">
                Learn more
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: Sparkles, title: "15+ Years Combined Experience", body: "Senior operators only — no junior hand-offs." },
  { icon: BarChart3, title: "Data-Driven Approach", body: "Every recommendation is backed by analysis you can defend." },
  { icon: CheckCircle2, title: "Tailored Solutions", body: "No templated playbooks. We build for your context." },
  { icon: Trophy, title: "Proven Track Record", body: "Outcomes measured in revenue, margin, and momentum." },
];

function WhyUs() {
  return (
    <section id="why" className="section-y">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5" data-reveal>
            <div className="reveal text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Why Northbridge
            </div>
            <h2 className="reveal mt-4 text-4xl md:text-5xl">
              The difference is in how we work.
            </h2>
            <p className="reveal mt-5 text-muted-foreground">
              Boutique by design. Senior by default. We take a small number of clients each year
              so every engagement gets the partner attention it deserves.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  data-reveal
                  className="reveal bg-card p-7"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <b.icon size={22} className="text-gold" strokeWidth={1.75} />
                  <div className="mt-5 font-display text-lg">{b.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Northbridge reshaped our operating model in 90 days. We exited the quarter with 22% more capacity and a leadership team that finally moved in lockstep.",
    name: "Sarah Lin",
    role: "COO, Meridian Health",
  },
  {
    quote:
      "They asked the questions our board should have asked us a year ago. Sharp, honest, and deeply commercial.",
    name: "David Okafor",
    role: "CEO, Halcyon Logistics",
  },
  {
    quote:
      "The best money we've spent on outside counsel. Strategy that actually shipped — not a deck collecting dust.",
    name: "Priya Anand",
    role: "Founder, Northwind Foods",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section-y bg-navy text-background">
      <div className="container-page">
        <div className="max-w-2xl" data-reveal>
          <div className="reveal text-xs uppercase tracking-[0.2em] text-gold">Clients</div>
          <h2 className="reveal mt-4 text-4xl text-background md:text-5xl">
            What leaders say after working with us.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              className="reveal flex flex-col justify-between rounded-2xl border border-background/10 bg-background/[0.03] p-8 backdrop-blur"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <blockquote className="font-display text-lg leading-relaxed text-background/90">
                <span className="text-gold">“</span>
                {t.quote}
                <span className="text-gold">”</span>
              </blockquote>
              <figcaption className="mt-8 border-t border-background/10 pt-5">
                <div className="text-sm font-semibold text-background">{t.name}</div>
                <div className="text-xs text-background/60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="section-y">
      <div className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5" data-reveal>
          <div className="reveal text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </div>
          <h2 className="reveal mt-4 text-4xl md:text-5xl">Let's talk.</h2>
          <p className="reveal mt-5 max-w-md text-muted-foreground">
            Tell us a little about where you are and where you want to go. We'll be in touch
            within one business day.
          </p>
          <div className="reveal mt-8 space-y-2 text-sm text-muted-foreground">
            <div>hello@northbridge.co</div>
            <div>+1 (212) 555 0140</div>
            <div>New York · London</div>
          </div>
        </div>
        <div className="md:col-span-7" data-reveal>
          <form
            onSubmit={onSubmit}
            className="reveal rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10"
          >
            {sent ? (
              <div className="py-10 text-center">
                <div
                  className="mx-auto grid h-12 w-12 place-items-center rounded-full"
                  style={{ background: "color-mix(in oklab, var(--gold) 25%, transparent)" }}
                >
                  <CheckCircle2 className="text-navy" />
                </div>
                <div className="mt-5 font-display text-2xl">Message received</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks — a partner will reach out shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="mt-5">
                  <Field label="Company" name="company" />
                </div>
                <div className="mt-5">
                  <Field label="Message" name="message" as="textarea" required />
                </div>
                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 sm:w-auto"
                >
                  Let's Talk
                  <ArrowRight size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "textarea";
}) {
  const cls =
    "mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input type={type} name={name} required={required} className={cls} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Boutique strategy and operations consulting for mid-sized companies ready to
              scale with confidence.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigate
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Why Us", "#why"],
                ["Clients", "#testimonials"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Follow
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-foreground"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-foreground"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Northbridge Consulting. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
