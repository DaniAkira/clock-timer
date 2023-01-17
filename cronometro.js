let min = 0;
let sec = 0;
let mili = 0;
let interval;
let swapPlay = false;
let swapPause = false;

//swapPlay true-rodando false-pausado   swapPause false aparecendo

function zero(num) {
  if (num < 10) {
    return "0" + num;
  } else return num;
}

function play() {
  if (swapPlay == false) {
    interval = setInterval(start, 10);
    btnPlay.classList.toggle("hide");
    swapPlay = true;
    if (swapPause == true) {
      btnPause.classList.toggle("hide");
      swapPause = false;
    }
  }
}

function start() {
  mili++;
  if (mili == 100) {
    sec++;
    mili = 0;
    if (sec == 60) {
      min++;
      sec = 0;
    }
  }

  timer.innerHTML = zero(min) + ":" + zero(sec) + ":" + zero(mili);
}

function pause() {
  if (swapPlay == true) {
    clearInterval(interval);
    btnPlay.classList.toggle("hide");
    btnPause.classList.toggle("hide");
    swapPlay = false;
    swapPause = true;
  }
}

function reset() {
  if (swapPlay == true) {
    clearInterval(interval);
    btnPlay.classList.toggle("hide");
    min = 0;
    sec = 0;
    mili = 0;
    timer.innerHTML = "00:00:00";
    swapPlay = false;
  } else {
    timer.innerHTML = "00:00:00";
    min = 0;
    sec = 0;
    mili = 0;
    if (swapPause == true) {
      btnPause.classList.toggle("hide");
      swapPause = false;
    }
  }
}
