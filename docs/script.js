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

    let win = 5;

    for(let i = 1; i <= 5; i++){
        let elem = document.getElementById(i.toString());
        let input = elem.value.toLowerCase();
        let inputR = word[i-1].toLowerCase(); 

        if(word.includes(input)){
            if(inputR == input){
                elem.style.backgroundColor = 'Green';
            }else{
                elem.style.backgroundColor = 'Yellow';
                win--;
            }
        }else{
            elem.style.backgroundColor = 'Red';
            win--;
        }
    }

    if(win == 5){
        showWin();
    }
}

function showWin() {
    document.getElementById('win').style.display = 'block';
}