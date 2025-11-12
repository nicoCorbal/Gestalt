import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const [is_menu_open, set_is_menu_open] = useState(false);

  return (
    <nav className="bg-curated-bg-light z-50 sticky top-0">
      <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[64px] sm:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group z-50">
            <div className="w-7 h-7 flex items-center justify-center">
              <img src="/logo.svg" alt="Gestalt" className="w-6 h-6 transition-transform group-hover:scale-110" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" className="text-curated-text hover:text-curated-text-muted transition-colors text-[15px] font-medium">
              Inicio
            </Link>
            <Link to="/browse" className="text-curated-text-muted hover:text-curated-text transition-colors text-[15px]">
              Explorar
            </Link>
            <Link to="/blog" className="text-curated-text-muted hover:text-curated-text transition-colors text-[15px]">
              Blog
            </Link>
            <Link to="/info" className="text-curated-text-muted hover:text-curated-text transition-colors text-[15px]">
              Nosotros
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 z-50">
            <button className="p-2 hover:bg-white rounded-lg transition-colors">
              <Search className="w-5 h-5 text-curated-text-muted" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => set_is_menu_open(!is_menu_open)}
              className="md:hidden p-2 hover:bg-white rounded-lg transition-colors"
            >
              {is_menu_open ? (
                <X className="w-6 h-6 text-curated-text" />
              ) : (
                <Menu className="w-6 h-6 text-curated-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {is_menu_open && (
          <div className="md:hidden absolute top-[64px] left-0 right-0 bg-curated-bg-light border-t border-curated-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => set_is_menu_open(false)}
                className="block text-curated-text hover:text-curated-text-muted transition-colors text-[16px] font-medium py-2"
              >
                Inicio
              </Link>
              <Link
                to="/browse"
                onClick={() => set_is_menu_open(false)}
                className="block text-curated-text-muted hover:text-curated-text transition-colors text-[16px] py-2"
              >
                Explorar
              </Link>
              <Link
                to="/blog"
                onClick={() => set_is_menu_open(false)}
                className="block text-curated-text-muted hover:text-curated-text transition-colors text-[16px] py-2"
              >
                Blog
              </Link>
              <Link
                to="/info"
                onClick={() => set_is_menu_open(false)}
                className="block text-curated-text-muted hover:text-curated-text transition-colors text-[16px] py-2"
              >
                Nosotros
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
