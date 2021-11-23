import { Notify } from 'notiflix/build/notiflix-notify-aio';
const el = {
  form: document.querySelector('form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    resolve({ position, delay });
  } else {
    // Reject
    reject({ position, delay });
  }
}
console.log(createPromise);
createPromise(1000, 2);
