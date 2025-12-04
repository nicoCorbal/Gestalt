import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { monthly_featured_products } from '../data/products';

// Selección basada en fecha (cicla los 12 productos del mes)
const get_daily_product = () => {
  const today = new Date();
  const day_of_year = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const index = day_of_year % monthly_featured_products.length;
  return monthly_featured_products[index];
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
    <div className="bg-curated-bg-light py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <motion.div
        className="max-w-[900px] mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[36px] sm:text-[48px] md:text-[64px] font-normal text-curated-text mb-4 sm:mb-6 leading-[1.1] tracking-[-0.02em] flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>Curated by</span>
          <img src="/GestaltNBG.png" alt="Gestalt" className="h-[48px] sm:h-[64px] md:h-[88px] inline-block" />
        </motion.h1>
        <motion.p
          className="text-[15px] sm:text-[17px] text-curated-text-muted mb-8 sm:mb-12 leading-relaxed px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Suscríbete para recibir nuestra selección mensual de productos atemporales que elevan tu vida cotidiana.
        </motion.p>

        <AnimatePresence mode="wait">
          {is_subscribed ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-green-50 border border-green-200 text-green-800 px-6 py-3 rounded-lg inline-block text-[15px]"
            >
              ¡Gracias por suscribirte!
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handle_submit}
              className="max-w-[440px] mx-auto flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => set_email(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 text-[15px] bg-white border border-curated-border rounded-lg focus:outline-none focus:ring-2 focus:ring-curated-text focus:border-curated-text transition-all"
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-curated-text text-white text-[15px] font-medium rounded-lg hover:bg-opacity-90 transition-all whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Suscribir
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Guiño al producto del día */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to={`/products/${product.id}`}
            className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-curated-text-muted hover:text-curated-text transition-colors group px-2"
          >
            <span className="text-[11px] sm:text-[13px] uppercase tracking-widest">Hoy</span>
            <span className="text-[13px] sm:text-[14px] font-medium text-curated-text group-hover:text-curated-text-secondary transition-colors">
              {product.name}
            </span>
            <span className="text-[11px] sm:text-[12px] text-curated-text-muted tabular-nums">
              {String(time_left.hours).padStart(2, '0')}h {String(time_left.minutes).padStart(2, '0')}m
            </span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden sm:block" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
