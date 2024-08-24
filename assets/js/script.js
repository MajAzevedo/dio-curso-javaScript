var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var adicionar = document.getElementById('adicionar');
var subtrair = document.getElementById('subtrair');

adicionar.addEventListener("click", increment);
subtrair.addEventListener("click", decrement);

function increment(){
    currentNumber += 1;
    alterarCor(currentNumber);
    currentNumberWrapper.innerHTML = currentNumber;
    habilitarBotoes(currentNumber);
}

function decrement(){
    currentNumber -= 1;
    alterarCor(currentNumber);
    currentNumberWrapper.innerHTML = currentNumber;

    habilitarBotoes(currentNumber);
    
    
}

function alterarCor(currentNumber){
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
    }else if(currentNumber > 0){
        document.getElementById("currentNumber").style.color = "blue";
    }
}

function habilitarBotoes(currentNumber){
    if(currentNumber >= 10 ){
        adicionar.disabled = true;
        subtrair.disabled = false;
    }else if(currentNumber <= -10){
        adicionar.disabled = false;
        subtrair.disabled = true;
    }else {
        adicionar.disabled = false;
        subtrair.disabled = false;
    }
}