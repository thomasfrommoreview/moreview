import {
  StarIcon,
  ChartBarIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingStorefrontIcon,
  ChatBubbleIcon,
  ShareIcon,
  PhoneIcon,
  ClockIcon,
  GiftIcon,
} from "./icons";

const CALENDLY_URL = "https://calendly.com/moreview";

/* ─── Navbar ─── */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-foreground/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <StarIcon className="w-4 h-4 text-accent" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-primary">
            MoReview
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "How It Works", "Results", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-2.5 text-sm font-semibold text-white hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
        >
          Book a Discovery Call
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-accent mb-8">
            <GiftIcon className="w-4 h-4" />
            2-week free trial — no commitment
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Your Reviews on
            <br />
            <span className="text-accent">Autopilot.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
            MoReview automates your Google reviews, responds to every one, and
            posts them to your social media &mdash; while our Local SEO gets you
            ranking higher. All hands-off.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-primary hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/20"
            >
              Start Your Free Trial
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="w-4 h-4 text-accent" />
                ))}
              </div>
              <span>5.0 on Google</span>
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <span>Serving businesses across Ontario</span>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <span>2-week free trial</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  {
    icon: StarIcon,
    title: "Review Automation",
    description:
      "We set up automated review requests that go out at the right time so you steadily collect 5-star reviews without lifting a finger.",
    highlights: [
      "Automated review request sequences",
      "Keyword-rich reviews that boost SEO",
      "Steady stream of fresh social proof",
    ],
    primary: true,
  },
  {
    icon: ChatBubbleIcon,
    title: "Review Responding",
    description:
      "Every review gets a thoughtful, timely response — positive or negative. We handle it all so your reputation stays strong.",
    highlights: [
      "Responses to every single review",
      "Professional tone that builds trust",
      "Negative review damage control",
    ],
    primary: true,
  },
  {
    icon: ShareIcon,
    title: "Social Media Posting",
    description:
      "Your best reviews automatically get turned into social media content. Real customer words doing the selling for you.",
    highlights: [
      "Reviews posted to your social channels",
      "Branded visuals from real feedback",
      "Consistent content without the effort",
    ],
    primary: true,
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Local SEO",
    description:
      "We optimize your Google Business Profile, build local backlinks, and ensure NAP consistency to push you up in local search results.",
    highlights: [
      "Google Business Profile optimization",
      "High-authority local backlinks",
      "NAP consistency across directories",
    ],
    primary: false,
  },
];

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Reviews, reputation, and rankings &mdash;{" "}
            <span className="text-primary">handled</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            We take your entire review and local search presence off your plate
            so you can focus on running your business.
          </p>
        </div>

        {/* Primary services - 3 column */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {services
            .filter((s) => s.primary)
            .map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-surface border border-foreground/5 p-8 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm">
                      <CheckCircleIcon className="w-5 h-5 text-cta flex-shrink-0" />
                      <span className="text-foreground/70">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Local SEO - full width */}
        {services
          .filter((s) => !s.primary)
          .map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-primary/[0.03] border border-primary/10 p-8 md:p-10"
            >
              <div className="grid md:grid-cols-[1fr,auto] gap-6 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm">
                      <CheckCircleIcon className="w-5 h-5 text-cta flex-shrink-0" />
                      <span className="text-foreground/70">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
const steps = [
  {
    step: "1",
    icon: PhoneIcon,
    title: "Discovery Call",
    description:
      "We hop on a quick call to learn about your business, your goals, and where your reviews and rankings stand today.",
  },
  {
    step: "2",
    icon: RocketLaunchIcon,
    title: "Onboarding",
    description:
      "We set everything up — review automation, response workflows, social posting, and Local SEO. You start your 2-week free trial.",
  },
  {
    step: "3",
    icon: ChartBarIcon,
    title: "Watch It Work",
    description:
      "Reviews start flowing in, responses go out automatically, your best reviews hit social media, and your rankings climb.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-primary/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            From first call to{" "}
            <span className="text-primary">autopilot in days</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative text-center">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t-2 border-dashed border-primary/15" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border-2 border-primary/10 mb-6 shadow-sm">
                <item.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-primary text-xs font-bold flex items-center justify-center shadow">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-cta px-8 py-4 text-base font-bold text-white hover:bg-cta-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-cta/25"
          >
            Book Your Discovery Call
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Results / Testimonials ─── */
const testimonials = [
  {
    quote:
      "Within 3 months, we went from page 3 to the top of the Google Map Pack. Our phone hasn't stopped ringing since.",
    name: "David K.",
    business: "HVAC Contractor, Mississauga",
    metric: "+340% calls",
  },
  {
    quote:
      "We had 12 Google reviews when we started. Now we have over 180. It's completely hands-off — the reviews just keep coming in.",
    name: "Priya S.",
    business: "Dental Clinic, Oakville",
    metric: "12 to 180+ reviews",
  },
  {
    quote:
      "The social media posting from our reviews has been huge. Customers see real testimonials on our Instagram and it builds instant trust.",
    name: "Marco R.",
    business: "Restaurant Owner, Hamilton",
    metric: "#1 local ranking",
  },
];

function Results() {
  return (
    <section id="results" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Real businesses.{" "}
            <span className="text-primary">Real growth.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-surface border border-foreground/5 p-8"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-foreground/5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.business}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-cta/10 px-3 py-1 text-xs font-bold text-cta">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Free Trial / Pricing ─── */
function FreeTrial() {
  return (
    <section id="pricing" className="py-24 bg-primary/[0.02]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl bg-surface border border-foreground/5 shadow-xl shadow-primary/5 overflow-hidden">
          <div className="bg-primary px-8 py-6 md:px-12 md:py-8">
            <div className="flex items-center gap-3 mb-2">
              <GiftIcon className="w-6 h-6 text-accent" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                2-Week Free Trial
              </h2>
            </div>
            <p className="text-white/60">
              Try everything MoReview offers — completely free, no commitment.
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Automated review collection",
                "Every review responded to",
                "Reviews posted to social media",
                "Google Business Profile optimization",
                "Local SEO setup",
                "Full analytics dashboard",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-cta flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-foreground/5">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-primary hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/20 w-full sm:w-auto"
              >
                Start Your Free Trial
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 text-sm text-muted">
                <ClockIcon className="w-4 h-4" />
                <span>No credit card required. Cancel anytime.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Who We Serve ─── */
const industries = [
  "Restaurants & Cafes",
  "Dental & Medical Clinics",
  "HVAC & Plumbing",
  "Law Firms",
  "Real Estate Agents",
  "Auto Repair Shops",
  "Salons & Spas",
  "Fitness Studios",
];

function WhoWeServe() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Built for Local
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Helping Ontario businesses{" "}
              <span className="text-primary">get found</span>
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Whether you&apos;re a single-location shop or a multi-location
              service provider anywhere in Ontario, we tailor our strategies to
              your market and your customers.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors duration-200 cursor-pointer"
            >
              Book a call to see if we&apos;re a fit
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 rounded-xl bg-surface border border-foreground/5 px-5 py-4"
              >
                <BuildingStorefrontIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-light/30 rounded-full blur-3xl" />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
              <GiftIcon className="w-4 h-4" />
              2 weeks free — no strings attached
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
              Ready to put your reviews on autopilot?
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-lg mx-auto">
              Book a quick discovery call and we&apos;ll show you exactly how
              MoReview can work for your business. If it&apos;s a fit, you start
              your free trial right away.
            </p>
            <div className="mt-10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-primary hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/20"
              >
                Book Your Discovery Call
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-foreground/5 bg-surface py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <StarIcon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary">
                MoReview
              </span>
            </a>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
              Review automation, review responding, social media posting, and
              Local SEO for businesses across Ontario.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Review Automation",
                "Review Responding",
                "Social Media Posting",
                "Local SEO",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">Get Started</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Book a Discovery Call
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Free Trial
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Results
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-foreground/5 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} MoReview. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <Results />
        <FreeTrial />
        <WhoWeServe />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
