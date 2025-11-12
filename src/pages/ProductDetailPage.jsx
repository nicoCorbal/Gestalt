import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { products, collections } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-curated-bg-light">
        <div className="text-center">
          <h2 className="text-[32px] font-medium text-curated-text mb-4">Producto no encontrado</h2>
          <Link to="/" className="text-curated-text-muted hover:text-curated-text transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const more_products = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-curated-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-curated-text-muted hover:text-curated-text mb-6 sm:mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </Link>

        <div className="bg-white rounded-2xl overflow-hidden border border-curated-border mb-8 sm:mb-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-curated-bg aspect-square relative">
              {product.is_monthly_featured && (
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 px-3 sm:px-4 py-1.5 sm:py-2 bg-curated-text text-white rounded-full text-[11px] sm:text-[12px] font-medium tracking-wide">
                  PRODUCTO DEL MES
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-curated-text-muted mb-3">
                  <span>{product.brand}</span>
                  <span>·</span>
                  <span>{product.category}</span>
                </div>
                <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-curated-text mb-6 leading-tight">
                  {product.name}
                </h1>
              </div>

              <div>
                <p className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-curated-text mb-6">
                  ${product.price.toLocaleString()}
                </p>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-curated-text text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all font-medium shadow-lg">
                  Ver producto
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Storytelling profundo para productos mensuales */}
        {product.is_monthly_featured && product.story && (
          <div className="mb-8 sm:mb-12 space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-curated-border shadow-sm">
              <div className="mb-4 sm:mb-6 inline-block px-4 py-1 bg-curated-bg-light rounded-full text-[11px] sm:text-[12px] font-medium text-curated-text-muted tracking-wide">
                {product.story.gestalt_principle}
              </div>
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-medium text-curated-text mb-4 sm:mb-6 leading-tight">
                {product.story.title}
              </h2>
              <div className="space-y-4 sm:space-y-5 text-[15px] sm:text-[16px] md:text-[17px] text-curated-text-secondary leading-relaxed">
                <p className="font-medium">{product.story.philosophy}</p>
                <p>{product.story.why_matters}</p>
                <p className="text-curated-text-muted italic">{product.story.craft_story}</p>
              </div>
            </div>
          </div>
        )}

        {/* Descripción normal para productos regulares */}
        {!product.is_monthly_featured && product.description && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-curated-border mb-8 sm:mb-12 shadow-sm">
            <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-4 sm:mb-6">Sobre este producto</h2>
            <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
              {product.description}
            </p>
          </div>
        )}

        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-[22px] sm:text-[28px] font-medium text-curated-text">Aparece en</h2>
            <Link to="/browse" className="text-curated-text-muted hover:text-curated-text transition-colors text-[13px] sm:text-[14px]">
              Ver todas
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {collections.slice(0, 2).map((collection) => (
              <div
                key={collection.id}
                className="bg-white rounded-2xl overflow-hidden border border-curated-border hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="aspect-video bg-curated-bg overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-medium text-curated-text mb-1 text-[15px] sm:text-[16px]">
                    {collection.name}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-curated-text-muted">
                    {collection.product_count} productos
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {more_products.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-[22px] sm:text-[28px] font-medium text-curated-text">
                Más en {product.category}
              </h2>
              <Link to="/browse" className="text-curated-text-muted hover:text-curated-text transition-colors text-[13px] sm:text-[14px]">
                Ver todo
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {more_products.map((related_product) => (
                <Link
                  key={related_product.id}
                  to={`/products/${related_product.id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-curated-border hover:shadow-lg transition-all group"
                >
                  <div className="aspect-square bg-curated-bg overflow-hidden relative">
                    <img
                      src={related_product.image}
                      alt={related_product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {related_product.is_monthly_featured && (
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-curated-text text-white px-3 py-1.5 rounded-full shadow-sm">
                        <span className="text-[11px] font-medium tracking-wide">DEL MES</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-curated-text-secondary" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-[12px] sm:text-[13px] text-curated-text-muted mb-2">
                      <span>{related_product.brand}</span>
                    </div>
                    <h3 className="font-medium text-curated-text mb-2 text-[14px] sm:text-[15px]">
                      {related_product.name}
                    </h3>
                    <p className="text-[16px] sm:text-[17px] font-semibold text-curated-text">
                      ${related_product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
