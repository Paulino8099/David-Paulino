
// // wath information navigator
// addEventListener('load', function () {
//     console.log(navigator);
// });

/**
 * *indicador scroll
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
* *botón start
*/
// todas las configuraciones del botón para volver al inicio de la página
window.addEventListener("scroll", function () {
    let btnStart = document.querySelector('.btn-start');
    /**
    *?mostrar "btnStart"...
    */
    //función para calcular cuando debe de aparecer el botón para regresar al inicio de la página.
    btnStart1();
    function btnStart1() {
        // Dividiendo el alto de todo el documento entre 4 para así extraer solo el 25% del documento.
        let btnAutomatic = document.documentElement.scrollHeight / 4;
        // Cuando la barra vertical se haya movido un 25% de todo el documento el botón de inicio se va a mostrar. 
        btnStart.classList.toggle('active', scrollY >= btnAutomatic);
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
        let scroll486 = (docElem.scrollTop >= docElem.scrollHeight - (footer.offsetHeight) - 450);
        let scroll780 = (docElem.scrollTop >= docElem.scrollHeight - (footer.offsetHeight) - 700);

        // si la barra de navegación vertical se ubica justamente en la posición donde se encuentra el footer, el btn de "home" se eleverá un poco hacia arriba (los "486" o los "780" es porque  estos se le agregan a la barra de escroleo de forma que desconozco, no sé porqué). Si el ancho del documento es menor que 650px, la función va a leer la segunda opción para ejecutar la función escrita (el btn se moverá hacia arriba)
        if (scroll486 || ((docElem.scrollWidth <= 650) && (scroll780))) {
            btnStart.style.bottom = `${footer.offsetHeight}px`;
        } else {
            btnStart.style.bottom = `10px`;
        };

        // if (docElem.scrollWidth > 200) {
        //     console.log(docElem.scrollWidth)
        // }
    }
});
/**
 * *dark mode
 */
darkModeConfig();
function darkModeConfig() {
    let btnDarkMode = document.querySelector('.btn-darkMode');
    let btnDarkModeLogo = document.querySelector('.btn-darkMode-logo');

    /**
     * ?btn darkMode
     */
    btnDarkMode.addEventListener('click', function () {
        setOnOff();
        onOff();
    });
    /**
     * ? btn darkMode (Logo)
     */
    btnDarkModeL();
    function btnDarkModeL() {
        btnDarkModeLogo.addEventListener('click', function () {
            setOnOff();
            onOff();
        });
        //el btn solo va a aparecer cuando el usario haya hecho X cantidad de scroll
        window.addEventListener('scroll', function () {
            let head = document.querySelector('.head');

            if (document.documentElement.scrollTop > head.offsetHeight) {
                btnDarkModeLogo.style.opacity = '1';
            } else {
                btnDarkModeLogo.style.opacity = '0';
            }
        });
    };
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
            /**
             * *bg
             */
            document.documentElement.style.setProperty('--bgdarkMode', '#1a2c2c');
            document.documentElement.style.setProperty('--bgWhite', '#222222');
            document.documentElement.style.setProperty('--bgBlack50', '#ffffff40');

            /**
             * *color
             */
            document.documentElement.style.setProperty('--colorWhite', '#222222');

            /**
             * *text
             */
            document.documentElement.style.setProperty('--textGray2', '#ffffff');
            document.documentElement.style.setProperty('--textGray1', '#ffffffbf');
            document.documentElement.style.setProperty('--textBlack', '#ffffff');

            /**
             * *special
             */
            //texto del texto del código QR de "gitHub"
            document.querySelector('.content-gitHubQR').children[1].style.color = '#505050';

            /**
             * *option
             */
            btnDarkMode.classList.add('active');
            btnDarkModeLogo.classList.add('active');
            document.querySelector('.head').classList.add('darkMode');
        } else {
            /**
             * *bg
             */
            document.documentElement.style.setProperty('--bgdarkMode', '#e4f5ef');
            document.documentElement.style.setProperty('--bgWhite', '#ffffff');
            document.documentElement.style.setProperty('--bgBlack50', '#00000040');

            /**
             * *color
             */
            document.documentElement.style.setProperty('--colorWhite', '#ffffff');

            /**
             * *text
             */
            document.documentElement.style.setProperty('--textGray2', '#444444');
            document.documentElement.style.setProperty('--textGray1', '#777777');
            document.documentElement.style.setProperty('--textBlack', '#000000');

            /**
             * *special
             */
            //texto del texto del código QR de "gitHub"
            document.querySelector('.content-gitHubQR').children[1].style.color = '#202020';

            /**
             * *option
             */
            btnDarkMode.classList.remove('active'); //btn "darkMode"
            btnDarkModeLogo.classList.remove('active'); //btn darkMode del logo 
            document.querySelector('.head').classList.remove('darkMode');
        };
    };
};