const textEl = document.getElementById("text");
const buttonEl = document.getElementById("btn");

const text = "12345678910";

let index = 1;
let countUp = true;



function writeText() {
    if (countUp) {
      textEl.innerHTML = text.slice(0, index);
      index++;
      if (index > 11) {
        countUp = false;
        index = 9;
      }
    } else {
      textEl.innerHTML = text.slice(0, index);
      index--;
      if (index < 0) {
        countUp = true;
        index = 1;
      }
    }
    setTimeout(writeText, 500);
  }

  //rato achkarebs kvela clickze ver gavige
  