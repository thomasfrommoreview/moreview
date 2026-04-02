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
  CalendarIcon,
  EnvelopeIcon,
  InstagramIcon,
  FacebookIcon,
} from "./icons";

const BOOKING_URL = "https://pearlsbodycontouring.com/";
const PHONE = "647-862-3262";
const EMAIL = "pearlsbodycontouring@gmail.com";
const ADDRESS = "3 Watershore Dr, Stoney Creek, Hamilton Ontario L8E 0C1";

/* ─── Navbar ─── */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-primary/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <SparklesIcon className="w-4 h-4 text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-primary font-[family-name:var(--font-display)]">
              Pearl&apos;s Body Contouring
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Why Us", "Results", "Contact"].map((item) => (
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
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-semibold text-white hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
        >
          <PhoneIcon className="w-4 h-4" />
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
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.4) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cta/8 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          {/* Promo badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-5 py-2 text-sm font-medium text-accent mb-8">
            <SparklesIcon className="w-4 h-4" />
            20% off your first visit
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.08] tracking-tight font-[family-name:var(--font-display)]">
            We Help You
            <br />
            Look &amp; Feel
            <br />
            <span className="text-accent italic">Your Best.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/55 max-w-xl leading-relaxed">
            Results-driven body contouring and skin tightening treatments using
            advanced RF technology. Pain-free. No downtime. All skin types.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-base font-bold text-primary hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/20"
            >
              Make an Appointment
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              Explore Treatments
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
              <ShieldCheckIcon className="w-4 h-4" />
              Certified Medical Aesthetician
            </span>
            <div className="w-px h-4 bg-white/15 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="w-4 h-4" />
              Stoney Creek, Hamilton
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Welcome / About ─── */
function Welcome() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-4">
              Hey Beautiful!
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] leading-snug">
              Welcome to{" "}
              <span className="text-primary italic">Pearl&apos;s Body Contouring</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-lg">
              We use multi-polar RF technology to offer our clients a full range
              of highly effective fat reduction, body contouring, and skin
              tightening treatments. Radiofrequency (RF) is one of the premium
              aesthetic technologies that will get you the results you&apos;re
              looking for.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The Rapid Contour provides gentle, pain-free treatments that are
              effective for all skin types. Our clients will not need any
              downtime for recovery.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="mt-8 inline-flex items-center gap-2 text-cta font-semibold hover:text-cta-hover transition-colors duration-200 cursor-pointer"
            >
              Book a free consultation
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: BoltIcon,
                title: "Pain-Free",
                desc: "Gentle treatments with zero discomfort",
              },
              {
                icon: ClockIcon,
                title: "No Downtime",
                desc: "Walk in, walk out, get on with your day",
              },
              {
                icon: HeartIcon,
                title: "All Skin Types",
                desc: "Safe and effective for everyone",
              },
              {
                icon: ShieldCheckIcon,
                title: "Certified",
                desc: "Certified Medical Aesthetician",
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
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
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
      "Finally a pain-free and comfortable solution to body shaping. SharpLight's innovative technology is able to shrink fat cells while simultaneously sculpting target areas.",
    highlights: [
      "Circumferential reduction",
      "Cellulite reduction",
      "Fat cell shrinking",
      "Body sculpting & shaping",
    ],
  },
  {
    icon: HeartIcon,
    title: "Facial Contouring",
    rating: "5-Stars",
    description:
      "Tighten and rejuvenate your facial skin with our advanced RF technology. Reduce fine lines and achieve a more youthful, lifted appearance — all without surgery.",
    highlights: [
      "Skin tightening & lifting",
      "Fine line reduction",
      "Non-surgical facelift",
      "Jawline & chin sculpting",
    ],
  },
  {
    icon: BoltIcon,
    title: "Skin Tightening",
    rating: "5-Stars",
    description:
      "Increasingly used for skin tightening treatments following weight loss. Restore firmness and elasticity to loose skin across your body.",
    highlights: [
      "Post-weight-loss tightening",
      "Improved skin elasticity",
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
            Our Treatments
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
            Using state of the art{" "}
            <span className="text-primary italic">RF technology</span>
          </h2>
          <p className="mt-5 text-lg text-muted">
            We provide comfortable, safe, and effective treatments for both body
            and facial contouring. Let us help you look and feel your best!
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
                href={`tel:${PHONE}`}
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
      icon: SparklesIcon,
      title: "Advanced RF Technology",
      desc: "We use SharpLight's Rapid Contour — one of the most advanced multi-polar RF systems available for body and facial treatments.",
    },
    {
      icon: HeartIcon,
      title: "Personalized Care",
      desc: "Every treatment plan is customized to your unique body and goals. We take the time to understand what you want and create a plan that works.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Safe & Certified",
      desc: "Administered by a Certified Medical Aesthetician with extensive training. Your safety and comfort are always our top priority.",
    },
    {
      icon: StarIcon,
      title: "Proven Results",
      desc: "5-star rated with clients who consistently see real, visible results. Check out our before-and-after transformations on Instagram.",
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-4">
            Why Pearl&apos;s
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
            Your body.{" "}
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
      "Dana is absolutely amazing! After just a few sessions I could already see and feel the difference. The treatments are so comfortable and relaxing. I'm so happy I found Pearl's!",
    name: "Sarah M.",
    treatment: "Body Contouring",
  },
  {
    quote:
      "I was nervous at first but Dana made me feel so comfortable. The results have been incredible — my skin is tighter and I feel so much more confident. Highly recommend!",
    name: "Jessica T.",
    treatment: "Skin Tightening",
  },
  {
    quote:
      "Best investment I've ever made in myself. Dana is so knowledgeable and caring. She explained everything clearly and the results speak for themselves. 5 stars all the way!",
    name: "Michelle R.",
    treatment: "Facial Contouring",
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
            href="https://www.instagram.com/pearlsbodycontouring/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors duration-200 cursor-pointer"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow @pearlsbodycontouring
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
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cta/15 rounded-full blur-[80px]" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/20 px-5 py-2 text-sm font-bold text-accent mb-6">
              <SparklesIcon className="w-4 h-4" />
              Limited Time Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-xl mx-auto leading-tight font-[family-name:var(--font-display)]">
              Get <span className="text-accent italic">20% Off</span>
              <br />
              Your First Visit
            </h2>
            <p className="mt-5 text-lg text-white/55 max-w-md mx-auto">
              Start your transformation today. Book your free consultation and
              see what Pearl&apos;s Body Contouring can do for you.
            </p>
            <div className="mt-10">
              <a
                href={`tel:${PHONE}`}
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
          {/* Phone */}
          <a
            href={`tel:${PHONE}`}
            className="group flex flex-col items-center rounded-3xl bg-surface border border-primary/5 p-8 text-center hover:shadow-lg hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300 cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-soft text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <PhoneIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-1">Call Us</h3>
            <p className="text-sm text-muted">{PHONE}</p>
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
            href="https://maps.google.com/?q=3+Watershore+Dr+Stoney+Creek+Hamilton+Ontario"
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
            <span>Mon &ndash; Fri: 9:00am &ndash; 5:00pm &nbsp;|&nbsp; Sat &ndash; Sun: Closed</span>
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
            <a href="/" className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <SparklesIcon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-lg font-bold tracking-tight text-primary font-[family-name:var(--font-display)]">
                Pearl&apos;s Body Contouring
              </span>
            </a>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
              Results-driven body contouring, facial contouring, and skin
              tightening treatments in Stoney Creek, Hamilton. Certified Medical
              Aesthetician.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/pearlsbodycontouring/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/p/Pearls-Body-Treatment-100064238702782/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-sm font-bold mb-4">Treatments</h4>
            <ul className="space-y-2.5">
              {[
                "Body Contouring",
                "Facial Contouring",
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
                  href={`tel:${PHONE}`}
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {PHONE}
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
                3 Watershore Dr, Stoney Creek
                <br />
                Hamilton, ON L8E 0C1
              </li>
              <li className="text-sm text-muted">
                Mon &ndash; Fri: 9am &ndash; 5pm
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/5">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} Pearl&apos;s Body Contouring. All
            rights reserved. Results may vary. Always consult a qualified
            healthcare professional before starting any new treatment.
          </p>
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
        <Welcome />
        <Services />
        <WhyUs />
        <Results />
        <Promo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
