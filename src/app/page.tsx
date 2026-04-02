import {
  StarIcon,
  ChartBarIcon,
  LinkIcon,
  MapPinIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingStorefrontIcon,
  ChatBubbleIcon,
} from "./icons";

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
          {["Services", "How It Works", "Results", "Contact"].map((item) => (
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
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-2.5 text-sm font-semibold text-white hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
        >
          Get Your Free Audit
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-accent mb-8">
            <MapPinIcon className="w-4 h-4" />
            Serving the Greater Toronto Area
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Rank #1 on Google.
            <br />
            <span className="text-accent">Get More Reviews.</span>
            <br />
            Grow Your Business.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
            MoReview combines Local SEO, Google Business Profile optimization,
            and review automation to put your business at the top of local search
            results &mdash; and keep it there.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-primary hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/20"
            >
              Get Your Free Audit
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              See How It Works
            </a>
          </div>

          {/* Trust strip */}
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
            <span>Trusted by 150+ local businesses</span>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <span>Results in 90 days</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ─── */
const stats = [
  { value: "3x", label: "Average increase in Google visibility" },
  { value: "150+", label: "Local businesses served" },
  { value: "90", label: "Days to see real results", suffix: " days" },
  { value: "5.0", label: "Client satisfaction rating" },
];

function Stats() {
  return (
    <section className="relative -mt-12 z-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-surface rounded-2xl shadow-xl shadow-primary/5 border border-foreground/5 p-6 md:p-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  {
    icon: MagnifyingGlassIcon,
    title: "Local SEO",
    description:
      "We optimize your Google Business Profile, build high-quality local backlinks, and ensure your business information is consistent across the web to outrank competitors.",
    highlights: [
      "Google Business Profile optimization",
      "High-authority local backlinks",
      "NAP consistency across directories",
    ],
  },
  {
    icon: StarIcon,
    title: "Review Automation",
    description:
      "Collect more 5-star reviews on autopilot. Our system sends timely requests, responds to feedback instantly, and builds the social proof that drives new customers.",
    highlights: [
      "Automated review requests",
      "Instant response management",
      "Keyword-rich review generation",
    ],
  },
  {
    icon: ChartBarIcon,
    title: "Rankings & Analytics",
    description:
      "Track your local rankings, review growth, and customer acquisition with clear dashboards. Know exactly what's working and where to double down.",
    highlights: [
      "Real-time rank tracking",
      "Review sentiment analysis",
      "Competitor benchmarking",
    ],
  },
  {
    icon: LinkIcon,
    title: "Authority Backlinks",
    description:
      "We build relevant, trusted backlinks from local and industry sources that actually move rankings &mdash; not spammy links that get you penalized.",
    highlights: [
      "Relevant industry citations",
      "Local directory submissions",
      "High-DA link acquisition",
    ],
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
            Everything you need to{" "}
            <span className="text-primary">dominate local search</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            We analyze your business, competitors, and market to build a custom
            growth plan that delivers measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
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
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
const steps = [
  {
    step: "1",
    icon: MagnifyingGlassIcon,
    title: "We Audit Your Presence",
    description:
      "We analyze your business, competitors, and market to find the gaps holding you back and the opportunities to outrank them.",
  },
  {
    step: "2",
    icon: RocketLaunchIcon,
    title: "We Execute the Strategy",
    description:
      "We focus on the right keywords, audiences, and platforms to put your business in front of the people most likely to buy.",
  },
  {
    step: "3",
    icon: ChartBarIcon,
    title: "You See the Growth",
    description:
      "Watch your rankings, reviews, and customer base increase as our proven system drives consistent, measurable growth.",
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
            Three steps to{" "}
            <span className="text-primary">more customers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative text-center">
              {/* Connector line */}
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
      "We had 12 Google reviews when we started. Now we have over 180. The review automation is incredible — completely hands-off.",
    name: "Priya S.",
    business: "Dental Clinic, Oakville",
    metric: "12 → 180 reviews",
  },
  {
    quote:
      "MoReview's team actually understands local SEO. Not generic advice — real strategy that moves the needle for our restaurant.",
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
            Results That Speak
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
    <section className="py-24 bg-primary/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Built for Local
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Helping GTA businesses{" "}
              <span className="text-primary">get found</span>
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Whether you&apos;re a single-location shop or a multi-location
              service provider, we tailor our strategies for Toronto, Mississauga,
              Oakville, Burlington, and Hamilton.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors duration-200 cursor-pointer"
            >
              See if we serve your industry
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
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl bg-primary overflow-hidden">
          {/* Decorative */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-light/30 rounded-full blur-3xl" />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
              <RocketLaunchIcon className="w-4 h-4" />
              Free — No obligation
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
              Ready to dominate local search?
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-lg mx-auto">
              Get a free audit of your Google presence. We&apos;ll show you
              exactly where you stand and how to get to #1.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://moreview.ca"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-primary hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/20"
              >
                Get Your Free Audit
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href="https://moreview.ca"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                <ChatBubbleIcon className="w-5 h-5" />
                Book a Call
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
              Local SEO and Google Review Automation for businesses in Toronto,
              Mississauga, Oakville, Burlington, and Hamilton.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Local SEO",
                "Review Automation",
                "GBP Optimization",
                "Backlink Building",
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
            <h4 className="text-sm font-bold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About", "Results", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
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
        <Stats />
        <Services />
        <HowItWorks />
        <Results />
        <WhoWeServe />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
