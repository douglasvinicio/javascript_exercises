function verificar(){
var ini = document.getElementById('valor1')
var fim = document.getElementById('valor2')
var passo = document.getElementById('n3')
var res = document.getElementById('n4')

if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Dados faltando!')
    res.innerHTML = 'Impossivel Contar'
}else{
    res.innerHTML = 'Contando:<br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p <= 0){
        window.alert('Passo tem que ser maior que 0. Considerando passo como 1.')
        p = 1
    }

    if(i < f){
        for(let c = i ; c <= f ; c+= p){
        res.innerHTML += `${c} \u{1F47D} `
        }
    }else{
        for(let c = i ; c >= f; c-= p){
        res.innerHTML += `${c} \u{1F47D} `
        }
    }
}


}
