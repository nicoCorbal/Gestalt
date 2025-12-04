import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ShoppingBag, PenTool, Copyright, AlertCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const sections = [
  {
    icon: FileText,
    title: "Aceptación de términos",
    content: "Al acceder y utilizar Gestalt, aceptas estos términos de uso. Si no estás de acuerdo con alguna parte de estos términos, te pedimos que no utilices nuestro sitio."
  },
  {
    icon: ShoppingBag,
    title: "Naturaleza del servicio",
    content: "Gestalt es una plataforma de curaduría de productos. No vendemos productos directamente. Los enlaces a productos te llevarán a sitios de terceros donde podrás realizar compras.",
    secondary: "No somos responsables de las transacciones realizadas en sitios de terceros, incluyendo precios, disponibilidad, envíos o políticas de devolución."
  },
  {
    icon: PenTool,
    title: "Contenido editorial",
    content: "Las descripciones, reseñas y opiniones sobre productos son contenido editorial basado en nuestra investigación y experiencia. Los precios y especificaciones pueden variar y deben verificarse en el sitio del vendedor."
  },
  {
    icon: Copyright,
    title: "Propiedad intelectual",
    content: "Todo el contenido de Gestalt (textos, diseño, logotipos, selección de productos) está protegido por derechos de autor. No está permitida la reproducción sin autorización expresa."
  },
  {
    icon: AlertCircle,
    title: "Limitación de responsabilidad",
    content: "Gestalt no garantiza la exactitud de toda la información presentada. Recomendamos verificar detalles importantes directamente con los fabricantes o vendedores."
  },
  {
    icon: Mail,
    title: "Contacto",
    content: "Para consultas sobre estos términos, contacta a hello@gestalt.com",
    is_contact: true
  }
];

const TermsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-curated-bg-light">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">

          {/* Header */}
          <div className="mb-12 md:mb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-curated-text-muted hover:text-curated-text mb-8 transition-colors text-[14px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium text-curated-text mb-4 leading-tight">
                Términos de Uso
              </h1>
              <p className="text-[14px] sm:text-[15px] text-curated-text-muted">
                Última actualización: Diciembre 2025
              </p>
            </motion.div>
          </div>

          {/* Intro */}
          <motion.div
            className="bg-white rounded-2xl border border-curated-border p-6 sm:p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
              Estos términos establecen las condiciones de uso de Gestalt. Te recomendamos leerlos detenidamente antes de utilizar nuestra plataforma.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-4 sm:space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl border border-curated-border p-6 sm:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-curated-text" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[18px] sm:text-[20px] font-medium text-curated-text mb-3">
                        {section.title}
                      </h2>
                      <p className="text-[14px] sm:text-[15px] text-curated-text-secondary leading-relaxed">
                        {section.is_contact ? (
                          <>
                            Para consultas sobre estos términos, contacta a{' '}
                            <a href="mailto:hello@gestalt.com" className="text-curated-text font-medium hover:underline">
                              hello@gestalt.com
                            </a>
                          </>
                        ) : section.content}
                      </p>
                      {section.secondary && (
                        <p className="text-[14px] sm:text-[15px] text-curated-text-muted leading-relaxed mt-3">
                          {section.secondary}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default TermsPage;
