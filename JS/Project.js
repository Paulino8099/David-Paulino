
/**
 * *observador de linea horizontal animada
 */
observer()
function observer() {
    // observador de los contenedores animado para que cuando estos estén en la pantalla pues comiencen 
    // a animarse.
    let animateCicle = document.querySelector('.project .padding-box');

    const chargeAnimate = (entry, salida) => {
        entry.forEach((entradas) => {
            // cada vez que los contenedores de animación estén dentro de la pantalla, estos tendrán una animación.

            if (entradas.isIntersecting) {
                animateCicle.classList.add('active');
            } else {
                animateCicle.classList.remove('active');
            }
        });

    };

    const observador = new IntersectionObserver(chargeAnimate, {
        root: null,
        rootMargin: "25%",
    });

    observador.observe(animateCicle);
};