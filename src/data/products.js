// Productos del Mes - 12 productos icónicos con storytelling
export const monthly_featured_products = [
  {
    id: 1,
    name: "AirPods Pro 2",
    brand: "Apple",
    category: "Tech",
    price: 249,
    is_monthly_featured: true,
    is_new: true,
    is_staff_pick: true,
    image: "/public/productos/airpods2.jpeg",
    story: {
      title: "El sonido que desaparece",
      philosophy: "Apple redefinió los auriculares inalámbricos. Los AirPods Pro 2 con chip H2 ofrecen cancelación de ruido adaptativa, audio espacial personalizado, y una integración perfecta con el ecosistema Apple. No son solo auriculares, son una extensión de tu dispositivo.",
      gestalt_principle: "Figura y Fondo",
      why_matters: "La cancelación de ruido activa te aísla del mundo cuando lo necesitas. El modo transparencia te reconecta instantáneamente. Es la dualidad perfecta para la vida moderna.",
      craft_story: "Diseñados en California. Chip H2 con machine learning en tiempo real. Driver personalizado de baja distorsión. Amplificador de alta impedancia. Estuche con carga MagSafe, USB-C y Apple Watch."
    },
    specs: {
      chip: "Apple H2",
      noise_cancellation: "Adaptativa 2x",
      battery: "6h (30h con estuche)"
    }
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Tech",
    price: 399,
    is_monthly_featured: true,
    is_new: false,
    is_staff_pick: true,
    image: "/public/productos/sonywh1000.avif",
    story: {
      title: "El estándar de la industria",
      philosophy: "Sony lleva décadas perfeccionando el audio. Los XM5 representan la culminación de esa obsesión: 8 micrófonos para la mejor cancelación de ruido del mercado, drivers de 30mm con diafragma de fibra de carbono, y un diseño que por fin es elegante.",
      gestalt_principle: "Continuidad",
      why_matters: "30 horas de batería. Carga rápida de 3 minutos = 3 horas. Multipoint para conectar dos dispositivos. Son los auriculares que usan ingenieros de sonido en sus vuelos.",
      craft_story: "Procesador V1 integrado. Audio LDAC de alta resolución. Speak-to-Chat que pausa la música cuando hablas. Plegado plano para viajar. Fabricados con plásticos reciclados."
    },
    specs: {
      drivers: "30mm fibra carbono",
      battery: "30 horas",
      weight: "250g"
    }
  },
  {
    id: 3,
    name: "Stanley Quencher H2.0",
    brand: "Stanley",
    category: "Lifestyle",
    price: 45,
    is_monthly_featured: true,
    is_new: true,
    is_staff_pick: false,
    image: "/public/productos/stanley.webp",
    story: {
      title: "El tumbler que rompió TikTok",
      philosophy: "Stanley existe desde 1913 haciendo termos para obreros. En 2023, el Quencher se volvió viral. No es hype vacío: 40oz de capacidad, doble pared al vacío, base que cabe en portavasos. Funcionalidad que se convirtió en fenómeno cultural.",
      gestalt_principle: "Simplicidad (Prägnanz)",
      why_matters: "Mantiene hielo por 11 horas. El asa ergonómica permite cargarlo todo el día. La tapa FlowState tiene tres posiciones. Es el accesorio de hidratación definitivo.",
      craft_story: "Acero inoxidable 18/8 reciclado. Libre de BPA. Apto para lavavajillas. Garantía de por vida. Colores de edición limitada que se agotan en minutos."
    },
    specs: {
      capacity: "40oz (1.18L)",
      retention: "11h frío / 7h caliente",
      material: "Acero 18/8"
    }
  },
  {
    id: 4,
    name: "Salomon XT-6 GTX",
    brand: "Salomon",
    category: "Streetwear",
    price: 230,
    is_monthly_featured: true,
    is_new: true,
    is_staff_pick: true,
    image: "/public/productos/salomon.webp",
    story: {
      title: "Del trail a la pasarela",
      philosophy: "Salomon lleva décadas equipando a ultramaratonistas. Las XT-6 nacieron para carreras de montaña extremas. Luego, el mundo de la moda las descubrió. Hoy son el calzado técnico que ves en París y Tokyo. Rendimiento real convertido en estética.",
      gestalt_principle: "Proximidad",
      why_matters: "Gore-Tex para impermeabilidad total. Chassis Advanced para estabilidad. Quicklace para ajuste instantáneo. Funcionan igual en senderos alpinos que en calles mojadas.",
      craft_story: "Diseñadas en los Alpes franceses. Suela Contagrip para cualquier terreno. Upper de malla reforzada. Las zapatillas que llevan corredores de UTMB y directores creativos por igual."
    },
    specs: {
      material: "Gore-Tex + malla técnica",
      sole: "Contagrip MA",
      features: "Quicklace, impermeables"
    }
  },
  {
    id: 5,
    name: "Kindle Paperwhite",
    brand: "Amazon",
    category: "Tech",
    price: 149,
    is_monthly_featured: true,
    is_new: false,
    is_staff_pick: false,
    image: "/public/productos/kindle.jpg",
    story: {
      title: "Leer sin distracciones",
      philosophy: "En un mundo de notificaciones infinitas, el Kindle es un oasis. Pantalla e-ink de 300ppi que se lee como papel. Sin apps, sin redes sociales. Solo tú y las palabras. Es tecnología que te desconecta para reconectarte con lo que importa.",
      gestalt_principle: "Figura y Fondo",
      why_matters: "Luz frontal ajustable para leer en cualquier condición. Resistente al agua para la playa o la bañera. Semanas de batería. Miles de libros en 205 gramos.",
      craft_story: "Pantalla Carta 1200 de E Ink. 8GB o 32GB de almacenamiento. USB-C. Audible integrado con Bluetooth. Hecho con 60% de plástico reciclado post-consumo."
    },
    specs: {
      screen: "6.8\" E-ink 300ppi",
      storage: "8GB / 32GB",
      battery: "10 semanas"
    }
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "Tech",
    price: 399,
    is_monthly_featured: true,
    is_new: true,
    is_staff_pick: true,
    image: "/public/productos/apple-watch-series-9.png",
    story: {
      title: "Tu salud en tu muñeca",
      philosophy: "El Apple Watch evolucionó de gadget a dispositivo médico. ECG, oxígeno en sangre, detección de caídas, crash detection. Chip S9 con doble toque. No es un reloj inteligente, es un guardián silencioso de tu bienestar.",
      gestalt_principle: "Continuidad",
      why_matters: "Registro de sueño. Recordatorios para moverte. Entrenamientos detallados. Llamadas de emergencia. Todo en un dispositivo que además te dice la hora y se ve elegante.",
      craft_story: "Aluminio o acero inoxidable. Titanio en Ultra. Cristal Ion-X o zafiro. Carga magnética. Carbono neutro en combinaciones seleccionadas. Correas intercambiables infinitas."
    },
    specs: {
      chip: "Apple S9",
      display: "OLED Always-On",
      features: "ECG, SpO2, Temperatura"
    }
  },
  {
    id: 7,
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    category: "Tech",
    price: 99,
    is_monthly_featured: true,
    is_new: false,
    is_staff_pick: false,
    image: "/public/productos/logitech.webp",
    story: {
      title: "El mouse de los profesionales",
      philosophy: "El MX Master es el mouse que usan diseñadores, desarrolladores y creadores. Scroll electromagnético MagSpeed. Sensor de 8000 DPI en cualquier superficie, incluso cristal. Ergonomía perfeccionada en 3 generaciones.",
      gestalt_principle: "Similitud",
      why_matters: "Flow permite controlar 3 computadoras con un solo mouse. Botones programables para cada app. 70 días de batería. Carga USB-C. Es la herramienta, no el obstáculo.",
      craft_story: "Rueda de acero con imanes. Clicks silenciosos 90% más quiet. Hecho con plástico reciclado. Compatible con Logi Options+ para personalización profunda. Garantía de 2 años."
    },
    specs: {
      sensor: "8000 DPI",
      battery: "70 días",
      connectivity: "Bluetooth + USB"
    }
  },
  {
    id: 8,
    name: "Arc'teryx Atom Hoody",
    brand: "Arc'teryx",
    category: "Streetwear",
    price: 300,
    is_monthly_featured: true,
    is_new: false,
    is_staff_pick: true,
    image: "/public/productos/arcteryx.jpg",
    story: {
      title: "Ingeniería de montaña para la ciudad",
      philosophy: "Arc'teryx nació en la costa de British Columbia, donde los alpinistas exigen lo mejor. La Atom Hoody es aislamiento sintético Coreloft en un diseño minimalista. Ligera, packable, y más versátil que cualquier otra chaqueta que tengas.",
      gestalt_principle: "Cierre",
      why_matters: "60g de Coreloft que sigue abrigando mojado. Paneles laterales Fortius Air para transpirabilidad. Capucha que cabe bajo el casco. Es la capa intermedia definitiva.",
      craft_story: "Diseñada en Canadá. Costuras selladas. Cremalleras YKK impermeables. La marca que visten alpinistas profesionales y arquitectos por igual. Garantía de por vida."
    },
    specs: {
      insulation: "Coreloft 60g",
      weight: "340g",
      features: "Packable, transpirable"
    }
  },
  {
    id: 9,
    name: "Herman Miller Aeron",
    brand: "Herman Miller",
    category: "Lifestyle",
    price: 1395,
    is_monthly_featured: true,
    is_new: false,
    is_staff_pick: true,
    image: "/public/productos/hermanmiller.webp",
    story: {
      title: "El trono del trabajo moderno",
      philosophy: "La Aeron no es una silla, es un statement de que tu cuerpo importa. Diseñada por Bill Stumpf y Don Chadwick en 1994, revolucionó la ergonomía. Sin espuma que se degrada, solo Pellicle mesh que respira y se adapta. Está en el MoMA por algo.",
      gestalt_principle: "Figura y Fondo",
      why_matters: "PostureFit SL para soporte lumbar ajustable. 8Z Pellicle con 8 zonas de tensión. Brazos 4D. Reclinación sincronizada. Es la silla que usan en Pixar, Google y estudios de arquitectura de todo el mundo.",
      craft_story: "Diseño estadounidense. 12 años de garantía. 90% reciclable al final de su vida. Tres tallas (A, B, C) para diferentes cuerpos. La inversión que protege tu espalda durante décadas."
    },
    specs: {
      warranty: "12 años",
      adjustments: "Lumbar, brazos 4D, altura, reclinación",
      material: "Pellicle mesh 8Z"
    }
  },
  {
    id: 10,
    name: "tomtoc Mochila Compacta 24L",
    brand: "tomtoc",
    category: "Carry",
    price: 60,
    is_monthly_featured: true,
    is_new: true,
    is_staff_pick: false,
    image: "/public/productos/tomtoc.jpg",
    story: {
      title: "La mochila profesional sin pretensiones",
      philosophy: "tomtoc nació de ex-ingenieros de Apple obsesionados con la protección. Esta mochila de 24L es el equilibrio perfecto entre capacidad y portabilidad. Compartimento acolchado para portátil de 15.6\", organización inteligente, y diseño que funciona igual en la oficina que en el metro.",
      gestalt_principle: "Simplicidad (Prägnanz)",
      why_matters: "Pasacables para auriculares. Bolsillo de acceso rápido. Compartimentos separados para trabajo y vida. Panel trasero transpirable. Es la mochila que no grita pero cumple.",
      craft_story: "Nylon resistente al agua. Cremalleras YKK. Forro suave que protege tu laptop. Diseño que conquistó Amazon y r/onebag. La alternativa inteligente a mochilas de $200."
    },
    specs: {
      capacity: "24L",
      laptop: "Hasta 15.6\"",
      features: "Pasacables, resistente al agua"
    }
  },
  {
    id: 11,
    name: "Le Creuset Dutch Oven",
    brand: "Le Creuset",
    category: "Lifestyle",
    price: 395,
    is_monthly_featured: true,
    is_new: false,
    is_staff_pick: true,
    image: "/public/productos/olla.jpg",
    story: {
      title: "La herencia de hierro esmaltado",
      philosophy: "Le Creuset fabrica en Francia desde 1925. Su Dutch Oven de hierro fundido es el recipiente que pasa de generación en generación. Distribución de calor perfecta. Esmalte que dura décadas. Colores icónicos que definen cocinas.",
      gestalt_principle: "Continuidad",
      why_matters: "Funciona en estufa, horno, parrilla, inducción. Hace guisos, pan, sopas, todo. El peso es una feature, no un bug: retención de calor incomparable.",
      craft_story: "Hierro fundido en arena. Esmaltado a mano. Cada pieza pasa por 30 manos. Garantía de por vida. El Flame Orange original de 1925 sigue en producción."
    },
    specs: {
      capacity: "5.5 qt",
      material: "Hierro fundido esmaltado",
      origin: "Francia"
    }
  },
  {
    id: 12,
    name: "Muji Gel Ink Pen 0.38",
    brand: "Muji",
    category: "Lifestyle",
    price: 2,
    is_monthly_featured: true,
    is_new: false,
    is_staff_pick: true,
    image: "/public/productos/pen.jpg",
    story: {
      title: "La perfección en lo mínimo",
      philosophy: "Muji significa 'sin marca'. Este bolígrafo de gel de $2 es mejor que plumas de $50. Tinta que fluye sin esfuerzo, punta de 0.38mm para escritura precisa, cuerpo transparente sin distracciones. El diseño japonés reducido a su esencia.",
      gestalt_principle: "Simplicidad (Prägnanz)",
      why_matters: "Es el bolígrafo de arquitectos, escritores, y personas que toman notas. No hay logo, no hay pretensión. Solo funcionalidad pura. Compras 10 y duran años.",
      craft_story: "Tinta de gel de baja viscosidad. Cuerpo de polipropileno reciclable. Hecho en Japón. El producto más vendido de Muji a nivel mundial. El secreto mejor guardado de la papelería."
    },
    specs: {
      tip: "0.38mm",
      ink: "Gel",
      colors: "Negro, azul, rojo"
    }
  }
];

