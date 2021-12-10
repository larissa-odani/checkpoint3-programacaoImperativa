//Checkpoint 3 - Larissa

/* MICRODESAFIO 1: Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno. */

/*
class Aluno {
    constructor (nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    }
}

module.exports = Aluno;

*/

/* MICRODESAFIO 2: Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
em 1. */

class Aluno {
    constructor (nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    }calcularMedia(){

        let media = 0
        let total = 0

        this.notas.forEach(cadaNota => {
        total += cadaNota
        })
        media = total/this.notas.length

        return media;
    
    }faltas(){
        return ++this.quantidadeFaltas
    }
};

module.exports = Aluno;