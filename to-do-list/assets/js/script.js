var inserir = document.getElementById("inserir");
var tarefas = document.getElementById("tarefas");
let lista = document.getElementById("listaTarefas");
var checkBox = document.getElementsByClassName("")
var currentNumber = 0;

inserir.addEventListener("click", inserirTarefas);

function inserirTarefas(){
    if(tarefas.value == ''){
        alert("Insira uma tarefa!")
    } else {
        // creating checkbox element
        let checkbox = document.createElement('input');
        var nome = "tarefa".concat(currentNumber); 
        var id = "id".concat(currentNumber);
        br =document.createElement("br");
        // Assigning the attributes to created checkbox
        checkbox.type = "checkbox";
        checkbox.name = nome;
        checkbox.value = tarefas.value  + '</br>';
        checkbox.id = id;
        checkbox.textContent = tarefas.value;

        // creating label for checkbox
        let label = document.createElement('label');
       // label.name = 'label'.concat(currentNumber);
        label.id = 'label'.concat(currentNumber);
        label.htmlFor = id;
        //appending the created text to 
        // the created label tag 
        label.appendChild(document.createTextNode(tarefas.value));


        
        lista.appendChild(checkbox);
        lista.appendChild(label);
        lista.appendChild(br);
        tarefas.value = '';
        ++currentNumber;
    }

}