// Productos Regulares
export const regular_products = [
  {
    id: 13,
    name: "Airtag",
    brand: "Apple",
    category: "Tech",
    price: 29,
    is_monthly_featured: false,
    is_new: true,
    is_staff_pick: false,
    image: "/public/productos/airtag.png",
    description: "Localizador de precisión con Ultra Wideband. Red Find My de mil millones de dispositivos. Batería de un año reemplazable. Para nunca perder lo importante.",
    specs: {
      battery: "1 año (CR2032)",
      precision: "Ultra Wideband",
      water_resistance: "IP67"
    }
  },
  {
    id: 14,
    name: "Acne Studios Stockholm 1996",
    brand: "Acne Studios",
    category: "Streetwear",
    price: 340,
    is_monthly_featured: false,
    is_new: false,
    is_staff_pick: true,
    image: "/public/productos/acne.png",
    description: "El minimalismo escandinavo en forma de hoodie. Algodón orgánico, corte oversized, y el icónico parche Face. Acne Studios define el lujo silencioso desde Estocolmo.",
    specs: {
      material: "Algodón orgánico 100%",
      fit: "Oversized",
      origin: "Portugal"
    }
  },
  {
    id: 15,
    name: "Anker PowerCore 10000",
    brand: "Anker",
    category: "Tech",
    price: 26,
    is_monthly_featured: false,
    is_new: false,
    is_staff_pick: false,
    image: "/public/productos/anker.jpg",
    description: "El powerbank más vendido por algo. 10000mAh en tamaño compacto. PowerIQ para carga optimizada. Más de 50 millones de unidades vendidas.",
    specs: {
      capacity: "10000mAh",
      output: "12W",
      weight: "180g"
    }
  },
  {
    id: 16,
    name: "A.P.C. Petit New Standard",
    brand: "A.P.C.",
    category: "Streetwear",
    price: 245,
    is_monthly_featured: false,
    is_new: false,
    is_staff_pick: true,
    image: "/public/productos/apc.png",
    description: "El jean parisino por excelencia. Denim japonés raw que se moldea a tu cuerpo con el uso. Sin lavado, sin distressing artificial. La paciencia recompensada con fades únicos.",
    specs: {
      denim: "Japonés 14oz raw",
      fit: "Slim tapered",
      selvedge: "Sí"
    }
  },
  {
    id: 17,
    name: "JBL Flip 6",
    brand: "JBL",
    category: "Tech",
    price: 129,
    is_monthly_featured: false,
    is_new: true,
    is_staff_pick: false,
    image: "/public/productos/jbl.webp",
    description: "Speaker Bluetooth portátil con IP67. 12 horas de batería. PartyBoost para conectar múltiples speakers. Bass potente en formato compacto.",
    specs: {
      battery: "12 horas",
      waterproof: "IP67",
      connectivity: "Bluetooth 5.1"
    }
  },
  {
    id: 18,
    name: "Ray-Ban Wayfarer",
    brand: "Ray-Ban",
    category: "Streetwear",
    price: 171,
    is_monthly_featured: false,
    is_new: false,
    is_staff_pick: false,
    image: "/public/productos/rayban.jpg",
    description: "Las gafas que usó medio Hollywood. Diseño de 1956 que nunca pasó de moda. Acetato italiano. Lentes de cristal. El ícono atemporal.",
    specs: {
      material: "Acetato italiano",
      lenses: "Cristal G-15",
      model: "Original Wayfarer"
    }
  },
  {
    id: 19,
    name: "Moleskine Classic Notebook",
    brand: "Moleskine",
    category: "Lifestyle",
    price: 24,
    is_monthly_featured: false,
    is_new: false,
    is_staff_pick: true,
    image: "/public/productos/notebook.webp",
    description: "El cuaderno de Hemingway, Picasso y Chatwin. Pasta dura, elástico, bolsillo interior, papel marfil 70g. El compañero de ideas desde hace dos siglos.",
    specs: {
      pages: "240",
      paper: "70g/m² sin ácido",
      binding: "Cosido"
    }
  },
  {
    id: 20,
    name: "Bolso Guess",
    brand: "Guess",
    category: "Streetwear",
    price: 95,
    is_monthly_featured: false,
    is_new: true,
    is_staff_pick: false,
    image: "/public/productos/guess.webp",
    description: "El accesorio que eleva cualquier outfit. Diseño reconocible, materiales premium, y ese toque de lujo accesible que define a Guess desde los 80s.",
    specs: {
      material: "Piel sintética premium",
      style: "Crossbody",
      origin: "Diseño USA"
    }
  }
];

