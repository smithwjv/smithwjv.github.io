var i = 0;
var j = 0;
const initialCursorFlashCycles = 3;
const cursorChar = '█'
const cursorBlink = 530;
const txt = 'smithwjv';
const delayLowerBound = 50;
const delayUpperBound = 250;

function typeWriterTitle() {
  initialCursorFlash();
}

function initialCursorFlash() {
  if (i < initialCursorFlashCycles) {
    toggleCursor();
    i++;
    if (i == initialCursorFlashCycles) {
      setTimeout(initialCursorFlash, cursorBlink * 0.5);
    } else {
      setTimeout(initialCursorFlash, cursorBlink);
    }
  } else {
    typeWriter();
  }
}

function typeWriter() {
  if (j < txt.length) {
    var str = document.getElementById('title').innerHTML;
    str = str.substring(0, str.length - 1);
    str += txt.charAt(j) + cursorChar;
    document.getElementById('title').innerHTML = str;
    j++;
    setTimeout(
        typeWriter, getRandomIntInRange(delayLowerBound, delayUpperBound));
  } else {
    // Blink cursor
    setInterval(() => {
      toggleCursor();
    }, cursorBlink);
  }
}

function toggleCursor() {
  var str = document.getElementById('title').innerHTML;
  if (str.charAt(str.length - 1) == cursorChar) {
    str = str.substring(0, str.length - 1);
  } else {
    str += cursorChar;
  }
  document.getElementById('title').innerHTML = str;
}

function getRandomIntInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}
