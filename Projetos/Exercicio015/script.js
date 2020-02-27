function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
        if (fano.value.length == 0 || fano.value > ano){
            window.alert('[ERRO]Verifique os dados e tente novamente!')
        }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id' , 'foto')
            if(fsex[0].checked){
                genero = 'Homem'
                if (idade >= 0 && idade < 10){
                    // Kid    
                    img.setAttribute('src','menino.jpg')
                }else if(idade < 21){
                    // Jovem
                    img.setAttribute('src','jovem0.jpg')
                }else if(idade < 50){
                    //Adulto
                    img.setAttribute('src','adulto.jpg')
                }else if(idade < 100){
                    //Idoso
                    img.setAttribute('src','idoso.jpg')                    
                }else{
                    //God
                    img.setAttribute('src','god.png')
                }
            }else{
                genero = 'Mulher'
                if (idade >= 0 && idade < 10){
                    // Kid    
                    img.setAttribute('src','menina.jpg')
                }else if(idade < 21){
                    // Jovem
                    img.setAttribute('src','jovem1.jpg')
                }else if(idade < 50){
                    //Adulto
                    img.setAttribute('src','adulta.jpg')
                }else if(idade < 100){
                    //Idoso
                    img.setAttribute('src','idosa.jpg')
                }else{
                    //God
                    img.setAttribute('src','god.png')
                }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.style.textAlign = 'center'
            res.appendChild(img)
        }
}