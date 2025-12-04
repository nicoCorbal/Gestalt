import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const ProductGrid = ({ products, active_category = 'All' }) => {
  const is_featured_view = active_category === 'Featured';

  return (
    <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-curated-bg-light">
      {/* Header solo para vista Featured */}
      {is_featured_view && (
        <motion.div
          className="mb-10 sm:mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium text-curated-text mb-4 leading-tight">
            12 objetos, 12 historias
          </h2>
          <p className="text-[15px] sm:text-[16px] text-curated-text-muted max-w-[700px] mx-auto leading-relaxed">
            Cada mes elegimos 12 productos excepcionales. No por ser nuevos, sino por ser necesarios. Cada uno con una historia que contar y un principio Gestalt que encarnar.
          </p>
        </motion.div>
      )}

      {/* Grid de productos */}
      <motion.div
        key={active_category}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProductGrid;
