import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title:
    "Pestraid Cleaning Kenya | Professional Cleaning Services Nairobi #1",
  description:
    "Pestraid Cleaning Kenya - Nairobi's top-rated professional cleaning company. Expert home cleaning, office cleaning, carpet cleaning, sofa cleaning, deep cleaning & post-construction cleaning. Serving Kilimani, Westlands, Karen, Lavington & all Nairobi areas. Call 0710 907 628 for a FREE quote today!",
  keywords: [
    "cleaning services Nairobi",
    "professional house cleaning Nairobi",
    "office cleaning services Kenya",
    "carpet cleaning Nairobi",
    "post-construction cleaning Nairobi",
    "deep cleaning services Nairobi",
    "sofa cleaning Nairobi",
    "cleaning company Nairobi Kenya",
    "domestic cleaners Nairobi",
    "Pestraid Cleaning Kenya",
  ],
  alternates: { canonical: "https://pestraidcleaning.co.ke" },
};

/* ─── DATA ─── */

const services = [
  {
    id: "home-cleaning",
    icon: "🏠",
    title: "Home & House Cleaning",
    desc: "Thorough residential cleaning tailored to your lifestyle - kitchens, bathrooms, bedrooms, living rooms and more. One-off or regular cleans available.",
    img: "/home-cleaning.jpg",
    href: "/services#home-cleaning",
    features: ["Kitchens & bathrooms", "Bedrooms & living rooms", "Move-in/move-out cleans", "Weekly or monthly schedules"],
  },
  {
    id: "office-cleaning",
    icon: "🏢",
    title: "Office & Commercial Cleaning",
    desc: "Keep your workspace pristine and your team productive. We work around your schedule - early morning, evening or weekends - for zero disruption.",
    img: "/office-cleaning.jpg",
    href: "/services#office-cleaning",
    features: ["Open-plan offices", "Reception & common areas", "Washrooms & pantries", "Flexible scheduling"],
  },
  {
    id: "carpet-cleaning",
    icon: "🧹",
    title: "Carpet & Sofa Cleaning",
    desc: "Hot water extraction and steam cleaning to revive carpets, rugs, and upholstery to like-new condition. We remove stains, allergens and odours.",
    img: "/carpet-cleaning.jpg",
    href: "/services#carpet-cleaning",
    features: ["Hot water extraction", "Stain & odour removal", "Persian & area rugs", "Sofa & upholstery"],
  },
  {
    id: "construction-cleaning",
    icon: "🏗️",
    title: "Post-Construction Cleaning",
    desc: "From construction dust and debris to a move-in ready space. We handle the toughest post-build messes so your property is handover-ready.",
    img: "/construction-cleaning.jpg",
    href: "/services#construction-cleaning",
    features: ["Dust & debris removal", "Window & frame cleaning", "Floor & tile scrubbing", "Handover-ready finish"],
  },
];

const stats = [
  { value: "500+", label: "Happy Clients Served" },
  { value: "6+", label: "Years of Experience" },
  { value: "15+", label: "Trained Cleaning Experts" },
  { value: "100%", label: "Satisfaction Guaranteed" },
];

const testimonials = [
  {
    id: "testimonial-grace",
    name: "Grace Wambua",
    role: "Homeowner, Karen",
    text: "Pestraid Cleaning transformed my home! The team was punctual, thorough, and incredibly professional. My carpets look brand new. I've booked them monthly ever since. Highly recommend!",
    stars: 5,
  },
  {
    id: "testimonial-james",
    name: "James Otieno",
    role: "Office Manager, Westlands",
    text: "We've been using Pestraid Cleaning for our office for over a year. Consistent, reliable, and great value for money. Our workspace is always spotless and the team is discreet and efficient.",
    stars: 5,
  },
  {
    id: "testimonial-sarah",
    name: "Sarah Kamau",
    role: "Property Developer, Kilimani",
    text: "Outstanding post-construction cleaning service! They handled a massive job efficiently. The attention to detail was impressive - the site was spotless and handover-ready. Will definitely use again.",
    stars: 5,
  },
  {
    id: "testimonial-david",
    name: "David Njoroge",
    role: "Restaurant Owner, Lavington",
    text: "Our restaurant kitchen and dining area gets deep cleaned monthly by Pestraid. Their hygiene standards are exceptional and they always exceed expectations. Best cleaning company in Nairobi!",
    stars: 5,
  },
  {
    id: "testimonial-mary",
    name: "Mary Achieng",
    role: "Landlord, Parklands",
    text: "I use Pestraid for all my rental property turnovers. Move-out and move-in cleans are done to an amazing standard every time. Quick, affordable and reliable. My go-to cleaners!",
    stars: 5,
  },
  {
    id: "testimonial-peter",
    name: "Peter Kariuki",
    role: "Corporate Facilities Manager",
    text: "Managing facilities for a large corporate campus requires a dependable cleaning partner. Pestraid delivers every time - professional staff, quality products and zero complaints from our team.",
    stars: 5,
  },
];

