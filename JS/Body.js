
// // wath information navigator
// addEventListener('load', function () {
//     console.log(navigator);
// });

// observador
// obser();
function obser() {
    const imagen1 = document.querySelector('.messageDirect-container');

    const cargarImagen = (entry, salida) => {

        entry.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "0";
            } else {
                entrada.target.style.opacity = "1";
            }
        });
    };

    const observador = new IntersectionObserver(cargarImagen, {
        root: null,
        rootMargin: '500px 0px 100px 0px',
        threshold: 1.0
    });

    observador.observe(imagen1);
};

/**
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Barra Scroll¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Barra Scroll¦¦¦¦¦¦¦¦¦Barra Scroll¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Barra Scroll¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Barra Scroll¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Barra Scroll¦¦¦¦¦¦¦¦¦Barra Scroll¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Barra Scroll¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
*/
/**
 *? indicador de scrolleo
 */
// indicador de scrolleo en la parte izquierda de la página
window.addEventListener("scroll", function () {
    const getPixelsStart = () => document.documentElement.scrollTop || document.body.scrollTop;

    let indicatorScroll = document.querySelector(".indicatorScroll");
    let IndicadorScrollContent = document.querySelector('.indicatorScroll-content');
    let indicadorPorcentaje = document.querySelector(".porcentage-counter");

    let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let avanceScroll = Math.round((getPixelsStart() / alto) * 100);

    let scrollY = Math.round(window.scrollY);

    if (scrollY >= 5) {
        // activando todo el contenedor del scroll. 
        indicatorScroll.classList.add('active')
        IndicadorScrollContent.style.height = `${avanceScroll}%`;
        indicadorPorcentaje.innerHTML = ``;
        indicadorPorcentaje.innerHTML = `${avanceScroll - 1}`;
    }
    if (scrollY = 0 || scrollY < 5) {
        // desactivando todo el contenedor del scroll
        indicatorScroll.classList.remove('active');
    }
});


/**
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦btn Start¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦btn Start¦¦¦¦¦¦¦¦¦btn Start¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦btn Start¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦btn Start¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦btn Start¦¦¦¦¦¦¦¦¦btn Start¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦btn Start¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
*/
/**
* ?botón start...
*/
// todas las configuraciones del botón para volver al inicio de la página
window.addEventListener("scroll", function () {
    /**
    *?mostrar "btnStart"...
    */
    //función para calcular cuando debe de aparecer el botón para regresar al inicio de la página.
    btnStart();
    function btnStart() {
        // Dividiendo el alto de todo el documento entre 4 para así extraer solo el 25% del documento.
        let btnAutomatic = document.documentElement.scrollHeight / 4;
        // Cuando la barra vertical se haya movido un 25% de todo el documento el botón de inicio se va a mostrar. 
        document.querySelector('.btn-start').classList.toggle('on', scrollY >= btnAutomatic);
    };

    /**
    * ?subir un poco "btnStart"...
    */
    //función para calcular cuando el botón "home" tiene que moverse un poco hacia arriba para así evitar que tape o interfiera con el "footer".
    bottomBtnStart();
    function bottomBtnStart() {
        let footer = document.querySelector('.footer');
        let docElem = document.documentElement;

        // variables para detectar las diferentes alturas de la barra de escroleo vertical
        let scroll486 = (docElem.scrollTop >= docElem.scrollHeight - (footer.offsetHeight) - 486);
        let scroll780 = (docElem.scrollTop >= docElem.scrollHeight - (footer.offsetHeight) - 780);

        // si la barra de navegación vertical se ubica justamente en la posición donde se encuentra el footer, el btn de "home" se eleverá un poco hacia arriba (los "486" o los "780" es porque  estos se le agregan a la barra de escroleo de forma que desconozco, no sé porqué). Si el ancho del documento es menor que 650px, la función va a ler la segunda opción para ejecutar la función escrita (el btn se moverá hacia arriba)
        if (scroll486 || (docElem.scrollWidth < 650 && scroll780)) {
            document.querySelector('.btn-start').style.bottom = `${footer.offsetHeight + 10}px`;
        } else {
            document.querySelector('.btn-start').style.bottom = `10px`;
        };
    }
});


//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦darkMode¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦darkMode¦¦¦¦¦¦¦¦¦¦darkMode¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦darkMode¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦darkMode¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦darkMode¦¦¦¦¦¦¦¦¦¦darkMode¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦darkMode¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
darkModeBody();
function darkModeBody() {
    let btnDarkMode = document.querySelector('.btn-darkMode');

    /**
     * ?btn functions
     */
    btnDarkMode.addEventListener('click', function () {
        setOnOff();
        onOff();
    });
    /**
     * ?set onOff
     */
    //enviando encendido y apagado al localStorage para activar o desactivar el "darkMode" 
    function setOnOff() {
        if (localStorage.getItem('darkMode') === null) {
            localStorage.setItem('darkMode', '1');
        }
        if (localStorage.getItem('darkMode') == '1') {
            localStorage.setItem('darkMode', '0')
        }
        else if (localStorage.getItem('darkMode') == '0') {
            localStorage.setItem('darkMode', '1')
        }
    };

    /**
     * ?onOff darkMode
     */
    // activando el darkMode al dar click en btn "darkMode"
    onOff();
    function onOff() {
        if (localStorage.getItem('darkMode') == '1') {
            document.documentElement.style.setProperty('--bgdarkMode', '#1a2c2c'); //from white to darkGray
            btnDarkMode.classList.add('active'); //btn "darkMode"
            document.querySelector('.head').style.background = "url(../PNG/lineas-verdes-50.png)";
            document.querySelector('.padding-bottom').classList.add('darkMode');

        } else {
            document.documentElement.style.setProperty('--bgdarkMode', '#e4f5ef'); //from white to darkGray
            btnDarkMode.classList.remove('active'); //btn "darkMode"
            document.querySelector('.head').style.background = "url(../PNG/lineas-verdes-100.png)"; 
            document.querySelector('.padding-bottom').classList.remove('darkMode');
        };
    };
};