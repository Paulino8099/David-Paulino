
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
// FIJAR LA BARRA DE NAVEGACION EN LA PARTE SUPERIOR============================================================
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        document.querySelector('.barraNav-container').classList.add('fixedOn');
    } else if (window.scrollY < 25) {
        document.querySelector('.barraNav-container').classList.remove('fixedOn');
    }
});

/**
 * ?volviendo a inicio
 */
// volver a inicio al presionar el título principal
backStart();
function backStart() {
    let titlePrimary = document.querySelector('.title-head');
    titlePrimary.addEventListener('click', function () {
        if (document.documentElement.scrollTop >= 5) {
            document.documentElement.scrollTop = 0;
        }
    });
}

// agregando eventos a los botones del menú de navegación y creando condicionales para que el indicador se mueva a la posición del botón donde se escuchó el click.
let btnNav = document.querySelector('.main-head').children;
for (let i = 0; i < btnNav.length; i++) {
    btnNav[i].addEventListener('click', () => {
        // indicador de la barra de navegación al dar click en cada botón. 
        indicatorSection();
        function indicatorSection() {
            let head = document.querySelector('.head');
            let estudios = document.querySelector('.estudios');
            let sobreMi = document.querySelector('.sobreMi');
            let proyectos = document.querySelector('.proyectos');
            // Contenedor del titulo y el boton del menú.
            let barraTitleBtn = document.querySelector('.content-titleBoton');
            // Botón Estudios
            if (btnNav[i].childNodes[0].nodeValue == 'Estudios') {
                // navegando por las secciones al dar click en el botón "estudios". 
                document.documentElement.scrollTop = head.offsetHeight - barraTitleBtn.offsetHeight - 25;
            }
            /**
             * !Botón Sobre Mi
             */
            else if (btnNav[i].childNodes[0].nodeValue == 'Sobre Mi') {
                // navegando entre las secciones al dar click en el botón "Sobre Mi". 
                document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight - 25;
            }
            /**
             * !Botón Proyectos
             */
            else if (btnNav[i].childNodes[0].nodeValue == 'Proyectos') {

                // navegando entre las secciones al dar click en el botón "Proyectos". 
                document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight - 25;
            }
            /**
             * !Botón Contacto
             */
            else if (btnNav[i].childNodes[0].nodeValue == 'Contacto') {
                // navegando entre las secciones al dar click en el botón "Contacto". 
                document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight + proyectos.offsetHeight - 25;
            }
        }
    });
};

