
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
                    indicator.style.width = `${widthBtnEstudios}px`;
                    indicator.style.opacity = '1';

                    // distancia a trasladar el indicador en el menú de navegación. 
                    indicator.style.transform = `translateX(0px)`;
                }
                /**
                 * ?about me...
                 */
                else if (entry.target.classList == 'sobreMi section') {
                    // Ancho y opacidad  del indicador de los botones del menú de navegación.
                    indicator.style.width = `${widthBtnSobreMi}px`;
                    indicator.style.opacity = '1';

                    // Distancia a trasladar el indicador de los botones del menú de navegación.
                    indicator.style.transform = `translateX(${widthBtnEstudios + 3}px)`;
                }
                /**
                 * ?project...
                 */
                else if (entry.target.classList == 'project section') {
                    // Ancho y opacidad  del indicador de los botones del menú de navegación.
                    indicator.style.width = `${widthBtnproject}px`;
                    indicator.style.opacity = '1';

                    // Distancia a trasladar el indicador de los botones del menú de navegación.
                    indicator.style.transform = `translateX(${widthBtnEstudios + widthBtnSobreMi + 7}px)`;
                }
                /**
                 * ?contact...
                 */
                else if (entry.target.classList == 'contact section') {
                    // Ancho y opacidad  del indicador de los botones del menú de navegación.
                    indicator.style.width = `${widthBtnContacto}px`;
                    indicator.style.opacity = '1';

                    // Distancia a trasladar el indicador de los botones del menú de navegación.
                    indicator.style.transform = `translateX(${widthBtnEstudios + widthBtnSobreMi + widthBtnproject + 10}px)`;
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
 * ?onOff información personal
 */
onOffDataPerson();
function onOffDataPerson() {
    let dataFloat = document.querySelector('.myData-float');
    let btncancel = document.querySelector('.btn-back-datosPersonales');

    /**
     * ?onOff información personal (click img)
     */
    let imgNvagate = document.querySelector('.imgNavigate');
    imgNvagate.addEventListener('click', () => {
        dataFloat.classList.add('active');
        backface.classList.toggle('active');
    });
    /**
     * ?off información personal (click btn cancel)
     */
    btncancel.addEventListener('click', () => {
        dataFloat.classList.remove('active');
        backface.classList.remove('active');
    });
    /**
     * ?off información personal (click backface)
     */
    backface.addEventListener('click', () => {
        dataFloat.classList.remove('active');
        backface.classList.remove('active');
    });
};
