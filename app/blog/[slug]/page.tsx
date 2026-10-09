import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blogData";

type Props = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Pestraid Cleaning Kenya Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://pestraidcleaning.co.ke/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  // Render markdown-like content
  function renderContent(content: string) {
    const paragraphs = content.trim().split("\n\n");
    return paragraphs.map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 font-display">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3 font-display">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <p key={i} className="font-bold text-gray-800 mb-3">
            {block.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (block.startsWith("- ") || block.split("\n").every((l) => l.startsWith("- "))) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-none space-y-2 mb-5 pl-0">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-600">
                <span className="w-5 h-5 rounded-full bg-brand-green-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span dangerouslySetInnerHTML={{ __html: processInline(item.replace("- ", "")) }} />
              </li>
            ))}
          </ul>
        );
      }
      if (block.includes("- [ ]") || block.includes("- [x]")) {
        const items = block.split("\n");
        return (
          <ul key={i} className="space-y-2 mb-5">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="mt-0.5 text-brand-green">☐</span>
                <span>{item.replace("- [ ] ", "").replace("- [x] ", "")}</span>
              </li>
            ))}
          </ul>
        );
      }
      if (block.includes("| ")) {
        const rows = block.split("\n").filter((r) => r.trim() && !r.includes("---"));
        return (
          <div key={i} className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
              {rows.map((row, ri) => {
                const cells = row.split("|").filter(Boolean).map((c) => c.trim());
                return ri === 0 ? (
                  <thead key={ri}>
                    <tr className="bg-brand-green text-white">
                      {cells.map((c, ci) => <th key={ci} className="px-4 py-3 text-left text-sm font-bold">{c}</th>)}
                    </tr>
                  </thead>
                ) : (
                  <tbody key={ri}>
                    <tr className="border-t border-gray-100 hover:bg-brand-green-50 transition-colors">
                      {cells.map((c, ci) => <td key={ci} className="px-4 py-3 text-sm text-gray-600">{c}</td>)}
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        );
      }
      if (block.startsWith("1. ") || block.split("\n").every((l) => /^\d+\./.test(l))) {
        const items = block.split("\n").filter((l) => l.trim());
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 mb-5 pl-4">
            {items.map((item, j) => (
              <li key={j} className="text-gray-600">
                <span dangerouslySetInnerHTML={{ __html: processInline(item.replace(/^\d+\.\s/, "")) }} />
              </li>
            ))}
          </ol>
        );
      }
      return (
        <p
          key={i}
          className="text-gray-600 leading-relaxed mb-5"
          dangerouslySetInnerHTML={{ __html: processInline(block) }}
        />
      );
    });
  }

  function processInline(text: string): string {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\[(.*?)\]\((.*?)\)/g, (_, label, url) => {
        const isExternal = url.startsWith("http");
        return `<a href="${url}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""} class="text-brand-green font-semibold hover:underline">${label}</a>`;
      });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://pestraidcleaning.co.ke${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Pestraid Cleaning Kenya",
      url: "https://pestraidcleaning.co.ke",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pestraidcleaning.co.ke/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-end overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #43a047 100%)" }}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(13,59,19,0.55) 0%, rgba(13,59,19,0.92) 70%, rgba(13,59,19,1) 100%)" }}
          />
        </div>

        {/* Content - sits at the bottom of the hero, below the navbar */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-40 pb-12">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="bg-brand-yellow text-black text-xs font-bold px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-green-300 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-black text-xs font-bold">{post.author[0]}</span>
              {post.author}
            </span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Main Content */}
          <article className="min-w-0">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-lg font-display">
                {post.author[0]}
              </div>
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-400">{post.authorRole}</p>
              </div>
              <div className="ml-auto text-right text-sm text-gray-400">
                <p>{post.date}</p>
                <p>{post.readTime}</p>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8 p-6 bg-brand-green-50 rounded-2xl border-l-4 border-brand-green">
              {post.excerpt}
            </p>

            {/* Content */}
            <div className="prose-content">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-500 mb-3">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-brand-green-50 text-brand-green-dark text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div
              className="mt-10 rounded-3xl p-8 text-white text-center"
              style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32, #43a047)" }}
            >
              <h3 className="text-2xl font-bold font-display mb-3">
                Need Professional Cleaning in Nairobi?
              </h3>
              <p className="text-green-200 mb-6">
                Pestraid Cleaning Kenya - Argwings Kodhek Road, Rose Ave, Nairobi.
                Call us for a free quote!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+254710907628" id={`blog-post-call-${post.slug}`} className="btn-yellow font-bold">
                  📞 0710 907 628
                </a>
                <Link href="/contact" id={`blog-post-contact-${post.slug}`} className="bg-white/20 text-white border border-white/30 font-semibold px-6 py-3 rounded-full hover:bg-white/30 transition-all">
                  Free Quote
                </Link>
              </div>
            </div>

            {/* Back */}
            <div className="mt-8">
              <Link href="/blog" id={`blog-post-back-${post.slug}`} className="inline-flex items-center gap-2 text-brand-green font-semibold hover:underline">
                ← Back to Blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Contact Widget */}
            <div className="bg-brand-green-dark rounded-2xl p-6 text-white sticky top-24">
              <h3 className="font-bold text-lg font-display mb-4">
                Get a Free Quote
              </h3>
              <p className="text-green-200 text-sm mb-5">
                Professional cleaning services across Nairobi. Call or WhatsApp now!
              </p>
              <a
                href="tel:+254710907628"
                id={`blog-sidebar-call-${post.slug}`}
                className="btn-yellow w-full justify-center mb-3 text-sm"
              >
                📞 0710 907 628
              </a>
              <a
                href="https://wa.me/254710907628"
                target="_blank"
                rel="noopener noreferrer"
                id={`blog-sidebar-wa-${post.slug}`}
                className="flex items-center justify-center gap-2 bg-[#25d366] text-white font-semibold rounded-full py-3 px-4 text-sm hover:bg-[#1da851] transition-colors w-full"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Services Widget */}
            <div className="bg-brand-green-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg font-display mb-4 text-gray-900">Our Services</h3>
              <ul className="space-y-2">
                {[
                  { label: "Home Cleaning", href: "/services#home-cleaning" },
                  { label: "Office Cleaning", href: "/services#office-cleaning" },
                  { label: "Carpet Cleaning", href: "/services#carpet-cleaning" },
                  { label: "Post-Construction Cleaning", href: "/services#construction-cleaning" },
                  { label: "Deep Cleaning", href: "/services#deep-cleaning" },
                ].map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} id={`blog-sidebar-service-${s.label.toLowerCase().replace(/\s+/g, "-")}`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-brand-green font-medium transition-colors py-1.5">
                      <span className="text-brand-yellow">›</span> {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sister Companies */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-base font-display mb-4 text-gray-900">Pestraid Kenya Group</h3>
              <div className="space-y-3">
                <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" id={`blog-sidebar-pestraid-${post.slug}`} className="flex items-center gap-3 hover:bg-brand-green-50 rounded-xl p-2 -m-2 transition-colors group">
                  <span className="text-xl">🐛</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 group-hover:text-brand-green">Pestraid Kenya</p>
                    <p className="text-xs text-gray-400">Pest control services</p>
                  </div>
                </a>
                <a href="https://www.termitescontrolservices.co.ke/" target="_blank" rel="noopener noreferrer" id={`blog-sidebar-termites-${post.slug}`} className="flex items-center gap-3 hover:bg-brand-green-50 rounded-xl p-2 -m-2 transition-colors group">
                  <span className="text-xl">🏚️</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 group-hover:text-brand-green">Termites Control Services</p>
                    <p className="text-xs text-gray-400">Specialist termite control</p>
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 font-display mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  id={`blog-related-${relPost.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 card-hover"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={relPost.image}
                      alt={relPost.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-brand-green">{relPost.category}</span>
                    <h3 className="font-bold text-gray-900 mt-1 font-display line-clamp-2 group-hover:text-brand-green transition-colors">
                      {relPost.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2">{relPost.date} · {relPost.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
