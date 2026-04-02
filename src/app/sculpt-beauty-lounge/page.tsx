import {
  StarIcon,
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  BoltIcon,
  EnvelopeIcon,
  InstagramIcon,
  FacebookIcon,
} from "../icons";

const PHONE = "(619) 555-0123";
const EMAIL = "sculptbeautylounge@gmail.com";
const ADDRESS = "311 F St, Chula Vista, CA 91910";
const INSTAGRAM_URL = "https://www.instagram.com/sculpt.beauty.lounge/";
const FACEBOOK_URL = "https://www.facebook.com/SVBodySculpting/";

/* ─── Color overrides for Sculpt theme ─── */
const theme = {
  "--background": "#F7F5F3",
  "--foreground": "#1A1A2E",
  "--primary": "#2D3436",
  "--primary-light": "#636E72",
  "--accent": "#C9A87C",
  "--accent-hover": "#B8956A",
  "--cta": "#C9A87C",
  "--cta-hover": "#B8956A",
  "--surface": "#FFFFFF",
  "--muted": "#6B7280",
  "--rose-soft": "#F0EBE3",
  "--gold-soft": "#F5F0E8",
} as React.CSSProperties;

/* ─── Navbar ─── */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-primary/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/sculpt-beauty-lounge" className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <SparklesIcon className="w-4 h-4 text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-primary font-[family-name:var(--font-display)]">
              Sculpt Beauty Lounge
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Results", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors duration-200 cursor-pointer"
        >
          <InstagramIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Book Now</span>
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-20 pb-28 md:pt-28 md:pb-36">
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.4) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-5 py-2 text-sm font-medium text-accent mb-8">
            <SparklesIcon className="w-4 h-4" />
            Chula Vista&apos;s Premier Beauty Studio
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.08] tracking-tight font-[family-name:var(--font-display)]">
            Sculpt Your
            <br />
            Most Beautiful
            <br />
            <span className="text-accent italic">Self.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/55 max-w-xl leading-relaxed">
            Premium body contouring and sculpting treatments. Customer service,
            quality experience, and making every client feel special.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-base font-bold text-primary hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/20"
            >
              Book an Appointment
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-6 text-white/35 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="w-4 h-4 text-accent" />
                ))}
              </div>
              <span>5-Star Rated</span>
            </div>
            <div className="w-px h-4 bg-white/15 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <HeartIcon className="w-4 h-4" />
              Quality Experience
            </span>
            <div className="w-px h-4 bg-white/15 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="w-4 h-4" />
              Chula Vista, CA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-4">
              Welcome
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] leading-snug">
              Meet Jessica at{" "}
              <span className="text-primary italic">Sculpt Beauty Lounge</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-lg">
              At Sculpt Beauty Lounge, we believe every client deserves to feel
              beautiful and confident. Jessica brings a personal touch to every
              treatment, combining expertise with genuine care to deliver
              results you&apos;ll love.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Located in the heart of Chula Vista, our studio offers a relaxing,
              welcoming environment where you can unwind while we help you
              achieve your body goals. From body contouring to skin tightening,
              every service is tailored to your unique needs.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-cta font-semibold hover:text-cta-hover transition-colors duration-200 cursor-pointer"
            >
              Book a consultation
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: HeartIcon,
                title: "Personal Touch",
                desc: "Every client is treated like family",
              },
              {
                icon: SparklesIcon,
                title: "Quality Experience",
                desc: "Premium treatments in a relaxing setting",
              },
              {
                icon: ShieldCheckIcon,
                title: "Expert Care",
                desc: "Skilled techniques for real results",
              },
              {
                icon: StarIcon,
                title: "Feel Special",
                desc: "You deserve to look and feel your best",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-rose-soft/60 border border-primary/5 p-6 text-center hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/8 text-primary mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  {
    icon: SparklesIcon,
    title: "Body Contouring",
    rating: "5-Stars",
    description:
      "Non-invasive body contouring treatments designed to sculpt and reshape your figure. Target stubborn areas and achieve a smoother, more defined silhouette.",
    highlights: [
      "Non-invasive fat reduction",
      "Body sculpting & shaping",
      "Cellulite reduction",
      "Targeted area treatment",
    ],
  },
  {
    icon: BoltIcon,
    title: "Body Sculpting",
    rating: "5-Stars",
    description:
      "Advanced sculpting techniques to help you achieve the body shape you've always wanted. Comfortable treatments with visible, lasting results.",
    highlights: [
      "Circumferential reduction",
      "Muscle definition enhancement",
      "Post-weight-loss sculpting",
      "Customized treatment plans",
    ],
  },
  {
    icon: HeartIcon,
    title: "Skin Tightening",
    rating: "5-Stars",
    description:
      "Restore firmness and elasticity to your skin with our advanced tightening treatments. Perfect for achieving a youthful, toned appearance.",
    highlights: [
      "Improved skin elasticity",
      "Fine line reduction",
      "All body areas treated",
      "Visible results after first session",
    ],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gold-soft/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
            Treatments designed to{" "}
            <span className="text-primary italic">sculpt &amp; refine</span>
          </h2>
          <p className="mt-5 text-lg text-muted">
            We offer a range of body contouring and sculpting services to help
            you look and feel your absolute best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl bg-surface border border-primary/5 p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                  <StarIcon className="w-3 h-3" />
                  {service.rating}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-display)]">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6 text-sm">
                {service.description}
              </p>
              <ul className="space-y-2.5">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-cta flex-shrink-0" />
                    <span className="text-foreground/70">{h}</span>
                  </li>
                ))}
              </ul>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-cta-hover transition-colors duration-200 cursor-pointer"
              >
                Book this treatment
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyUs() {
  const reasons = [
    {
      icon: HeartIcon,
      title: "Customer First",
      desc: "Your comfort and satisfaction are our top priority. Every visit is designed around your needs and goals.",
    },
    {
      icon: SparklesIcon,
      title: "Quality Experience",
      desc: "From the moment you walk in, you'll feel the difference. Premium treatments in a beautiful, relaxing environment.",
    },
    {
      icon: StarIcon,
      title: "Feel Special",
      desc: "We don't just offer treatments — we create experiences. Every client leaves feeling confident and beautiful.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Proven Results",
      desc: "Real results you can see and feel. Check out our before-and-after transformations on Instagram.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-4">
            Why Sculpt
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
            Your beauty.{" "}
            <span className="text-primary italic">Your confidence.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-soft text-primary mb-5">
                <r.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
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
      "Jessica is amazing! She made me feel so comfortable from the very first visit. The results have been incredible — I can really see and feel the difference. Highly recommend Sculpt Beauty Lounge!",
    name: "Maria L.",
    treatment: "Body Contouring",
  },
  {
    quote:
      "I was looking for a body contouring studio in Chula Vista and I'm so glad I found Sculpt Beauty Lounge. Jessica is so knowledgeable and the treatments are so relaxing. My skin looks tighter and I feel so much more confident!",
    name: "Amanda R.",
    treatment: "Skin Tightening",
  },
  {
    quote:
      "Best experience ever! Jessica really takes the time to understand what you want and delivers results. The studio is beautiful and I always leave feeling pampered. 5 stars all the way!",
    name: "Diana S.",
    treatment: "Body Sculpting",
  },
];

function Results() {
  return (
    <section id="results" className="py-24 md:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Client Love
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
            Real clients.{" "}
            <span className="text-accent italic">Real results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8"
            >
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>
              <p className="text-white/75 leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                  {t.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-14 text-center">
          <p className="text-white/40 text-sm mb-4">
            See real before &amp; after transformations
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors duration-200 cursor-pointer"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow @sculpt.beauty.lounge
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Promo ─── */
function Promo() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-[80px]" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/20 px-5 py-2 text-sm font-bold text-accent mb-6">
              <SparklesIcon className="w-4 h-4" />
              New Client Special
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-xl mx-auto leading-tight font-[family-name:var(--font-display)]">
              Ready to <span className="text-accent italic">Sculpt</span>
              <br />
              Your Best Self?
            </h2>
            <p className="mt-5 text-lg text-white/55 max-w-md mx-auto">
              Book your consultation today and discover what Sculpt Beauty
              Lounge can do for you. DM us on Instagram to get started.
            </p>
            <div className="mt-10">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-10 py-4 text-base font-bold text-primary hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/25"
              >
                Book Your Appointment
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gold-soft/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
            Ready to start your{" "}
            <span className="text-primary italic">transformation?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Instagram / Book */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-3xl bg-surface border border-primary/5 p-8 text-center hover:shadow-lg hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300 cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-soft text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-1">DM to Book</h3>
            <p className="text-sm text-muted">@sculpt.beauty.lounge</p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="group flex flex-col items-center rounded-3xl bg-surface border border-primary/5 p-8 text-center hover:shadow-lg hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300 cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-soft text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <EnvelopeIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-1">Email Us</h3>
            <p className="text-sm text-muted break-all">{EMAIL}</p>
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com/?q=311+F+St+Chula+Vista+CA"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-3xl bg-surface border border-primary/5 p-8 text-center hover:shadow-lg hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300 cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-soft text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <MapPinIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-1">Visit Us</h3>
            <p className="text-sm text-muted">{ADDRESS}</p>
          </a>
        </div>

        {/* Hours */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted">
            <ClockIcon className="w-4 h-4" />
            <span>By Appointment Only &nbsp;|&nbsp; DM on Instagram to schedule</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-primary/5 bg-surface py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/sculpt-beauty-lounge" className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <SparklesIcon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-lg font-bold tracking-tight text-primary font-[family-name:var(--font-display)]">
                Sculpt Beauty Lounge
              </span>
            </a>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
              Premium body contouring, body sculpting, and skin tightening
              treatments in Chula Vista, CA. Customer service, quality
              experience, and making every client feel special.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Body Contouring",
                "Body Sculpting",
                "Skin Tightening",
                "Cellulite Reduction",
                "Fat Reduction",
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  @sculpt.beauty.lounge
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="text-sm text-muted">
                311 F St
                <br />
                Chula Vista, CA 91910
              </li>
              <li className="text-sm text-muted">By Appointment Only</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/5">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} Sculpt Beauty Lounge. All rights
            reserved. Results may vary.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function SculptBeautyLounge() {
  return (
    <div style={theme}>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Results />
        <Promo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
