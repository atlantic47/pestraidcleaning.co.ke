import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pestraid Cleaning Kenya | Professional Cleaning Services Nairobi",
  description:
    "Nairobi's most trusted cleaning company. We offer home cleaning, office cleaning, carpet cleaning & post-construction cleaning. Call 0710907628 for a FREE quote!",
  alternates: { canonical: "https://pestraidcleaning.co.ke" },
};

const services = [
  {
    id: "home-cleaning",
    icon: "🏠",
    title: "Home Cleaning",
    desc: "Thorough residential cleaning tailored to your lifestyle — kitchens, bathrooms, living areas and more.",
    img: "/home-cleaning.jpg",
    href: "/services#home-cleaning",
  },
  {
    id: "office-cleaning",
    icon: "🏢",
    title: "Office Cleaning",
    desc: "Keep your workspace pristine and professional. We work around your schedule for zero disruption.",
    img: "/office-cleaning.jpg",
    href: "/services#office-cleaning",
  },
  {
    id: "carpet-cleaning",
    icon: "🧹",
    title: "Carpet & Sofa Cleaning",
    desc: "Hot water extraction and steam cleaning to revive carpets, rugs, and upholstery to like-new condition.",
    img: "/carpet-cleaning.jpg",
    href: "/services#carpet-cleaning",
  },
  {
    id: "construction-cleaning",
    icon: "🏗️",
    title: "Post-Construction Cleaning",
    desc: "From dust and debris to a move-in ready space. We handle the toughest post-build messes.",
    img: "/construction-cleaning.jpg",
    href: "/services#construction-cleaning",
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "6+", label: "Years Experience" },
  { value: "15+", label: "Cleaning Experts" },
  { value: "100%", label: "Satisfaction Rate" },
];

const testimonials = [
  {
    id: "testimonial-1",
    name: "Grace Wambua",
    role: "Homeowner, Karen",
    text: "Pestraid Cleaning transformed my home! The team was punctual, thorough, and incredibly professional. My carpets look brand new. Highly recommend!",
    stars: 5,
  },
  {
    id: "testimonial-2",
    name: "James Otieno",
    role: "Office Manager, Westlands",
    text: "We've been using Pestraid Cleaning for our office for over a year. Consistent, reliable, and great value for money. Our workspace is always spotless.",
    stars: 5,
  },
  {
    id: "testimonial-3",
    name: "Sarah Kamau",
    role: "Property Developer, Kilimani",
    text: "Outstanding post-construction cleaning service! They handled a massive job efficiently. The attention to detail was impressive. Will use again!",
    stars: 5,
  },
];

