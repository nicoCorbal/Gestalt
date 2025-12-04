import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, Cookie, UserCheck, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const sections = [
  {
    icon: Shield,
    title: "Información que recopilamos",
    content: "En Gestalt, recopilamos únicamente la información necesaria para mejorar tu experiencia:",
    list: [
      "Dirección de correo electrónico (si te suscribes a nuestra newsletter)",
      "Datos de navegación anónimos para mejorar el sitio",
      "Preferencias de productos guardadas localmente"
    ]
  },
  {
    icon: Mail,
    title: "Cómo usamos tu información",
    content: "Utilizamos tu información exclusivamente para enviarte nuestra selección mensual de productos y contenido relacionado con diseño. Nunca compartimos, vendemos o alquilamos tu información personal a terceros."
  },
  {
    icon: Cookie,
    title: "Cookies",
    content: "Utilizamos cookies esenciales para el funcionamiento del sitio. No utilizamos cookies de seguimiento publicitario ni compartimos datos con redes de publicidad."
  },
  {
    icon: UserCheck,
    title: "Tus derechos",
    content: "Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento contactándonos a través de hello@gestalt.com."
  },
  {
    icon: HelpCircle,
    title: "Contacto",
    content: "Si tienes preguntas sobre esta política, escríbenos a hello@gestalt.com",
    is_contact: true
  }
];

const PrivacyPage = () => {
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
                Política de Privacidad
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
              En Gestalt valoramos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal de manera transparente y responsable.
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
                            Si tienes preguntas sobre esta política, escríbenos a{' '}
                            <a href="mailto:hello@gestalt.com" className="text-curated-text font-medium hover:underline">
                              hello@gestalt.com
                            </a>
                          </>
                        ) : section.content}
                      </p>
                      {section.list && (
                        <ul className="mt-4 space-y-2">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-curated-text-secondary">
                              <span className="w-1.5 h-1.5 bg-curated-text rounded-full mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
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

export default PrivacyPage;
