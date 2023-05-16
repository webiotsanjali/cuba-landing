// // Timer js

// /***** CALCULATE THE TIME REMAINING *****/
// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());

//   /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));

//   /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
//   return {
//     total: t,
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// /***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var daysSpan = clock.querySelector(".days");
//   var hoursSpan = clock.querySelector(".hours");
//   var minutesSpan = clock.querySelector(".minutes");
//   var secondsSpan = clock.querySelector(".seconds");

//   function updateClock() {
//     var t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
//     minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock(); // run function once at first to avoid delay
//   var timeinterval = setInterval(updateClock, 1000);
// }

// /***** SET A VALID END DATE *****/
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock("clockdiv-1", deadline);

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    var clockdiv = document.getElementsByClassName("timer");
    var countDownDate = new Array();
    for (var i = 0; i < clockdiv.length; i++) {
      countDownDate[i] = new Array();
      countDownDate[i]["el"] = clockdiv[i];
      countDownDate[i]["time"] = new Date(
        clockdiv[i].getAttribute("data-date")
      ).getTime();
      countDownDate[i]["days"] = 0;
      countDownDate[i]["hours"] = 0;
      countDownDate[i]["seconds"] = 0;
      countDownDate[i]["minutes"] = 0;
    }

    var countdownfunction = setInterval(function () {
      for (var i = 0; i < countDownDate.length; i++) {
        var now = new Date().getTime();
        var distance = countDownDate[i]["time"] - now;
        countDownDate[i]["days"] = Math.floor(distance / (1000 * 60 * 60 * 24));
        countDownDate[i]["hours"] = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        countDownDate[i]["minutes"] = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        countDownDate[i]["seconds"] = Math.floor(
          (distance % (1000 * 60)) / 1000
        );

        if (distance < 0) {
          countDownDate[i]["el"].querySelector(".days") &&
            (countDownDate[i]["el"].querySelector(".days").innerHTML = 0);
          countDownDate[i]["el"].querySelector(".hours").innerHTML = 0;
          countDownDate[i]["el"].querySelector(".minutes").innerHTML = 0;
          countDownDate[i]["el"].querySelector(".seconds").innerHTML = 0;
        } else {
          countDownDate[i]["el"].querySelector(".days") &&
            (countDownDate[i]["el"].querySelector(".days").innerHTML =
              countDownDate[i]["days"] + "<span>d</span>");
          // countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
          countDownDate[i]["el"].querySelector(".hours").innerHTML =
            countDownDate[i]["hours"] + "<span>h</span>";
          countDownDate[i]["el"].querySelector(".minutes").innerHTML =
            countDownDate[i]["minutes"] + "<span>m</span>";
          countDownDate[i]["el"].querySelector(".seconds").innerHTML =
            countDownDate[i]["seconds"] + "<span>s</span>";
        }
      }
    }, 1000);
  }
});
