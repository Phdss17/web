const word = "jason";

//passa pra proxima caixa e verifica se é letra ou não
function nxL(event, element) {
  let key = event.key;
  let id = parseInt(element.id);
  let newId;

  if (key === "Backspace") {
    if (element.value == "") {
      newId = id - 1;
      if (newId <= 0) {
        newId = 5;
      }
      document.getElementById(newId.toString()).focus();
    } else {
      element.value = "";
    }
    event.preventDefault();
  } else if (key === "ArrowLeft") {
    newId = id - 1;
    if (newId <= 0) {
      newId = 5;
    }
    document.getElementById(newId.toString()).focus();
    event.preventDefault();
  } else if (key === "ArrowRight") {
    newId = (id % 5) + 1;
    document.getElementById(newId.toString()).focus();
    event.preventDefault();
  } else if (key === "Enter") {
    verify();
    event.preventDefault();
  } else if (key == " ") {
    newId = (id % 5) + 1;
    document.getElementById(newId.toString()).focus();
    event.preventDefault();
  } else if (/[A-Za-z]/.test(key) && key.length === 1) {
    element.value = key;
    newId = (id % 5) + 1;
    document.getElementById(newId.toString()).focus();
    event.preventDefault();
  } else {
    event.preventDefault();
  }
}

//verifica os acertos
function verify() {
    for(let i = 1; i <= 5; i++){
        let elem = document.getElementById(i.toString());
        if(elem.value == ''){
            return;
        }
    }

    let win = true;

    for(let i = 1; i <= 5; i++){
        let elem = document.getElementById(i.toString());
        if(word.includes(elem.value)){
            if(word[i-1] == elem.value){
                elem.style.backgroundColor = 'Green';
                win = true;
            }else{
                elem.style.backgroundColor = 'Yellow';
                win = false;
            }
        }else{
            elem.style.backgroundColor = 'Red';
            win = false
        }
    }

    if(win == true){
        showWin();
    }
}

function showWin() {
    document.getElementById('win').style.display = 'block';
}