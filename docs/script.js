let minT = 1;
const maxT = 6;

const word = "jason";
let lastId = 15;

function nxL(event, element) {
  if (element.readOnly) {
    event.preventDefault();
    return;
  }

  let key = event.key;
  let id = parseInt(element.id[1]);
  let newId;

  if (key === "Backspace") {
    if (element.value == "") {
      newId = id - 1;
      if (newId <= 0) {
        newId = 5;
      }
      let tId = minT.toString() + newId.toString();
      document.getElementById(tId).focus();
    } else {
      element.value = "";
    }
    event.preventDefault();
  } else if (key === "ArrowLeft") {
    newId = id - 1;
    if (newId <= 0) {
      newId = 5;
    }
    let tId = minT.toString() + newId.toString();
    document.getElementById(tId).focus();
    event.preventDefault();
  } else if (key === "ArrowRight") {
    newId = (id % 5) + 1;
    let tId = minT.toString() + newId.toString();
    document.getElementById(tId).focus();
    event.preventDefault();
  } else if (key === "Enter") {
    verify();
    event.preventDefault();
  } else if (key == " ") {
    newId = (id % 5) + 1;
    let tId = minT.toString() + newId.toString();
    document.getElementById(tId).focus();
    event.preventDefault();
  } else if (/[A-Za-z]/.test(key) && key.length === 1) {
    element.value = key;
    newId = (id % 5) + 1;
    let tId = minT.toString() + newId.toString();
    document.getElementById(tId).focus();
    event.preventDefault();
  } else {
    event.preventDefault();
  }
}

//verifica os acertos
function verify() {
  for (let i = 1; i <= 5; i++) {
    let tId = minT.toString() + i.toString();
    let elem = document.getElementById(tId);
    if (elem.value == "") {
      return;
    }
  }

  let win = 0;

  for (let i = 1; i <= 5; i++) {
    let tId = minT.toString() + i.toString();
    let elem = document.getElementById(tId);
    elem.readOnly = true;

    let input = elem.value.toLowerCase();
    let inputR = word[i - 1].toLowerCase();

    if (word.includes(input)) {
      if (inputR == input) {
        elem.style.backgroundColor = "Green";
        win++;
      } else {
        elem.style.backgroundColor = "Yellow";
      }
    } else {
      elem.style.backgroundColor = "Red";
    }
  }

  if (win == 5) {
    showWin();
  } else if(minT < maxT){
    minT++;
    newRow();
  } else {
    showLose();
  }
}

function newRow() {
  let parent = document.getElementById("gameArea");
  for(let i = 1; i <= 5; i++){
    let child = document.createElement("input");
    let tId = minT.toString() + i.toString();
    addAtributes(child, tId);

    parent.appendChild(child);
  }
  lastId += 10;
  document.getElementById(minT.toString() + "1").focus();
}

function addAtributes(child, i) {
    child.setAttribute('type', 'text');
    child.setAttribute('id', i);
    child.setAttribute('name', 'L');
    child.setAttribute('maxLength', '1');
    child.setAttribute('onkeyDown', 'nxL(event, this)');
}

function showLose() {
  document.getElementById("lose").style.display = "block";
}

function showWin() {
  document.getElementById("win").style.display = "block";
}
