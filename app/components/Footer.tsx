import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Home Cleaning", href: "/services#home-cleaning" },
  { label: "Office Cleaning", href: "/services#office-cleaning" },
  { label: "Carpet Cleaning", href: "/services#carpet-cleaning" },
  { label: "Post-Construction Cleaning", href: "/services#construction-cleaning" },
  { label: "Deep Cleaning", href: "/services#deep-cleaning" },
  { label: "Sofa Cleaning", href: "/services#sofa-cleaning" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Free Quote", href: "/contact#quote" },
];

const CURRENT_YEAR = 2026;

export default function Footer() {
  const year = CURRENT_YEAR;

  return (
    <footer className="bg-brand-green-dark text-white" aria-label="Site footer">
      {/* Top CTA Banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #43a047 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #f9c923 0%, transparent 50%), radial-gradient(circle at 80% 50%, #f9c923 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">
            Ready for a <span style={{ color: "#f9c923" }}>Spotless</span> Space?
          </h2>
          <p className="text-green-100 max-w-xl mx-auto mb-8 text-lg">
            Get a free, no-obligation quote today. Our expert team is just a
            call away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254710907628"
              id="footer-call-btn"
              className="btn-yellow font-bold text-base px-8 py-3"
            >
              📞 Call: 0710 907 628
            </a>
            <a
              href="https://wa.me/254710907628?text=Hello%2C%20I%20need%20a%20cleaning%20service%20quote"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-btn"
              className="bg-[#25d366] text-white font-bold px-8 py-3 rounded-full flex items-center gap-2 justify-center transition hover:bg-[#1da851] hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="bg-[#0d3b13] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" id="footer-logo" className="inline-flex mb-5">
              {/* Logo inverted white - footer is dark so we use CSS filter */}
              <Image
                src="/logo-pestraid.png"
                alt="Pestraid Cleaning Kenya"
                width={160}
                height={52}
                className="h-10 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-green-200 text-sm leading-relaxed mb-5">
              Professional cleaning services across Nairobi and beyond. Part of
              the trusted{" "}
              <a
                href="https://pestraid.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-brand-yellow hover:text-brand-yellow-light transition-colors"
              >
                Pestraid Kenya Group
              </a>
              .
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" id="footer-pestraid-link" className="bg-white/10 hover:bg-brand-yellow hover:text-black transition-all rounded-lg p-2.5" aria-label="Pestraid Kenya website">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </a>
              <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer" id="footer-wa-icon" className="bg-white/10 hover:bg-[#25d366] hover:text-white transition-all rounded-lg p-2.5" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 font-display">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    id={`footer-service-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-green-300 hover:text-brand-yellow text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-brand-yellow">›</span> {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 font-display">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    id={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-green-300 hover:text-brand-yellow text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-brand-yellow">›</span> {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://pestraid.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-parent-site"
                  className="text-green-300 hover:text-brand-yellow text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow">›</span> Pestraid Kenya
                </a>
              </li>
              <li>
                <a
                  href="https://www.termitescontrolservices.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-termites-site"
                  className="text-green-300 hover:text-brand-yellow text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow">›</span> Termites Control Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 font-display">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-yellow mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-green-200 text-sm">
                  Argwings Kodhek Road, Rose Ave,<br />Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-yellow shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+254710907628" id="footer-phone" className="text-green-200 hover:text-brand-yellow text-sm transition-colors">
                  0710 907 628
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-yellow shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:sales@pestraid.co.ke" id="footer-email" className="text-green-200 hover:text-brand-yellow text-sm transition-colors">
                  sales@pestraid.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-900/50 bg-[#071f09]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-green-400 text-xs text-center sm:text-left">
            © {year} Pestraid Cleaning Kenya. All rights reserved. Part of{" "}
            <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-yellow">
              Pestraid Kenya Group
            </a>.
          </p>
          <div className="flex gap-4 text-xs text-green-500">
            <Link href="/privacy-policy" id="footer-privacy" className="hover:text-brand-yellow transition-colors">Privacy Policy</Link>
            <Link href="/terms" id="footer-terms" className="hover:text-brand-yellow transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
