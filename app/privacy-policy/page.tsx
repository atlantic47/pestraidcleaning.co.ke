import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pestraid Cleaning Kenya",
  description: "Privacy Policy for Pestraid Cleaning Kenya — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className="pt-36 pb-16 text-white"
        style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Privacy Policy</h1>
          <p className="text-green-200">Last updated: October 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">1. Who We Are</h2>
              <p>Pestraid Cleaning Kenya is a professional cleaning company based at Argwings Kodhek Road, Rose Ave, Nairobi, Kenya. We are part of the Pestraid Kenya Group. Contact: 0710907628.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">2. Information We Collect</h2>
              <p>We collect information you provide when requesting quotes or contacting us, including: name, phone number, email address, and property address. We do not collect payment information through this website.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">3. How We Use Your Information</h2>
              <p>We use your information solely to: respond to your cleaning service enquiries, provide quotes, and contact you about your booking. We do not sell or share your data with third parties.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">4. Cookies</h2>
              <p>This website uses minimal essential cookies to ensure proper functionality. We do not use tracking or advertising cookies.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">5. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal data. Contact us at sales@pestraid.co.ke.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">6. Contact</h2>
              <p>For privacy concerns: <a href="mailto:sales@pestraid.co.ke" className="text-brand-green">sales@pestraid.co.ke</a> | Tel: <a href="tel:+254710907628" className="text-brand-green">0710 907 628</a></p>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/" className="btn-primary">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
