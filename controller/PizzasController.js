// Importar o array de pizzas para a contante pizzas
const Pizzas = require("../database/Pizzas");

// Criar uma função mostraPizza que recebe uma pizza como parâmetro
// e imprime a frase: "Pizza ____: R$ XX,XX"

function mostraPizzas(){
    for(const p of Pizzas){
        console.log(`Pizza ${p.nome}: R$ ${p.preco}`);
    }
}

// Essa função recebe o id de uma pizza e retorna a pizza
// que tem este id.
function encontrarPizzaDoId(num){
    for(const p of pizzas){
        if(p.id == num){
            return p;
        }
    }
}


let pizzaBuscada = encontrarPizzaDoId(3);
console.log(pizzaBuscada)

module.exports = {mostraPizzas, encontrarPizzaDoId}