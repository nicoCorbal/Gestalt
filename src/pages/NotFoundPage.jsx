import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-curated-bg-light flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-[500px] w-full text-center">

          {/* Formas descompuestas */}
          <div className="relative h-[140px] sm:h-[180px] mb-10 flex items-center justify-center">
            <motion.div
              className="absolute w-14 h-14 sm:w-16 sm:h-16 bg-curated-text rounded-2xl"
              initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
              animate={{ x: -50, y: -20, rotate: -12, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.div
              className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-curated-text/50 rounded-full"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x: 45, y: -30, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.div
              className="absolute w-10 h-10 sm:w-12 sm:h-12 border-2 border-curated-text/40 rounded-xl"
              initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
              animate={{ x: -30, y: 35, rotate: 15, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.div
              className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-curated-text/25 rounded-full"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x: 55, y: 25, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-[12px] sm:text-[13px] text-curated-text-muted uppercase tracking-wider mb-4">
              Error 404
            </p>

            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-curated-text mb-3 leading-tight tracking-[-0.01em]">
              El todo se ha perdido.
            </h1>

            <p className="text-[15px] sm:text-[16px] text-curated-text-muted mb-8">
              Aquí solo quedan las partes.
            </p>

            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-curated-text text-white rounded-full shadow-md hover:shadow-lg hover:bg-curated-text/90 active:scale-[0.98] transition-all duration-200 font-medium text-[14px]"
            >
              Volver al orden
            </Link>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;
