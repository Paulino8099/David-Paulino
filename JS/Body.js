
// wath information navigator
addEventListener('load', function () {
    console.log(navigator.geolocation);
});


/**
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Actualización¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Actualización¦¦¦¦¦¦¦¦¦Actualización¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Actualización¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Actualización¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Actualización¦¦¦¦¦¦¦¦¦Actualización¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Actualización¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
*/

//DESACTIVAR LA VENTANA DE ACTUALIZACION=========================================================================
document.querySelector(".btn_cancelar").addEventListener("click", () => {
    document.querySelector('.actualización').classList.toggle('off');
});

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
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Comentarios¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Comentarios¦¦¦¦¦¦¦¦¦Comentarios¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Comentarios¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Comentarios¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Comentarios¦¦¦¦¦¦¦¦¦Comentarios¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Comentarios¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
 *todo¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
*/
// todas las configuraciones de los comentarios flotantes para cada elemento (Solo para dispositivos pc)
// wath information navigator

// identificando qué dispositivo es. El cógido solo se va a ejecutar si el dispositivo es una pc
let identificator = navigator.userAgent.toLocaleLowerCase();
if (identificator.search('windows') !== -1 || identificator.search('win') !== -1) { allConfigComment() }

function allConfigComment() {
    let commentsContainer = document.querySelector('.comments-container');
    let commentsContent = document.querySelector('.comments-content');

    /**
     * ?ventana  de mensajes...
     */
    // programando posición de la ventana flotante para mostrar mensajes al pasar cursor por "X" elementos
    commnentsFloat();
    function commnentsFloat() {
        document.addEventListener('mousemove', function (e) {
            let y = e.clientY;
            let x = e.clientX;

            commentsContainer.style.top = y + 10 + 'px';
            commentsContainer.style.left = x + 10 + 'px';
        });
    };

    /**
     * ?onOff 
     */
    //activando y desactivando ventana que describe la function para algunos de los elementos al pasar cursor
    onOff();
    function onOff() {

        /***
         * ?logo personal (title)...
         */
        // al pasar cursor por el "logo personal" de la página se mostrará la functión de dicho elemento
        logoPersonal();
        function logoPersonal() {
            let logoPersonal = document.querySelector('.logo-personal');

            // activando mensaje al posicionar el cursor encima del "logo personal" 
            logoPersonal.addEventListener('mouseover', function () {
                // solo se va a ejecutar este código si se ha hecho scroll hasta 100
                if (document.documentElement.scrollTop > 400) {
                    commentsContent.innerHTML = `
                                <div class="imgTitle-comments-area">
                                    <h3 class="title-comments"> 
                                    Inicio:
                                    </h3>
                                    <img src="PNG/homePortafolioDavidPaulino.png" alt="auto">
                                </div>
                                <p class="paragraph-comments">
                                    Volver al inicio de la página
                                </p>
                                `;
                    commentsContent.classList.add('active');
                };
            });

            // desactivando comentario del "logo personal" al sacar el cursor de este
            logoPersonal.addEventListener('mouseout', function () {
                commentsContent.classList.remove('active');
            });
        };

        /**
         * ?logo copyRight (title)...
         */
        // al pasar cursor por el "logo copyRight" (al lado del título principal) de la página se mostrará la functión de dichos elementos
        CopyRight();
        function CopyRight() {
            let logoCopyRight = document.querySelector('.copyRight-secundary');

            logoCopyRight.addEventListener('mouseover', function () {
                commentsContent.innerHTML = `
                    <div class="imgTitle-comments-area">
                        <h3 class="title-comments"> 
                            CopyRight:
                        </h3>
                        <img src="PNG/pie_pagina.png" alt="copyRigth pie de página">
                    </div>
                    <p class="paragraph-comments">
                        Ir al pie de la página donde se encuentra la información de derecho de autor
                    </p>
                    `;
                commentsContent.classList.add('active');
            });

            logoCopyRight.addEventListener('mouseout', function () {
                commentsContent.classList.remove('active');
            });
        };

        /**
         * ?btn start...
         */
        btnStart();
        function btnStart() {
            let btnStart = document.querySelector('.btn-start');

            // activando mensaje al posicionar el cursor encima del "btn start" 
            btnStart.addEventListener('mouseover', function () {
                commentsContent.innerHTML = `
                            <div class="imgTitle-comments-area">
                                <h3 class="title-comments"> 
                                Inicio:
                                </h3>
                                <img src="IMG/homePortafolioDavidPaulino.png" alt="auto">
                            </div>
                            <p class="paragraph-comments">
                                Volver al inicio de la página
                            </p>
                            `;
                commentsContent.classList.add('active');
            });

            // desactivando comentario del "btn start" al sacar el cursor de este
            btnStart.addEventListener('mouseout', function () {
                commentsContent.innerHTML = ``;
                commentsContent.classList.remove('active');
            });
        }
    };
};

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


/**
 *? ocultar ventana de actualización...
  */
//btn para ocultar la ventana de actualización
document.querySelector(".btn_cancelar").addEventListener("click", () => {
    document.querySelector('.actualización').classList.toggle('on');
});