const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  if (event.currentTarget.elements.email.value == ''
  || event.currentTarget.elements.password.value == '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const logins = {};
    logins.email = event.currentTarget.elements.email.value;
    logins.password = event.currentTarget.elements.password.value;

    console.log(logins);  
    loginFormRef.reset();
  }
};

