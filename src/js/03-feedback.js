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
        Email: email.value,
        Message: message.value,
      })
    );
  }, 500)
);
let savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(savedData);

if (savedData) {
  (email.value = savedData.Email), (message.value = savedData.Message);
} else {
  (email.value = ''), (message.value = '');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.clear();
  console.log({
    Email: email.value,
    Message: message.value,
  });
  form.reset();
});
