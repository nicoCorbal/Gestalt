# Plan de Implementación - Nuevas Features

## 1. Un Solo Producto (Página /hoy o /daily)

### Concepto
Página minimalista que muestra UN único producto al día. Sin distracciones, sin scroll infinito. El producto ocupa toda la pantalla. Lo descubres o lo ignoras.

### Implementación
- Nueva ruta `/hoy` o `/daily`
- Lógica para seleccionar producto del día (basado en fecha)
- Layout fullscreen con el producto centrado
- Nombre, marca, precio - mínimo texto
- Un solo CTA: "Ver producto" o "Mañana hay otro"
- Contador sutil: "Vuelve en 14h 32m"
- Sin navegación visible (o muy sutil)

### Archivos
- `src/pages/DailyProductPage.jsx` (nuevo)
- `src/App.jsx` (añadir ruta)

---

## 2. Modo Lectura (Página /revista o /stories)

### Concepto
Los 12 productos del mes presentados como una revista digital. Scroll vertical largo. Cada producto es una "página" con storytelling completo. Sin grid, experiencia inmersiva.

### Implementación
- Nueva ruta `/revista` o `/stories`
- Scroll snap entre secciones (cada producto = 1 sección)
- Layout alternado (imagen izq/der)
- Tipografía grande, editorial
- Principio Gestalt destacado para cada producto
- Navegación lateral con puntos o números
- Indicador de progreso (1/12, 2/12...)

### Archivos
- `src/pages/MagazinePage.jsx` (nuevo)
- `src/App.jsx` (añadir ruta)

---

## 3. Comparador Visual (Página /comparar o componente modal)

### Concepto
Selecciona dos productos y compáralos visualmente. No specs técnicos, sino filosofía, historia, principio Gestalt. "¿Cuál te habla más?"

### Implementación
- Puede ser página nueva `/comparar` o modal desde cualquier producto
- Dos slots para arrastrar/seleccionar productos
- Vista split-screen 50/50
- Mostrar: imagen, nombre, filosofía, principio Gestalt
- Sin precio visible (decisión por diseño, no por dinero)
- Botón "Elegir este" en cada lado
- Opción de cambiar productos

### Archivos
- `src/pages/ComparePage.jsx` (nuevo)
- `src/components/ProductSelector.jsx` (nuevo - para elegir productos)
- `src/App.jsx` (añadir ruta)

---

## Orden de Implementación

1. **Un Solo Producto** (~30 min)
   - Impacto alto, complejidad baja
   - Página standalone, no afecta nada existente

2. **Modo Lectura** (~1 hora)
   - Reutiliza data existente (monthly_featured_products)
   - Scroll snap + diseño editorial

3. **Comparador Visual** (~1.5 horas)
   - Más interactivo
   - Requiere estado para selección de productos
   - Posible drag & drop

---

## Navegación

Añadir acceso a estas features desde:
- Navigation.jsx (nuevos links)
- HomePage (CTAs o sección destacada)
- Footer (links secundarios)
