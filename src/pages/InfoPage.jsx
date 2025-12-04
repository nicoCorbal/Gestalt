import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const principles = [
  {
    name: "Proximidad",
    description: "Los elementos cercanos entre sí se perciben como un grupo. Curamos colecciones coherentes donde cada producto se relaciona naturalmente con los demás."
  },
  {
    name: "Similitud",
    description: "Elementos con características similares se agrupan perceptualmente. Buscamos productos que compartan valores de diseño, calidad y sostenibilidad."
  },
  {
    name: "Continuidad",
    description: "Preferimos líneas continuas y fluidas. Cada producto es atemporal, diseñado para durar y evolucionar con tu estilo de vida."
  },
  {
    name: "Figura y Fondo",
    description: "Distinguimos lo esencial de lo superfluo. Seleccionamos productos que destacan por su propósito claro y diseño honesto."
  },
  {
    name: "Cierre",
    description: "Nuestra mente completa formas incompletas. Buscamos productos que inviten a la interacción, que se completen con el uso y la experiencia personal."
  },
  {
    name: "Prägnanz",
    description: "La ley de la simplicidad. Percibimos la forma más simple posible. Favorecemos el diseño esencial, sin ornamentos innecesarios."
  }
];

const InfoPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-curated-bg-light">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">

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
              <img
                src="/GestaltNBG.png"
                alt="Gestalt"
                className="h-12 sm:h-14 mb-6"
              />
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium text-curated-text mb-4 leading-tight">
                El todo es más que la suma de sus partes.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-curated-text-muted max-w-[600px]">
                Una filosofía de curaduría basada en los principios de la percepción.
              </p>
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div
            className="bg-white rounded-2xl border border-curated-border p-6 sm:p-8 md:p-10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-[20px] sm:text-[22px] font-medium text-curated-text mb-5">
              Nuestra Filosofía
            </h2>
            <div className="space-y-5 text-[15px] sm:text-[16px] text-curated-text-secondary leading-relaxed">
              <p>
                <em>Gestalt</em> es una palabra alemana que describe cómo percibimos el mundo: no como fragmentos aislados, sino como totalidades organizadas y coherentes.
              </p>
              <p>
                La teoría de la Gestalt nos enseña que nuestra mente busca constantemente patrones, relaciones y significados. Vemos constelaciones en las estrellas, rostros en las nubes, y melodías en secuencias de notas.
              </p>
              <p>
                Aplicamos esta filosofía a la curaduría de productos. Cada objeto que presentamos no es solo un artículo funcional, sino parte de un estilo de vida coherente. En un mundo saturado de opciones, Gestalt propone una pausa. Una mirada más atenta. Una selección más cuidadosa.
              </p>
            </div>
          </motion.div>

          {/* Principles */}
          <motion.div
            className="bg-white rounded-2xl border border-curated-border p-6 sm:p-8 md:p-10 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-[20px] sm:text-[22px] font-medium text-curated-text mb-6">
              Principios de la Gestalt
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {principles.map((principle, index) => (
                <div key={index}>
                  <h3 className="text-[16px] sm:text-[17px] font-medium text-curated-text mb-2">{principle.name}</h3>
                  <p className="text-[14px] sm:text-[15px] text-curated-text-muted leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/browse"
              className="inline-flex items-center gap-2 px-6 py-3 bg-curated-text text-white rounded-full hover:bg-opacity-90 transition-all font-medium text-[14px] sm:text-[15px]"
            >
              Explorar colecciones
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default InfoPage;
