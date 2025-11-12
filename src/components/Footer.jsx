import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail } from 'lucide-react';

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
                href="#"
                className="w-10 h-10 rounded-full border-2 border-curated-border hover:border-curated-text flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-curated-text-muted group-hover:text-curated-text" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-curated-border hover:border-curated-text flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-curated-text-muted group-hover:text-curated-text" />
              </a>
              <a
                href="mailto:hello@gestalt.com"
                className="w-10 h-10 rounded-full border-2 border-curated-border hover:border-curated-text flex items-center justify-center transition-colors group"
              >
                <Mail className="w-5 h-5 text-curated-text-muted group-hover:text-curated-text" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wide text-curated-text mb-6">Explorar</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[14px] text-curated-text-muted hover:text-curated-text transition-colors">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-[14px] text-curated-text-muted hover:text-curated-text transition-colors">
                  Colecciones
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] text-curated-text-muted hover:text-curated-text transition-colors">
                  Del mes
                </Link>
              </li>
              <li>
                <Link to="/info" className="text-[14px] text-curated-text-muted hover:text-curated-text transition-colors">
                  Filosofía
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wide text-curated-text mb-6">Nosotros</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/info" className="text-[14px] text-curated-text-muted hover:text-curated-text transition-colors">
                  Sobre Gestalt
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[14px] text-curated-text-muted hover:text-curated-text transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/info" className="text-[14px] text-curated-text-muted hover:text-curated-text transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wide text-curated-text mb-6">Mantente conectado</h3>
            <p className="text-[14px] text-curated-text-muted mb-4 leading-relaxed">
              Únete a nuestra comunidad. Reflexiones semanales sobre diseño, curaduría y vida intencional.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="TU@EMAIL.COM"
                className="px-4 py-3 text-[13px] uppercase tracking-wide bg-curated-bg border-2 border-curated-border rounded-lg focus:outline-none focus:border-curated-text transition-colors placeholder:text-curated-text-muted"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-curated-text text-white text-[13px] font-medium rounded-lg hover:bg-opacity-90 transition-all"
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
