import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import { get_collection_by_id, get_products_by_collection, collections } from '../data/products';

const CollectionDetailPage = () => {
  const { id } = useParams();
  const collection = get_collection_by_id(id);
  const products = get_products_by_collection(id);

  if (!collection) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-curated-bg-light">
          <div className="text-center">
            <h2 className="text-[32px] font-medium text-curated-text mb-4">Colección no encontrada</h2>
            <Link to="/browse" className="text-curated-text-muted hover:text-curated-text transition-colors">
              Ver todas las colecciones
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  // Get other collections for "More collections" section
  const other_collections = collections.filter(c => c.id !== collection.id).slice(0, 3);

  return (
    <PageTransition>
      <div className="min-h-screen bg-curated-bg-light">
        <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Back button */}
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 text-curated-text-muted hover:text-curated-text mb-8 transition-colors"
            aria-label="Volver a colecciones"
          >
            <ArrowLeft className="w-5 h-5" />
            Colecciones
          </Link>

          {/* Collection header */}
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-block px-4 py-1 bg-curated-text text-white rounded-full text-[11px] font-medium tracking-wide mb-4">
              COLECCIÓN
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-medium text-curated-text mb-4 leading-tight">
              {collection.name}
            </h1>
            <p className="text-[16px] sm:text-[18px] text-curated-text-muted max-w-[600px]">
              {collection.description}
            </p>
            <p className="text-[14px] text-curated-text-muted mt-4">
              {products.length} productos en esta colección
            </p>
          </motion.div>

          {/* Products grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          {/* Other collections */}
          {other_collections.length > 0 && (
            <div className="border-t border-curated-border pt-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[24px] sm:text-[28px] font-medium text-curated-text">
                  Otras colecciones
                </h2>
                <Link
                  to="/browse"
                  className="text-curated-text-muted hover:text-curated-text transition-colors text-[14px]"
                >
                  Ver todas
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {other_collections.map((col) => (
                  <Link
                    key={col.id}
                    to={`/collections/${col.id}`}
                    className="group bg-white rounded-2xl p-6 border border-curated-border hover:shadow-lg transition-all"
                  >
                    <h3 className="text-[18px] font-medium text-curated-text mb-2 group-hover:text-curated-text-secondary transition-colors">
                      {col.name}
                    </h3>
                    <p className="text-[14px] text-curated-text-muted mb-4">
                      {col.description}
                    </p>
                    <span className="text-[13px] text-curated-text-muted">
                      {col.product_count} productos
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default CollectionDetailPage;
