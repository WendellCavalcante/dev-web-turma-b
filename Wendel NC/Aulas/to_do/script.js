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

        //criei um botão
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "x";
        btnRemover.classList.add("fechar");

        btnRemover.addEventListener("click", () => {itemLista.remove();})
        


        // adicionar o valor do input
        itemLista.textContent = text;

        //adcionar lista para ser apresentado
        itemLista.appendChild(btnRemover);


        itemLista.addEventListener("click", () => {
            itemLista.classList.toggle("concluida");
        })


        //adiciona item na lista
        lista.appendChild(itemLista);


        input2.value = "";
        
    });

}