const whyUs = [
  { icon: "✅", title: "Fully Vetted & Trained Staff", desc: "All our cleaners are background-checked, professionally trained, uniformed and supervised to ensure consistent high-quality results every visit." },
  { icon: "🌿", title: "Eco-Friendly Cleaning Products", desc: "We use safe, non-toxic, biodegradable cleaning agents that are gentle on your family, pets and the environment - yet highly effective on dirt and bacteria." },
  { icon: "⏰", title: "Flexible Scheduling", desc: "Morning, afternoon, evening or weekend appointments - we work around your busy schedule. One-off or regular contracts available for homes and businesses." },
  { icon: "💰", title: "Transparent, Competitive Pricing", desc: "No hidden costs. Get a detailed, itemised quote upfront with no surprises on the invoice. We offer great value without compromising on quality." },
  { icon: "🛡️", title: "Fully Insured Service", desc: "Our cleaning service is fully insured, giving you complete peace of mind. Your property and belongings are in safe hands with Pestraid Cleaning Kenya." },
  { icon: "🏆", title: "Satisfaction Guaranteed", desc: "Not happy with any aspect of our clean? We'll come back and fix it - free of charge. Your complete satisfaction is our number one priority." },
];

const process = [
  { step: "01", title: "Get a Free Quote", desc: "Call, WhatsApp or fill in our online form. We'll give you a clear, itemised quote with no obligation and no hidden fees.", icon: "📞" },
  { step: "02", title: "Schedule Your Clean", desc: "Choose a time that suits you - morning, afternoon, evening or weekend. We confirm your booking and send a reminder.", icon: "📅" },
  { step: "03", title: "We Clean, You Relax", desc: "Our professional team arrives on time, fully equipped with all cleaning materials. You can stay or leave - we handle everything.", icon: "✨" },
  { step: "04", title: "Enjoy Your Clean Space", desc: "Inspect our work. We welcome your feedback and offer a free re-clean guarantee if anything isn't up to your standards.", icon: "🏠" },
];

const serviceAreas = [
  "Kilimani", "Westlands", "Karen", "Lavington", "Parklands",
  "Upperhill", "Nairobi CBD", "Lang'ata", "South B & C", "Runda",
  "Muthaiga", "Gigiri", "Spring Valley", "Ridgeways", "Thika Road",
  "Ngong Road", "Mombasa Road", "Kileleshwa", "Hurlingham", "Syokimau",
];

const faqs = [
  {
    id: "faq-1",
    q: "How much do professional cleaning services cost in Nairobi?",
    a: "Our prices are competitive and depend on the type of service, size of property and frequency. A standard home clean starts from KSh 2,500 while office and commercial cleans are quoted based on square footage. Call 0710 907 628 for a free, no-obligation quote.",
  },
  {
    id: "faq-2",
    q: "Do I need to provide cleaning equipment and products?",
    a: "No. Our professional team arrives fully equipped with all necessary cleaning materials, equipment and eco-friendly products at no extra charge. You don't need to provide anything.",
  },
  {
    id: "faq-3",
    q: "Are your cleaning staff background checked and trustworthy?",
    a: "Absolutely. All Pestraid Cleaning Kenya staff undergo thorough background checks, are professionally trained, and wear uniforms. We take the security of your home or office very seriously.",
  },
  {
    id: "faq-4",
    q: "Do you offer regular weekly or monthly cleaning contracts?",
    a: "Yes. We offer flexible regular cleaning contracts for both homes and businesses - weekly, bi-weekly or monthly. Regular clients enjoy priority scheduling and preferential rates.",
  },
  {
    id: "faq-5",
    q: "Which areas in Nairobi do you serve?",
    a: "We cover all major Nairobi neighbourhoods including Kilimani, Westlands, Karen, Lavington, Parklands, Upperhill, Lang'ata, Runda, Muthaiga, Gigiri, Kileleshwa, Hurlingham, South B & C, and many more.",
  },
  {
    id: "faq-6",
    q: "How long does a professional home clean take?",
    a: "A standard 2-bedroom home typically takes 2-4 hours with a team of 2 cleaners. Larger homes, deep cleans or post-construction cleans take longer. We'll give you an accurate time estimate when you book.",
  },
];

