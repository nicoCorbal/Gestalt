import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const TermsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-curated-bg-light">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-curated-text-muted hover:text-curated-text mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </Link>

          <h1 className="text-[36px] sm:text-[48px] font-medium text-curated-text mb-8 leading-tight">
            Términos de Uso
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-[16px] text-curated-text-muted mb-6 leading-relaxed">
              Última actualización: Diciembre 2024
            </p>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">1. Aceptación de términos</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                Al acceder y utilizar Gestalt, aceptas estos términos de uso. Si no estás de acuerdo
                con alguna parte de estos términos, te pedimos que no utilices nuestro sitio.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">2. Naturaleza del servicio</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed mb-4">
                Gestalt es una plataforma de curaduría de productos. No vendemos productos directamente.
                Los enlaces a productos te llevarán a sitios de terceros donde podrás realizar compras.
              </p>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                No somos responsables de las transacciones realizadas en sitios de terceros, incluyendo
                precios, disponibilidad, envíos o políticas de devolución.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">3. Contenido editorial</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                Las descripciones, reseñas y opiniones sobre productos son contenido editorial
                basado en nuestra investigación y experiencia. Los precios y especificaciones
                pueden variar y deben verificarse en el sitio del vendedor.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">4. Propiedad intelectual</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                Todo el contenido de Gestalt (textos, diseño, logotipos, selección de productos)
                está protegido por derechos de autor. No está permitida la reproducción sin
                autorización expresa.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">5. Limitación de responsabilidad</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                Gestalt no garantiza la exactitud de toda la información presentada. Recomendamos
                verificar detalles importantes directamente con los fabricantes o vendedores.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">6. Contacto</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                Para consultas sobre estos términos, contacta a{' '}
                <a href="mailto:hello@gestalt.com" className="text-curated-text hover:underline">
                  hello@gestalt.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsPage;
