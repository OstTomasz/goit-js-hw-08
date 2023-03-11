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
        svdEmail: email.value,
        svdMessage: message.value,
      })
    );
  }, 500)
);
let savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(savedData);

if (savedData) {
  (email.value = savedData.svdEmail), (message.value = savedData.svdMessage);
} else {
  (email.value = ''), (message.value = '');
}

form.addEventListener('submit', () => {
  localStorage.clear();
});