/* ─── PAGE ─── */

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ─── HERO ─── */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-banner.jpg"
            alt="Pestraid Cleaning Kenya - professional cleaning team in Nairobi"
            fill priority sizes="100vw"
            className="object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(13,59,19,0.92) 0%, rgba(27,94,32,0.78) 50%, rgba(0,0,0,0.55) 100%)" }}
          />
        </div>

        {/* Decorative glows */}
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-10 animate-float" style={{ background: "radial-gradient(circle, #f9c923, transparent)" }} />
        <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full opacity-10 animate-float" style={{ animationDelay: "2s", background: "radial-gradient(circle, #43a047, transparent)" }} />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
            Nairobi's #1 Professional Cleaning Company
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
            Professional{" "}
            <span style={{ color: "#f9c923" }}>Cleaning Services</span>
            {" "}in Nairobi
          </h1>

          <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto mb-4 leading-relaxed">
            Pestraid Cleaning Kenya delivers expert, eco-friendly cleaning services across all Nairobi
            neighbourhoods - homes, offices, carpets, sofas and post-construction sites.
          </p>
          <p className="text-base text-green-200 max-w-2xl mx-auto mb-10">
            Trusted by <strong className="text-white">500+ clients</strong> across Kilimani, Westlands, Karen, Lavington, Parklands &amp; beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254710907628" id="hero-call-btn" className="btn-yellow text-base px-8 py-4 font-bold">
              📞 Call for a FREE Quote
            </a>
            <a
              href="https://wa.me/254710907628?text=Hello%20Pestraid%20Cleaning%2C%20I%20need%20a%20cleaning%20quote"
              target="_blank" rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="bg-[#25d366] text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#1da851] transition-all text-base"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { icon: "⭐", text: "5-Star Rated" },
              { icon: "✅", text: "Vetted Staff" },
              { icon: "🌿", text: "Eco-Friendly" },
              { icon: "🛡️", text: "Fully Insured" },
            ].map((item) => (
              <div key={item.text} className="glass-card rounded-xl px-3 py-3 flex items-center justify-center gap-2">
                <span className="text-base">{item.icon}</span>
                <span className="text-white text-xs font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-60">
          <span className="text-white text-xs">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section id="stats" className="bg-brand-green-dark py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="text-white">
              <div className="text-4xl sm:text-5xl font-bold font-display" style={{ color: "#f9c923" }}>{s.value}</div>
              <div className="text-green-200 text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT INTRO ─── */}
      <section id="about-intro" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-tag mb-4">About Pestraid Cleaning Kenya</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 font-display">
                Nairobi's Most <span className="text-gradient">Trusted Cleaning Company</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  <strong className="text-gray-900">Pestraid Cleaning Kenya</strong> is a professional cleaning company based on{" "}
                  <strong>Argwings Kodhek Road, Rose Ave, Nairobi</strong>, proudly part of the{" "}
                  <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold hover:underline">Pestraid Kenya Group</a>.
                  Since 2018, we have been delivering exceptional cleaning services to homes, offices, and commercial properties across all Nairobi neighbourhoods.
                </p>
                <p>
                  Our team of over <strong>15 trained, vetted cleaning professionals</strong> uses eco-friendly products and modern equipment to deliver consistently high standards.
                  Whether you need a one-off deep clean, regular domestic help, or a full post-construction clean for your new build, we have the expertise to get the job done right.
                </p>
                <p>
                  We are proud of our <strong>100% satisfaction guarantee</strong> - if you are not completely happy, we come back and re-clean at no extra cost. That's the Pestraid promise.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" id="about-intro-learn-btn" className="btn-primary">Learn About Us</Link>
                <Link href="/contact" id="about-intro-quote-btn" className="btn-secondary">Get a Free Quote</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-xl">
                <Image src="/home-cleaning.jpg" alt="Professional home cleaning services Nairobi" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-xl mt-8">
                <Image src="/office-cleaning.jpg" alt="Office cleaning services Nairobi" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-56 shadow-xl">
                <Image src="/carpet-cleaning.jpg" alt="Carpet cleaning services Kenya" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-56 shadow-xl mt-8">
                <Image src="/construction-cleaning.jpg" alt="Post-construction cleaning Nairobi" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services-home" className="py-20 sm:py-28" style={{ background: "linear-gradient(180deg, #f0faf0 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4 font-display">
              Professional <span className="text-gradient">Cleaning Services</span> in Nairobi
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From single-room cleans to full commercial premises - Pestraid Cleaning Kenya has a tailored solution
              for every residential and business cleaning need across Nairobi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                id={`home-service-${service.id}`}
                className="group rounded-2xl overflow-hidden shadow-md card-hover bg-white border border-gray-100 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.img}
                    alt={`${service.title} in Nairobi Kenya`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-4 left-4 text-3xl">{service.icon}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 font-display group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-1 mb-4 flex-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-4 h-4 rounded-full bg-brand-green-50 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-brand-green font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Extra services pill row */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Deep Cleaning", "Move-In / Move-Out Cleaning", "Airbnb Cleaning", "School Cleaning", "Warehouse Cleaning", "Hotel Cleaning"].map((s) => (
              <Link
                key={s}
                href="/services"
                className="px-4 py-2 bg-white border border-brand-green/20 text-brand-green-dark text-sm font-medium rounded-full shadow-sm hover:border-brand-green hover:bg-brand-green-50 transition-all"
              >
                {s}
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" id="home-all-services-btn" className="btn-primary text-base px-10 py-3.5">
              View All Cleaning Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-tag mb-4">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 font-display">
              Book a Clean in <span className="text-gradient">4 Simple Steps</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Getting a professional clean in Nairobi has never been easier. Here's how our process works.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-4rem)] h-0.5 bg-brand-green/20 z-0" />
                )}
                <div className="relative z-10 w-24 h-24 rounded-3xl mx-auto mb-5 flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #1b5e20, #43a047)" }}>
                  <span className="text-4xl">{p.icon}</span>
                </div>
                <div className="text-brand-yellow font-bold text-xs tracking-widest mb-2">STEP {p.step}</div>
                <h3 className="font-bold text-gray-900 mb-2 font-display text-lg">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="tel:+254710907628" id="process-cta-btn" className="btn-primary text-base px-10 py-3.5">
              📞 Book Your Clean Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section id="why-us" className="py-20 sm:py-28" style={{ background: "linear-gradient(180deg, #f0faf0 0%, #e8f5e9 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-tag mb-4">Why Choose Pestraid</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4 font-display">
              The Pestraid <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Thousands of Nairobi homes and businesses choose Pestraid Cleaning Kenya every month.
              Here's why we're Nairobi's most trusted cleaning company.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-4 items-start">
                <span className="text-2xl w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-brand-green-50 shadow-sm">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 font-display">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" id="why-us-about-btn" className="btn-primary px-8 py-3.5">About Our Company</Link>
            <Link href="/contact" id="why-us-contact-btn" className="btn-secondary px-8 py-3.5">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="py-20 sm:py-28 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-4" style={{ background: "rgba(249,201,35,0.2)", color: "#f9c923" }}>
              ⭐ Verified Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
              What Our Clients Say
            </h2>
            <p className="text-green-200 mt-3 max-w-lg mx-auto">
              Over 500 happy clients across Nairobi trust Pestraid Cleaning Kenya - here are some of their stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id} id={t.id}
                className="bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} style={{ color: "#f9c923" }} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-green-100 leading-relaxed mb-6 italic text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-brand-green-dark font-display text-sm" style={{ background: "#f9c923" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-green-300 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="tel:+254710907628" id="testimonials-cta-btn" className="btn-yellow font-bold px-10 py-4 text-base">
              Join 500+ Happy Clients - Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section id="service-areas" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Service Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 font-display">
              Cleaning Services Across <span className="text-gradient">All Nairobi Areas</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Pestraid Cleaning Kenya covers all major neighbourhoods and estates across Nairobi County.
              Not sure if we cover your area? <a href="tel:+254710907628" className="text-brand-green font-semibold hover:underline">Give us a call</a>.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-5 py-2.5 bg-brand-green-50 text-brand-green-dark font-semibold text-sm rounded-full border border-brand-green/15 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all cursor-default"
              >
                📍 {area}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            Also serving: Thika Road, Mombasa Road, Ngong Road, Rongai, Syokimau, Athi River and surrounding areas.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-20 sm:py-28" style={{ background: "linear-gradient(180deg, #f0faf0 0%, #ffffff 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-tag mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 font-display">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Everything you need to know about our professional cleaning services in Nairobi.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                id={faq.id}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-3 font-display flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4">Still have questions? We're happy to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+254710907628" id="faq-call-btn" className="btn-primary px-8 py-3">📞 Call 0710 907 628</a>
              <Link href="/contact" id="faq-contact-btn" className="btn-secondary px-8 py-3">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LATEST BLOG ─── */}
      <section id="latest-blog" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="section-tag mb-4">Our Blog</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 font-display">
                Cleaning Tips &amp; <span className="text-gradient">Expert Guides</span>
              </h2>
            </div>
            <Link href="/blog" id="home-blog-all-btn" className="btn-secondary whitespace-nowrap">
              View All Articles →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                id={`home-blog-${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 card-hover flex flex-col"
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-brand-green-dark text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-400 mb-2">{post.date} · {post.readTime}</p>
                  <h3 className="font-bold text-gray-900 mb-3 font-display line-clamp-2 group-hover:text-brand-green transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <span className="text-brand-green font-semibold text-sm group-hover:underline mt-auto">Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SISTER COMPANIES ─── */}
      <section id="related-services" className="py-16 bg-brand-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-dark font-semibold mb-3 uppercase text-sm tracking-widest">Part of Pestraid Kenya Group</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-display">
            Complete Property Care - Our Sister Companies
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-sm leading-relaxed">
            Beyond cleaning, Pestraid Kenya Group offers comprehensive property protection services.
            Our sister brands handle pest control, fumigation and specialist termite management across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://pestraid.co.ke/"
              target="_blank" rel="noopener noreferrer"
              id="home-pestraid-link"
              className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100 card-hover flex-1 max-w-sm mx-auto sm:mx-0"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-green-50 flex items-center justify-center text-3xl flex-shrink-0">🐛</div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 font-display group-hover:text-brand-green transition-colors">Pestraid Kenya</h3>
                <p className="text-gray-500 text-sm">Pest control, fumigation &amp; bed bug treatment</p>
                <span className="text-brand-green text-xs font-semibold">pestraid.co.ke →</span>
              </div>
            </a>
            <a
              href="https://www.termitescontrolservices.co.ke/"
              target="_blank" rel="noopener noreferrer"
              id="home-termites-link"
              className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100 card-hover flex-1 max-w-sm mx-auto sm:mx-0"
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-50 flex items-center justify-center text-3xl flex-shrink-0">🏚️</div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 font-display group-hover:text-brand-green transition-colors">Termites Control Services</h3>
                <p className="text-gray-500 text-sm">Specialist termite inspection, treatment &amp; prevention</p>
                <span className="text-brand-green text-xs font-semibold">termitescontrolservices.co.ke →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="home-cta" className="py-20" style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32, #43a047)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Ready for a <span style={{ color: "#f9c923" }}>Spotless</span> Space?
          </h2>
          <p className="text-green-200 mb-3 text-lg max-w-xl mx-auto">
            Get a free, no-obligation quote from Nairobi's most trusted professional cleaning company.
            We serve homes, offices and commercial properties across all Nairobi areas.
          </p>
          <p className="text-green-300 mb-10 text-sm">
            📍 Argwings Kodhek Road, Rose Ave, Nairobi &nbsp;|&nbsp; ✉️ sales@pestraid.co.ke
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254710907628" id="cta-call-now-btn" className="btn-yellow font-bold text-base px-10 py-4">
              📞 Call Now: 0710 907 628
            </a>
            <a
              href="https://wa.me/254710907628?text=Hello%20Pestraid%20Cleaning%2C%20I%20need%20a%20cleaning%20quote"
              target="_blank" rel="noopener noreferrer"
              id="cta-whatsapp-btn"
              className="bg-[#25d366] text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#1da851] transition-all text-base"
            >
              WhatsApp Us
            </a>
            <Link href="/contact" id="cta-quote-btn" className="bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-full hover:bg-white/30 transition-all text-base flex items-center justify-center">
              Get a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
