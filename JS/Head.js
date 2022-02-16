
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦

let backface = document.querySelector('.backface');

navBarAll();
function navBarAll() {
    /**
     * ?onOff main (mobile)
     */
    onOffMain();
    function onOffMain() {
        let btnNavBar = document.querySelector('.btn-navBar-head');
        let mainHead = document.querySelector('.main-head');
        let navBar = document.querySelector('.navBar');
        let body = document.querySelector('body');

        // event click navBar
        btnNavBar.addEventListener('click', function () {
            // la palanca de encendido y apagado solo va a funcionar si el scroll es inferior a 200px para así evitar interferencia o margen de errores. Esto para que al activar el navBar con movimiento de scroll no haga ninguna interferencias
            if (window.scrollY < 200) {
                navBar.classList.toggle('active');
            };
            backface.classList.toggle('active');
            mainHead.classList.toggle('active');
            navBar.classList.toggle('backfaceOn');
            body.classList.toggle('backfaceOn');
        });
        //event click backface
        backface.addEventListener('click', function () {
            // solo se va a remover la clase de la lista de clases si el scroll es inferior a 200px para así evitar interferencia o margen de errores. Esto para que al activar el navBar con movimiento de scroll no haga ninguna interferencias
            if (window.scrollY < 200) {
                navBar.classList.remove('active');
            }
            backface.classList.remove('active');
            mainHead.classList.remove('active');
            navBar.classList.remove('backfaceOn');
            body.classList.remove('backfaceOn');
        });
        // event scroll
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                navBar.classList.add('active');
            } else if (window.scrollY < 25) {
                // barra de navegación
                navBar.classList.remove('active');
            }
        });
    };
};

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
    let indicator = document.querySelector('.indicador');

    // width of the btns
    let widthBtnEstudios = document.querySelector('.btn-studies').offsetWidth;
    let widthBtnSobreMi = document.querySelector('.btn-sobreMi').offsetWidth;
    let widthBtnproject = document.querySelector('.btn-project').offsetWidth;
    let widthBtnContacto = document.querySelector('.btn-contact').offsetWidth;

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
                else if (entry.target.classList == 'studies section') {
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
                    indicator.style.width = `${widthBtnproject - 6}px`;
                    indicator.style.opacity = '1';

                    // Distancia a trasladar el indicador de los botones del menú de navegación.
                    indicator.style.transform = `translateX(${widthBtnEstudios + widthBtnSobreMi + 11}px)`;
                }
                /**
                 * ?contact...
                 */
                else if (entry.target.classList == 'contact section') {
                    // Ancho y opacidad  del indicador de los botones del menú de navegación.
                    indicator.style.width = `${widthBtnContacto - 6}px`;
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