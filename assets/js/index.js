/**
 * Archivo: index.js
 * Escrito por: Alberto Nieto Rocha
 * Proyecto: Plantilla Web Para PT
 */

/** Variable y eventos HTML */
let body = document.querySelector('body');
let navbar = body.querySelectorAll('h2');
let sidebar = body.querySelector('.sidebar');
let sidebarItem = sidebar.querySelectorAll('li > a');
let menuButton = document.getElementsByClassName('navbar__button-left')[0];
let tema = document.getElementsByClassName("navbar__desplegable__link");
let main = body.querySelector('main');
window.addEventListener('load', showMenuButton);
window.addEventListener('resize', showMenuButton);
menuButton.addEventListener('click', sidebarHideShow, menuButton);
Array.from(sidebarItem).forEach(function (sidebarItem) { sidebarItem.addEventListener('click', sidebarBehavior, sidebarItem) });
Array.from(tema).forEach(function (tema) { tema.addEventListener('click', cambiarTema, tema) });
let sections = [];
sections.push(document.getElementById("about"));
sections.push(document.getElementById("a1"));
sections.push(document.getElementById("a2"));
sections.push(document.getElementById("a3"));
sections.push(document.getElementById("components"));
sections.push(document.getElementById("downloads"));
window.addEventListener("scroll", scrollBehavior, { passive: true });

/**
* Detecta que sección esta en pantalla y llama a la función 'paintSidebar' con el parámetro correspondiente de la sección en pantalla.
* @summary Se buscan las secciones de la página por su 'id', se calcula su altura con respecto a la parte superior de la página y se le resta el ancho de la barra de navegación.
*/
function scrollBehavior() {
    let current = "";
    for (let i = 0; i < sections.length; i++) {
        let sectionTop;
        sectionTop = sections[i].offsetTop;
        if (scrollY >= sectionTop) {
            current = sections[i].getAttribute("id");
            if (sections[i] === sections[sections.length - 2]) {
                if (scrollY + (sections[i].offsetHeight / 2) >= sections[i + 1].offsetTop) {
                    current = sections[i + 1].getAttribute("id");
                }
            }
        }
    }
    paintSidebar(current);
}

/**
 * Muestra/oculta el botón del menú y la barra lateral. Dependiendo del tamaño de ventana.
 */
function showMenuButton() {
    if (window.innerWidth < 769) {
        body.classList.add("active");
        menuButton.classList.remove('navbar__button-disabled');
    } else {
        body.classList.remove("active");
        menuButton.classList.add('navbar__button-disabled');
        if (sidebar.classList.contains("sidebar-visible")) {
            sidebar.classList.remove("sidebar-visible");
        }
    }
}

/** 
* Muestra y esconde la barra lateral al pulsar el botón del menú.
*/
function sidebarHideShow() {
    sidebar.classList.toggle("sidebar-visible");
}

/** 
* Muestra en pantalla la sección seleccionada en sidebar.
* @summary Reemplaza el href del elemento seleccionado para no mostrarlo en la url, y comprueba el tamaño de ventana para cerrar sidebar.
* @param {EventoClick} event - Proporciona información del elemento que fue clicado.
*/
function sidebarBehavior(event) {
    event.preventDefault();
    let target = event.currentTarget;
    let identifier = target.getAttribute("href").replace('#', '');
    let y = document.getElementById(identifier).offsetTop;
    window.scrollTo(
        {
            top: y,
            behavior: 'smooth'
        }
    )
    if (body.classList.contains('active') && window.innerWidth < 769) {
        sidebarHideShow(menuButton);
    }
}

/**
* Resalta la sección en pantalla en la barra latera.
* @summary Se busca el elemento resaltado actualmente, se identifica si es un item o subitem, se quitan las clases dependiendo del tipo de elemento. 
* Para resaltar, se identifica si es un item o subitem y se le añaden las clases correspondiente al tipo de elemento.
* @param {number} current - Hace referencia a la sección en pantalla, por default es la sección 'sobre el proyecto'.
*/
function paintSidebar(current) {
    for (let i = 0; i < sidebarItem.length; i++) {
        sidebarItem[i].classList.remove("active");
        link = sidebarItem[i].getAttribute("href");
        if (link.includes(current)) {
            sidebarItem[i].classList.add("active");
        }
    }
}

// Despliega/ oculta, menú en la barra de superior.
$(".navbar__li").click(function () {
    let submenu = $(this).find(".navbar__desplegable");
    $(".navbar__desplegable").not($(submenu)).addClass("navbar__desplegable-disabled");
    $(submenu).toggleClass("navbar__desplegable-disabled");
});

// Esconder menú desplegable, cuando se da clic fuera de él.
$(document).on("click", function (event) {
    let evento = event.target;
    let submenu = $(".navbar__desplegable");
    if (evento !== submenu && !submenu.has(evento).length && !$(".navbar__li").has(evento).length) {
        $(submenu).addClass("navbar__desplegable-disabled");
    }
});

/** 
* Cambia la paleta de colores del sitio.
* @param {EventoClick} event - Contiene información sobre el evento que llama a la función.
*/
function cambiarTema(event) {
    const doc = document.documentElement;
    let svg = event.currentTarget.children[0];
    let span = event.currentTarget.children[1].id;
    if (span.search(/theme/i) === 0) {
        switch (span) {
            case "theme-0":
                doc.setAttribute('color-scheme', "normal");
                break;
            case "theme-1":
                doc.setAttribute('color-scheme', "light");
                break;
            case "theme-2":
                doc.setAttribute('color-scheme', "dark");
                break;
        }
        cambiaIcono(event, svg);
    }
}

/** 
* Establece el icono del tema seleccionado en la barra superior.
* @param {EventClick} event - Contiene información sobre el evento.
* @param {Objeto} svg - Icono del tema seleccionado.
*/
function cambiaIcono(event, svg) {
    let clone;
    let previousOption = document.getElementsByClassName("navbar__theme-enabled");
    if (previousOption[0] !== event.currentTarget) {
        previousOption[0].classList.remove("navbar__theme-enabled");
        event.currentTarget.classList.add("navbar__theme-enabled");
        clone = svg.cloneNode(true);
        clone.setAttribute("id", "theme-enabled");
        document.getElementById("theme-enabled").replaceWith(clone);
    };
};