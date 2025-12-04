import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { monthly_featured_products } from '../data/products';

// Producto del día fijo: tomtoc Mochila (id: 10, index: 9)
const get_daily_product = () => {
  return monthly_featured_products.find(p => p.id === 10);
};

const HeroSection = () => {
  const [email, set_email] = useState('');
  const [is_subscribed, set_is_subscribed] = useState(false);
  const [time_left, set_time_left] = useState({ hours: 0, minutes: 0 });

  const product = get_daily_product();

  // Contador hasta medianoche
  useEffect(() => {
    const calculate_time_left = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight - now;

      return {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      };
    };

    set_time_left(calculate_time_left());
    const timer = setInterval(() => {
      set_time_left(calculate_time_left());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handle_submit = (e) => {
    e.preventDefault();
    if (email) {
      set_is_subscribed(true);
      setTimeout(() => {
        set_is_subscribed(false);
        set_email('');
      }, 3000);
    }
  };

  return (
    <div className="bg-curated-bg-light">
      {/* Header principal */}
      <div className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 border-b border-curated-border">
        <motion.div
          className="max-w-[900px] mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[40px] sm:text-[56px] md:text-[72px] font-normal text-curated-text mb-4 sm:mb-5 leading-[1.1] tracking-[-0.02em] flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>Curated by</span>
            <img src="/GestaltNBG.png" alt="Gestalt" className="h-[50px] sm:h-[70px] md:h-[90px] inline-block" />
          </motion.h1>
          <motion.p
            className="text-[14px] sm:text-[16px] text-curated-text-muted leading-relaxed max-w-[500px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Selección mensual de productos atemporales que elevan tu vida cotidiana.
          </motion.p>
        </motion.div>
      </div>

      {/* Producto del día + Suscripción */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {/* Producto del día */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to={`/products/${product.id}`}
              className="group block bg-white rounded-2xl border border-curated-border p-5 sm:p-6 hover:shadow-lg hover:border-curated-text-muted transition-all h-full"
            >
              {/* Header con badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-curated-text text-white text-[10px] sm:text-[11px] font-medium uppercase tracking-wider rounded-full">
                    Hoy
                  </span>
                  <span className="text-[11px] sm:text-[12px] text-curated-text-muted">
                    {product.brand}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-curated-text-muted tabular-nums">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{String(time_left.hours).padStart(2, '0')}:{String(time_left.minutes).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex gap-4 sm:gap-5">
                {/* Imagen o placeholder */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl flex-shrink-0 overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[10px] text-curated-text-muted text-center px-2">{product.category}</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[16px] sm:text-[18px] font-medium text-curated-text leading-snug mb-1.5 group-hover:text-curated-text-secondary transition-colors">
                    {product.name}
                  </h3>
                  {product.story?.gestalt_principle && (
                    <span className="inline-block text-[10px] sm:text-[11px] text-curated-text-muted uppercase tracking-wide mb-2">
                      {product.story.gestalt_principle}
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] sm:text-[15px] font-semibold text-curated-text">
                      ${product.price.toLocaleString()}
                    </span>
                    <ArrowRight className="w-4 h-4 text-curated-text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Suscripción */}
          <motion.div
            className="bg-white rounded-2xl border border-curated-border p-5 sm:p-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-4">
              <h2 className="text-[18px] sm:text-[20px] font-medium text-curated-text mb-2">
                Newsletter
              </h2>
              <p className="text-[13px] sm:text-[14px] text-curated-text-muted leading-relaxed">
                Recibe cada mes nuestra selección de 12 productos excepcionales directamente en tu bandeja.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {is_subscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl text-[14px] text-center"
                >
                  ¡Gracias por suscribirte!
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handle_submit}
                  className="flex flex-col sm:flex-row gap-2.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => set_email(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-2.5 text-[14px] bg-curated-bg-light border border-curated-border rounded-xl focus:outline-none focus:ring-2 focus:ring-curated-text focus:border-curated-text transition-all"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="px-6 py-2.5 bg-curated-text text-white text-[14px] font-medium rounded-xl hover:bg-opacity-90 transition-all whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Suscribir
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
