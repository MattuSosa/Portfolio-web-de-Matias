# RESUMEN DEL PROYECTO - Rediseño Lo Nuestro

## SITUACION ACTUAL

### Cliente/Proyecto
- **Sitio web a rediseñar:** https://www.lonuestro.com.ar/
- **Tipo de negocio:** Empresa de medios de comunicacion local
- **Ubicacion:** Sauce Viejo, Santa Fe, Argentina
- **Servicios:** Radio FM 93.5, Canal 5 Lo Nuestro, diario digital josenizzo.info

### Problema Identificado
- El sitio actual tiene un diseño desactualizado
- Contenido dificil de actualizar manualmente
- Hay elementos que el cliente quiere eliminar (seccion de promocion de libro "Despierta")
- Necesita un diseño moderno y profesional

### Requerimientos del Cliente
1. **Eliminar:** Toda la seccion relacionada con el libro "Despierta" y su codigo QR
2. **Mantener/Mejorar:** 
   - Ruleta manual de 3 secciones (Santisimo, Radio, Canal)
   - Informacion del dueño/director
   - Ruleta manual con transmisiones en vivo (lives)
   - Ruleta automatica con patrocinadores

## OBJETIVOS DEL PROYECTO

### Principal
Crear un rediseño moderno del sitio web de Lo Nuestro que:
- Tenga un diseno profesional y actual
- Sea facil de mantener y actualizar
- Se enfoque en los canales de comunicacion (Radio y TV)
- Elimine contenido relacionado con libros

### Secundario
- Integrar un sistema de gestion de contenido (CMS) para que el cliente pueda actualizar informacion sin programar
- Agregar el proyecto al portfolio del desarrollador una vez aprobado

## TIPO DE SITIO WEB

### Clasificacion
**IMPORTANTE:** NO es un sitio de noticias, NO es un blog, NO es un portal de noticias.

Es un **SITIO INSTITUCIONAL / LANDING PAGE CORPORATIVA** para una empresa de medios.
- Similar a una pagina de presentacion corporativa
- Estilo: Landing page moderna de empresa
- NO layout tipo diario o blog de noticias

## ESTRUCTURA REQUERIDA

### Secciones de la Pagina (Single Page Application)

1. **Header/Navbar**
   - Logo "Lo Nuestro"
   - Menu: Inicio, Radio, Canal, Contacto
   - Fijo o sticky

2. **Hero Section**
   - Titulo principal
   - Subtitulo descriptivo
   - Botones CTA (Escuchar Radio, Ver Canal, etc.)

3. **Seccion 1: Ruleta Manual de 3 Secciones** ⭐
   - Carrusel navegable manualmente (NO automatico)
   - 3 cards: Santisimo, Radio FM 93.5, Canal 5 Lo Nuestro
   - Botones de navegacion (flechas)
   - Indicadores (dots)
   - Cada card: imagen, titulo, descripcion, boton CTA

4. **Seccion 2: Informacion del Dueño**
   - Foto circular del dueño/director
   - Nombre y cargo
   - Descripcion biografica breve
   - Redes sociales (opcional)

5. **Seccion 3: Ruleta Manual con Lives**
   - Carrusel manual para transmisiones en vivo
   - Cards con: imagen, titulo, estado (En vivo/Proximamente), boton

6. **Seccion 4: Ruleta Automatica con Patrocinadores** ⭐
   - Carrusel automatico (auto-play)
   - Rotacion cada 3-5 segundos
   - Pausa al hacer hover
   - Logos de patrocinadores alineados

7. **Footer**
   - Contacto, redes sociales, copyright

## ESTADO ACTUAL DEL DESARROLLO

### Lo que se ha hecho
- ✅ Analisis del sitio actual y requerimientos
- ✅ Creacion de prompt detallado para V0 (herramienta de generacion de UI)
- ✅ Correccion del prompt para evitar que genere diseno tipo noticias
- ✅ Identificacion de necesidad de CMS para contenido dinamico

