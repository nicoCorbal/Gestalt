import { Mail, Instagram, Twitter } from 'lucide-react';

const InfoPage = () => {
  return (
    <div className="min-h-screen bg-curated-bg-light">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img src="/GestaltNBG.png" alt="Gestalt" className="h-24 sm:h-32 md:h-40" />
          </div>

          <p className="text-[18px] sm:text-[20px] md:text-[24px] text-curated-text-secondary leading-relaxed max-w-[700px] mx-auto font-normal px-4">
            El todo es más que la suma de sus partes.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-medium text-curated-text mb-6 sm:mb-8 leading-tight">
            Nuestra Filosofía
          </h2>
          <div className="space-y-5 sm:space-y-6 text-[16px] sm:text-[17px] md:text-[18px] text-curated-text-secondary leading-relaxed">
            <p>
              <em>Gestalt</em> es una palabra alemana que significa "forma", "figura" o "configuración". Pero su significado va mucho más allá de una simple traducción. Es un concepto que nació en la psicología del siglo XX para describir cómo percibimos el mundo: no como fragmentos aislados, sino como totalidades organizadas y coherentes.
            </p>
            <p>
              La teoría de la Gestalt nos enseña que nuestra mente busca constantemente patrones, relaciones y significados. Vemos constelaciones en las estrellas, rostros en las nubes, y melodías en secuencias de notas. No percibimos puntos aislados, sino formas completas. <strong>El todo es más que la suma de sus partes</strong> — esta es la ley fundamental de la percepción gestáltica.
            </p>
            <p>
              Aplicamos esta filosofía a la curaduría de productos. Cada objeto que presentamos no es solo un artículo funcional, sino parte de un estilo de vida coherente. Buscamos productos que, al relacionarse entre sí, crean algo mayor: una experiencia de vida más consciente, más estética, más significativa.
            </p>
            <p>
              En un mundo saturado de opciones y consumo impulsivo, Gestalt propone una pausa. Una mirada más atenta. Una selección más cuidadosa. Porque la calidad de los objetos que nos rodean influye directamente en la calidad de nuestra experiencia cotidiana.
            </p>
            <p>
              No perseguimos tendencias pasajeras. Buscamos diseño atemporal, prácticas sostenibles, y productos que respeten tanto a quienes los usan como al planeta que habitamos. Cada pieza de nuestra colección ha sido evaluada por su artesanía, funcionalidad e integridad estética.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center">
            <div className="text-[44px] sm:text-[56px] font-medium text-curated-text mb-2">100%</div>
            <p className="text-[13px] sm:text-[14px] text-curated-text-muted">Seleccionado a mano</p>
          </div>
          <div className="text-center">
            <div className="text-[44px] sm:text-[56px] font-medium text-curated-text mb-2">500+</div>
            <p className="text-[13px] sm:text-[14px] text-curated-text-muted">Productos revisados</p>
          </div>
          <div className="text-center">
            <div className="text-[44px] sm:text-[56px] font-medium text-curated-text mb-2">12</div>
            <p className="text-[13px] sm:text-[14px] text-curated-text-muted">Categorías</p>
          </div>
        </div>

        {/* Gestalt Principles */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-medium text-curated-text mb-4 sm:mb-6 leading-tight text-center">
            Principios de la Gestalt
          </h2>
          <p className="text-[15px] sm:text-[16px] text-curated-text-muted text-center mb-8 sm:mb-12 max-w-[700px] mx-auto leading-relaxed px-4">
            Los psicólogos gestálticos identificaron leyes fundamentales de la percepción. Estas mismas leyes guían nuestra curaduría.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-curated-border hover:shadow-md transition-shadow">
              <div className="text-[32px] sm:text-[40px] mb-3 sm:mb-4">⬢</div>
              <h3 className="text-[19px] sm:text-[22px] font-medium text-curated-text mb-2 sm:mb-3">Proximidad</h3>
              <p className="text-[14px] sm:text-[15px] text-curated-text-muted leading-relaxed">
                Los elementos cercanos entre sí se perciben como un grupo. Curamos colecciones coherentes donde cada producto se relaciona naturalmente con los demás.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-curated-border hover:shadow-md transition-shadow">
              <div className="text-[32px] sm:text-[40px] mb-3 sm:mb-4">◯</div>
              <h3 className="text-[19px] sm:text-[22px] font-medium text-curated-text mb-2 sm:mb-3">Similitud</h3>
              <p className="text-[14px] sm:text-[15px] text-curated-text-muted leading-relaxed">
                Elementos con características similares se agrupan perceptualmente. Buscamos productos que compartan valores de diseño, calidad y sostenibilidad.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-curated-border hover:shadow-md transition-shadow">
              <div className="text-[32px] sm:text-[40px] mb-3 sm:mb-4">━</div>
              <h3 className="text-[19px] sm:text-[22px] font-medium text-curated-text mb-2 sm:mb-3">Continuidad</h3>
              <p className="text-[14px] sm:text-[15px] text-curated-text-muted leading-relaxed">
                Preferimos líneas continuas y fluidas. Cada producto es atemporal, diseñado para durar y evolucionar con tu estilo de vida.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-curated-border hover:shadow-md transition-shadow">
              <div className="text-[32px] sm:text-[40px] mb-3 sm:mb-4">◐</div>
              <h3 className="text-[19px] sm:text-[22px] font-medium text-curated-text mb-2 sm:mb-3">Figura y Fondo</h3>
              <p className="text-[14px] sm:text-[15px] text-curated-text-muted leading-relaxed">
                Distinguimos lo esencial de lo superfluo. Seleccionamos productos que destacan por su propósito claro y diseño honesto.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-curated-border hover:shadow-md transition-shadow">
              <div className="text-[32px] sm:text-[40px] mb-3 sm:mb-4">☍</div>
              <h3 className="text-[19px] sm:text-[22px] font-medium text-curated-text mb-2 sm:mb-3">Cierre</h3>
              <p className="text-[14px] sm:text-[15px] text-curated-text-muted leading-relaxed">
                Nuestra mente completa formas incompletas. Buscamos productos que inviten a la interacción, que se completen con el uso y la experiencia personal.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-curated-border hover:shadow-md transition-shadow">
              <div className="text-[32px] sm:text-[40px] mb-3 sm:mb-4">◇</div>
              <h3 className="text-[19px] sm:text-[22px] font-medium text-curated-text mb-2 sm:mb-3">Prägnanz</h3>
              <p className="text-[14px] sm:text-[15px] text-curated-text-muted leading-relaxed">
                La ley de la simplicidad. Percibimos la forma más simple posible. Favorecemos el diseño esencial, sin ornamentos innecesarios.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-medium text-curated-text mb-4 sm:mb-6 leading-tight">
            Hablemos
          </h2>
          <p className="text-[15px] sm:text-[16px] text-curated-text-muted mb-8 sm:mb-12 leading-relaxed px-4">
            ¿Tienes una sugerencia de producto o quieres saber más sobre Gestalt? Nos encantaría escucharte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
            <a
              href="mailto:hello@gestalt.com"
              className="flex items-center gap-3 px-6 py-4 bg-curated-text text-white rounded-full hover:bg-opacity-90 transition-all shadow-lg font-medium text-[15px] w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Escríbenos</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 rounded-full border-2 border-curated-border hover:border-curated-text flex items-center justify-center transition-colors group"
            >
              <Instagram className="w-5 h-5 text-curated-text-muted group-hover:text-curated-text" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border-2 border-curated-border hover:border-curated-text flex items-center justify-center transition-colors group"
            >
              <Twitter className="w-5 h-5 text-curated-text-muted group-hover:text-curated-text" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
