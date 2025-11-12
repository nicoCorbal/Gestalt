import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import StaffPickBadge from './StaffPickBadge';

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-square bg-white overflow-hidden">
        {product.is_monthly_featured && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-curated-text text-white rounded-full text-[11px] font-medium tracking-wide">
            DEL MES
          </div>
        )}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white">
            <span className="text-curated-text-muted text-[15px]">{product.name}</span>
          </div>
        )}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          <ExternalLink className="w-[18px] h-[18px] text-curated-text-secondary" />
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
    </Link>
  );
};

export default ProductCard;
