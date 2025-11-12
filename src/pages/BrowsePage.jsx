import { Link } from 'react-router-dom';
import { collections } from '../data/products';
import { ArrowRight } from 'lucide-react';

const BrowsePage = () => {
  return (
    <div className="min-h-screen bg-curated-bg-light">
      {/* Hero Section */}
      <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-normal text-curated-text mb-4 sm:mb-6 leading-tight">
            Colecciones para
            <br />
            <span className="font-medium">cada momento</span>
          </h1>

          <p className="text-[15px] sm:text-[17px] text-curated-text-muted leading-relaxed max-w-[600px] mx-auto px-4">
            Selecciones cuidadosamente ensambladas. Cada una diseñada para mejorar una parte específica de tu vida diaria con intención y cuidado.
          </p>
        </div>

      {/* Collections Grid */}
      <div>
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[28px] font-medium text-curated-text mb-3">Explora nuestras colecciones</h2>
          <p className="text-[14px] sm:text-[15px] text-curated-text-muted">
            {collections.length} colecciones curadas, cada una con su propia historia y propósito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9] bg-curated-bg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-curated-bg to-curated-bg-light">
                  <span className="text-[40px] sm:text-[48px] font-bold text-curated-text-muted opacity-20">{collection.product_count}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full border-2 border-curated-text shadow-lg">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide">{collection.product_count} productos</span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-curated-text mb-2 leading-tight transition-colors">
                  {collection.name}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-curated-text-muted leading-relaxed mb-4">
                  {collection.description || 'Una selección cuidadosamente curada de productos excepcionales.'}
                </p>
                <div className="flex items-center gap-2 text-curated-text font-medium text-[12px] sm:text-[13px] uppercase tracking-wide">
                  <span>Explorar</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 sm:mt-20">
        <div className="max-w-[700px] mx-auto text-center px-4">
          <h2 className="text-[32px] sm:text-[36px] md:text-[48px] font-normal text-curated-text mb-4 sm:mb-6 leading-tight">
            ¿Buscas algo específico?
          </h2>
          <p className="text-[15px] sm:text-[16px] text-curated-text-muted mb-6 sm:mb-8 leading-relaxed">
            Únete a nuestra newsletter semanal. Compartimos nuevos descubrimientos, insights de diseño y selecciones especiales que no encontrarás en ningún otro lugar.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-curated-text text-white text-[14px] sm:text-[15px] font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg"
          >
            Suscribirse ahora
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BrowsePage;