### Lo que falta por hacer
- ⏳ Generar el diseno inicial con V0 (en proceso)
- ⏳ Integrar el codigo generado por V0 al proyecto Next.js actual
- ⏳ Integrar Sanity CMS para gestion de contenido dinamico
- ⏳ Configurar esquemas de Sanity para cada seccion editable
- ⏳ Conectar componentes con datos de Sanity
- ⏳ Presentar al cliente para aprobacion
- ⏳ Agregar al portfolio una vez aprobado

## ESTADO DEL PROMPT PARA V0

### Ubicacion
Archivo: `PROMPT_V0_LONUESTRO_CORREGIDO.txt`

### Contenido clave del prompt
- Descripcion clara de que es LANDING PAGE CORPORATIVA (no noticias)
- Estructura detallada de cada seccion
- Especificaciones tecnicas (Next.js 15, React 19, TypeScript, Tailwind)
- Ejemplos de contenido placeholder
- Referencias de estilo de diseno

### Problemas encontrados anteriormente
- V0 genero inicialmente un diseno tipo "pagina de noticias" (incorrecto)
- Prompt fue corregido para enfatizar estilo corporativo/landing page

## TECNOLOGIAS PLANEADAS

### Frontend
- Next.js 15+ (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Componentes UI (shadcn/ui disponible)
- Embla Carousel para carruseles

### Backend/Content Management
- **Sanity CMS** (plan gratuito)
  - Para gestionar contenido de ruletas
  - Para actualizar informacion del dueño
  - Para gestionar patrocinadores
  - Para actualizar lives/transmisiones

### Proyecto Base
- Ya existe un proyecto Next.js en Cursor
- Portfolio web del desarrollador
- Estructura lista para agregar el nuevo proyecto

## DESAFIOS IDENTIFICADOS

1. **Clasificacion del sitio:** Era confuso definir si era noticias o institucional
   - ✅ RESUELTO: Clarificado como landing page corporativa

2. **Actualizacion de contenido:** Cliente necesita actualizar sin programar
   - ✅ SOLUCION: Sanity CMS (gratis)

3. **Eliminacion de contenido:** Quitar seccion de libro
   - ✅ RESUELTO: Incluido en requerimientos y prompt

4. **Diseño adecuado:** V0 generaba diseno incorrecto
   - ✅ RESUELTO: Prompt corregido con especificaciones claras

## PROXIMOS PASOS

1. **Inmediato:**
   - Generar diseno con V0 usando el prompt corregido
   - Revisar que el diseno sea adecuado (landing page, no noticias)

2. **Corto plazo:**
   - Recibir ZIP del codigo generado por V0
   - Integrarlo al proyecto Next.js en Cursor
   - Probar funcionalidad de carruseles

3. **Mediano plazo:**
   - Instalar y configurar Sanity CMS
   - Crear esquemas de contenido para cada seccion
   - Conectar componentes con Sanity

4. **Largo plazo:**
   - Presentar al cliente
   - Hacer ajustes segun feedback
   - Agregar proyecto al portfolio

## NOTAS IMPORTANTES

- El desarrollador es principiante en este campo (recien aprendiendo)
- Necesita soluciones claras y paso a paso
- Preferencia por opciones gratuitas (Sanity tiene plan gratis)
- El proyecto debe ser presentable al cliente para posible aprobacion
- Una vez aprobado, se agregara al portfolio del desarrollador

## CONTEXTO ADICIONAL

- El sitio original tiene contenido que puede cambiar periodicamente
- El cliente quiere poder actualizar sin depender del desarrollador
- Es importante que el diseno sea moderno y profesional
- El proyecto servira como portfolio piece para el desarrollador

---

**Fecha de creacion del resumen:** 2024
**Estado:** En fase de diseno inicial con V0
**Prioridad:** Alta (proyecto para cliente real)


