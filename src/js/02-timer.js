import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

let timerInput = document.getElementById("datetime-picker");
let buttonRun = document.getElementById("[data-start]")
let timerShow = document.getElementById(".timer");

// const timer = setInterval(function () {
//     seconds = timeMinut%60 // Получаем секунды
//     minutes = timeMinut/60%60 // Получаем минуты
//     hour = timeMinut/60/60%60 // Получаем часы
//     // Условие если время закончилось то...
//     if (timeMinut <= 0) {
//         // Таймер удаляется
//         clearInterval(timer);
//         // Выводит сообщение что время закончилось
//         alert("Время закончилось");
//     } else { // Иначе
//         // Создаём строку с выводом времени
//         let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
//         // Выводим строку в блок для показа таймера
//         timerShow.innerHTML = strTimer;
//     }
//     --timeMinut; // Уменьшаем таймер
// }, 1000)