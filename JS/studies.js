
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
    let body = document.querySelector('body');
    let btnDownload = document.querySelector('.btn-download-aside-studies');

    cards.forEach((e) => {
        e.addEventListener('click', function (e) {
            let titleCard = e.target.parentNode.parentNode.children[0].children[0].childNodes[0].nodeValue;

            console.log(e.target.parentNode.parentNode.parentNode.classList.value);

            /**
             * ?onOff aside float
             */
            if (e.target.classList.value == 'fa-solid fa-square-up-right btnRipples') {
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
            if ((e.target.parentNode.parentNode.parentNode.classList.value == 'dpw card-studies')) {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${ titleCard }</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="./IMG/CertificadoDiseñoWeb.jpg" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', './PDF/dpw-certificado(David Paulino).pdf')
                btnDownload.setAttribute('download', 'Certificado Diseñador de Páginas Web (David paulino)')
            }
            /**
             * ?card pack office
             */
            if ((e.target.parentNode.parentNode.parentNode.classList.value == 'microsoftOffice card-studies')) {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${ titleCard }</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="./IMG/CertificadoPaqueteOffice.jpg" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', './PDF/mpoi-certificado(David Paulino).pdf')
                btnDownload.setAttribute('download', 'Certificado Paquete de Oficina (David paulino)')
            }
            /**
             * ?card representante teléfonico
             */
            if ((e.target.parentNode.parentNode.parentNode.classList.value == 'representTel card-studies')) {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${ titleCard }</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="./PNG/certificado-representante-telefonico(DavidPaulino)-8.png" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', './PDF/Representante-telefónico-certificado-(David Paulino).pdf')
                btnDownload.setAttribute('download', 'Certificado Representante Teléfonico (David paulino)')
            }
            /**
             * ?card window NT
             */
            if ((e.target.parentNode.parentNode.parentNode.classList.value == 'windowNT card-studies')) {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${ titleCard }</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="./IMG/CertificadoWindowNT.jpg" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', './PDF/window-nt(David Paulino).pdf')
                btnDownload.setAttribute('download', 'Certificado de Window NT (David paulino)')
            }
            /**
             * ?card secundaria
             */
            if ((e.target.parentNode.parentNode.parentNode.classList.value == 'secundary card-studies')) {
                // title aside
                titleAside.innerHTML = `
                                        <h3>${ titleCard }</h3>
                                        `;
                // media aside
                mediaAside.innerHTML = `
                                        <img src="./IMG/CertificadoBachiller.jpg" alt="">
                                        `;
                // download
                btnDownload.setAttribute('href', './PDF/secundaria-certificado(David Paulino).pdf')
                btnDownload.setAttribute('download', 'Certificado de Conclusión de Estudios Medios (David paulino)')
            }
        });
    });
};