/**
 * Sets the theme globally
 * @param {String} theme - dark or light
 *
**/
function setTheme(theme){
    const html = document.querySelector("html");
    html.setAttribute("data-theme", "theme")
}