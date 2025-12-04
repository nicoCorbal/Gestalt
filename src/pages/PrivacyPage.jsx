import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const PrivacyPage = () => {
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
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-[16px] text-curated-text-muted mb-6 leading-relaxed">
              Última actualización: Diciembre 2024
            </p>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">1. Información que recopilamos</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed mb-4">
                En Gestalt, recopilamos únicamente la información necesaria para mejorar tu experiencia:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed space-y-2">
                <li>Dirección de correo electrónico (si te suscribes a nuestra newsletter)</li>
                <li>Datos de navegación anónimos para mejorar el sitio</li>
                <li>Preferencias de productos guardadas localmente</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">2. Cómo usamos tu información</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                Utilizamos tu información exclusivamente para enviarte nuestra selección mensual de productos
                y contenido relacionado con diseño. Nunca compartimos, vendemos o alquilamos tu información
                personal a terceros.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">3. Cookies</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                Utilizamos cookies esenciales para el funcionamiento del sitio. No utilizamos cookies
                de seguimiento publicitario ni compartimos datos con redes de publicidad.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">4. Tus derechos</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento
                contactándonos a través de hello@gestalt.com.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] sm:text-[24px] font-medium text-curated-text mb-3 sm:mb-4">5. Contacto</h2>
              <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
                Si tienes preguntas sobre esta política, escríbenos a{' '}
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

export default PrivacyPage;
