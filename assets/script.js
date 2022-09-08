let imagem = document.querySelector('#imgs-jordan-1');
let imagem2 = document.querySelector('#imgs-jordan-2');
let imagem3 = document.querySelector('#imgs-jordan-3');
let imagem4 = document.querySelector('#imgs-jordan-4');
let imagem5 = document.querySelector('#imgs-jordan-5');
let imagem6 = document.querySelector('#imgs-jordan-6');
let imagem7 = document.querySelector('#imgs-jordan-7');
let imagem8 = document.querySelector('#imgs-jordan-8');

let colecao = [imagem, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8]


for (let i = 0; i < colecao.length; i++) {
    colecao[i].addEventListener('mouseover', function (event) {
        this.classList.add('color');
    })

    colecao[i].addEventListener('mouseout', function (event) {
        this.classList.remove('color');
    })
}


