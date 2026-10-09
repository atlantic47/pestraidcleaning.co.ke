"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

const services = [
  "Home Cleaning",
  "Office / Commercial Cleaning",
  "Carpet & Sofa Cleaning",
  "Post-Construction Cleaning",
  "Deep Cleaning",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #43a047 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-5">
            📞 Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-5">
            Contact <span style={{ color: "#f9c923" }}>Pestraid Cleaning</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Ready to transform your space? Get a free, no-obligation quote from
            Nairobi's trusted cleaning experts.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-start">
          {/* Contact Info */}
          <div>
            <span className="section-tag mb-4">Reach Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 font-display">
              We&apos;d Love to <span className="text-gradient">Hear from You</span>
            </h2>
            <p className="text-gray-500 mb-10 text-base leading-relaxed">
              Whether you need a one-off clean or a regular contract, our team
              is ready to help. Reach us by phone, WhatsApp, or the contact form.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  label: "Our Office",
                  value: "Argwings Kodhek Road, Rose Ave, Nairobi, Kenya",
                  href: "https://maps.google.com/?q=Argwings+Kodhek+Road+Nairobi",
                },
                {
                  icon: "📞",
                  label: "Phone / WhatsApp",
                  value: "0710 907 628",
                  href: "tel:+254710907628",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "sales@pestraid.co.ke",
                  href: "mailto:sales@pestraid.co.ke",
                },
                {
                  icon: "⏰",
                  label: "Working Hours",
                  value: "Mon-Fri: 8am-6pm | Sat: 8am-3pm",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl bg-brand-green-50 border border-brand-green-100">
                  <span className="text-2xl w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-green-dark">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        id={`contact-info-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-700 font-medium hover:text-brand-green transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254710907628?text=Hello%20Pestraid%20Cleaning%2C%20I%20need%20a%20cleaning%20service%20quote"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="mt-8 flex items-center justify-center gap-3 bg-[#25d366] text-white font-bold py-4 px-8 rounded-2xl hover:bg-[#1da851] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Form */}
          <div id="quote" className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Thank You!</h3>
                <p className="text-gray-500 mb-6">
                  Your request has been received. Our team will contact you within 2 hours during business hours.
                </p>
                <p className="text-brand-green font-semibold">
                  For urgent requests, call us directly on{" "}
                  <a href="tel:+254710907628" className="underline">0710 907 628</a>
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", service: "", address: "", message: "" }); }}
                  className="mt-6 btn-secondary"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">
                  Request a Free Quote
                </h2>
                <p className="text-gray-400 text-sm mb-7">
                  Fill in the form and we&apos;ll get back to you within 2 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Kamau"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all text-gray-900 placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0712 345 678"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all text-gray-900 placeholder-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all text-gray-900 placeholder-gray-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all text-gray-900 bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-address" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Property Address / Location
                    </label>
                    <input
                      id="contact-address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. Westlands, Nairobi"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all text-gray-900 placeholder-gray-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your cleaning needs - size of space, frequency, specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all text-gray-900 placeholder-gray-300 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Quote Request 🚀"
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you agree to be contacted by our team. We never share your data.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-6 text-center">📍 Find Us on the Map</h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <iframe
              title="Pestraid Cleaning Kenya Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818345766048!2d36.796068!3d-1.292177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d0cf3f6b%3A0x7cdbfe618a79c3f4!2sArgwings%20Kodhek%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1697000000000!5m2!1sen!2ske"
              width="100%"
              height="380"
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
