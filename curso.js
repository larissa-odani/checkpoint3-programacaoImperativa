/* MICRODESAFIO 3: Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 1).*/

/*
const estudantes = require('./estudantes');

const curso = {
    nomeCurso: "Inovação",
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes
};

console.log(curso);
*/

/* MICRODESAFIO4: Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
propriedade lista de estudantes do objeto curso.*/

/*
const Aluno = require("./aluno.js");
const estudantes = require('./estudantes');

const curso = {
    nomeCurso: "Inovação",
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes,
    adicionarAluno: function(novoAluno, novaFaltas, novaNotas){
        this.listaEstudantes.push(new Aluno(novoAluno, novaFaltas, novaNotas))
    }
};

curso.adicionarAluno("Bruno", 2, [10, 8, 10]);
console.log(curso.listaEstudantes);
*/

/* MICRODESAFIO 5: Crie um método para o objeto curso que receba um aluno (como parâmetro) e
retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
aprovação.*/

/*
const Aluno = require("./aluno.js");
const estudantes = require('./estudantes');

const curso = {
    nomeCurso: "Inovação",
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes,
    adicionarAluno: function(novoAluno, novaFaltas, novaNotas){
        this.listaEstudantes.push(new Aluno(novoAluno, novaFaltas, novaNotas))
        },
    aprovacao: function(estudante){
        if(estudante.quantidadeFaltas < this.faltasMaximas && estudante.calcularMedia() >= this.notaAprovacao){
            return true;
        }
        else if(estudante.quantidadeFaltas === this.faltasMaximas && estudante.calcularMedia() > (this.notaAprovacao * 1.1)){
            return true;
        }
        else{
            return false;
        }
    }
};

console.log(curso.aprovacao(estudantes[0]));
console.log(curso.aprovacao(estudantes[1]));
console.log(curso.aprovacao(estudantes[2]));
*/

/* MICRODESAFIO 6: Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
array de booleanos com os resultados se os alunos aprovaram ou não.*/

/*
const Aluno = require("./aluno.js");
const estudantes = require('./estudantes');

const curso = {
    nomeCurso: "Inovação",
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes,
    adicionarAluno: function(novoAluno, novaFaltas, novaNotas){
        this.listaEstudantes.push(new Aluno(novoAluno, novaFaltas, novaNotas))
        },
    aprovacao: function(estudante){
        if(estudante.quantidadeFaltas < this.faltasMaximas && estudante.calcularMedia() >= this.notaAprovacao){
            return true;
        }
        else if(estudante.quantidadeFaltas === this.faltasMaximas && estudante.calcularMedia() > (this.notaAprovacao * 1.1)){
            return true;
        }
        else{
            return false;
        }
    },
    listaAprovado: function(){
        let listagem = [];
        this.listaEstudantes.forEach(
            cadaEstudante => {
                if(cadaEstudante.calcularMedia() >= this.notaAprovacao && cadaEstudante.quantidadeFaltas < this.faltasMaximas){
                    listagem.push(true)
                }
                else if(cadaEstudante.calcularMedia() > (this.notaAprovacao * 1.1) && cadaEstudante.quantidadeFaltas === this.faltasMaximas){
                    listagem.push(true)
                }
                else{
                    listagem.push(false)
                }
            }
        )
        return listagem;
    }
};

console.log(curso.listaAprovado());

console.log(curso);
*/

/*Microdesafio 7:Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo
que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela
lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os
métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).*/

const Aluno = require("./aluno.js");
const estudantes = require('./estudantes');

const curso = {
    nomeCurso: "Inovação",
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes,
    adicionarAluno: function(novoAluno, novaFaltas, novaNotas){
        this.listaEstudantes.push(new Aluno(novoAluno, novaFaltas, novaNotas))
        },
    aprovacao: function(estudante){
        if(estudante.quantidadeFaltas < this.faltasMaximas && estudante.calcularMedia() >= this.notaAprovacao){
            return true;
        }
        else if(estudante.quantidadeFaltas === this.faltasMaximas && estudante.calcularMedia() > (this.notaAprovacao * 1.1)){
            return true;
        }
        else{
            return false;
        }
    },
    listaAprovado: function(){
        let listagem = [];
        this.listaEstudantes.forEach(
            cadaEstudante => {
                if(cadaEstudante.calcularMedia() >= this.notaAprovacao && cadaEstudante.quantidadeFaltas < this.faltasMaximas){
                    listagem.push(true)           
                }
                else if(cadaEstudante.calcularMedia() > (this.notaAprovacao * 1.1) && cadaEstudante.quantidadeFaltas === this.faltasMaximas){
                    listagem.push(true)
                }
                else{        
                    listagem.push(false)
                }
            }
        )
        return listagem;
    }
};

//curso.adicionarAluno("Bruno", 2, [10, 8, 10]);
//console.log(curso.listaEstudantes);

//console.log(curso.aprovacao(estudantes[0]));
//console.log(curso.aprovacao(estudantes[1]));
//console.log(curso.aprovacao(estudantes[2]));
//console.log(curso.aprovacao(estudantes[3]));

//console.log(curso.listaAprovado());

console.log(curso);