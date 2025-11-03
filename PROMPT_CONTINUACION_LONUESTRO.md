# PROMPT PARA CONTINUAR PROYECTO - Rediseño Lo Nuestro

## CONTEXTO DEL PROYECTO

Estoy trabajando en el rediseño del sitio web de **Lo Nuestro** (https://www.lonuestro.com.ar/), una empresa de medios de comunicacion local ubicada en Sauce Viejo, Santa Fe, Argentina. La empresa opera Radio FM 93.5, Canal 5 Lo Nuestro y un diario digital.

**IMPORTANTE:** Este NO es un sitio de noticias ni un blog. Es un **SITIO INSTITUCIONAL / LANDING PAGE CORPORATIVA** para presentar la empresa de medios.

## REQUERIMIENTOS DEL CLIENTE

### Contenido a ELIMINAR:
- Toda la seccion relacionada con el libro "Despierta" y su codigo QR promocional

### Contenido a MANTENER/MEJORAR:
1. **Ruleta Manual de 3 Secciones:** Carrusel navegable manualmente con:
   - Santisimo (contenido religioso/espiritual)
   - Radio FM 93.5 (emisora de radio)
   - Canal 5 Lo Nuestro (canal de television)

2. **Informacion del Dueño/Director:** Seccion con foto, nombre, cargo y descripcion biografica

3. **Ruleta Manual con Lives:** Carrusel manual para mostrar transmisiones en vivo destacadas

4. **Ruleta Automatica con Patrocinadores:** Carrusel automatico (auto-play) con logos de patrocinadores que rota cada 3-5 segundos y pausa al hacer hover

## ESTRUCTURA DEL SITIO REQUERIDA

### Tipo de Pagina:
- **Single Page Application** (todo en una pagina con scroll)
- Landing page corporativa moderna
- NO tipo diario digital, NO tipo blog de noticias
- Estilo: Elegante, profesional, minimalista

### Secciones en orden:

1. **Header/Navbar** (fijo/sticky)
   - Logo "Lo Nuestro"
   - Menu: Inicio, Radio, Canal, Contacto
   - Diseno moderno con hover effects

2. **Hero Section**
   - Titulo principal destacado
   - Subtitulo descriptivo
   - Botones CTA (Escuchar Radio, Ver Canal, Contacto)

3. **Seccion 1: Ruleta Manual de 3 Secciones (CANALES)**
   - Carrusel con navegacion manual (flechas laterales)
   - Indicadores de posicion (dots)
   - 3 cards grandes: Santisimo, Radio FM 93.5, Canal 5 Lo Nuestro
   - Cada card: imagen/icono, titulo, descripcion, boton CTA
   - Transiciones suaves

4. **Seccion 2: Informacion del Dueño**
   - Foto circular grande
   - Nombre y cargo
   - Descripcion biografica breve
   - Redes sociales (opcional)
   - Estilo tipo "About" section

5. **Seccion 3: Ruleta Manual con Lives**
   - Carrusel horizontal manual
   - Cards para transmisiones en vivo
   - Cada card: thumbnail, titulo, estado (En vivo/Proximamente), boton "Ver ahora"
   - Navegacion con flechas

6. **Seccion 4: Ruleta Automatica con Patrocinadores**
   - Carrusel automatico (auto-play)
   - Rotacion cada 3-5 segundos
   - Pausa automatica al hover
   - Logos de patrocinadores alineados horizontalmente
   - Fondo neutro

7. **Footer**
   - Informacion de contacto
   - Redes sociales
   - Copyright
   - Links adicionales

## ESTADO ACTUAL DEL DESARROLLO

### Lo que YA SE HIZO:
1. ✅ Analisis del sitio original y requerimientos del cliente
2. ✅ Creacion de prompt detallado para V0 (herramienta de generacion de UI)
3. ✅ Correccion del prompt inicial (V0 generaba diseno tipo noticias, se corrigio)
4. ✅ Identificacion de necesidad de CMS para contenido dinamico
5. ✅ Decision de usar Sanity CMS (plan gratuito) para gestion de contenido
6. ✅ Creacion de prompt corregido enfatizando landing page corporativa
7. ✅ Archivos creados en el proyecto:
   - `PROMPT_V0_LONUESTRO_CORREGIDO.txt` - Prompt final para V0
   - `RESUMEN_PROYECTO_LONUESTRO.md` - Resumen completo del proyecto

### Lo que FALTA POR HACER:
1. ⏳ **Generar diseno con V0** usando el prompt corregido
2. ⏳ **Integrar codigo de V0** al proyecto Next.js existente en Cursor
3. ⏳ **Instalar y configurar Sanity CMS**
   - Instalar: `@sanity/client`, `next-sanity`, `@sanity/image-url`
   - Crear proyecto en Sanity (gratis)
   - Configurar variables de entorno
4. ⏳ **Crear esquemas de Sanity** para cada seccion:
   - Esquema para ruleta de canales (3 secciones)
   - Esquema para informacion del dueño
   - Esquema para lives/transmisiones
   - Esquema para patrocinadores
5. ⏳ **Conectar componentes con Sanity**
   - Crear queries para obtener datos
   - Reemplazar contenido hardcodeado con datos de Sanity
   - Implementar revalidacion/ISR para actualizaciones
6. ⏳ **Presentar al cliente** para aprobacion
7. ⏳ **Ajustes finales** segun feedback del cliente
8. ⏳ **Agregar al portfolio** del desarrollador

## ESTADO DEL PROYECTO NEXT.JS BASE

### Ubicacion:
Proyecto Next.js existente en Cursor en: `Portfolio-web-de-Matias`

### Caracteristicas del proyecto base:
- Next.js 15+ (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Componentes shadcn/ui disponibles
- Estructura lista para agregar nuevos proyectos

### Archivos relevantes:
- `package.json` - Dependencias actuales
- `app/` - Estructura App Router
- `components/` - Componentes existentes (hero, projects, skills, contact)

## TECNOLOGIAS PLANEADAS

### Frontend (ya en uso):
- Next.js 15+ (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Embla Carousel (para carruseles) - disponible en dependencias

### Backend/Content Management (pendiente):
- **Sanity CMS** (plan gratuito)
  - Para que el cliente pueda actualizar contenido sin programar
  - Gestion de: canales, info del dueño, lives, patrocinadores
  - Sistema headless via API

## ESPECIFICACIONES DE DISENO

### Estilo General:
- **Tipo:** Landing page corporativa moderna
- **NO:** Diseno de diario, blog, portal de noticias
- Limpio, minimalista, profesional
- Mucho espacio en blanco
- Sombras sutiles
- Animaciones suaves y discretas
- Cards con bordes redondeados
- Responsive mobile-first

### Paleta de Colores:
- Colores profesionales (azules oscuros, blancos, grises claros)
- Acentos vibrantes pero elegantes para CTAs
- Buen contraste para legibilidad
- Evitar colores muy saturados tipo periodico

### Tipografia:
- Fuente moderna sans-serif (Inter, Poppins, Roboto)
- Jerarquia clara
- Interlineado generoso

## ARCHIVOS IMPORTANTES DEL PROYECTO

1. **`PROMPT_V0_LONUESTRO_CORREGIDO.txt`**
   - Prompt final corregido para usar en V0
   - Incluye todas las especificaciones
   - Enfasis en landing page corporativa (no noticias)

2. **`RESUMEN_PROYECTO_LONUESTRO.md`**
   - Resumen completo del proyecto
   - Contexto, requerimientos, estado actual

3. **`PROMPT_CONTINUACION_LONUESTRO.md`** (este archivo)
   - Prompt para continuar el trabajo

## PASOS PARA CONTINUAR EL PROYECTO

### Paso 1: Generar Diseno con V0
1. Abrir V0
2. Copiar contenido de `PROMPT_V0_LONUESTRO_CORREGIDO.txt`
3. Generar diseno
4. Verificar que sea landing page corporativa (NO noticias)
5. Si no es adecuado, ajustar prompt y regenerar
6. Descargar ZIP del codigo generado

### Paso 2: Integrar a Cursor
1. Extraer contenido del ZIP de V0
2. Integrar componentes al proyecto Next.js existente
3. Crear nueva ruta/pagina para Lo Nuestro (ej: `app/lo-nuestro/page.tsx`)
4. Verificar que carruseles funcionen correctamente
5. Probar responsive design

### Paso 3: Integrar Sanity CMS
1. Instalar dependencias:
   ```bash
   npm install @sanity/client next-sanity @sanity/image-url
   ```
2. Crear cuenta en Sanity.io (gratis)
3. Crear nuevo proyecto Sanity
4. Obtener Project ID y Dataset name
5. Crear archivo `.env.local` con:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=tu_token
   ```
6. Configurar cliente de Sanity
7. Crear esquemas de contenido
8. Conectar componentes con datos de Sanity

### Paso 4: Configurar Contenido Dinamico
1. Crear esquema para "Canales" (Santísimo, Radio, Canal)
2. Crear esquema para "Dueño" (info personal)
3. Crear esquema para "Lives" (transmisiones en vivo)
4. Crear esquema para "Patrocinadores"
5. Crear queries para obtener datos
6. Reemplazar contenido hardcodeado

### Paso 5: Presentar y Ajustar
1. Mostrar al cliente
2. Recibir feedback
3. Hacer ajustes necesarios
4. Agregar al portfolio una vez aprobado

## NOTAS IMPORTANTES PARA CONTINUAR

- El desarrollador es principiante, necesita explicaciones claras
- Usar opciones gratuitas siempre que sea posible (Sanity tiene plan gratis)
- El diseño debe ser presentable profesionalmente
- Todos los carruseles deben funcionar en móvil y desktop
- El contenido debe ser facilmente actualizable por el cliente sin programar
- El sitio NO debe parecer un portal de noticias

## PROBLEMAS ENCONTRADOS Y SOLUCIONES

### Problema 1: V0 generaba diseño tipo noticias
**Solucion:** Se corrigio el prompt para enfatizar "LANDING PAGE CORPORATIVA" y especificar claramente que NO es un sitio de noticias.

### Problema 2: Cliente necesita actualizar contenido sin programar
**Solucion:** Se decidio usar Sanity CMS (gratis) para gestion de contenido dinamico.

### Problema 3: Definir tipo de sitio web
**Solucion:** Se clarifico que es un sitio institucional/landing page corporativa, similar a presentacion de empresa, no un portal de noticias.

## OBJETIVOS FINALES

1. Sitio web moderno y profesional para Lo Nuestro
2. Diseño responsive que funcione en todos los dispositivos
3. Contenido actualizable por el cliente sin programar (via Sanity)
4. Enfoque en los canales de comunicacion (Radio y TV)
5. Sin contenido relacionado con libros
6. Proyecto agregado al portfolio del desarrollador

## INFORMACION DEL CLIENTE

- **Sitio actual:** https://www.lonuestro.com.ar/
- **Empresa:** Lo Nuestro
- **Servicios:** Radio FM 93.5, Canal 5 Lo Nuestro, diario digital
- **Ubicacion:** Sauce Viejo, Santa Fe, Argentina
- **Mensaje clave del cliente:** "Quiero actualizar y ordenar, sacar todo lo del libro Despierta y que quede lo de los canales"

---

**ESTADO ACTUAL:** En fase de diseño inicial con V0. Listo para continuar con generacion de diseño y posterior integracion.

**FECHA DE CREACION:** 2024

**PARA CONTINUAR:** Usar este prompt para recordar el contexto completo del proyecto y continuar desde donde se quedo.


