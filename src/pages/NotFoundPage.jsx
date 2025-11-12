import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-curated-bg-light flex items-center justify-center px-6">
      <div className="max-w-[600px] text-center">
        <div className="mb-8">
          <div className="text-[120px] md:text-[180px] font-bold text-curated-text leading-none tracking-tighter">
            404
          </div>
          <div className="h-px bg-curated-border my-8"></div>
        </div>

        <h1 className="text-[32px] md:text-[48px] font-bold text-curated-text mb-6 leading-tight tracking-tight">
          Page Not Found
        </h1>

        <p className="text-[16px] md:text-[18px] text-curated-text-muted mb-12 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 px-6 py-4 bg-curated-text text-white rounded-full hover:bg-opacity-90 transition-all shadow-lg font-medium text-[15px]"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-curated-border text-curated-text rounded-full hover:border-curated-text transition-colors font-bold uppercase tracking-wide text-[14px]"
          >
            <Search className="w-5 h-5" />
            <span>Browse Products</span>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-[400px] mx-auto opacity-20">
          <div className="aspect-square bg-curated-border rounded-2xl"></div>
          <div className="aspect-square bg-curated-border rounded-full"></div>
          <div className="aspect-square bg-curated-border rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
