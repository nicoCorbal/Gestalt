import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { blog_posts } from '../data/blog_posts';
import PageTransition from '../components/PageTransition';

const MotionLink = motion.create(Link);

const BlogPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-curated-bg-light">
      <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-normal text-curated-text mb-4 sm:mb-6 leading-tight">
            Escritos &
            <br />
            <span className="font-medium">Reflexiones</span>
          </h1>

          <p className="text-[15px] sm:text-[17px] text-curated-text-muted leading-relaxed max-w-[600px] mx-auto px-4">
            Pensamientos sobre diseño gráfico, tipografía y teoría visual.
          </p>
        </div>

      {/* Featured Post */}
      <div className="mb-12 sm:mb-16">
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden bg-curated-bg">
              <div className="absolute top-4 left-4 bg-curated-text px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg z-10">
                <span className="text-[10px] sm:text-[11px] font-medium text-white uppercase tracking-wide">Destacado</span>
              </div>
            </div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="px-3 py-1 bg-curated-bg rounded-full text-[10px] sm:text-[11px] uppercase tracking-wide font-bold text-curated-text">
                  {blog_posts[0].category}
                </span>
                <div className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-curated-text-muted">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{blog_posts[0].reading_time} min</span>
                </div>
              </div>
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold text-curated-text mb-3 sm:mb-4 leading-tight tracking-tight transition-colors">
                {blog_posts[0].title}
              </h2>
              <p className="text-[14px] sm:text-[16px] text-curated-text-muted mb-4 sm:mb-6 leading-relaxed">
                {blog_posts[0].excerpt}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-curated-text-muted" />
                  <div>
                    <p className="text-[12px] sm:text-[13px] font-medium text-curated-text">{blog_posts[0].author}</p>
                    <p className="text-[11px] sm:text-[12px] text-curated-text-muted">{blog_posts[0].date}</p>
                  </div>
                </div>
                <Link
                  to={`/blog/${blog_posts[0].slug}`}
                  className="inline-flex items-center gap-2 text-curated-text font-medium text-[13px] sm:text-[14px] hover:text-curated-text-secondary transition-colors duration-200 group/link"
                >
                  <span>Leer más</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Posts Grid */}
      <div className="mb-12 sm:mb-16">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[28px] font-medium text-curated-text mb-3">Todos los Artículos</h2>
          <p className="text-[14px] sm:text-[15px] text-curated-text-muted">{blog_posts.length} escritos sobre diseño gráfico, tipografía y teoría visual.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blog_posts.slice(1).map((post, index) => (
            <MotionLink
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-curated-bg"></div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-curated-bg rounded-full text-[10px] uppercase tracking-wide font-bold text-curated-text">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[12px] text-curated-text-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.reading_time} min</span>
                  </div>
                </div>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-curated-text mb-2 leading-tight group-hover:text-curated-text-secondary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-curated-text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[12px] text-curated-text-muted">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPage;
