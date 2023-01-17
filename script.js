const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const weekDay = document.querySelector(".week-day");
const dayToday = document.querySelector(".days");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const clock = document.querySelector(".clock");
const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");
const timer = document.querySelector(".timer");
const dateToday = new Date();
let hour = 0;
let swapApp = false;

//relógio

const time = setInterval(function clock() {
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = dateTime.getMinutes();

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }

  hour = hr + ":" + min;

  hours.innerHTML = hr;
  minutes.innerHTML = min;
});

//funções

function toggleBtns() {
  btnPlay.classList.toggle("hide");
  btnPause.classList.toggle("hide");
  btnReset.classList.toggle("hide");
}

function toggleClock() {
  clock.classList.toggle("hide");
}

function toggleTimer() {
  timer.classList.toggle("hide");
}

function swapTimer() {
  if (swapApp == false) {
    toggleClock();
    toggleTimer();
    toggleBtns();
    timer.innerHTML = "00:00:00";
    swapApp = true;
  } 
}

function swapClock() {
  if(swapApp == true && swapPlay == false && swapPause == false) {
    toggleTimer();
    toggleClock();
    toggleBtns();
    swapApp = false;
  }
}


//Data e dia da semana

let dToday = dateToday.getDate();
let monthNow = dateToday.getMonth() + 1;
let yearNow = dateToday.getFullYear();
let dayNumber = dateToday.getDay();
let days = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sabado",
];

if(dToday < 10){
  dToday = "0" + dToday;
}

if(monthNow > 12){
  monthNow = 1;
}

if(monthNow < 10){
  monthNow = "0" + monthNow;
}

let dayString = days[dayNumber];

dayToday.innerHTML = dToday;
month.innerHTML = monthNow;
year.innerHTML = yearNow;
weekDay.innerHTML = dayString;
