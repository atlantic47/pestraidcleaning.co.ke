import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Services Nairobi | Pestraid Cleaning Kenya",
  description:
    "Explore all professional cleaning services by Pestraid Cleaning Kenya — home cleaning, office cleaning, carpet & sofa cleaning, post-construction cleaning, and deep cleaning in Nairobi.",
  alternates: { canonical: "https://pestraidcleaning.co.ke/services" },
};

const services = [
  {
    id: "home-cleaning",
    icon: "🏠",
    title: "Home Cleaning",
    subtitle: "Residential Cleaning Services",
    description:
      "Our expert home cleaning teams deliver a thorough, top-to-bottom clean of your entire residence. Whether you need a one-off spring clean or a regular weekly/monthly service, we tailor our approach to your home and lifestyle. We clean kitchens, bathrooms, living areas, bedrooms, and all surfaces — leaving your home fresh, hygienic, and sparkling.",
    img: "/home-cleaning.jpg",
    features: [
      "Kitchen deep cleaning including appliances",
      "Bathroom and toilet sanitization",
      "Bedroom cleaning and bed changing",
      "Living & dining area dusting and mopping",
      "Window sills, skirting boards & corners",
      "Regular or one-off scheduling",
    ],
  },
  {
    id: "office-cleaning",
    icon: "🏢",
    title: "Office & Commercial Cleaning",
    subtitle: "Commercial Cleaning Services",
    description:
      "A clean office boosts productivity, impresses clients, and keeps your team healthy. Pestraid Cleaning Kenya provides scheduled commercial cleaning for offices, retail spaces, banks, schools, hotels, and industrial facilities across Nairobi. We operate after-hours or at weekends to ensure zero disruption to your business operations.",
    img: "/office-cleaning.jpg",
    features: [
      "Open-plan offices and private suites",
      "Washrooms and kitchen areas",
      "Reception and lobby areas",
      "Conference rooms and boardrooms",
      "Computer desks and equipment dusting",
      "Industrial and warehouse cleaning",
    ],
  },
  {
    id: "carpet-cleaning",
    icon: "🧹",
    title: "Carpet & Sofa Cleaning",
    subtitle: "Upholstery & Fabric Cleaning",
    description:
      "Restore life to your carpets, rugs, and upholstered furniture with our professional hot-water extraction and steam cleaning process. We eliminate deep-seated dirt, allergens, bacteria, and stubborn stains — leaving your fabrics hygienic, fresh-smelling, and revived to near-new condition without damaging fibres.",
    img: "/carpet-cleaning.jpg",
    features: [
      "Hot water extraction (steam cleaning)",
      "Wall-to-wall carpet cleaning",
      "Persian and area rug cleaning",
      "Sofa, couch & armchair cleaning",
      "Mattress deep cleaning and sanitization",
      "Stain removal treatment",
    ],
  },
  {
    id: "construction-cleaning",
    icon: "🏗️",
    title: "Post-Construction Cleaning",
    subtitle: "After-Build & Renovation Cleaning",
    description:
      "Newly built or renovated spaces require specialist cleaning before they're ready to occupy. Our post-construction cleaning teams remove cement dust, paint splatter, adhesive residue, sawdust, and all construction debris — transforming your new space into a spotless, move-in ready environment quickly and efficiently.",
    img: "/construction-cleaning.jpg",
    features: [
      "Dust and debris removal throughout",
      "Window and glass cleaning",
      "Paint and adhesive removal",
      "Floor scrubbing and polishing",
      "Wall washing and surface wiping",
      "Final inspection and handover clean",
    ],
  },
  {
    id: "deep-cleaning",
    icon: "🫧",
    title: "Deep Cleaning",
    subtitle: "Intensive One-Off Cleaning",
    description:
      "When a standard clean isn't enough, our deep cleaning service tackles every corner, crevice, and surface with intensive care. Perfect for move-in/move-out situations, spring cleaning, post-event cleanup, or properties that haven't been professionally cleaned in a while. We leave no surface untouched.",
    img: "/home-cleaning.jpg",
    features: [
      "Behind and under all appliances",
      "Inside oven, fridge and microwave",
      "Grout and tile scrubbing",
      "Light fittings, fans, and air vents",
      "Interior window cleaning",
      "Cupboard and wardrobe interiors",
    ],
  },
  {
    id: "sofa-cleaning",
    icon: "🛋️",
    title: "Sofa & Upholstery Cleaning",
    subtitle: "Specialist Fabric Restoration",
    description:
      "Your sofas and upholstered furniture accumulate dust, allergens, bacteria, and stains over time. Our specialist upholstery cleaning service uses industry-approved techniques and cleaning agents to safely deep clean all fabric types — leather, suede, microfibre, and more — without causing any damage.",
    img: "/carpet-cleaning.jpg",
    features: [
      "Leather sofa cleaning and conditioning",
      "Fabric and microfibre sofa cleaning",
      "Dining chair and stool cleaning",
      "Curtain and blind cleaning",
      "Deodorizing and sanitizing",
      "Stain protection treatment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative pt-36 pb-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-5">
            🧽 Professional Cleaning Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-5">
            Our <span style={{ color: "#f9c923" }}>Cleaning Services</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Comprehensive professional cleaning for every space in Nairobi.
            Trusted by 500+ homes and businesses.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
          {services.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl h-80 md:h-96 ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur rounded-xl px-4 py-2 flex items-center gap-2 shadow">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-bold text-brand-green-dark text-sm font-display">{service.subtitle}</span>
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <span className="section-tag mb-3">{service.subtitle}</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-5 font-display">
                  {service.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 text-base">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-brand-green-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-600 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <a
                    href="tel:+254710907628"
                    id={`${service.id}-call-btn`}
                    className="btn-primary"
                  >
                    📞 Book Now
                  </a>
                  <a
                    href={`https://wa.me/254710907628?text=Hi%2C%20I%20need%20${encodeURIComponent(service.title)}%20in%20Nairobi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`${service.id}-wa-btn`}
                    className="btn-secondary"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #f9c923 0%, #fdd835 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-display">
            Transparent, Affordable Pricing
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            We believe great cleaning shouldn't break the bank. Contact us for a
            customized quote based on your exact needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254710907628" id="services-cta-call" className="btn-primary bg-brand-green-dark text-white px-10 py-4">
              📞 Get a Free Quote
            </a>
            <Link href="/contact" id="services-cta-contact" className="bg-white text-brand-green-dark font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-all">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