// activar indicador y posicionarlo en su repectivo botón del navBar al detectar scroll en las diferentes secciones de todo el documento.
window.addEventListener('scroll', () => {
    navegationIndicatorScroll();
    function navegationIndicatorScroll() {
        let head = document.querySelector('.head');
        let estudios = document.querySelector('.estudios');
        let sobreMi = document.querySelector('.sobreMi');
        let proyectos = document.querySelector('.proyectos');
        /**
         * TODOS: Variables para la anchura de los botones del menú de navegación.
         */
        // Botón Estudios
        let widthBtnEstudios = document.querySelector('.btn-estudios').offsetWidth;
        // Botón Experiencias
        let widthBtnSobreMi = document.querySelector('.btn-sobreMi').offsetWidth;
        // Botón Proyectos
        let widthBtnProyectos = document.querySelector('.btn-proyectos').offsetWidth;
        // Botón Contacto
        let widthBtnContacto = document.querySelector('.btn-contacto').offsetWidth;
        /**
         * TODOS: FIN de las variables para la anchura de los botones del menú de navegación.
         */

        // Contenedor del titulo y el boton del menú.
        let barraTitleBtn = document.querySelector('.content-titleBoton');
        /**
         *! Estudios
         */
        // cuando se detecte que el cliente ha hecho scroll y está posicionado en la sección de "estudios", se va a observar un indicador en el navegador del menú indicando que está sobre esa sección. 
        if ((document.documentElement.scrollTop >= head.offsetHeight - barraTitleBtn.offsetHeight - 50) && (document.documentElement.scrollTop <= head.offsetHeight - barraTitleBtn.offsetHeight + 100)) {
            // ancho del indicador del menú de navegación. 
            document.querySelector('.indicador').style.width = `${widthBtnEstudios}px`;

            // distancia a trasladar el indicador en el menú de navegación. 
            document.querySelector('.indicador').style.transform = `translateX(${0}px)`;
        }
        /**
         *! Sobre Mi
         */
        // cuando se detecte que el cliente ha hecho scroll y está posicionado en la sección de "Sobre Mi", se va a observar un indicador en el navegador del menú indicando que está sobre esa sección. 
        else if ((document.documentElement.scrollTop >= (head.offsetHeight + estudios.offsetHeight - 50)) && (document.documentElement.scrollTop <= head.offsetHeight + estudios.offsetHeight + 100)) {
            // Ancho del indicador de los botones del menú de navegación.
            document.querySelector('.indicador').style.width = `${widthBtnSobreMi + 1}px`;

            // Distancia a trasladar el indicador de los botones del menú de navegación.
            document.querySelector('.indicador').style.transform = `translateX(${widthBtnEstudios + 6}px)`;
        }
        /**
         *! Proyectos
         */
        // cuando se detecte que el cliente ha hecho scroll y está posicionado en la sección de "Proyectos", se va a observar un indicador en el navegador del menú indicando que está sobre esa sección. 
        else if (document.documentElement.scrollTop >= (head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight - 50) && document.documentElement.scrollTop <= (head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight + 100)) {
            // Ancho del indicador de los botones del menú de navegación.
            document.querySelector('.indicador').style.width = `${widthBtnProyectos}px`;

            // Distancia a trasladar el indicador de los botones del menú de navegación.
            document.querySelector('.indicador').style.transform = `translateX(${widthBtnEstudios + widthBtnSobreMi + 11}px)`;
        }
        /**
         *! Contacto
         */
        // cuando se detecte que el cliente ha hecho scroll y está posicionado en la sección de "Contacto", se va a observar un indicador en el navegador del menú indicando que está sobre esa sección. 
        else if ((document.documentElement.scrollTop >= (head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight + proyectos.offsetHeight - 40)) && (document.documentElement.scrollTop <= (head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight + proyectos.offsetHeight + 100))) {
            // Ancho del indicador de los botones del menú de navegación.
            document.querySelector('.indicador').style.width = `${widthBtnContacto}px`;

            // Distancia a trasladar el indicador de los botones del menú de navegación.
            document.querySelector('.indicador').style.transform = `translateX(${widthBtnEstudios + widthBtnSobreMi + widthBtnProyectos + 15}px)`;
        }
        /**
         *! Head
         */
        // cuando se detecte que el cliente ha hecho scroll y está posicionado en la sección de "Head", se va a observar un indicador en el navegador del menú indicando que está sobre esa sección. 
        else if (document.documentElement.scrollTop <= (head.offsetHeight - 50)) {
            // Ancho del indicador de los botones del menú de navegación.
            document.querySelector('.indicador').style.width = `${0}px`;

            // Distancia a trasladar el indicador de los botones del menú de navegación.
            document.querySelector('.indicador').style.transform = `translateX(${-100}%)`;
        };
    };
});

// Activar/Desactivar información personal
document.querySelector('.imgNavigate').addEventListener('click', () => {
    document.querySelector('.myData-float-container').classList.add('on')

    // Desactivar contenedor información personal 
    document.querySelector('.btn-back-datosPersonales').addEventListener('click', () => {
        // Botón para desactivar
        document.querySelector('.myData-float-container').classList.remove('on');
    })
});

// Desactivar información personal mediante scroleo
window.addEventListener('scroll', () => {
    let heightHead = document.querySelector('.head').offsetWidth;
    if (scrollY >= heightHead) {
        // Botón para desactivar
        document.querySelector('.myData-float-container').classList.remove('on');
    };
});

