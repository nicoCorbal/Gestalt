import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-curated-bg-light flex items-center justify-center px-6">
        <div className="max-w-[600px] text-center">
          <div className="mb-6 sm:mb-8">
            <div className="text-[80px] sm:text-[120px] md:text-[180px] font-bold text-curated-text leading-none tracking-tighter">
              404
            </div>
            <div className="h-px bg-curated-border my-6 sm:my-8"></div>
          </div>

          <h1 className="text-[24px] sm:text-[32px] md:text-[48px] font-bold text-curated-text mb-4 sm:mb-6 leading-tight tracking-tight">
            Página no encontrada
          </h1>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-curated-text-muted mb-8 sm:mb-12 leading-relaxed">
            La página que buscas no existe o ha sido movida.
            <br />
            Volvamos al camino correcto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-curated-text text-white rounded-full hover:bg-opacity-90 transition-all shadow-lg font-medium text-[14px] sm:text-[15px] w-full sm:w-auto justify-center"
              aria-label="Ir al inicio"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Ir al inicio</span>
            </Link>
            <Link
              to="/browse"
              className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-white border-2 border-curated-border text-curated-text rounded-full hover:border-curated-text transition-colors font-bold uppercase tracking-wide text-[13px] sm:text-[14px] w-full sm:w-auto justify-center"
              aria-label="Explorar productos"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Explorar</span>
            </Link>
          </div>

          <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-4 max-w-[300px] sm:max-w-[400px] mx-auto opacity-20">
            <div className="aspect-square bg-curated-border rounded-2xl"></div>
            <div className="aspect-square bg-curated-border rounded-full"></div>
            <div className="aspect-square bg-curated-border rounded-2xl"></div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;
