// Salveeee //

var ola = "Olá Mundo JS!";
console.log(ola);

function log(valor){
    console.log(valor);
}

var valor = 10;
log(typeof valor); // number

var palavra = "palavra";
log(typeof palavra); // string

var isOk = true;
log(typeof isOk); // boolean

var meuObj = {}; // Object
var meuArray = []; // Array
var nulo = null; // Null
var variavelVasco; // Undefined

function compararEscopo() {
    if(true) {
        var varDentro = "var dentro do bloco";      
        let letDentro = "let dentro do bloco";  
        const constDentro = "const dentro";      
    }

    log(varDentro);
    // log(letDentro);  // daria erro
    // log(constDentro); // daria erro
}

compararEscopo();


// Operações simples

const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2); // 6
log(n1 / n2); // 0.2
log(n1 * n2); // 5


// Operações lógicas

log(n1 == n2);
log(n2 == valorNumericoStr);
log(n2 === valorNumericoStr);

log((n2 > n1 || n1 > n2) && 1 > 2);


// Listas

let frutas = ["Maça", "banana", "Laranja"];

log(frutas.length); // 3
log(frutas[1]);

// adicionar novo item
frutas.push("Manga");

log(frutas);

// remover último
frutas.pop();


// Estruturas condicionais

const idade = 18;

if(idade >= 18){
    log("Sou Adulto");
} 
else if (idade >= 2){
    log("Sou uma Criança");
} 
else {
    log("Sou Bebê");
}


const Instituicao = "CEUB";

switch(Instituicao){
    case "CEUB":
        log("FACULDADE");
        break;

    case "CIL":
        log("ESCOLA DE LINGUAS");
        break;

    default:
        log("Não encontrei a opção");
}


// Loop FOR

for(let loop = 0; loop < 5; loop++){
    log(`Meu valor no loop: ${loop}`);
}


// Loop WHILE

let valorWhile = 0;

while(valorWhile < 5){
    log(`Meu valor no while: ${valorWhile}`);
    valorWhile++;
}


// Funções assíncronas

async function buscarDados() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Dados Recebidos");
        }, 4000);
    });
}


// Executar busca

async function executarBusca() {
    log("Buscando...");

    const dadosRecebidos = await buscarDados();

    log("Finalizado!");
    log(dadosRecebidos);
}


// Arrow function

const meuMetodo = () => {};

log(meuMetodo);


// Função para esconder/mostrar imagem

function toggleImage(){
    let image = document.getElementById("minhaImagem");

    image.style.display =
        image.style.display === "none" ? "block" : "none";
}