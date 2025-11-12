import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User } from 'lucide-react';

const blog_posts = [
  {
    id: 1,
    title: 'The Art of Intentional Living',
    excerpt: 'Discover how curated spaces and thoughtful product choices can transform your daily life into a more meaningful experience.',
    author: 'Gestalt Team',
    date: '2025-11-10',
    category: 'Lifestyle',
    read_time: '5 min read',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Minimalist Workspace Essentials',
    excerpt: 'A deep dive into the tools and products that create a focused, distraction-free work environment.',
    author: 'Gestalt Team',
    date: '2025-11-08',
    category: 'Workspace',
    read_time: '7 min read',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Quality Over Quantity: Why We Curate',
    excerpt: 'Our philosophy on product selection and why we believe in showcasing only the best.',
    author: 'Gestalt Team',
    date: '2025-11-05',
    category: 'About',
    read_time: '4 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'The Rise of Sustainable Design',
    excerpt: 'How modern designers are creating beautiful products that respect our planet.',
    author: 'Gestalt Team',
    date: '2025-11-02',
    category: 'Design',
    read_time: '6 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'Building Your Carry System',
    excerpt: 'A guide to selecting the perfect everyday carry items that balance function and aesthetics.',
    author: 'Gestalt Team',
    date: '2025-10-28',
    category: 'Carry',
    read_time: '5 min read',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    title: 'The Perfect Morning Routine',
    excerpt: 'Products and rituals that set the tone for a productive and fulfilling day.',
    author: 'Gestalt Team',
    date: '2025-10-25',
    category: 'Lifestyle',
    read_time: '4 min read',
    image: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&h=600&fit=crop'
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-curated-bg-light">
      <div className="max-w-curated mx-auto px-6 lg:px-8 py-20">
      {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-[48px] md:text-[64px] font-normal text-curated-text mb-6 leading-tight">
            Stories &
            <br />
            <span className="font-medium">Insights</span>
          </h1>

          <p className="text-[17px] text-curated-text-muted leading-relaxed max-w-[600px] mx-auto">
            Thoughts on design, curation, and intentional living.
          </p>
        </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div className="bg-white rounded-3xl border-2 border-curated-border overflow-hidden hover:border-curated-text hover:shadow-xl transition-all duration-300 group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={blog_posts[0].image}
                alt={blog_posts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-curated-text px-4 py-2 rounded-full shadow-lg">
                <span className="text-[11px] font-medium text-white uppercase tracking-wide">Featured</span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-curated-bg rounded-full text-[11px] uppercase tracking-wide font-bold text-curated-text">
                  {blog_posts[0].category}
                </span>
                <span className="text-[13px] text-curated-text-muted">{blog_posts[0].read_time}</span>
              </div>
              <h2 className="text-[32px] md:text-[40px] font-bold text-curated-text mb-4 leading-tight tracking-tight transition-colors">
                {blog_posts[0].title}
              </h2>
              <p className="text-[16px] text-curated-text-muted mb-6 leading-relaxed">
                {blog_posts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-curated-text-muted" />
                  <div>
                    <p className="text-[13px] font-medium text-curated-text">{blog_posts[0].author}</p>
                    <p className="text-[12px] text-curated-text-muted">{blog_posts[0].date}</p>
                  </div>
                </div>
                <Link
                  to={`/blog/${blog_posts[0].id}`}
                  className="flex items-center gap-2 text-curated-text font-medium text-[14px] hover:text-curated-text-muted transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Posts Grid */}
      <div className="mb-16">
        <div className="mb-12">
          <h2 className="text-[28px] font-medium text-curated-text mb-3">All Posts</h2>
          <p className="text-[15px] text-curated-text-muted">{blog_posts.length} articles on design, curation, and thoughtful living.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog_posts.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white rounded-2xl border-2 border-curated-border overflow-hidden hover:border-curated-text hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-curated-bg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-curated-bg rounded-full text-[10px] uppercase tracking-wide font-bold text-curated-text">
                    {post.category}
                  </span>
                  <span className="text-[12px] text-curated-text-muted">{post.read_time}</span>
                </div>
                <h3 className="text-[18px] font-bold text-curated-text mb-2 leading-tight transition-colors">
                  {post.title}
                </h3>
                <p className="text-[14px] text-curated-text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[12px] text-curated-text-muted">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogPage;
