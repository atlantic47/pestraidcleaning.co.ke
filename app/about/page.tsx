import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pestraid Cleaning Kenya",
  description:
    "Learn about Pestraid Cleaning Kenya — a proud member of the Pestraid Kenya Group. Professional cleaning services in Nairobi since 2018. Our mission, values, and team.",
  alternates: { canonical: "https://pestraidcleaning.co.ke/about" },
};

const team = [
  { name: "Daniel Mwangi", role: "Operations Manager", emoji: "👨‍💼" },
  { name: "Faith Njeri", role: "Lead Cleaning Supervisor", emoji: "👩‍🔧" },
  { name: "Peter Omondi", role: "Commercial Cleaning Lead", emoji: "👨‍🔧" },
  { name: "Joyce Auma", role: "Customer Relations", emoji: "👩‍💼" },
];

const values = [
  { icon: "💚", title: "Integrity", desc: "We are honest, transparent and trustworthy in all our dealings with clients and partners." },
  { icon: "🌿", title: "Eco-Responsibility", desc: "We use environmentally safe products and sustainable practices to protect our planet." },
  { icon: "⭐", title: "Excellence", desc: "We hold ourselves to the highest standards of cleaning quality — always exceeding expectations." },
  { icon: "🤝", title: "Community", desc: "We invest in local talent and support the communities in which we operate across Nairobi." },
];

const milestones = [
  { year: "2018", event: "Pestraid Cleaning founded as a division of Pestraid Kenya Group" },
  { year: "2019", event: "Expanded to commercial office cleaning across Westlands and CBD" },
  { year: "2020", event: "Launched carpet & upholstery specialist cleaning service" },
  { year: "2021", event: "Surpassed 200 satisfied clients milestone" },
  { year: "2022", event: "Introduced post-construction cleaning for developers" },
  { year: "2024", event: "500+ happy clients and growing across Nairobi County" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d3b13 0%, #2e7d32 60%, #43a047 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-5">
            🌿 About Pestraid Cleaning Kenya
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-5">
            Cleaning Nairobi, <span style={{ color: "#f9c923" }}>One Space</span> at a Time
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Part of the trusted Pestraid Kenya Group — delivering professional,
            eco-friendly cleaning services since 2018.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag mb-4">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 font-display">
              Born from a <span className="text-gradient">Vision for Cleaner Spaces</span>
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Pestraid Cleaning Kenya was established as a natural extension of
                the <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold hover:underline">Pestraid Kenya Group</a> — a group already deeply
                trusted across Nairobi for expert pest control and{" "}
                <a href="https://www.termitescontrolservices.co.ke/" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold hover:underline">termite control services</a>.
              </p>
              <p>
                We recognised that clean, healthy spaces go hand-in-hand with
                pest-free environments. So in 2018, we launched our dedicated
                cleaning division to serve homeowners, businesses, and property
                developers across Nairobi with the same professionalism and
                attention to detail our clients already loved.
              </p>
              <p>
                Today, with over 500 satisfied clients and a team of 15+
                professionally trained cleaners, we're proud to be one of
                Nairobi's most trusted cleaning companies — based on Argwings
                Kodhek Road, Rose Avenue, serving the entire city and beyond.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Link href="/services" id="about-services-btn" className="btn-primary">
                Our Services
              </Link>
              <Link href="/contact" id="about-contact-btn" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
              <Image
                src="/office-cleaning.jpg"
                alt="Pestraid Cleaning Kenya professional team in Nairobi"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
              <div className="text-4xl font-bold text-brand-green-dark font-display">6+</div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Years of Excellence</div>
                <div className="text-gray-400 text-xs">in Nairobi, Kenya</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-yellow rounded-2xl shadow-xl p-5 flex items-center gap-4">
              <div className="text-4xl font-bold text-gray-900 font-display">500+</div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Happy Clients</div>
                <div className="text-gray-700 text-xs">& counting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #f0faf0 0%, #e8f5e9 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-tag mb-4">Our Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 font-display">
              What Drives <span className="text-gradient">Everything We Do</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-md text-center card-hover">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 font-display">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-tag mb-4">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 font-display">
              Growing with <span className="text-gradient">Nairobi</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-brand-green-100 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-full bg-brand-green border-2 border-white shadow -translate-x-1/2 mt-4" />
                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-5/12 bg-brand-green-50 rounded-xl p-5 ${i % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:pl-10"}`}>
                    <span className="text-brand-green font-bold text-lg font-display">{m.year}</span>
                    <p className="text-gray-700 text-sm mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-brand-green-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-5">
            👥 Meet the Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-12">
            The People Behind <span style={{ color: "#f9c923" }}>the Clean</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/10 hover:bg-white/20 transition-colors">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                  style={{ background: "rgba(249,201,35,0.15)" }}
                >
                  {member.emoji}
                </div>
                <h3 className="font-bold text-white font-display">{member.name}</h3>
                <p className="text-green-300 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-tag mb-4">📍 Find Us</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-4 font-display">
            Visit Our Nairobi Office
          </h2>
          <p className="text-gray-500 mb-8">
            <strong>Argwings Kodhek Road, Rose Ave, Nairobi, Kenya</strong>
            <br />
            Mon–Fri: 8am–6pm &nbsp;|&nbsp; Saturday: 8am–3pm
          </p>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <iframe
              title="Pestraid Cleaning Kenya Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818345766048!2d36.796068!3d-1.292177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d0cf3f6b%3A0x7cdbfe618a79c3f4!2sArgwings%20Kodhek%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1697000000000!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
