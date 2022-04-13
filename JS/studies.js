
let cards = document.querySelectorAll('.studies-content');

/**
 * *abriendo los certificados
 */
//abrir los certificados de cada tarjeta al dar click en abrir
asideFunctions();
function asideFunctions() {
    let asideStudies = document.querySelector('.aside-studies');
    let titleAside = document.querySelector('.title-aside-studies');
    let mediaAside = document.querySelector('.media-aside-studies');
    let btnClose = document.querySelector('.btn-close-aside-studies');
    let backface = document.querySelector('.backface');
    let body = document.querySelector('body');
    let btnDownload = document.querySelector('.btn-download-aside-studies');

    cards.forEach((e) => {
        e.addEventListener('click', function (e) {
            let titleCard = e.target.parentNode.parentNode.children[0].children[0].innerText;
            let imgCard = e.target.parentNode.parentNode.children[2].children[2].children[0].src;
            let pdfCard = e.target.parentNode.parentNode.children[2].children[2].children[1].href;
            let descriptionCard = e.target.parentNode.parentNode.children[2].children[2].children[2].innerText;

            //title cards
            // console.log(titleCard);
            // // img cards
            // console.log(`imagen card: ${imgCard}` );
            // // pdf cards
            // console.log(`pdf card: ${pdfCard}`);
            // // description cards
            // console.log(`description card: ${descriptionCard}`);

            /**
             * ?onOff aside float
             */
            // cerrar ventana al dar click en btn close
            if (e.target.classList.value == 'fa-solid fa-square-up-right') {
                // open aside (click btns)
                asideStudies.classList.add('active'); //aside studies (container)
                backface.classList.add('active'); //aside studies (container)
                body.classList.add('backfaceOn');
                // close aside (click btn)
                btnClose.addEventListener('click', function () {
                    asideStudies.classList.remove('active'); //aside studies (container)
                    backface.classList.remove('active'); //aside studies (container)
                    body.classList.remove('backfaceOn');
                });
                // close aside (click backface)
                backface.addEventListener('click', function () {
                    asideStudies.classList.remove('active'); //aside studies (container)
                    backface.classList.remove('active'); //aside studies (container)
                    body.classList.remove('backfaceOn');
                });
            }
            /**
             * ?card dpw 
             */
            dpw();
            function dpw() {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${titleCard}</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="${imgCard}" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', `${pdfCard}`);
                btnDownload.setAttribute('download', `${descriptionCard}`);
            }
            /**
             * ?card pack office
             */
            officePack();
            function officePack() {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${titleCard}</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="${imgCard}" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', `${pdfCard}`);
                btnDownload.setAttribute('download', `${descriptionCard}`);
            }

            /**
             * ?card representante teléfonico
             */
            telephoneRepresentative();
            function telephoneRepresentative() {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${titleCard}</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="${imgCard}" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', `${pdfCard}`);
                btnDownload.setAttribute('download', `${descriptionCard}`);
            }
            /**
             * ?card prevención de lavado de dinero
             */
            moneyLaundering();
            function moneyLaundering() {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${titleCard}</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="${imgCard}" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', `${pdfCard}`);
                btnDownload.setAttribute('download', `${descriptionCard}`);
            }
            /**
             * ?card teamWork
             */
            teamWork();
            function teamWork() {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${titleCard}</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="${imgCard}" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', `${pdfCard}`);
                btnDownload.setAttribute('download', `${descriptionCard}`);
            }
            /**
         * ?card window NT
         */
            windowNT();
            function windowNT() {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${titleCard}</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="${imgCard}" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', `${pdfCard}`);
                btnDownload.setAttribute('download', `${descriptionCard}`);
            }
            /**
             * ?card secundaria
             */
            secundaria();
            function secundaria() {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${titleCard}</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="${imgCard}" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', `${pdfCard}`);
                btnDownload.setAttribute('download', `${descriptionCard}`);
            }
        });
    });
};


/**
 * *observador de linea horizontal animada
 */
observer()
function observer() {
    // observador de los contenedores animado para que cuando estos estén en la pantalla pues comiencen 
    // a animarse.
    let animateCicle = document.querySelector('.studies .padding-box');

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