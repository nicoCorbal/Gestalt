import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-curated-border">
      <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <img src="/GestaltNBG.png" alt="Gestalt" className="h-12" />
            </div>
            <p className="text-[14px] text-curated-text-muted leading-relaxed mb-6">
              Creemos que el todo es más que la suma de sus partes. Cada producto cuenta una historia de diseño consciente y calidad duradera.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                className="w-10 h-10 rounded-full border-2 border-curated-border hover:border-curated-text flex items-center justify-center transition-all duration-200 group hover:bg-curated-bg-light"
              >
                <Instagram className="w-5 h-5 text-curated-text-muted group-hover:text-curated-text transition-colors duration-200" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Twitter"
                className="w-10 h-10 rounded-full border-2 border-curated-border hover:border-curated-text flex items-center justify-center transition-all duration-200 group hover:bg-curated-bg-light"
              >
                <Twitter className="w-5 h-5 text-curated-text-muted group-hover:text-curated-text transition-colors duration-200" aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@gestalt.com"
                aria-label="Envíanos un email"
                className="w-10 h-10 rounded-full border-2 border-curated-border hover:border-curated-text flex items-center justify-center transition-all duration-200 group hover:bg-curated-bg-light"
              >
                <Mail className="w-5 h-5 text-curated-text-muted group-hover:text-curated-text transition-colors duration-200" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wide text-curated-text mb-6">Explorar</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Todos los productos" },
                { to: "/browse", label: "Colecciones" },
                { to: "/", label: "Del mes" },
                { to: "/info", label: "Filosofía" }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="group inline-block text-[14px] text-curated-text-muted hover:text-curated-text transition-colors">
                    <span>{link.label}</span>
                    <span className="block h-[1px] bg-curated-text scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wide text-curated-text mb-6">Nosotros</h4>
            <ul className="space-y-3">
              {[
                { to: "/info", label: "Sobre Gestalt" },
                { to: "/blog", label: "Blog" },
                { to: "/info", label: "Contacto" }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="group inline-block text-[14px] text-curated-text-muted hover:text-curated-text transition-colors">
                    <span>{link.label}</span>
                    <span className="block h-[1px] bg-curated-text scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wide text-curated-text mb-6">Mantente conectado</h4>
            <p className="text-[14px] text-curated-text-muted mb-4 leading-relaxed">
              Únete a nuestra comunidad. Reflexiones semanales sobre diseño, curaduría y vida intencional.
            </p>
            <form className="flex flex-col gap-3">
              <label htmlFor="footer-email" className="sr-only">Tu email</label>
              <input
                id="footer-email"
                type="email"
                placeholder="TU@EMAIL.COM"
                className="px-4 py-3 text-[13px] uppercase tracking-wide bg-curated-bg border-2 border-curated-border rounded-lg focus:outline-none focus:border-curated-text transition-colors placeholder:text-curated-text-muted"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-curated-text text-white text-[13px] font-medium rounded-lg hover:bg-curated-text/90 active:scale-[0.98] transition-all duration-200"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-curated-border mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-curated-text-muted">
            © 2025 Gestalt. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[13px] text-curated-text-muted hover:text-curated-text transition-colors">
              Privacidad
            </Link>
            <Link to="/terms" className="text-[13px] text-curated-text-muted hover:text-curated-text transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
