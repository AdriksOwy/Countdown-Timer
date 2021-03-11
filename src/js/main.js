const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secondsElement = document.getElementById("seconds");

const newYear = "30 Jul 2021";

countdown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = TimeChange(hours);
    minsElement.innerHTML = TimeChange(mins);
    secondsElement.innerHTML = TimeChange(seconds);
}

countdown();

function TimeChange(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);

window.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

window.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === 85) {
    event.preventDefault();
  }
});

document.onreadystatechange = () => {
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector("#loader").style.visibility = "visible"; 
  } else { 
      document.querySelector("#loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible";
  } 
};