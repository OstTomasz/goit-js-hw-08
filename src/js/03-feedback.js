import throttle from 'lodash.throttle';

const email = document.querySelector('form.feedback-form input[name="email"]');
const message = document.querySelector(
  'form.feedback-form textarea[name="message"]'
);
const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: email.value,
        message: message.value,
      })
    );
  }, 500)
);
let savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData) {
  (email.value = savedData.email), (message.value = savedData.message);
} else {
  (email.value = ''), (message.value = '');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.clear();
  console.log({
    email: email.value,
    message: message.value,
  });
  form.reset();
});