//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Mobile¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Mobile¦¦¦¦¦¦¦¦¦Mobile¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Mobile¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Mobile¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Mobile¦¦¦¦¦¦¦¦¦Mobile¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Mobile¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
addEventListener('DOMContentLoaded', function () {
    // Todas las funciones del menú móvil
    main();
});


// Todas las funciones del menú. 
function main() {
    // Abriendo menú al dar click en boton open
    document.querySelector('.btn-open-mainMovil').addEventListener('click', function () {
        document.querySelector('.mainNav-container').classList.add('on');
        // Opacidad y filtro blur del fondo del menú
        document.querySelector('.mainNav-container').classList.toggle('opacityOn');

    });

    // Abriendo menú al dar click en el boton dentro del contenedor de todo el menú
    document.querySelector('.btn-close-mainMovil').addEventListener('click', function () {
        // Contenedor del menú
        document.querySelector('.mainNav-container').classList.toggle('on');

        // Opacidad y filtro blur del fondo del menú
        document.querySelector('.mainNav-container').classList.toggle('opacityOn');
    });

    // Activer barra de titulo y boton al escuchar evento scroll
    window.addEventListener('scroll', function () {
        if (scrollY >= 300) {
            document.querySelector('.mainNav-container').classList.add('onFixed');
            // // Opacidad y filtro blur del fondo del menú
            // document.querySelector('.mainNav-container').classList.remove('opacityOn');

        }
        // Sentencia para cerrar todo el menú automaticamente
        else if (scrollY <= 150) {
            // Contenedor del menú ... Removiendo la barra fixed
            document.querySelector('.mainNav-container').classList.remove('onFixed');

            // Contenedor del menú 
            document.querySelector('.mainNav-container').classList.remove('on');
        };
    });

    /**
     * TODO: Añadiendo eventos click a los botones de navegación del menú móvil.
     */
    let mainMovil = document.querySelector('.container-mainMovil').children;
    for (let i = 0; i < mainMovil.length; i++) {
        // buscando todos los botones en formato SVG del contenedor de los botones que se encuentra en el menú y agregándole un evente click.
        mainMovil[i].children[1].addEventListener('click', () => {

            // Función para ocultar el menú una vez se haya dado click en cualquiera de los botones que se ecnuetra en el. 
            ocultarMenu();
            function ocultarMenu() {
                // Contenedor de todo el menú 
                document.querySelector('.mainNav-container').classList.remove('on');

                // Opacidad y filtro blur del fondo del menú
                document.querySelector('.mainNav-container').classList.toggle('opacityOn');
            }

            // función para moverse entre cada sección o cada elemento dentro de todo el body de acuerdo al botón que se escuche el evento click dentro del contenedor de botones del menú.
            moverseSecciones();
            function moverseSecciones() {
                let head = document.querySelector('.head');
                let estudios = document.querySelector('.estudios');
                let sobreMi = document.querySelector('.sobreMi');
                let proyectos = document.querySelector('.proyectos');
                // Contenedor del titulo y el boton del menú.
                let barraTitleBtn = document.querySelector('.content-titleBoton');

                // buscando los titulos de cada botón que se encuentra dentro del menú movil en formato string.
                // Cuando se haga click en cada botón el cliente tendrá la opción de moverse entre las
                // diferentes de todo el documento.
                let titleBtn = mainMovil[i].children[0].childNodes[0].nodeValue;
                if (titleBtn == 'Estudios') {
                    document.documentElement.scrollTop = head.offsetHeight - barraTitleBtn.offsetHeight;
                }
                else if (titleBtn == 'Sobre Mi') {
                    document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight - barraTitleBtn.offsetHeight;
                }
                else if (titleBtn == 'Proyectos') {
                    document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight - barraTitleBtn.offsetHeight;;
                }
                else if (titleBtn == 'Contacto') {
                    document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight + proyectos.offsetHeight - barraTitleBtn.offsetHeight;;
                };
            };
        });
    };
};