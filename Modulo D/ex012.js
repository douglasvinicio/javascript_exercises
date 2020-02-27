// Exercicio checando as horas e dando mensagem de Bom dia, Boa tarde e Boa noite.
//Chamando horas no sistema. Criar uma variavel chamando new Date() e outra .gethours().
var agora = new Date()
var hora = agora.getHours()
if(hora < 12){
    console.log(`Bom dia, sao ${hora} horas.`)
}else if(hora <= 18){
    console.log(`Boa tarde, sao ${hora} horas.`)
}else{
    console.log(`Boa noite! Sao ${hora} horas.`)
}