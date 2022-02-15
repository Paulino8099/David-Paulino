
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦Desktop¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
//  ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
let btnDarkMode = document.querySelector('.btn-darkMode');

/**
 * ?btn functions
 */
btnDarkMode.addEventListener('click', function () {
    setOnOff();
    onOff();
});

/**
 * ?set onOff
 */
//enviando encendido y apagado al localStorage para activar o desactivar el "darkMode" 
function setOnOff() {
    if (localStorage.getItem('darkMode') === null) {
        localStorage.setItem('darkMode', '1');
    }
    if (localStorage.getItem('darkMode') == '1') {
        localStorage.setItem('darkMode', '0')
    }
    else if (localStorage.getItem('darkMode') == '0') {
        localStorage.setItem('darkMode', '1')
    }
};

/**
 * ?onOff darkMode
 */
// activando el darkMode al dar click en btn
onOff();
function onOff() { 
    if (localStorage.getItem('darkMode') == '1') {
        btnDarkMode.classList.add('active'); //btn "darkMode"
        document.querySelector('.head').classList.add('darkMode'); //home bgImg
        document.documentElement.style.setProperty('--bgLightGreen', '#444444'); //from white to darkGray

    } else {
        btnDarkMode.classList.remove('active'); //btn "darkMode"
        document.querySelector('.head').classList.remove('darkMode') //home bgImg
        document.documentElement.style.setProperty('--bgLightGreen', '#ffffff') //from white to darkGray
    };
};