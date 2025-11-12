import ProductCard from './ProductCard';
import { monthly_featured_products } from '../data/products';

const ProductGrid = ({ products }) => {
  return (
    <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-curated-bg-light">
      {/* Sección de Productos del Mes */}
      <div className="mb-16 sm:mb-20">
        <div className="mb-8 sm:mb-10 text-center">
          <div className="inline-block px-4 py-1 bg-curated-text text-white rounded-full text-[11px] font-medium tracking-wide mb-4">
            SELECCIÓN MENSUAL
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium text-curated-text mb-4 leading-tight px-4">
            12 objetos, 12 historias
          </h2>
          <p className="text-[15px] sm:text-[16px] text-curated-text-muted max-w-[700px] mx-auto leading-relaxed px-4">
            Cada mes elegimos 12 productos excepcionales. No por ser nuevos, sino por ser necesarios. Cada uno con una historia que contar y un principio Gestalt que encarnar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {monthly_featured_products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Resto de productos */}
      <div className="border-t border-curated-border pt-12 sm:pt-16">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-[24px] sm:text-[28px] font-medium text-curated-text">El resto de la colección</h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-curated-text-muted max-w-[600px]">
            {products.filter(p => !p.is_monthly_featured).length} productos más, seleccionados con el mismo cuidado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.filter(p => !p.is_monthly_featured).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
