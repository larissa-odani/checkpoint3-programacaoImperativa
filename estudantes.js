/*Microdesafio 1*/
//Importação:
const Aluno = require("./aluno.js");

/*Lista de estudantes a ser usada no microdesafio 3 - ver arquivo curso.js: */
let ana = new Aluno ("Ana", 2, [5, 8, 10]);
let carol = new Aluno ("Carol", 3, [7, 3, 9]);
let daniela = new Aluno ("Daniela", 4, [1, 9, 10]);

//console.log(carol.calcularMedia());

//console.log(ana.faltas())

/*Microdesafio 7: módulo estudantes que será usado no microdesafio 7*/
const estudantes = [ana, carol, daniela];

module.exports = estudantes;

//console.log(estudantes);