
let btnSend = document.querySelector('.btn-send-messageDirect');
let inputName = document.querySelector('.inputName-messageDirect');
let inputEmail = document.querySelector('.inputEmail-messageDirect');
let InputMessage = document.querySelector('.inputMessage-messageDirect');

/**
 * *btn enviar datos
 */
btnSend.addEventListener('click', function () {
    // btn send para enviar datos de los imputs
    inputNameConfig();
    inputEmailConfig();
    inputMessageConfig();

    if (inputName.value != '' && inputEmail.value != '' && InputMessage.value != '') {
        // datos a enviar por parte del usuario al dar click en "btn send" siempre y cuando no haya ningún campo vacío
        btnSend.setAttribute('href', `mailto:dapa7928@gmail.com?subject=Mi nombre es ${inputName.value}. Mi correo electrónico es ${inputEmail.value}&body=${InputMessage.value}`);

        // borrando valores de los inputs al hacer click en "btn send" siempre y cuando no haya nigún campo vacío
        inputName.value = "";
        inputEmail.value = "";
        InputMessage.value = "";
    } else if (inputName.value == '' || inputEmail.value == '' || InputMessage.value == '') {
        btnSend.removeAttribute('href');
    }
});


/**
 * *observador de imagen
 */
observer();
function observer() {
    // observador de la imagen del contenedor de "mensaje directo"
    const img = document.querySelector('.img-area-messageDirect');

    const cargarImagen = (entry, salida) => {

        entry.forEach((entradas) => {
            if (entradas.isIntersecting) {
                entradas.target.style.transform = "translateX(0) rotate(0)";
                entradas.target.style.transition = "3s";
                entradas.target.style.opacity = "1";
            } else {
                entradas.target.style.transform = "translateX(50%) rotate(60deg)";
                entradas.target.style.transition = "0";
                entradas.target.style.opacity = "0";
            };
        });
    };

    const observador = new IntersectionObserver(cargarImagen, {
        root: null,
        rootMargin: '25%'
    });

    observador.observe(img);
};

/**
 * *config name
 */
function inputNameConfig() {
    if (inputName.value == '') {
        inputName.setAttribute('placeholder', '¡Inserte un nombre!');
        inputName.classList.add('active');
    }
    inputName.addEventListener('click', function () {
        inputName.setAttribute('placeholder', 'Nombre');
        inputName.classList.remove('active');
    });
}
/**
 * *config email
 */
function inputEmailConfig() {
    if (inputEmail.value == '') {
        inputEmail.setAttribute('placeholder', '¡inserte una dirección email!')
        inputEmail.classList.add('active');
    }
    inputEmail.addEventListener('click', function () {
        inputEmail.setAttribute('placeholder', 'Dirección Email');
        inputEmail.classList.remove('active');
    });
}
/**
 * *config message
 */
function inputMessageConfig() {
    if (InputMessage.value == '') {
        InputMessage.setAttribute('placeholder', '¿Dejará este campo vacío?');
        InputMessage.classList.add('active');
    };
    InputMessage.addEventListener('click', function () {
        InputMessage.setAttribute('placeholder', 'Mensaje');
        InputMessage.classList.remove('active');
    });
}