const whyUs = [
  { icon: "✅", title: "Fully Vetted Staff", desc: "All cleaners are background-checked, trained, and uniformed professionals." },
  { icon: "🌿", title: "Eco-Friendly Products", desc: "We use safe, non-toxic cleaning agents that are gentle on families and the environment." },
  { icon: "⏰", title: "Flexible Scheduling", desc: "Morning, evening, or weekend appointments — we fit around your busy schedule." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden costs. Get a clear quote upfront with no surprises on the invoice." },
  { icon: "🛡️", title: "Insured Service", desc: "Our work is fully insured for your peace of mind and total protection." },
  { icon: "📞", title: "24/7 Support", desc: "Our team is always reachable. Call, WhatsApp, or email us anytime." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-banner.jpg"
            alt="Pestraid Cleaning Kenya professional cleaning team"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,59,19,0.88) 0%, rgba(27,94,32,0.75) 50%, rgba(0,0,0,0.5) 100%)",
            }}
          />
        </div>

        {/* Animated circles */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 animate-float" style={{ background: "radial-gradient(circle, #f9c923, transparent)" }} />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 animate-float" style={{ animationDelay: "2s", background: "radial-gradient(circle, #43a047, transparent)" }} />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
            Nairobi's Trusted Cleaning Experts
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
            Clean Spaces,{" "}
            <span style={{ color: "#f9c923" }}>Happy Lives</span>
          </h1>

          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Pestraid Cleaning Kenya delivers professional, eco-friendly cleaning
            services across Nairobi — from homes and offices to post-construction
            sites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254710907628"
              id="hero-call-btn"
              className="btn-yellow text-base px-8 py-4 font-bold"
            >
              📞 Get a Free Quote
            </a>
            <Link
              href="/services"
              id="hero-services-btn"
              className="bg-white/15 backdrop-blur-sm text-white border border-white/30 font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/25 transition-all text-base"
            >
              Our Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Quick contact bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { icon: "📍", text: "Argwings Kodhek Rd, Nairobi" },
              { icon: "📞", text: "0710 907 628" },
              { icon: "⭐", text: "5-Star Rated Service" },
            ].map((item, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl px-3 py-3 flex items-center gap-2 ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-white text-xs font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-70">
          <span className="text-white text-xs">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section id="stats" className="bg-brand-green-dark py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="text-white">
              <div className="text-4xl sm:text-5xl font-bold font-display" style={{ color: "#f9c923" }}>
                {s.value}
              </div>
              <div className="text-green-200 text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services-home" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">What We Do</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4 font-display">
              Professional <span className="text-gradient">Cleaning Services</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              From residential spaces to large commercial premises — we have a
              tailored solution for every cleaning need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                id={`home-service-${service.id}`}
                className="group rounded-2xl overflow-hidden shadow-md card-hover bg-white border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-3xl">{service.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 font-display group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-brand-green font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" id="home-all-services-btn" className="btn-primary text-base px-8 py-3.5">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section
        id="why-us"
        className="py-20 sm:py-28"
        style={{ background: "linear-gradient(180deg, #f0faf0 0%, #ffffff 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="section-tag mb-4">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 font-display">
                The Pestraid{" "}
                <span className="text-gradient">Difference</span>
              </h2>
              <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                We're not just cleaners — we're partners in maintaining the
                spaces you love. Here's why thousands of Nairobi residents and
                businesses trust Pestraid Cleaning Kenya.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-2xl w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-brand-green-50">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 font-display">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <Link href="/about" id="why-us-about-btn" className="btn-primary">
                  About Us
                </Link>
                <Link href="/contact" id="why-us-contact-btn" className="btn-secondary">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-xl">
                <Image src="/home-cleaning.jpg" alt="Home cleaning service Nairobi" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-xl mt-8">
                <Image src="/office-cleaning.jpg" alt="Office cleaning service Nairobi" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-56 shadow-xl">
                <Image src="/carpet-cleaning.jpg" alt="Carpet cleaning service Kenya" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-56 shadow-xl mt-8">
                <Image src="/construction-cleaning.jpg" alt="Post-construction cleaning Kenya" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="py-20 sm:py-28 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-4"
              style={{ background: "rgba(249,201,35,0.2)", color: "#f9c923" }}
            >
              ⭐ Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                id={t.id}
                className="bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="flex mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} style={{ color: "#f9c923" }} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-green-100 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-brand-green-dark font-display"
                    style={{ background: "#f9c923" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-green-300 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SISTER COMPANIES ─── */}
      <section id="related-services" className="py-16 bg-brand-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-dark font-semibold mb-6 uppercase text-sm tracking-widest">
            Part of Pestraid Kenya Group
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-display">
            Explore Our Sister Companies
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            We also offer expert pest control and termite management services through our sister brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://pestraid.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              id="home-pestraid-link"
              className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-green-50 flex items-center justify-center text-3xl">🐛</div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 font-display group-hover:text-brand-green transition-colors">Pestraid Kenya</h3>
                <p className="text-gray-500 text-sm">Pest control & fumigation services</p>
                <span className="text-brand-green text-xs font-medium">pestraid.co.ke →</span>
              </div>
            </a>
            <a
              href="https://www.termitescontrolservices.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              id="home-termites-link"
              className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-50 flex items-center justify-center text-3xl">🏚️</div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 font-display group-hover:text-brand-green transition-colors">Termites Control Services</h3>
                <p className="text-gray-500 text-sm">Specialist termite control & treatment</p>
                <span className="text-brand-green text-xs font-medium">termitescontrolservices.co.ke →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section
        id="home-cta"
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32, #43a047)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
            Ready to Book a Cleaning?
          </h2>
          <p className="text-green-200 mb-8 text-lg">
            Call us now or send a WhatsApp message for an instant free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254710907628" id="cta-call-now-btn" className="btn-yellow font-bold text-base px-10 py-4">
              📞 Call Now: 0710 907 628
            </a>
            <Link href="/contact" id="cta-quote-btn" className="bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-full hover:bg-white/30 transition-all text-base">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
