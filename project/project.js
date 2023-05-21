const formInputs = document.querySelectorAll('.input');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');
const userPermission = document.getElementById('checkbox');

function createError(input, text) {
    const parent = input.parentNode;
    const errorElement = document.createElement('label');
    errorElement.className = 'errorMessage';
    errorElement.textContent = text;
    input.classList.add('error');
    parent.append(errorElement);
}

function removeError(input) {
    const parent = input.parentNode;
    if (input.classList.contains('error')) {
        parent.querySelector('.errorMessage').remove();
        input.classList.remove('error');
    }
}

function validateEmail() {
    let emailStandard = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (userEmail.value.match(emailStandard)) {
        removeError(userEmail);
    } else if (userEmail.value !== '') {
        createError(userEmail, 'Проверьте корректность введённых данных');
    }
}

function validatePassword() {
    let passwordStandard = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (userPassword.value.match(passwordStandard)) {
        removeError(userPassword);
    } else if (userPassword.value.length < 8 && userPassword.value !== '') {
        createError(userPassword, 'Минимальное кол-во символов: 8');
    } else {
        createError(userPassword, 'Пароль должен содержать от 8 символов, прописную букву, строчную букву, цифру и спецсимвол: @$!%*?&');
    }
}

/*if (userPassword.value === passwordRepeat.value) {
    removeError(userPassword);
    removeError(passwordRepeat);
} else {
    userPassword.classList.add('error');
    createError(passwordRepeat, 'Пароль не совпадает');
}*/


function validatePermission() {
    if (userPermission.checked === false) {
        createError(userPermission, 'Подтвердите ознакомленность и согласие');
    } else {
        removeError(userPermission);
    }
}

function checkRegistration() {

    let result = true;

    formInputs.forEach(function (input) {
        if (input.value === '') {
            createError(input, 'Поле не заполнено');
            result = false;
        } else {
            removeError(input);
        }
    })

    validateEmail();
    validatePermission();
    validatePassword();

    /*if (все валидации return true, тогда добавить в хранилище данные)
    let email = userEmail.value;
    let password = userPassword.value;

    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));*/
}


/* 
function checkAuthorization() {
    const savedInfo = localStorage.getItem('user', JSON.parse(user));
    if (userEmail.value(введённые данные) == user.email(сохранённые данные) && userPassword.value == user.password) {
        alert('Авторизация произведена успешно!');
    } else {
        alert('Введены неверные данные');
    }
}
*/
