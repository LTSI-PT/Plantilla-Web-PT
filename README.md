# Plantilla Web para Proyecto Terminal

Creada por: Alberto Nieto Rocha\
Inspirada en:
- [CoderDocs](https://themes.3rdwavemedia.com/bootstrap-templates/product/coderdocs-free-bootstrap-5-documentation-template-for-software-projects/), by Xiaoying Riley
- [iPortfolio](https://bootstrapmade.com/demo/iPortfolio/), by BootstrapMade

### Añadir elementos al Sidebar

Para añadir un elemento al menú de la barra lateral, se debe agregar dentro de las etiquetas:
```html 
<aside id="sidebar" class="sidebar">
  <ul class="sidebar__menu">
    <!-- Elementos menú-->
  </ul>
</aside>
```
lo siguiente:
```html
<li class="sidebar__item">
  <a class="sidebar__link" href="#components">
    <i class='bx bxs-extension bx-rotate-270 sidebar__icon'></i><!-- Icono -->
    <span class="sidebar__text">Componentes</span><!-- Nombre sección -->
  </a>
</li>
````
Si se requiere un sub-menu se hace hace lo siguiente:
```html
<li class="sidebar__item">
  <a class="sidebar__link" href="#components">
    <i class='bx bxs-extension bx-rotate-270 sidebar__icon'></i><!-- Icono -->
    <span class="sidebar__text">Componentes</span><!-- Nombre sección -->
  </a>
  <ul class="sidebar__submenu">
    <li class="submenu__item">
      <a class="submenu__link" href="#c1">
        <span class="submenu__text">Componente 1</span>
      </a>
    </li>
    <li class="submenu__item">
      <a class="submenu__link" href="#c2">
        <span class="submenu__text">Componente 2</span>
      </a>
    </li>
  </ul>
</li>
````
En ambos casos, es importante que la etiqueta `<a></a>`, tenga el atributo *href*. Ya que será utilizada para añadirle funcionalidad mediante JavaScript.

Los iconos utilizados en la página son importando en el head de la plantilla. Más iconos pueden ser encontrado en [BoxIcon](https://boxicons.com/?query=&utm_source=pocket_saves).

### Añadir sección

Siguiendo con el ejemplo, para añadir la nueva sección se debe añadir dentro de la etiqueta `<main></main>`, de la siguiente forma:

```html
<section id="components">
  <h2 class="title">Componentes</h2>
  <p>Qui ut veniam laboris ad ut aliqua et mollit.</p>
  <div>Aliquip pariatur aliquip excepteur dolor ut cupidatat velit do officia voluptate anim magna exercitation.</div>
  <!-- Contenido -->
  <h3 id="c1">Componente x</h3>
    <p>Voluptate incididunt consequat excepteur excepteur minim aliquip laboris non.</p>
  <h3 id="c2">Componente y</h3>
</section>
````
En el ejemplo, lo importante es que todo este contenido en la etiqueta `<section></section>`, se deben agregar los mismos títulos agregados en la barra lateral y los *id* deben coincidir con los *href* de las etiquetas `<a></a>` (sin el #).

### Agregar sección JS

Para agregar la funcionalidad de destacar la sección en pantalla de la barra lateral se debe hacer lo siguiente en [index.js](assets/js/index.js). 

Se deben agregar los encabezados de las secciones a un arreglo, esto haciendo uso del *id* definido:

```javascript 
section.push(document.getElementById("components"));
section.push(document.getElementById("c1"));
section.push(document.getElementById("c2"));
````

Importante, agregar los encabezados en el orden en que aparecen en la estructura del [index.htm](index.html).

### Enlace para probar proyecto

Para añadir un enlace para probar el proyecto, se debe modificar la barra de navegación. Dentro de la etiqueta `<nav></nav>`, se encuentra lo siguiente:

```html
<nav id="navbar" class="navbar"> 
  <div class="navbar__container navbar__container-right">
    <a class="button button-highlighted" href="miproyecto.com">Probar</a>
  </div>
</nav>
````
Agregar *href* con el enlace al proyecto.

### Sección descargas

Para añadir archivos de descarga, se deben agregar a la carpeta [files](assets/files/), y deben ser llamados desde la sección de descargas del archivo [index.html](index.html).

```html
<a href="assets/files/nombreArchivo.pdf" download="nombreArchivo_matrícula" class="button" target="_blank">Descargar<i
                class='bx bxs-download icon__downloads'></i></a>
````

### Añadir imagen

Agregar las imágenes dentro de la carpeta [img](assets/img/). Y agregar al [index.html](index.html) de la siguiente forma:

````html
<figure class="image">
  <img class="image__item" src="assets/img/miImagen.png" />
  <figcaption>
    <p class="image__descriptor">
            Consequat dolor enim occaecat esse qui.
    </p>
  </figcaption>
````

En caso de que la plantilla no funcione de la forma adecuada, informarme a mi [Correo](albertonr7@gmail.com) o [GitHub](https://github.com/albertonr7/Plantilla-Web-para-PT/issues).

Dato: para nombrar las clases `css`, se utilizo la metodología BEM. La cual se basa en tres conceptos principales: bloques, elementos y modificadores. [Más información](https://en.bem.info/methodology/key-concepts/).