var nome = 'Álisson'

var notaDoPrimeiroBimestre = 10.54
var notaDoSegundoSemestre = 8.57
var notaDoTerceiroBimestre = 6.44
var notaDoQuartoBimestre = 7.14

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoSemestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

var resultadoFinal = ''
if (notaFixada >= 5) resultadoFinal = 'aprovado'
else resultadoFinal = 'reprovado'

console.log('Essa é sua nota final ' + nome)
console.log(notaFixada)

document.getElementById('media').innerHTML = 'Sua média é: ' + notaFixada
document.getElementById('resultado').innerHTML = 'Você está ' + resultadoFinal

var cor = ''
if (notaFixada >= 5) cor = 'green'
else cor = 'red'

document.getElementById('resultado').style.color = cor
