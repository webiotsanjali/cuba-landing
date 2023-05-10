function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  console.log("t 98", t);

  /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));

  /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

const timers = document.querySelectorAll(".timer");

/*--------Day and  Time loop---------*/
timers.forEach((timer) => {
  const targetDate = new Date(timer.dataset.date);
  const timerInterval = setInterval(() => {
    const now = new Date();
    newDate = now.setDate(now.getDate() - 5);
    console.log("5 days before date==>", newDate);
    const remainingTime = targetDate - newDate;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    timer.querySelector(".days").innerHTML = days;
    timer.querySelector(".hours").innerHTML = hours;
    timer.querySelector(".minutes").innerHTML = minutes;
    timer.querySelector(".seconds").innerHTML = seconds;
  }, 1000);
});
/*--------only  Time loop---------*/

timers.forEach((timer) => {
  const targetDate = new Date(timer.dataset.date);
  const timerInterval = setInterval(() => {
    const now = new Date();
    newDate = now.setDate(now.getDate() - 5);
    console.log("5 days before date==>", newDate);
    const remainingTime = targetDate - newDate;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      return;
    }
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    timer.querySelector(".hours").innerHTML = hours;
    timer.querySelector(".minutes").innerHTML = minutes;
    timer.querySelector(".seconds").innerHTML = seconds;
  }, 1000);
});
