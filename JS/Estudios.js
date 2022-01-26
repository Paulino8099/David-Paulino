

let contentStudies = document.querySelector('.study-content').children;

// Contenedor de información 
let containerInfo = document.querySelector('.info-container');

// Titulo del contenedor de información.
let titleInfo = document.getElementById('title-info');

// Información a mostrar dentro del contenedor para mostrar todo tipo de información de toda la página.
let información = document.getElementById('info');

for (let i = 0; i < contentStudies.length; i++) {
    btnVerMas();
    function btnVerMas() {
        // buscando todos los botones "ver mas" que se encuentran en las cards para agregarles un evento click.
        let botonesVerMas = contentStudies[i].children[0].children[2].children[1];

        // buscando el titulo de cada tarjeta
        let titleCards = contentStudies[i].children[0].children[0].childNodes[0].nodeValue;

        botonesVerMas.addEventListener('click', () => {
            
            rellenoInfo();
            function rellenoInfo() {
                // Diseño de páginas web
                if (titleCards == 'Diseño de Páginas Web') {
                    containerInfo.classList.add('on');
            
                    titleInfo.innerHTML = `Diseño de Páginas Web`;
                    información.innerHTML = `<img src="IMG/CertificadoDiseñoWeb.jpg" alt="Certificado.">`;
                }
                // Paquete Office 
                else if (titleCards == 'Paquete de Oficina') {
                    containerInfo.classList.add('on');
            
                    titleInfo.innerHTML = `Paquete de Oficina (Microsoft Office)`;

                    información.innerHTML += `<img class="moveRight" id="CertificadoPowerPoint" src="IMG/CertificadoPowerPoint.jpg" alt="Certificado.">`;

                    información.innerHTML += `<img id="CertificadoPaqueteOffice" src="IMG/CertificadoPaqueteOffice.jpg" alt="Certificado.">`;

                    // Activando los botones de navegación.
                    document.querySelector('.btn-back-info').classList.add('on');
                    document.querySelector('.btn-next-info').classList.add('on');

                    // Agrengando eventos a los botones de navegación.
                    // Botón para adelantar.
                    document.querySelector('.btn-next-info').addEventListener('click', () => {
                        document.getElementById('CertificadoPaqueteOffice').classList.add('moveLeft');

                        document.getElementById('CertificadoPowerPoint').classList.add('moveCenter');
                    });
                    // Botón para retroceder.
                    document.querySelector('.btn-back-info').addEventListener('click', () => {
                        document.getElementById('CertificadoPaqueteOffice').classList.remove('moveLeft');
                        
                        document.getElementById('CertificadoPowerPoint').classList.remove('moveCenter');
                    });

                }
                // Window NT
                else if (titleCards == 'Window-NT') {
                    containerInfo.classList.add('on');
            
                    titleInfo.innerHTML = ` Cetificado Window-NT`;
                    información.innerHTML = `<img src="IMG/CertificadoWindowNT.jpg" alt="Certificado.">`;;
                }
                // Auxiliar de Ventas
                else if (titleCards == 'Auxiliar de Ventas') {
                    containerInfo.classList.add('on');
            
                    titleInfo.innerHTML = ` Auxiliar de Ventas`;
                    información.innerHTML = `<img src="IMG/CertificadoAuxiliarVentas.jpg" alt="Certificado.">`;;
                }
                // Bachillerato
                else if (titleCards == 'Bachillerato') {
                    containerInfo.classList.add('on');
            
                    titleInfo.innerHTML = ` Bachillerato`;
                    información.innerHTML = `<img src="IMG/CertificadoBachiller.jpg" alt="Certificado.">`;;
                }
                // Diseño
                else if (titleCards == 'Diseño') {
                    containerInfo.classList.add('on');
            
                    titleInfo.innerHTML = ` Diseño`;
                    información.innerHTML = `<img src="IMG/CertificadoAuxiliarVentas.jpg" alt="Certificado.">`;;
                }
            }
        });
    }
}

btnSalir();
function btnSalir() {
    document.querySelector('.btn-leaveInfo').addEventListener('click', () => {
        containerInfo.classList.remove('on');
        
                    // Desactivando los botones de navegación.
                    document.querySelector('.btn-back-info').classList.remove('on');
                    document.querySelector('.btn-next-info').classList.remove('on');
    });

}


