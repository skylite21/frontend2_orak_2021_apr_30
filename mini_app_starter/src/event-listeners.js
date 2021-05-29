
import renderInnerPage from './pages/inner-page';
import renderLoginPage from './pages/login-page';
import renderForgotPasswordPage from './pages/forgot-password-page';

import { signUp, signIn, resetPassword, signOut } from './auth';

import { addData, getData } from './database';

// event bubbling
document.querySelector('#root').addEventListener('click', e => {
  e.preventDefault();

  if(e.target.closest('.top-buttons .button-right')) {
    document.querySelector('.block-sign-up').classList.remove('js-hidden');
    document.querySelector('.block-log-in').classList.add('js-hidden');
    document.querySelector('.top-buttons .active').classList.add('js-left-50');
  }
  if(e.target.closest('.top-buttons .button-left')) {
    document.querySelector('.block-sign-up').classList.add('js-hidden');
    document.querySelector('.block-log-in').classList.remove('js-hidden');
    document.querySelector('.top-buttons .active').classList.remove('js-left-50');
  }

  if(e.target.closest('#signUpButton')) {
    const email = document.querySelector('#signUpEmail').value;
    const password = document.querySelector('#signUpPassword').value;
    const verifyPassword = document.querySelector('#verifySignUpPassword').value;

    if (password === verifyPassword) {
      signUp(email, password).then( user => {
        if(user) {
          renderInnerPage();
        } else {
          renderLoginPage();
        }
      });
    } else {
      window.alert('passwords don\'t match');
    }
  }

  if(e.target.closest('#loginButton')) {
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;
    console.log(email, password);
    const user = signIn(email, password).then( user => {
      if (user) {
        renderInnerPage();
      }
    });
  }
  
  if(e.target.closest('#forgotPassword')) {
    renderForgotPasswordPage();
  }
  if(e.target.closest('#backToLoginPage')) {
    renderLoginPage();
  }

  if(e.target.closest('#resetPasswordButton')) {
    const email = document.querySelector('#forgotPasswordEmail').value;
    resetPassword(email);
    renderLoginPage();
  }

  if(e.target.closest('#signOutButton')) {
    // signOut().then( () => renderLoginPage() );
    signOut().then( renderLoginPage );
  }

  if(e.target.closest('#addData')) {
  // megnyomták az add data gombot:
    const dataToAdd = document.querySelector('#dataToAdd').value;
    addData({licensePlate: dataToAdd});
  }

  if(e.target.closest('#getData')) {
    getData().then( data => {
      for (const plate of data) {
        if('licensePlate' in plate) {
          console.log(plate);
          const plateHTML = `
            <div class='plate'>${plate.licensePlate}</div>
        `;
          document.querySelector('#results').insertAdjacentHTML('beforeend', plateHTML);
        }
      }
    });
  }


});
