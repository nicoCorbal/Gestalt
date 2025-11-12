import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { get_blog_post_by_slug } from '../data/blog_posts';

const BlogPostDetailPage = () => {
  const { slug } = useParams();
  const post = get_blog_post_by_slug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-curated-bg-light">
        <div className="text-center">
          <h2 className="text-[32px] font-medium text-curated-text mb-4">Artículo no encontrado</h2>
          <Link to="/blog" className="text-curated-text-muted hover:text-curated-text transition-colors">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Category Badge */}
      <div className="bg-curated-bg-light border-b-2 border-curated-border">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-curated-text-muted hover:text-curated-text mb-4 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[14px]">Volver</span>
          </Link>

          <div className="inline-block px-4 py-1.5 bg-curated-text text-white rounded-full text-[11px] uppercase tracking-widest font-bold">
            {post.category}
          </div>
        </div>
      </div>

      {/* Article Container */}
      <article className="max-w-[780px] mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <header className="py-12 sm:py-16 md:py-20 border-b border-curated-border">
          <h1 className="text-[40px] sm:text-[52px] md:text-[68px] lg:text-[76px] font-bold text-curated-text mb-8 leading-[0.95] tracking-[-0.03em]">
            {post.title}
          </h1>

          <p className="text-[19px] sm:text-[22px] md:text-[24px] text-curated-text-muted leading-[1.5] mb-10 font-light">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-[14px] text-curated-text-muted">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium text-curated-text">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.reading_time} min</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="py-12 sm:py-16 md:py-20">
          <div className="prose-custom">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle H2 headings
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-curated-text mt-16 mb-8 leading-[1.1] tracking-[-0.02em] first:mt-0">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }

              // Handle H3 headings
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-curated-text mt-12 mb-6 leading-tight tracking-[-0.01em]">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }

              // Handle bold standalone paragraphs
              if (paragraph.startsWith('**') && paragraph.endsWith('**') && !paragraph.includes('\n')) {
                return (
                  <p key={index} className="text-[20px] sm:text-[22px] font-bold text-curated-text mt-10 mb-4 leading-tight">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              }

              // Handle list items
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="space-y-3 my-8 ml-0">
                    {items.map((item, i) => {
                      const text = item.replace('- ', '');
                      const parts = text.split(/(\*\*.*?\*\*)/g);
                      return (
                        <li key={i} className="text-[18px] sm:text-[20px] text-curated-text-secondary leading-[1.7] pl-8 relative before:content-['—'] before:absolute before:left-0 before:text-curated-text">
                          {parts.map((part, j) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={j} className="font-bold text-curated-text">{part.replace(/\*\*/g, '')}</strong>;
                            }
                            return part;
                          })}
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              // Regular paragraphs
              if (paragraph.trim()) {
                const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={index} className="text-[18px] sm:text-[20px] md:text-[21px] text-curated-text-secondary leading-[1.7] mb-8 font-light">
                    {parts.map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="font-bold text-curated-text">{part.replace(/\*\*/g, '')}</strong>;
                      }
                      return part;
                    })}
                  </p>
                );
              }

              return null;
            })}
          </div>
        </div>

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="pb-12 sm:pb-16 border-b border-curated-border">
            <div className="flex items-start gap-4 flex-wrap">
              <Tag className="w-5 h-5 text-curated-text-muted mt-1" />
              <div className="flex-1 flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-curated-bg-light border border-curated-border rounded-full text-[13px] text-curated-text hover:border-curated-text transition-colors cursor-pointer font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="py-12 sm:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 text-[16px] text-curated-text font-medium hover:text-curated-text-muted transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Ver todos los artículos
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetailPage;
