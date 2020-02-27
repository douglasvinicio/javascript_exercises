var agora = new Date()
var diaSem = agora.getDay()
//Usando SWITCH Expression!

switch(diaSem){
    case 0:
        console.log('Hoje e domingo!')
        break
    case 1:
        console.log('Hoje e Segunda!')
        break
    case 2:
        console.log('Hoje e Terca-Feira!')
        break
    case 3:
        console.log('Hoje e Quarta-Feira!')
        break
    case 4:
        console.log('Hoje e Quinta-feira!')
        break
    case 5:
        console.log('Hoje e SEXXXTA-FEIRAAAA!')
        break
    case 6:
        console.log('Hoje e Sabado!')
        break
    default:
        console.log(['[ERRO] Dia da semana INVALIDO'])
}