const hour = document.getElementById(`hour`);
const minute = document.getElementById(`minute`);
const second = document.getElementById(`second`);

const clock = () => {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let mins = fullDate.getMinutes();
  let secs = fullDate.getSeconds();

  if (hours < 10) {
    hours = `0` + hours;
  }
  if (mins < 10) {
    mins = `0` + mins;
  }
  if (secs < 10) {
    secs = `0` + secs;
  }

  hour.textContent = hours;
  minute.textContent = `: ${mins}`;
  second.textContent = `: ${secs}`;
};

setInterval(clock, 1000);
