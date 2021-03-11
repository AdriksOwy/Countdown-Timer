const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYear = "30 Jul 2021";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;
}