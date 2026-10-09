import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Cleaning Tips & Blog | Pestraid Cleaning Kenya",
  description:
    "Expert cleaning tips, guides, and advice for Nairobi homes and offices. Learn the best cleaning practices from Pestraid Cleaning Kenya's professional team.",
  alternates: { canonical: "https://pestraidcleaning.co.ke/blog" },
};

const categories = ["All", "Home Cleaning Tips", "Office Cleaning", "Carpet Cleaning", "Construction Cleaning", "Eco Cleaning", "Seasonal Tips"];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #43a047 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-5">
            📝 Expert Cleaning Insights
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-5">
            Cleaning Tips &amp; <span style={{ color: "#f9c923" }}>Blog</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Professional cleaning advice, seasonal tips, and guides from
            Nairobi's expert cleaning team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <span className="section-tag mb-6">Featured Article</span>
          <Link
            href={`/blog/${featured.slug}`}
            id={`blog-featured-${featured.slug}`}
            className="group mt-4 grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 card-hover"
          >
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-yellow text-black text-xs font-bold px-3 py-1 rounded-full">
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
                <span>·</span>
                <span>{featured.author}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-display group-hover:text-brand-green transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-brand-green font-semibold group-hover:gap-3 transition-all">
                Read Full Article
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`blog-cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-2 rounded-full text-sm font-medium bg-brand-green-50 text-brand-green-dark hover:bg-brand-green hover:text-white transition-all"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              id={`blog-card-${post.slug}`}
              className="group rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 card-hover flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-brand-green-dark text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-bold text-lg text-gray-900 mb-3 font-display line-clamp-2 group-hover:text-brand-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-white text-xs font-bold">
                      {post.author[0]}
                    </div>
                    <span className="text-xs text-gray-500">{post.author}</span>
                  </div>
                  <span className="text-brand-green text-sm font-semibold group-hover:underline">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div
          className="mt-20 rounded-3xl p-10 text-center text-white"
          style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32, #43a047)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-display mb-3">
            Need a Professional Clean in Nairobi?
          </h2>
          <p className="text-green-200 mb-8 max-w-lg mx-auto">
            Don't just read about clean spaces - experience one! Book Pestraid
            Cleaning Kenya for your home or office today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254710907628"
              id="blog-cta-call"
              className="btn-yellow font-bold text-base px-8 py-3.5"
            >
              📞 Call 0710 907 628
            </a>
            <Link href="/contact" id="blog-cta-quote" className="bg-white/20 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-full hover:bg-white/30 transition-all">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
