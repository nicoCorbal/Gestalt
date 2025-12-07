import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Mail, ChevronDown } from 'lucide-react';
import { monthly_featured_products } from '../data/products';

// Producto del día fijo: tomtoc Mochila (id: 10, index: 9)
const get_daily_product = () => {
  return monthly_featured_products.find(p => p.id === 10);
};

const HeroSection = () => {
  const [email, set_email] = useState('');
  const [is_subscribed, set_is_subscribed] = useState(false);
  const [time_left, set_time_left] = useState({ hours: 0, minutes: 0 });
  const [newsletter_open, set_newsletter_open] = useState(false);
  const video_ref = useRef(null);

  const product = get_daily_product();

  // Video se reproduce al cargar y al pasar el ratón
  const handle_mouse_enter = () => {
    const video = video_ref.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

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
        set_newsletter_open(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-curated-bg-light">
      {/* Header principal */}
      <div className="py-8 md:py-20 px-4 sm:px-6 border-b border-curated-border">
        <motion.div
          className="max-w-[900px] mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[36px] md:text-[72px] font-normal text-curated-text mb-3 md:mb-5 leading-[1.1] tracking-[-0.02em] flex items-center justify-center gap-2 md:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="hidden md:inline">Curated by</span>
            <span onMouseEnter={handle_mouse_enter} onTouchStart={handle_mouse_enter} className="inline-block align-middle">
              <video
                ref={video_ref}
                src="/video2.mp4"
                autoPlay
                muted
                playsInline
                className="h-[130px] md:h-[150px]"
              />
            </span>
          </motion.h1>
          <motion.p
            className="text-[13px] md:text-[16px] text-curated-text-muted leading-relaxed max-w-[500px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Selección mensual de productos atemporales que elevan tu vida cotidiana.
          </motion.p>
        </motion.div>
      </div>

      {/* Producto del día + Suscripción */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">

          {/* Producto del día */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to={`/products/${product.id}`}
              className="group block bg-white rounded-2xl border border-curated-border p-4 md:p-6 hover:shadow-lg hover:border-curated-text-muted transition-all h-full"
            >
              {/* Header con badge */}
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 md:px-2.5 md:py-1 bg-curated-text text-white text-[9px] md:text-[11px] font-medium uppercase tracking-wider rounded-full">
                    Hoy
                  </span>
                  <span className="text-[10px] md:text-[12px] text-curated-text-muted">
                    {product.brand}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] md:text-[12px] text-curated-text-muted tabular-nums">
                  <Clock className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span>{String(time_left.hours).padStart(2, '0')}:{String(time_left.minutes).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex gap-3 md:gap-5">
                {/* Imagen */}
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl flex-shrink-0 overflow-hidden border border-curated-border">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="eager"
                      className="w-full h-full object-contain p-1.5 md:p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[9px] text-curated-text-muted text-center px-1">{product.category}</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h3 className="text-[14px] md:text-[18px] font-medium text-curated-text leading-snug mb-1 group-hover:text-curated-text-secondary transition-colors">
                    {product.name}
                  </h3>
                  {product.story?.gestalt_principle && (
                    <span className="hidden md:inline-block text-[11px] text-curated-text-muted uppercase tracking-wide mb-2">
                      {product.story.gestalt_principle}
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] md:text-[15px] font-semibold text-curated-text">
                      ${product.price.toLocaleString()}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-curated-text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Suscripción - Desktop */}
          <motion.div
            className="hidden md:flex bg-white rounded-2xl border border-curated-border p-6 flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-4">
              <h2 className="text-[20px] font-medium text-curated-text mb-2">
                Newsletter
              </h2>
              <p className="text-[14px] text-curated-text-muted leading-relaxed">
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
                  className="flex flex-row gap-2.5"
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

          {/* Suscripción - Mobile (Collapsible) */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => set_newsletter_open(!newsletter_open)}
              className="w-full flex items-center justify-between bg-white rounded-2xl border border-curated-border p-4 hover:border-curated-text-muted transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-curated-text" />
                </div>
                <div className="text-left">
                  <p className="text-[14px] font-medium text-curated-text">Newsletter</p>
                  <p className="text-[11px] text-curated-text-muted">12 productos cada mes</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: newsletter_open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-curated-text-muted" />
              </motion.div>
            </button>

            <AnimatePresence>
              {newsletter_open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white rounded-2xl border border-curated-border p-4 mt-2">
                    <AnimatePresence mode="wait">
                      {is_subscribed ? (
                        <motion.div
                          key="success-mobile"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl text-[13px] text-center"
                        >
                          ¡Gracias por suscribirte!
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form-mobile"
                          onSubmit={handle_submit}
                          className="space-y-2.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => set_email(e.target.value)}
                            placeholder="tu@email.com"
                            className="w-full px-4 py-3 text-[14px] bg-curated-bg-light border border-curated-border rounded-xl focus:outline-none focus:ring-2 focus:ring-curated-text focus:border-curated-text transition-all"
                            required
                          />
                          <motion.button
                            type="submit"
                            className="w-full px-6 py-3 bg-curated-text text-white text-[14px] font-medium rounded-xl hover:bg-opacity-90 transition-all"
                            whileTap={{ scale: 0.98 }}
                          >
                            Suscribir
                          </motion.button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
