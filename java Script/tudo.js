const inputTarefa = document.getElementById('.inputtarefa');
const adicionarTarefa = document.getElementById('.adicionartarefa');
const listaTarefas = document.getElementById('.listatarefas');

//função para adicionar nova tarefa

function adicionarTarefa() {
    const tarefatexto = inputTarefa.value. trin();

    if(tarefatexto !== ``){
        let li = document.createElement('li');
        li.textContent = tarefatexto;


        listaTarefas.appendChild(li);

       inputTarefa.value = ``;

    }
}

    botaoAdicionar.addEventListener('click', adicionarTarefa);
