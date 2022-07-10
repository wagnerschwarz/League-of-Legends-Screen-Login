
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const handleFocus = ( { target } ) => {
    //o target traz o input encontrado com a classe input, mas queremos adicionar a classe span-active no SPAN, para isso vamos acessar buscando o 'irmão anterior do input'
    //usando o previousElementSibling
    const span = target.previousElementSibling;
    span.classList.add('span-active'); 
} 

const handleFocusOut = ( { target } ) => {

    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }

   
}

const handleChangeInput = () => {

    //esse destruction no array, esta pegando o primeiro input e colocado dentro do primeiro parametro q vc definiu, no caso 'username' e dps o segundo input para o segundo parametro...etc
     const [username, password] = inputs;

     //se username possui valor e a senha é maior q 8 digitos...etc
     if (username.value && password.value.length >=8) {
        button.removeAttribute('disabled');
     } else {
        button.setAttribute('disabled', '');
     }
}

inputs.forEach((input)=> input.addEventListener('focus', handleFocus)); 
inputs.forEach((input)=> input.addEventListener('focusout', handleFocusOut)); 
inputs.forEach((input)=> input.addEventListener('input', handleChangeInput)); 
