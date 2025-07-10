<h1 align=center> Proyecto SASS </h1>
<p align=center><image src="assets/images/travel.png" alt= "Viaja Ya!" width="200px" height="auto"></p>
<p align=center>Este repositorio contiene una interfaz web sencilla con temática de viajes, donde se ha organizado de manera modular utilizando SASS como preprocesador CSS, siguiendo el patrón de organización de carpetas 7-1 para una estructura escalable y mantenible.</p>

## Requerimientos del Proyecto
- Node.js
- SASS 
- Estructura de carpetas con patrón 7-1
- Archivo HTML

## Estructura del Proyecto
```
Proyecto SASS/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── style.css.map
│   ├── images
│   └── scripts/
│       └── script.js
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   │   └── _colors.scss
│   ├── base/
│   │   ├── _base.scss
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   └── _form.scss
│   ├── layout/
│   │   ├── _header.scss
│   │   ├── _hero.scss
│   │   └── _footer.scss
│   ├── pages/
│   │   ├── _contact.scss
│   │   ├── _destinations.scss
│   │   └── _home.scss
│   ├── themes/
│   │   └── _theme.scss
│   ├── vendors/
│   └── style.scss
├── destinations.html
├── contact.html
├── index.html
└── README.md

```

## 🎨 Estructura SASS (Patrón 7-1)

1. abstracts/: Variables, mixins y funciones
    - _variables.scss:  Fuentes y tamaños
    - _mixins.scss: Mixins reutilizables
    - _functions.scss: Funciones personalizadas
    - _colors.scss: Paleta de colores
2. base/: Estilos base y reset
    - _base.scss: 
    - _reset.scss: Reset/normalize
    - _typography.scss: Tipografía global
3. components/: Componentes UI
    - _buttons.scss: Estilos de botones
    - _cards.scss: Estilos de tarjetas
    - _form.scss: Estilos de formularios
4. layout/: Diseño general
    - _hero.scss: Encabezado
    - _header.scss: Barra de navegación del sitio
    - _footer.scss: Pie de página
5. pages/: Estilos específicos de páginas
    - _home.scss: Estilos para la página principal
    - _contact.scss: Estilo para la página de contacto
    - _destinations.scss: Estilo para la pagina de contenido (viajes)
6. themes/: Temas del sitio
    - _theme.scss: Estilos temáticos
7. vendors/: Librerías externas

## ✨ Características Implementadas (✅)

- Estructura HTML semántica ✅ 
- Diseño modular con componentes reutilizables ✅ 
- Variables SASS para colores, tipografía y espaciado ✅ 
- Mixins para media queries y efectos
- Reset CSS personalizado
- Tipografía escalable ✅ 
- Componentes de botones y tarjetas ✅ 
- Header y Footer estilizados ✅ 
- Diseño responsivo ✅ 

### Responsable:
<p align=center>Carolina Hernández Barra</p>
