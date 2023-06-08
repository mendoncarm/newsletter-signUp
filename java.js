const buttonOne = document.querySelector('#botao')
const containerOne = document.querySelector('#container-all-informations')
const divMain = document.querySelector('#all')
const divMessage = document.querySelector('#okMessage')
const errorMessage = document.querySelector('#errorMessage')

var spanEmail = document.querySelector('#spanEmail')
const inputEmail = document.querySelector('#email-input')

/*buttonOne.addEventListener('click', ()=>{
    var email = spanEmail.value

    if(validateEmail(email)){
        containerOne.classList.add('opacity');
        divMain.classList.add('animation-botao-clicado');

        setTimeout(()=>{
            divMain.style.display='none';
            divMessage.style.display='block';
        },2000)
        spanEmail.innerHTML = inputEmail.value
    }else{
        inputEmail.classList.add('border-input')
    }
})


function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }*/

  buttonOne.addEventListener('click', () => {
    var email = inputEmail.value;
  
    if (validateEmail(email)) {
      containerOne.classList.add('opacity');
      divMain.classList.add('animation-botao-clicado');
  
      setTimeout(() => {
        divMain.style.display = 'none';
        divMessage.style.display = 'block';
        spanEmail.innerHTML = email; // Corrigido: usar a variável 'email' em vez de 'inputEmail.value'
      }, 2000);
    } else {
      inputEmail.style.border='0.1em solid hsla(0, 100%, 58%, 0.911)'
      errorMessage.style.display = 'block';
    }
  });
  
  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  