window.onload = function() {
    iniciar();
};

function iniciar(){


    const input2 =document.getElementById("tarefaInput");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const lista = document.getElementById("listaTarefas");

    btnAdicionar.addEventListener("click", () => {

        //recupera o valor do campo input text 
        const text = input2.value. trim();

        //criar uma elemento da minha lista de tarefas
        const itemLista = document.createElement("li");

        // adicionar o valor do input
        itemLista.textContent = text;

        lista.appendChild(itemLista);
        
    });

}