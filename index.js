setInterval(setClock, 1000);
const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

function setClock() {
  const date = new Date();
  let seconds = date.getSeconds() / 60;
  let minute = (seconds + date.getMinutes()) / 60;
  let hours = (minute + date.getHours()) / 12;
  clockRotate(secondHand, seconds);
  clockRotate(minuteHand, minute);
  clockRotate(hourHand, hours);
}

const clockRotate = (value, deg) => {
  value.style.setProperty("--rotation", deg * 360);
};
setClock();