// Combinar todos los productos
export const products = [...monthly_featured_products, ...regular_products];

// Colecciones curadas
export const collections = [
  {
    id: 1,
    name: "Tech Essentials",
    product_count: 4,
    description: "Los gadgets que realmente valen la pena.",
    product_ids: [1, 2, 6, 7]
  },
  {
    id: 2,
    name: "Everyday Carry",
    product_count: 5,
    description: "Lo que llevas contigo, define quién eres.",
    product_ids: [3, 10, 12, 15, 20]
  },
  {
    id: 3,
    name: "Wardrobe Basics",
    product_count: 4,
    description: "Piezas atemporales que nunca fallan.",
    product_ids: [4, 8, 14, 16]
  },
  {
    id: 4,
    name: "Home Office",
    product_count: 4,
    description: "Tu espacio de trabajo, optimizado.",
    product_ids: [7, 9, 5, 19]
  },
  {
    id: 5,
    name: "Audio Premium",
    product_count: 3,
    description: "Sonido que marca la diferencia.",
    product_ids: [1, 2, 17]
  },
  {
    id: 6,
    name: "Kitchen Icons",
    product_count: 3,
    description: "Herramientas que elevan tu cocina.",
    product_ids: [3, 11, 12]
  }
];

// Función helper para obtener conteo de categorías
export const get_category_counts = () => {
  const counts = {};
  products.forEach(product => {
    counts[product.category] = (counts[product.category] || 0) + 1;
  });
  return counts;
};

export const categories = [
  { name: "All" },
  { name: "Featured" },
  { name: "Tech" },
  { name: "Streetwear" },
  { name: "Carry" },
  { name: "Lifestyle" }
];

// Helper para obtener producto por colección
export const get_collection_by_id = (id) => {
  return collections.find(c => c.id === parseInt(id));
};

export const get_products_by_collection = (collection_id) => {
  const collection = get_collection_by_id(collection_id);
  if (!collection) return [];
  return collection.product_ids.map(id => products.find(p => p.id === id)).filter(Boolean);
};
