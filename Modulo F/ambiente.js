var num = [19,89,3,9,77,33,22,'bucetite']
//num.sort()
//console.log(`Nosso vetor e o ${num} e tem ${num.length} elementos.`)
//console.log(`O valor numero 5 e ${num[5]}`)

/*for (let i = 0; i < num.length ; i++){
    console.log(`A posicao ${i} tem o valor ${num[i]}`)
}
for(let x in num){
    console.log(`A posicao ${x} tem o valor ${num[x]}`)
}
*/
let pos = num.indexOf('bucetite')
if (pos === -1){
    console.log('O valor nao foi encontrado!')
}else{
    console.log(`O valor encontrado esta na posicao ${pos}`)
}
