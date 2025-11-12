import { useState } from 'react';

const HeroSection = () => {
  const [email, set_email] = useState('');
  const [is_subscribed, set_is_subscribed] = useState(false);

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
      <div className="max-w-[900px] mx-auto text-center">
        <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-normal text-curated-text mb-4 sm:mb-6 leading-[1.1] tracking-[-0.02em] flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <span>Curated by</span>
          <img src="/GestaltNBG.png" alt="Gestalt" className="h-[48px] sm:h-[64px] md:h-[88px] inline-block" />
        </h1>
        <p className="text-[15px] sm:text-[17px] text-curated-text-muted mb-8 sm:mb-12 leading-relaxed px-4">
          Suscríbete para recibir nuestra selección mensual de productos atemporales que elevan tu vida cotidiana.
        </p>

        {is_subscribed ? (
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-3 rounded-lg inline-block text-[15px]">
            ¡Gracias por suscribirte!
          </div>
        ) : (
          <form onSubmit={handle_submit} className="max-w-[440px] mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => set_email(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 text-[15px] bg-white border border-curated-border rounded-lg focus:outline-none focus:ring-2 focus:ring-curated-text focus:border-curated-text transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-curated-text text-white text-[15px] font-medium rounded-lg hover:bg-opacity-90 transition-all whitespace-nowrap"
            >
              Suscribir
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
