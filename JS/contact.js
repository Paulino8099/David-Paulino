
let btnSend = document.querySelector('.btn-send-messageDirect');
let inputName = document.querySelector('.inputName-messageDirect');
let inputEmail = document.querySelector('.inputEmail-messageDirect');
let InputMessage = document.querySelector('.inputMessage-messageDirect');

btnSend.addEventListener('click', function () {
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
 * ?config name
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
 * ?config email
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
 * ?config message
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