TESTAPP/
|-- .history/
|-- vite-project/
    |-- node_modules/
    |-- public/
    |   |-- favicon.ico
    |-- src/
        |-- assets/
        |-- Componentes-Generales/
        |   |-- styles/
        |       |-- banner.scss
        |       |-- footer.css
        |       |-- menu.css
        |   |-- background.jsx
        |   |-- footer.jsx
        |   |-- menu.jsx
        |   |-- thema.jsx
        |-- Constants/
        |   |-- lenguaje.jsx
        |-- Home/
        |   |-- Styles/
        |       |-- estilos.css
        |   |-- Inicio.jsx
        |-- pages/
        |   |-- About/
        |   |-- Contact/
        |   |-- NotFound/
    |-- test/
    |-- index.html
    |-- App.css
    |-- App.jsx
    |-- index.css
    |-- main.jsx
    |-- .eslintrc.cjs
    |-- .gitignore
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- vite.config.js
    |-- estructura.lua
    |-- package.json

---


    project_structure = {
        name = "TESTAPP",
        children = {
            {name = ".history"},
            {
                name = "vite-project",
                children = {
                    {name = "node_modules"},
                    {
                        name = "public",
                        children = {
                            {name = "favicon.ico"}
                        }
                    },
                    {
                        name = "src",
                        children = {
                            {
                                name = "assets"
                            },
                            {
                                name = "Componentes-Generales",
                                children = {
                                    {
                                        name = "styles",
                                        children = {
                                            {name = "banner.scss"},
                                            {name = "footer.css"},
                                            {name = "menu.css"}
                                        }
                                    },
                                    {name = "background.jsx"},
                                    {name = "footer.jsx"},
                                    {name = "menu.jsx"},
                                    {name = "thema.jsx"}
                                }
                            },
                            {
                                name = "Constants",
                                children = {
                                    {name = "lenguaje.jsx"}
                                }
                            },
                            {
                                name = "Home",
                                children = {
                                    {
                                        name = "Styles",
                                        children = {
                                            {name = "estilos.css"}
                                        }
                                    },
                                    {name = "Inicio.jsx"}
                                }
                            },
                            {
                                name = "pages",
                                children = {
                                    {name = "About"},
                                    {name = "Contact"},
                                    {name = "NotFound"}
                                }
                            }
                        }
                    },
                    {name = "test"},
                    {name = "index.html"},
                    {name = "App.css"},
                    {name = "App.jsx"},
                    {name = "index.css"},
                    {name = "main.jsx"},
                    {name = ".eslintrc.cjs"},
                    {name = ".gitignore"},
                    {name = "index.html"},
                    {name = "package-lock.json"},
                    {name = "package.json"},
                    {name = "README.md"},
                    {name = "vite.config.js"},
                    {name = "estructura.lua"},
                    {name = "package.json"}
                }
            }
        }
    }
    
    -- Function to print the project structure
    function print_structure(structure, indent)
        indent = indent or ""
        print(indent .. structure.name)
        if structure.children then
            for _, child in ipairs(structure.children) do
                print_structure(child, indent .. "  ")
            end
        end
    end
    
    print_structure(project_structure)
    