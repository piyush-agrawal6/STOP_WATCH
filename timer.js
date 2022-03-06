var seconds = document.querySelector(".seconds");
var miliseconds = document.querySelector(".miliseconds");
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");

var sec = 0;
var milisec = 0;

var timeInterval;

const timer = () => {
  milisec++;

  if (milisec < 9) {
    miliseconds.innerHTML = "0" + milisec;
  }
  if (milisec > 9) {
    miliseconds.innerHTML = milisec;
  }
  if (milisec > 99) {
    sec++;
    seconds.innerHTML = "0" + sec;
    milisec = 0;
    miliseconds.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    seconds.innerHTML = sec;
  }
};

// start

start.addEventListener("click", () => {
  timeInterval = setInterval(timer, 10);
});

// stop

stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});

// reset

reset.addEventListener("click", () => {
  clearInterval(timeInterval);
  sec = "00";
  milisec = "00";
  seconds.innerHTML = sec
  miliseconds.innerHTML = milisec
});
