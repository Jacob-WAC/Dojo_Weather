var cookieBar = document.querySelector(".cookie");
// this function removes the cookiebar on click
function remove(element) {
  cookieBar.parentNode.removeChild(cookieBar);
}
// this is getting all of the temps and setting them
var ht1 = document.querySelector(".ht1");
var ht2 = document.querySelector(".ht2");
var ht3 = document.querySelector(".ht3");
var ht4 = document.querySelector(".ht4");

var lt1 = document.querySelector(".lt1");
var lt2 = document.querySelector(".lt2");
var lt3 = document.querySelector(".lt3");
var lt4 = document.querySelector(".lt4");
//these are the temp values, first in celsius, then in fahrenheit
var dailyTemps = [
  {
    today: [24, 18],
    tomorrow: [27, 19],
    friday: [21, 16],
    saturday: [26, 21],
  },
  {
    today: [75, 65],
    tomorrow: [80, 66],
    friday: [69, 61],
    saturday: [78, 70],
  },
];
//this is to set the default value, might be another way to do this.
ht1.innerHTML = `${dailyTemps[0].today[0]}°`;
lt1.innerHTML = `${dailyTemps[0].today[1]}°`;

ht2.innerHTML = `${dailyTemps[0].tomorrow[0]}°`;
lt2.innerHTML = `${dailyTemps[0].tomorrow[1]}°`;

ht3.innerHTML = `${dailyTemps[0].friday[0]}°`;
lt3.innerHTML = `${dailyTemps[0].friday[1]}°`;

ht4.innerHTML = `${dailyTemps[0].saturday[0]}°`;
lt4.innerHTML = `${dailyTemps[0].saturday[1]}°`;

//this is the actual function to  change the temps from the select menu.
function tempChange(element) {
  var tempChanging = document.getElementById("temp").value;

  if (tempChanging == "fahrenheit") {
    //switching to fahrenheit
    ht1.innerHTML = `${dailyTemps[0].today[0]}°`;
    lt1.innerHTML = `${dailyTemps[0].today[1]}°`;

    ht2.innerHTML = `${dailyTemps[0].tomorrow[0]}°`;
    lt2.innerHTML = `${dailyTemps[0].tomorrow[1]}°`;

    ht3.innerHTML = `${dailyTemps[0].friday[0]}°`;
    lt3.innerHTML = `${dailyTemps[0].friday[1]}°`;

    ht4.innerHTML = `${dailyTemps[0].saturday[0]}°`;
    lt4.innerHTML = `${dailyTemps[0].saturday[1]}°`;
  } else {
    //switching back to celsius
    ht1.innerHTML = `${dailyTemps[1].today[0]}°`;
    lt1.innerHTML = `${dailyTemps[1].today[1]}°`;

    ht2.innerHTML = `${dailyTemps[1].tomorrow[0]}°`;
    lt2.innerHTML = `${dailyTemps[1].tomorrow[1]}°`;

    ht3.innerHTML = `${dailyTemps[1].friday[0]}°`;
    lt3.innerHTML = `${dailyTemps[1].friday[1]}°`;

    ht4.innerHTML = `${dailyTemps[1].saturday[0]}°`;
    lt4.innerHTML = `${dailyTemps[1].saturday[1]}°`;
  }
}
