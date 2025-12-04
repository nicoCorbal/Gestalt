import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { get_blog_post_by_slug, blog_posts } from '../data/blog_posts';
import PageTransition from '../components/PageTransition';

const BlogPostDetailPage = () => {
  const { slug } = useParams();
  const post = get_blog_post_by_slug(slug);

  const post_index = post ? blog_posts.findIndex(p => p.id === post.id) + 1 : 0;

  const related_posts = post
    ? blog_posts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 2)
    : [];


  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-curated-bg-light">
          <div className="text-center">
            <h2 className="text-[32px] font-medium text-curated-text mb-4">Artículo no encontrado</h2>
            <Link to="/blog" className="text-curated-text-muted hover:text-curated-text transition-colors">
              Volver al blog
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <article className="min-h-screen bg-curated-bg-light">
        {/* Navigation */}
        <div className="border-b border-curated-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-curated-text-muted hover:text-curated-text transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[14px]">Blog</span>
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="border-b border-curated-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Article number & category */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[48px] sm:text-[64px] md:text-[80px] font-medium text-curated-border leading-none">
                  {String(post_index).padStart(2, '0')}
                </span>
                <div className="h-12 sm:h-16 w-px bg-curated-border" />
                <div className="text-[13px] sm:text-[14px] text-curated-text-muted font-medium tracking-wide">
                  <span className="uppercase block">{post.category}</span>
                  <span className="block mt-1">{post.date} · {post.reading_time} min</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-medium text-curated-text leading-[1.0] tracking-[-0.03em] mb-10">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-curated-text-secondary leading-[1.4] max-w-4xl">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Content */}
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="md:columns-2 md:gap-12 lg:gap-16 [&>*:first-child]:first-letter:text-[4em] [&>*:first-child]:first-letter:font-medium [&>*:first-child]:first-letter:float-left [&>*:first-child]:first-letter:mr-3 [&>*:first-child]:first-letter:leading-[0.85] [&>*:first-child]:first-letter:text-curated-text">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="break-before-avoid break-after-avoid text-[20px] sm:text-[22px] font-normal text-curated-text mt-10 mb-4 leading-[1.3]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="break-before-avoid break-after-avoid text-[18px] sm:text-[19px] font-normal text-curated-text mt-8 mb-3 leading-[1.3]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-[17px] sm:text-[18px] text-curated-text-secondary leading-[1.8] mb-6 break-inside-avoid">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-curated-text">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic">{children}</em>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-3 my-6 break-inside-avoid">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-3 my-6 list-decimal list-outside pl-6 break-inside-avoid">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-[17px] sm:text-[18px] text-curated-text-secondary leading-[1.7]">
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="break-inside-avoid my-14 py-10 border-t border-b border-curated-border relative">
                    <span className="absolute -top-6 left-0 text-[120px] leading-none text-curated-border font-serif select-none">"</span>
                    <div className="text-[22px] sm:text-[26px] md:text-[30px] text-curated-text leading-[1.4] tracking-[-0.01em] font-medium pl-8 sm:pl-12">
                      {children}
                    </div>
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-curated-text underline decoration-1 underline-offset-4 hover:decoration-2 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                hr: () => (
                  <hr className="my-14 border-t border-curated-border" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags & Author */}
          <div className="mt-20 pt-12 border-t border-curated-border">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              {/* Author */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-curated-text rounded-full flex items-center justify-center p-4 sm:p-5">
                  <img src="/logo.svg" alt="" className="w-full h-full invert" />
                </div>
                <div>
                  <p className="text-[12px] text-curated-text-muted uppercase tracking-widest mb-1">Escrito por</p>
                  <p className="text-[20px] sm:text-[24px] font-medium text-curated-text">{post.author}</p>
                </div>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 border border-curated-border text-[13px] text-curated-text-muted rounded-full hover:border-curated-text hover:text-curated-text transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        {related_posts.length > 0 && (
          <section className="border-t border-curated-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
              <h2 className="text-[12px] text-curated-text-muted uppercase tracking-widest mb-12">
                Continuar leyendo
              </h2>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                {related_posts.map((related, index) => {
                  const related_index = blog_posts.findIndex(p => p.id === related.id) + 1;
                  return (
                    <Link
                      key={related.id}
                      to={`/blog/${related.slug}`}
                      className="group block"
                    >
                      <div className="flex items-start gap-6 mb-6">
                        <span className="text-[72px] sm:text-[96px] font-medium text-curated-border leading-none group-hover:text-curated-text-muted transition-colors">
                          {String(related_index).padStart(2, '0')}
                        </span>
                        <div className="pt-4">
                          <p className="text-[12px] text-curated-text-muted uppercase tracking-widest mb-2">
                            {related.category}
                          </p>
                          <p className="text-[13px] text-curated-text-muted">
                            {related.reading_time} min de lectura
                          </p>
                        </div>
                      </div>
                      <h3 className="text-[26px] sm:text-[32px] md:text-[36px] font-medium text-curated-text leading-[1.15] mb-5 group-hover:text-curated-text-secondary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-[16px] sm:text-[17px] text-curated-text-muted leading-relaxed">
                        {related.excerpt}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </article>
    </PageTransition>
  );
};

export default BlogPostDetailPage;
