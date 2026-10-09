import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Pestraid Cleaning Kenya",
  description: "Terms of Service for Pestraid Cleaning Kenya cleaning services.",
};

export default function TermsPage() {
  return (
    <>
      <section
        className="pt-36 pb-16 text-white"
        style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Terms of Service</h1>
          <p className="text-green-200">Last updated: October 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">1. Service Agreement</h2>
              <p>By booking cleaning services with Pestraid Cleaning Kenya, you agree to these terms. Our services are provided to residential and commercial properties in Nairobi and surrounding areas.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">2. Cancellations</h2>
              <p>We require at least 24 hours notice for cancellations. Same-day cancellations may be subject to a cancellation fee.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">3. Our Liability</h2>
              <p>Our team takes every care during cleaning. We carry professional indemnity insurance. Any damage claims must be reported within 24 hours of the cleaning service.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">4. Payment</h2>
              <p>Payment is due upon completion of the service unless otherwise agreed in writing. We accept M-Pesa, bank transfer, and cash.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">5. Contact</h2>
              <p>For any queries: <a href="tel:+254710907628" className="text-brand-green">0710 907 628</a> | <a href="mailto:sales@pestraid.co.ke" className="text-brand-green">sales@pestraid.co.ke</a></p>
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
