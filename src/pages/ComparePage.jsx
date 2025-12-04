import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, RefreshCw, ArrowRight } from 'lucide-react';
import { monthly_featured_products } from '../data/products';
import ProductSelector from '../components/ProductSelector';
import PageTransition from '../components/PageTransition';

const ComparePage = () => {
  const [search_params] = useSearchParams();

  // Obtener producto inicial de URL si existe
  const initial_product_id = search_params.get('producto');
  const initial_product = initial_product_id
    ? monthly_featured_products.find(p => p.id === parseInt(initial_product_id))
    : null;

  const [product_left, set_product_left] = useState(initial_product);
  const [product_right, set_product_right] = useState(null);
  const [selecting_side, set_selecting_side] = useState(null);

  const handle_select = (product) => {
    if (selecting_side === 'left') {
      set_product_left(product);
    } else if (selecting_side === 'right') {
      set_product_right(product);
    }
    set_selecting_side(null);
  };

  const ProductSlot = ({ product, side, on_change }) => {
    if (!product) {
      return (
        <motion.button
          onClick={() => set_selecting_side(side)}
          className="flex-1 flex flex-col items-center justify-center gap-3 sm:gap-4 bg-white border-2 border-dashed border-curated-border rounded-2xl p-6 sm:p-8 hover:border-curated-text-muted transition-colors min-h-[280px] sm:min-h-[350px] lg:min-h-[400px]"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-curated-bg-light rounded-full flex items-center justify-center">
            <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-curated-text-muted" />
          </div>
          <p className="text-[14px] sm:text-[16px] text-curated-text-muted">Elige un producto</p>
        </motion.button>
      );
    }

    return (
      <motion.div
        className="flex-1 bg-white rounded-2xl overflow-hidden border border-curated-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Imagen */}
        <div className="aspect-square bg-white flex items-center justify-center">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <span className="text-[28px] sm:text-[36px] font-medium text-curated-text text-center px-6">
              {product.name}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          <p className="text-[11px] sm:text-[12px] text-curated-text-muted uppercase tracking-widest">
            {product.brand}
          </p>
          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-medium text-curated-text leading-tight">
            {product.name}
          </h3>

          {product.story?.gestalt_principle && (
            <span className="inline-block px-2 sm:px-3 py-1 bg-curated-bg-light rounded-full text-[10px] sm:text-[11px] uppercase tracking-wide text-curated-text-muted">
              {product.story.gestalt_principle}
            </span>
          )}

          {product.story?.title && (
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-curated-text leading-snug">
              {product.story.title}
            </p>
          )}

          {product.story?.philosophy && (
            <p className="text-[13px] sm:text-[14px] text-curated-text-secondary leading-relaxed line-clamp-3 sm:line-clamp-4">
              {product.story.philosophy}
            </p>
          )}

          {/* Acciones */}
          <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4">
            <Link
              to={`/products/${product.id}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-curated-text text-white rounded-xl text-[13px] sm:text-[14px] font-medium hover:bg-opacity-90 transition-all"
            >
              Ver producto
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
            <button
              onClick={on_change}
              className="p-2.5 sm:p-3 border border-curated-border rounded-xl text-curated-text-muted hover:text-curated-text hover:border-curated-text transition-colors"
              aria-label="Cambiar producto"
            >
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-curated-bg-light">
        {/* Header */}
        <div className="border-b border-curated-border bg-curated-bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium text-curated-text">
              Comparador Visual
            </h1>
            <p className="text-[14px] sm:text-[15px] text-curated-text-muted mt-2">
              Elige dos productos y compáralos. Sin specs, solo diseño y filosofía.
            </p>
          </div>
        </div>

        {/* Comparador */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
            <ProductSlot
              product={product_left}
              side="left"
              on_change={() => set_selecting_side('left')}
            />

            {/* Separador VS */}
            <div className="flex items-center justify-center py-2 sm:py-4 lg:py-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-curated-border rounded-full flex items-center justify-center">
                <span className="text-[12px] sm:text-[14px] font-medium text-curated-text-muted">VS</span>
              </div>
            </div>

            <ProductSlot
              product={product_right}
              side="right"
              on_change={() => set_selecting_side('right')}
            />
          </div>

          {/* Mensaje cuando ambos están seleccionados */}
          {product_left && product_right && (
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[18px] sm:text-[20px] text-curated-text-secondary">
                ¿Cuál te habla más?
              </p>
            </motion.div>
          )}
        </div>

        {/* Selector Modal */}
        <ProductSelector
          is_open={selecting_side !== null}
          on_close={() => set_selecting_side(null)}
          on_select={handle_select}
          exclude_id={selecting_side === 'left' ? product_right?.id : product_left?.id}
        />
      </div>
    </PageTransition>
  );
};

export default ComparePage;
