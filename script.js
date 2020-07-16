function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro.. Verifique os Dados e tente novamente mais tarde!')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <14){
                //criança
                img.setAttribute('src','CH.png')
            } else if(idade < 40){
                //adulto
                img.setAttribute('src', 'JH.png')
            } else {
                //idoso
                img.setAttribute('src', 'VH.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <14){
                //criança
                img.setAttribute('src', 'CM.png')
            } else if(idade < 40){
                //adulto
                img.setAttribute('src', 'JM.png')
            } else {
                //idoso
                img.setAttribute('src', 'VM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}