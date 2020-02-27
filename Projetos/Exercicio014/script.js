function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 8
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora <12){
        img.src = 'file0.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >=12 && hora <18){
        img.src = 'file2.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'file1.png'
        document.body.style.background = '#515154'
    }


}   
