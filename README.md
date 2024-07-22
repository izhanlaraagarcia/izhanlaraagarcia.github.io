# Portfolio Personal

## Descripción

Este proyecto es un portfolio personal desarrollado con React que permite a los usuarios explorar diferentes secciones como "Inicio", "Sobre mí" y "Contacto". Una de las características clave del proyecto es la capacidad de cambiar entre un tema claro y un tema oscuro para mejorar la experiencia del usuario.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Estilos](#estilos)
- [Enlaces](#enlaces)
- [Estado del Proyecto](#estado-del-proyecto)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- Cambio de tema entre modo claro y oscuro.
- Navegación entre diferentes secciones del portfolio.
- Diseño responsivo y moderno.
- Uso de React Context API para manejar el estado global del tema.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
2. Navega al directorio del proyecto
    ```bash
    cd nombre-del-repositorio
3. Instala las dependencias
    ```bash
    npm install
4. Ejecuta el proyecto
    ```bash
    npm start


## Estructura del Proyecto
    ```lua
    .
    ├── .history
    ├── vite-project
    │   ├── node_modules
    │   ├── public
    │   │   └── favicon.ico
    │   └── src
    │       ├── assets
    │       ├── Componentes-Generales
    │       │   ├── styles
    │       │   │   ├── background.scss
    │       │   │   ├── footer.css
    │       │   │   ├── menu.scss
    │       │   │   └── thema.scss
    │       │   ├── background.jsx
    │       │   ├── footer.jsx
    │       │   ├── menu.jsx
    │       │   └── thema.jsx
    │       ├── Constants
    │       │   ├── lenguaje.jsx
    │       │   └── themaContext.jsx
    │       ├── Home
    │       │   ├── Styles
    │       │   │   └── estilos.css
    │       │   └── Inicio.jsx
    │       ├── pages
    │       │   ├── About
    │       │   │   ├── styles
    │       │   │   │   └── about.css
    │       │   │   └── about.jsx
    │       │   ├── Contact
    │       │   │   ├── Styles
    │       │   │   │   └── contact.css
    │       │   │   └── contact.jsx
    │       │   └── NotFound
    │       │       ├── styles
    │       │       │   └── notfound.css
    │       │       └── notfound.jsx
    │       ├── test
    │       │   └── index.html
    │       ├── App.jsx
    │       ├── index.css
    │       ├── main.jsx
    │   ├── .eslintrc.cjs
    │   ├── .gitignore
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── README.md
    │   ├── vite.config.js
    │   └── estructura.lua


## Componentes principales
`App.jsx`

El componente principal de la aplicación que envuelve todo en el ThemeProvider y define las rutas.

`Menu.jsx`

El componente del menú de navegación que incluye los enlaces a las diferentes secciones y el TemaComponent para cambiar el tema.

`TemaComponent.jsx`

El componente responsable de cambiar el tema entre claro y oscuro. Utiliza el contexto de tema para alternar el estado y aplicar las clases de estilo correspondientes.

`ThemeContext.jsx`

Define el contexto para manejar el estado global del tema (claro u oscuro) y proporciona una función para alternar el tema.

## Páginas
`Inicio.jsx:`

La página de inicio de la aplicación.

`About.jsx:` 

La página"Sobre mí".


`Contact.jsx:` 

La página de contacto.

`NotFound.jsx:` 

La página de error 404 para rutas no encontradas.

## Enaces
> [Github](https://github.com/izhanlaraagarcia/izhanlaragarcia.github.io)

## Estado del proyecto

    El proyecto está en desarrollo. A continuación se enumeran algunas de las tareas pendientes:

    - Mejorar la accesibilidad del sitio.
    - Agregar pruebas unitarias para los componentes.
    - Optimizar el rendimiento de la aplicación.
    - Agregar más páginas y contenido.

 ## Contribucion
 ¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

Haz un fork del proyecto:

Crea una nueva rama:
    
    (git checkout -b feature/nueva-caracteristica).
    
Realiza los cambios necesarios y haz commit:
    
    (git commit -m 'Agrega nueva característica').

Empuja los cambios a la rama:

    (git push origin feature/nueva-caracteristica).

Abre un Pull Request.