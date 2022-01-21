
//DESACTIVAR LA VENTANA DE ACTUALIZACION=========================================================================
document.querySelector(".btn_cancelar").addEventListener("click", () => {
  document.querySelector('.actualización').classList.toggle('off');
});

/**
 *? indicador de scroleo
 */
window.addEventListener("scroll", function () {
  const getPixelsStart = () => document.documentElement.scrollTop || document.body.scrollTop;

  let containerIndicadorscroll = document.querySelector(".caja-container-indicadorScroll");
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
* ?botón para volver al inicio de la página
*/
window.addEventListener("scroll", function () {
  /**
  *?función para calcular cuando debe de aparecer el botón para regresar al inicio de la página.
  */
  btnStart();
  function btnStart() {
    // Dividiendo el alto de todo el documento entre 4 para así extraer solo el 25% del documento.
    let btnAutomatic = document.documentElement.scrollHeight / 4;
    // Cuando el vertical se haya movido un 25% de todo el documento el botón de inicio se va a mostrar. 
    document.querySelector('.btn-start').classList.toggle('on', scrollY >= btnAutomatic);
  };

  /**
  * ?función para calcular cuando el botón "home" tiene que moverse un poco hacia arriba para así evitar que tape o interfiera con el "footer".
  */
  bottomBtnStart();
  function bottomBtnStart() {
    let footer = document.querySelector('.footer');

    let head = document.querySelector('.head').offsetHeight;
    let estudios = document.querySelector('.estudios').offsetHeight;
    let sobreMi = document.querySelector('.sobreMi').offsetHeight;
    let contacto = document.querySelector('.contacto').offsetHeight;

    document.documentElement.scrollTop >= head + estudios + sobreMi + contacto

    // si la barra de navegación se ubica justamente en la posición donde se encuentra el footer, el btn de "home" se eleverá un poco (los "486" es porque  estos se le agregan a la barra de forma que desconozco)
    if (document.documentElement.scrollTop >= document.documentElement.scrollHeight - (footer.offsetHeight) - 486) {
      document.querySelector('.btn-start').style.bottom = `${footer.offsetHeight + 10}px`;
    } else {
      document.querySelector('.btn-start').style.bottom = `10px`;
    };
  }
});

/**
 *? botón para ocultar ventana de actualización.
  */ 
document.querySelector(".btn_cancelar").addEventListener("click", () => {
  document.querySelector('.actualización').classList.toggle('on');
});