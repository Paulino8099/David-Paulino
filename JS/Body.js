

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
 *? indicador de scroleo
 */
window.addEventListener("scroll", function () {
  const getPixelsStart = () => document.documentElement.scrollTop || document.body.scrollTop;

  let containerIndicadorscroll = document.querySelector(".indicatorScroll-container");
  let IndicadorScroll = document.querySelector('.indicadorScroll');
  let indicadorPorcentaje = document.querySelector(".contador-porcentaje");

  let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let avanceScroll = Math.round((getPixelsStart() / alto) * 100);

  let scrollY = Math.round(window.scrollY);

  if (scrollY >= 5) {
    // activando todo el contenedor del scroll. 
    containerIndicadorscroll.classList.add('on')
    IndicadorScroll.style.height = `${avanceScroll}%`;
    indicadorPorcentaje.innerHTML = ``;
    indicadorPorcentaje.innerHTML = `${avanceScroll - 1}`;
  }
  if (scrollY = 0 || scrollY < 5) {
    // desactivando todo el contenedor del scroll
    containerIndicadorscroll.classList.remove('on');
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
allConfigComment();
function allConfigComment() {
  let commentsContainer = document.querySelector('.comments-container');
  let commentsContent = document.querySelector('.comments-content');

  /**
   * ?ventana  de mensajes...
   */
  // ventana especial para mostrar mensajes cunado se pase el cursor por "x" elementos
  commnentsFloat();
  function commnentsFloat() {
    document.addEventListener('mousemove', function (e) {
      let y = e.clientY;
      let x = e.clientX;

      commentsContainer.style.top = y + 10 + 'px';
      commentsContainer.style.left = x + 10 + 'px';
    });
  };

  /***
   * ?titulo principal...
   */
  // cuando se pase el cursor por el titulo de la página se mostrará el siguiente mensaje
  titlePrimary();
  function titlePrimary() {
    let titleHead = document.querySelector('.title-head-container');
    // activando mensaje al poner el cursor encima del titulo principal 
    titleHead.addEventListener('mouseover', function () {
      // solo se va a ejecutar este código si el ancho de pantalla es mayor "750px"
      if (document.documentElement.offsetWidth >= 750) {
        commentsContent.innerHTML = `
                                  <h3 class="title-comments">
                                    Portafolio
                                  </h3>
                                  <p class="paragraph-comments">
                                    Título principal de la página
                                  </p>
                                  <div class="img-comments">
                                      <img src="" alt="auto">
                                  </div>
                                  `;
        commentsContent.classList.add('active');
      };
    });

    // desactivando comentario del titulo principal al sacar el cursor de este 
    titleHead.addEventListener('mouseout', function () {
      // solo se va a ejecutar este código si el ancho de pantalla es mayor "750px"
      if (document.documentElement.offsetWidth >= 750) {
        commentsContent.innerHTML = ``;
        commentsContent.classList.remove('active');
      };
    });
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