import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { monthly_featured_products } from '../data/products';

const ProductSelector = ({ is_open, on_close, on_select, exclude_id = null }) => {
  const [search_query, set_search_query] = useState('');

  const filtered_products = monthly_featured_products.filter((product) => {
    if (exclude_id && product.id === exclude_id) return false;
    if (!search_query) return true;
    return (
      product.name.toLowerCase().includes(search_query.toLowerCase()) ||
      product.brand.toLowerCase().includes(search_query.toLowerCase())
    );
  });

  const handle_select = (product) => {
    on_select(product);
    set_search_query('');
    on_close();
  };

  return (
    <AnimatePresence>
      {is_open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={on_close}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 sm:inset-10 md:inset-20 bg-white rounded-2xl z-[101] overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-curated-border">
              <h2 className="text-[18px] sm:text-[20px] font-medium text-curated-text">Elige un producto</h2>
              <button
                onClick={on_close}
                className="p-2 hover:bg-curated-bg-light rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-curated-text-muted" />
              </button>
            </div>

            {/* Search */}
            <div className="p-3 sm:p-4 border-b border-curated-border">
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-curated-bg-light rounded-xl">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-curated-text-muted flex-shrink-0" />
                <input
                  type="text"
                  value={search_query}
                  onChange={(e) => set_search_query(e.target.value)}
                  placeholder="Buscar producto..."
                  className="flex-1 bg-transparent outline-none text-[14px] sm:text-[15px] text-curated-text placeholder:text-curated-text-muted"
                />
              </div>
            </div>

            {/* Grid de productos */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                {filtered_products.map((product) => (
                  <motion.button
                    key={product.id}
                    onClick={() => handle_select(product)}
                    className="text-left bg-curated-bg-light rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Imagen o placeholder */}
                    <div className="aspect-square bg-white flex items-center justify-center">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <span className="text-[14px] text-curated-text-muted text-center px-4">
                          {product.name}
                        </span>
                      )}
                    </div>
                    {/* Info */}
                    <div className="p-2 sm:p-3">
                      <p className="text-[10px] sm:text-[11px] text-curated-text-muted uppercase tracking-wide mb-1">
                        {product.brand}
                      </p>
                      <p className="text-[12px] sm:text-[13px] font-medium text-curated-text line-clamp-2">
                        {product.name}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Empty state */}
              {filtered_products.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-curated-text-muted">No se encontraron productos</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductSelector;
