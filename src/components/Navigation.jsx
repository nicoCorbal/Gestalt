import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { blog_posts } from '../data/blog_posts';

const NavLink = ({ to, children, isActive }) => {
  return (
    <Link to={to} className="relative text-[15px] py-1" aria-current={isActive ? 'page' : undefined}>
      <motion.span
        className={`relative z-10 ${isActive ? 'text-curated-text font-medium' : 'text-curated-text-muted'}`}
        whileHover={{ color: '#141414' }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-curated-text origin-left"
        initial={{ scaleX: isActive ? 1 : 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
};

const Navigation = () => {
  const [is_menu_open, set_is_menu_open] = useState(false);
  const [is_search_open, set_is_search_open] = useState(false);
  const [search_query, set_search_query] = useState('');
  const [search_results, set_search_results] = useState({ products: [], posts: [] });
  const search_input_ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Focus input when search opens
  useEffect(() => {
    if (is_search_open && search_input_ref.current) {
      search_input_ref.current.focus();
    }
  }, [is_search_open]);

  // Close search on route change
  useEffect(() => {
    set_is_search_open(false);
    set_search_query('');
  }, [location.pathname]);

  // Handle keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handle_keydown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        set_is_search_open(true);
      }
      if (e.key === 'Escape') {
        set_is_search_open(false);
      }
    };
    window.addEventListener('keydown', handle_keydown);
    return () => window.removeEventListener('keydown', handle_keydown);
  }, []);

  // Search logic
  useEffect(() => {
    if (search_query.trim() === '') {
      set_search_results({ products: [], posts: [] });
      return;
    }

    const query = search_query.toLowerCase();

    const filtered_products = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    ).slice(0, 5);

    const filtered_posts = blog_posts.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.excerpt.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    ).slice(0, 3);

    set_search_results({ products: filtered_products, posts: filtered_posts });
  }, [search_query]);

  const handle_result_click = (path) => {
    navigate(path);
    set_is_search_open(false);
    set_search_query('');
  };

  return (
    <>
      <nav className="bg-curated-bg-light z-50" role="navigation" aria-label="Navegación principal">
        <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[64px] sm:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50" aria-label="Ir al inicio - Gestalt">
              <motion.div
                className="w-7 h-7 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <img src="/logo.svg" alt="" className="w-6 h-6" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8" role="menubar">
              <NavLink to="/" isActive={location.pathname === '/'}>Inicio</NavLink>
              <NavLink to="/browse" isActive={location.pathname === '/browse' || location.pathname.startsWith('/collections')}>Explorar</NavLink>
              <NavLink to="/comparar" isActive={location.pathname === '/comparar'}>Comparar</NavLink>
              <NavLink to="/blog" isActive={location.pathname.startsWith('/blog')}>Blog</NavLink>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 z-50">
              <motion.button
                className="p-2 rounded-lg flex items-center gap-2"
                whileHover={{ backgroundColor: 'rgba(255,255,255,1)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                onClick={() => set_is_search_open(true)}
                aria-label="Buscar (Ctrl+K)"
              >
                <Search className="w-5 h-5 text-curated-text-muted" />
                <span className="hidden sm:inline text-[12px] text-curated-text-muted border border-curated-border rounded px-1.5 py-0.5">
                  ⌘K
                </span>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => set_is_menu_open(!is_menu_open)}
                className="md:hidden p-2 rounded-lg"
                whileHover={{ backgroundColor: 'rgba(255,255,255,1)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                aria-label={is_menu_open ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={is_menu_open}
              >
                <AnimatePresence mode="wait">
                  {is_menu_open ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-6 h-6 text-curated-text" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-6 h-6 text-curated-text" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {is_menu_open && (
              <motion.div
                className="md:hidden absolute top-[64px] left-0 right-0 bg-curated-bg-light border-t border-curated-border shadow-lg overflow-hidden z-50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                role="menu"
              >
                <motion.div
                  className="px-4 py-6 space-y-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {[
                    { to: '/', label: 'Inicio', isActive: location.pathname === '/' },
                    { to: '/browse', label: 'Explorar', isActive: location.pathname === '/browse' },
                    { to: '/comparar', label: 'Comparar', isActive: location.pathname === '/comparar' },
                    { to: '/blog', label: 'Blog', isActive: location.pathname.startsWith('/blog') }
                  ].map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 * index }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => set_is_menu_open(false)}
                        className={`block text-[16px] py-3 px-4 rounded-lg transition-colors ${
                          link.isActive
                            ? 'text-curated-text font-medium bg-white'
                            : 'text-curated-text-muted hover:text-curated-text hover:bg-white/50'
                        }`}
                        role="menuitem"
                        aria-current={link.isActive ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Search Modal */}
      <AnimatePresence>
        {is_search_open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => set_is_search_open(false)}
            />

            {/* Search Panel */}
            <motion.div
              className="fixed top-0 left-0 right-0 z-[101] p-3 sm:p-4 md:p-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-w-[600px] mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                {/* Search input */}
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b border-curated-border">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-curated-text-muted flex-shrink-0" />
                  <input
                    ref={search_input_ref}
                    type="text"
                    value={search_query}
                    onChange={(e) => set_search_query(e.target.value)}
                    placeholder="Buscar productos, artículos..."
                    className="flex-1 text-[15px] sm:text-[16px] outline-none bg-transparent text-curated-text placeholder:text-curated-text-muted"
                    aria-label="Buscar"
                  />
                  <button
                    onClick={() => set_is_search_open(false)}
                    className="text-[11px] sm:text-[12px] text-curated-text-muted border border-curated-border rounded px-1.5 sm:px-2 py-0.5 sm:py-1 hover:border-curated-text transition-colors"
                  >
                    ESC
                  </button>
                </div>

                {/* Results */}
                {(search_results.products.length > 0 || search_results.posts.length > 0) && (
                  <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
                    {/* Products */}
                    {search_results.products.length > 0 && (
                      <div className="p-3 sm:p-4">
                        <p className="text-[11px] sm:text-[12px] text-curated-text-muted uppercase tracking-wide mb-2 sm:mb-3">Productos</p>
                        <div className="space-y-1 sm:space-y-2">
                          {search_results.products.map((product) => (
                            <button
                              key={product.id}
                              onClick={() => handle_result_click(`/products/${product.id}`)}
                              className="w-full flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-curated-bg-light transition-colors text-left"
                            >
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-curated-bg rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-[9px] sm:text-[10px] text-curated-text-muted">{product.category}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[13px] sm:text-[14px] font-medium text-curated-text truncate">{product.name}</p>
                                <p className="text-[12px] sm:text-[13px] text-curated-text-muted">{product.brand} · ${product.price}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Blog posts */}
                    {search_results.posts.length > 0 && (
                      <div className="p-3 sm:p-4 border-t border-curated-border">
                        <p className="text-[11px] sm:text-[12px] text-curated-text-muted uppercase tracking-wide mb-2 sm:mb-3">Artículos</p>
                        <div className="space-y-1 sm:space-y-2">
                          {search_results.posts.map((post) => (
                            <button
                              key={post.id}
                              onClick={() => handle_result_click(`/blog/${post.slug}`)}
                              className="w-full flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-curated-bg-light transition-colors text-left"
                            >
                              <div className="flex-1 min-w-0">
                                <p className="text-[13px] sm:text-[14px] font-medium text-curated-text truncate">{post.title}</p>
                                <p className="text-[12px] sm:text-[13px] text-curated-text-muted">{post.category} · {post.reading_time} min</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Empty state */}
                {search_query && search_results.products.length === 0 && search_results.posts.length === 0 && (
                  <div className="p-6 sm:p-8 text-center">
                    <p className="text-curated-text-muted text-[14px]">No se encontraron resultados para "{search_query}"</p>
                  </div>
                )}

                {/* Initial state */}
                {!search_query && (
                  <div className="p-6 sm:p-8 text-center">
                    <p className="text-curated-text-muted text-[13px] sm:text-[14px]">Escribe para buscar productos y artículos</p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
