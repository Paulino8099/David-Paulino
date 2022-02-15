
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
/**
 * ? fijando barra superior de navegación...
 */
// FIJAR LA BARRA DE NAVEGACION EN LA PARTE SUPERIOR
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        // barra de navegación
        document.querySelector('.barraNav-container').classList.add('fixedOn');
        // logo copyRygt
        document.querySelector('.copyRight-secundary').classList.add('active');
    } else if (window.scrollY < 25) {
        // barra de navegación
        document.querySelector('.barraNav-container').classList.remove('fixedOn');
        // logo copyRygt
        document.querySelector('.copyRight-secundary').classList.remove('active');

    }
});

/**
 * ?volviendo a inicio
 */
// volver a inicio al hacer click el logo del título principal
backStart();
function backStart() {
    let logoPersonal = document.querySelector('.logo-personal');
    logoPersonal.addEventListener('click', function () {
        if (document.documentElement.scrollTop > 5) {
            document.documentElement.scrollTop = 0;
        }
    });
}

/**
 * ? yendo al final de la página...
 */
// desplazádose hasta el final al tocar btn copyRight
scrollEnd();
function scrollEnd() {
    let copyRightBtn = document.querySelector('.copyRight-secundary');

    copyRightBtn.addEventListener('click', function () {
        document.documentElement.scrollTop = document.documentElement.scrollHeight - 250;
    });
};

/**
 * ?indicador de sesiones (click)...
 */
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
            let project = document.querySelector('.project');
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
             * !Botón project
             */
            else if (btnNav[i].childNodes[0].nodeValue == 'Proyectos') {

                // navegando entre las secciones al dar click en el botón "project". 
                document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight - 25;
            }
            /**
             * !Botón Contacto
             */
            else if (btnNav[i].childNodes[0].nodeValue == 'Contacto') {
                // navegando entre las secciones al dar click en el botón "Contacto". 
                document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight + project.offsetHeight - 25;
            }
        }
    });
};

/**
 * ?indicador de sesiones (IntersectionObserver)...
 */
// activar indicador y posicionarlo en su repectivo botón del navBar al detectar scroll en las diferentes secciones de todo el documento.
window.addEventListener('scroll', () => {

    let head = document.querySelector('.head');
    let indicator = document.querySelector('.indicador');

    // width of the btns
    let widthBtnEstudios = document.querySelector('.btn-estudios').offsetWidth;
    let widthBtnSobreMi = document.querySelector('.btn-sobreMi').offsetWidth;
    let widthBtnproject = document.querySelector('.btn-project').offsetWidth;
    let widthBtnContacto = document.querySelector('.btn-contacto').offsetWidth;

    // all of the sections
    let sections = document.querySelectorAll('.section');

    /**
     * ?observador de sesiones...
     */
    const obser = (entry, salida) => {
        entry.forEach(function (entry) {
            if (entry.isIntersecting) {

                /**
                 * ?head...
                 */
                if (entry.target.classList == 'head section') {
                    // Ancho y opacidad del indicador de los botones del menú de navegación.
                    indicator.style.width = `${0}px`;
                    indicator.style.opacity = '0';

                    // Distancia a trasladar el indicador de los botones del menú de navegación.
                    indicator.style.transform = `translateX(${-100}%)`;
                }
                /**
                 * ?studies...
                 */
                else if (entry.target.classList == 'estudios section') {
                    // ancho y opacidad  del indicador del menú de navegación.
                    indicator.style.width = `${widthBtnEstudios - 6}px`;
                    indicator.style.opacity = '1';

                    // distancia a trasladar el indicador en el menú de navegación. 
                    indicator.style.transform = `translateX(${3}px)`;
                }
                /**
                 * ?about me...
                 */
                else if (entry.target.classList == 'sobreMi section') {
                    // Ancho y opacidad  del indicador de los botones del menú de navegación.
                    indicator.style.width = `${widthBtnSobreMi - 7}px`;
                    indicator.style.opacity = '1';

                    // Distancia a trasladar el indicador de los botones del menú de navegación.
                    indicator.style.transform = `translateX(${widthBtnEstudios + 6}px)`;
                }
                /**
                 * ?project...
                 */
                else if (entry.target.classList == 'project section') {
                    // Ancho y opacidad  del indicador de los botones del menú de navegación.
                    indicator.style.width = `${widthBtnproject -6}px`;
                    indicator.style.opacity = '1';

                    // Distancia a trasladar el indicador de los botones del menú de navegación.
                    indicator.style.transform = `translateX(${widthBtnEstudios + widthBtnSobreMi + 11}px)`;
                }
                /**
                 * ?contact...
                 */
                else if (entry.target.classList == 'contacto section') {
                    // Ancho y opacidad  del indicador de los botones del menú de navegación.
                    indicator.style.width = `${widthBtnContacto -6}px`;
                    indicator.style.opacity = '1';

                    // Distancia a trasladar el indicador de los botones del menú de navegación.
                    indicator.style.transform = `translateX(${widthBtnEstudios + widthBtnSobreMi + widthBtnproject + 15}px)`;
                }
            }
        });
    };

    const observador = new IntersectionObserver(obser, {
        root: null,
        rootMargin: "-50%",
    });

    // recoriendo la lista de todas las sesiones y observándolas 
    sections.forEach(function (e) {
        observador.observe(e);
    });
});

/**
 * ?onOff información personal (click)...
 */
// Activar/Desactivar información personal
document.querySelector('.imgNavigate').addEventListener('click', () => {
    document.querySelector('.myData-float-container').classList.add('on')

    // Desactivar contenedor información personal 
    document.querySelector('.btn-back-datosPersonales').addEventListener('click', () => {
        // Botón para desactivar
        document.querySelector('.myData-float-container').classList.remove('on');
    })
});

/**
 * ?desactivando información personal (scroll)...
 */
// Desactivar información personal al scrollear
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
// todas las configuraciones para los dispositivos móviles
allConfigMovil();
function allConfigMovil() {
    /**
     * ?menú móvil...
     */
    // Todas las funciones del menú. 
    main();
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
                    let project = document.querySelector('.project');
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
                    else if (titleBtn == 'project') {
                        document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight - barraTitleBtn.offsetHeight;;
                    }
                    else if (titleBtn == 'Contacto') {
                        document.documentElement.scrollTop = head.offsetHeight + estudios.offsetHeight + sobreMi.offsetHeight + project.offsetHeight - barraTitleBtn.offsetHeight;;
                    };
                };
            });
        };
    };

    /**
     * ?volviendo a inicio...
     */
    // volver a inicio al presionar el título principal del menú para móvil
    backStart();
    function backStart() {
        let titlePrimary = document.querySelector('.titlePrimay-navMovil');
        titlePrimary.addEventListener('click', function () {
            if (document.documentElement.scrollTop > 5) {
                document.documentElement.scrollTop = 0;
            }
        });
    }
}