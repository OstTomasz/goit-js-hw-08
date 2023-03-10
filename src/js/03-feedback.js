// import throttle from 'lodash.throttle';

const email = document.querySelector('form.feedback-form input[name="email"]');
const message = document.querySelector(
  'form.feedback-form textarea[name="message"]'
);
const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
  localStorage.setItem('feedback-form-state', [email.value, message.value]);
});

const savedEmail = localStorage.getItem('feedback-form-state'[0]);
console.log(savedEmail);
