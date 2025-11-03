# Prompt para V0 - Rediseño Lo Nuestro

## Descripción del Proyecto
Crear un sitio web moderno y profesional para **Lo Nuestro** (medios locales: radio FM 93.5, Canal 5 Lo Nuestro, diario digital) con diseño responsive y contenido dinámico. El enfoque debe estar en los canales de comunicación, eliminando cualquier contenido relacionado con promociones de libros.

## Estructura de la Página

### Header/Navbar
- Logo "Lo Nuestro" a la izquierda
- Menú de navegación: Inicio, Radio, Canal, Noticias, Contacto
- Diseño moderno con hover effects

### Hero Section
- Título principal destacado
- Subtítulo descriptivo
- Botones CTA (Call to Action)

### Sección 1: Ruleta Manual de 3 Secciones (CANALES PRINCIPALES)
**Tipo:** Carrusel/Carousel navegable manualmente
**Contenido:**
1. **Santísimo** - Sección de contenido religioso/espiritual
2. **Radio FM 93.5** - Información detallada sobre la emisora de radio
3. **Canal 5 Lo Nuestro** - Información sobre el canal de televisión

**IMPORTANTE:** Esta sección debe destacar los canales de comunicación, con información clara sobre cada uno (programación, horarios, cómo sintonizar, etc.)

**Requisitos:**
- Navegación manual con botones/flechas laterales
- Indicadores de posición (dots)
- Transiciones suaves
- Cards elegantes con imágenes de fondo o iconos
- Responsive (móvil y desktop)

### Sección 2: Información del Dueño
**Contenido:**
- Foto del dueño (avatar/imagen circular)
- Nombre
- Descripción/Texto biográfico
- Puede incluir redes sociales o contacto
- Diseño elegante tipo "About" section

### Sección 3: Ruleta Manual con Lives
**Tipo:** Carrusel manual para transmisiones en vivo
**Contenido:**
- Múltiples cards para diferentes "lives"
- Cada card debe mostrar:
  - Título del live
  - Imagen/thumbnail
  - Fecha/hora (opcional)
  - Botón "Ver ahora" o similar
- Navegación manual con flechas

### Sección 4: Ruleta Automática con Patrocinadores
**Tipo:** Carrusel automático (auto-play)
**Contenido:**
- Logos de patrocinadores
- Debe rotar automáticamente
- Pausar al hacer hover
- Transiciones suaves
- Indicadores opcionales

### Footer
- Información de contacto
- Redes sociales
- Copyright
- Links adicionales

## Diseño y Estilo

### Paleta de Colores
- Colores profesionales (azules, blancos, grises)
- Acentos para destacar elementos importantes
- Buen contraste para legibilidad

### Tipografía
- Fuente moderna y legible
- Jerarquía clara (h1, h2, h3)

### Estilo General
- Diseño limpio y minimalista
- Espaciado generoso
- Sombras sutiles para profundidad
- Animaciones suaves en hover
- Diseño responsive (mobile-first)

## Tecnologías Requeridas
- Next.js 15+ (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Componentes reutilizables y modulares
- Usar shadcn/ui o componentes similares si están disponibles

## Notas Importantes
- **NO incluir ninguna sección relacionada con libros o promociones de libros**
- Enfoque principal en los canales de comunicación (Radio FM 93.5 y Canal 5 Lo Nuestro)
- Todos los contenidos deben estar "hardcodeados" inicialmente (textos de ejemplo, imágenes placeholder)
- El diseño debe estar preparado para integrar contenido dinámico después
- Las ruletas/carruseles deben funcionar correctamente en móvil y desktop
- El código debe ser limpio y bien estructurado

## Ejemplo de Contenido Placeholder

### Ruleta de Secciones:
- Santísimo: "Contenido espiritual y religioso"
- Radio: "FM 93.5 - Tu radio local"
- Canal: "Canal 5 Lo Nuestro - Televisión local"

### Patrocinadores:
- Logo 1, Logo 2, Logo 3, Logo 4 (con imágenes placeholder)

### Lives:
- "Live: Noticias del día"
- "Live: Deportes"
- "Live: Música en vivo"

---

**Instrucción para V0:** 
Genera el código completo de la página con todas estas secciones, usando Next.js, TypeScript, Tailwind CSS y componentes modernos. Asegúrate de que las ruletas/carruseles funcionen correctamente y el diseño sea responsive.

