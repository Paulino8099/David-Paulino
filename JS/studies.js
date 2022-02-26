
let cards = document.querySelectorAll('.studies-content');

/**
 * ?abriendo los certificados
 */
//abrir los certificados de cada tarjeta al dar click en abrir
asideFunctions();
function asideFunctions() {
    let asideStudies = document.querySelector('.aside-studies');
    let titleAside = document.querySelector('.title-aside-studies');
    let mediaAside = document.querySelector('.media-aside-studies');
    let btnClose = document.querySelector('.btn-close-aside-studies');
    let backface = document.querySelector('.backface');

    cards.forEach((e) => {
        e.addEventListener('click', function (e) {
            console.log(e.target.parentNode.parentNode.parentNode.classList.value)

            /**
             * ?onOff aside float
             */
            if (e.target.classList.value == 'fa-solid fa-square-up-right') {
                // open aside (click btns)
                asideStudies.classList.add('active'); //aside studies (container)
                backface.classList.add('active'); //aside studies (container)
                // close aside (click btn)
                btnClose.addEventListener('click', function () {
                    asideStudies.classList.remove('active'); //aside studies (container)
                    backface.classList.remove('active'); //aside studies (container)
                });
                // close aside (click backface)
                backface.addEventListener('click', function () {
                    asideStudies.classList.remove('active'); //aside studies (container)
                    backface.classList.remove('active'); //aside studies (container)
                });
            }
            /**
             * ?card dpw
             */
            if ((e.target.parentNode.parentNode.parentNode.classList.value == 'microsoftOffice card-studies')) {
                console.log(e.target.classList.value)
                // title aside
                titleAside.innerHTML = `
                                        <h3>Diseñador De Páginas Web</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="./IMG/CertificadoDiseñoWeb.jpg" alt="">
                                        `;
            }
            /**
             * ?card pack office
             */
            if ((e.target.parentNode.parentNode.parentNode.classList.value == 'microsoftOffice card-studies')) {
                console.log(e.target.classList.value)
                // title aside
                titleAside.innerHTML = `
                                        <h3>Paquete de Oficina</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="./IMG/CertificadoPaqueteOffice.jpg" alt="">
                                        `;
            }
            /**
             * ?card window NT
             */
            if ((e.target.parentNode.parentNode.parentNode.classList.value == 'windowNT card-studies')) {
                console.log(e.target.classList.value);
                // title aside
                titleAside.innerHTML = `
                                        <h3>Window NT</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="./IMG/CertificadoWindowNT.jpg" alt="">
                                        `;
            }
            /**
             * ?card secundaria
             */
            if ((e.target.parentNode.parentNode.parentNode.classList.value == 'bachillerato card-studies')) {
                console.log(e.target.classList.value);
                // title aside
                titleAside.innerHTML = `
                                        <h3>Secundaria</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="./IMG/CertificadoBachiller.jpg" alt="">
                                        `;
            }
        });
    });
};