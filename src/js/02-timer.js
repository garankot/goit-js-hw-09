import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};
let intervalId = null;
const delay = 1000;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() < selectedDates[0].getTime()) {
      refs.startBtn.removeAttribute('disabled');
    } else {
      Notify.failure('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', 'true');
    }
  },
};
const timerFlatpickr = flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', onStartBtn);

function onStartBtn() {
  const selectedDate = timerFlatpickr.selectedDates[0];
  if (selectedDate <= Date.now()) {
    return;
  }
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedDate - currentTime;
    if (deltaTime - delay < 0) {
      clearInterval(intervalId);
    }
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    updateTime({ days, hours, minutes, seconds });
  }, delay);
  refs.startBtn.setAttribute('disabled', 'true');
  refs.input.setAttribute('disabled', 'true');
}

function updateTime({ days, hours, minutes, seconds }) {
  refs.dataDays.textContent = `${days}`;
  refs.dataHours.textContent = `${hours}`;
  refs.dataMinutes.textContent = `${minutes}`;
  refs.dataSeconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
