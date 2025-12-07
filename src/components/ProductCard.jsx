import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link);

const ProductCard = ({ product }) => {
  return (
    <MotionLink
      to={`/products/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      whileHover={{ y: -2, boxShadow: '0 8px 24px -4px rgb(0 0 0 / 0.08)' }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      aria-label={`Ver ${product.name} - $${product.price}`}
    >
      <div className="relative aspect-square bg-white overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-curated-bg">
            <span className="text-curated-text-muted text-[14px] text-center px-4">{product.name}</span>
          </div>
        )}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="w-[18px] h-[18px] text-curated-text-secondary" />
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 text-[12px] sm:text-[13px] text-curated-text-muted mb-2">
          <span>{product.brand}</span>
          <span>·</span>
          <span>{product.category}</span>
        </div>
        <h3 className="text-[14px] sm:text-[15px] font-medium text-curated-text mb-2 leading-snug">
          {product.name}
        </h3>
        <p className="text-[16px] sm:text-[17px] font-semibold text-curated-text">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </MotionLink>
  );
};

export default ProductCard;
