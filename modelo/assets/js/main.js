let form = document.querySelector('form')
let resultado = document.querySelector('.resultado')
let grausIMC = ['muito magro(a)', 'você está saudável', 'você está com sobrepeso!', 'você está obeso(a)!', 'você está com obesidade grave!']

function calculaIMC(e) {
   e.preventDefault() // evito que o site carregue sempre que cliquem em calcular

   let inputPeso = form.querySelector('#peso').value 
   let inputAltura = form.querySelector('#altura').value

   // caso o usuário adicione um número com vírgula, automaticamente substituimos por pontos para que seja feita a equação
   let altura = parseFloat(inputAltura.replace(/,/g, '.')) 
   let peso = parseFloat(inputPeso.replace(/,/g, '.'))

   verificaPesoAltura(peso, altura)

   let IMC = (peso / Math.pow(altura, 2))
  
   if (IMC <= 18.5) {return mostrarResultado(grausIMC[0], IMC.toFixed(2))} 

   if (IMC > 18.5 && IMC <= 24.9) {return mostrarResultado(grausIMC[1], IMC.toFixed(2))} 

   if (IMC >= 25 && IMC <= 29.9) {return mostrarResultado(grausIMC[2], IMC.toFixed(2))} 

   if (IMC >= 30 && IMC <= 39.9) {return mostrarResultado(grausIMC[3], IMC.toFixed(2))} 

   if (IMC > 40) {return mostrarResultado(grausIMC[4], IMC.toFixed(2))} 

}
form.addEventListener('submit', calculaIMC)


function mostrarResultado(msg, imc) { // função para mostrar na tela o IMC com a respectiva mensagem no array
   resultado.style.opacity = 0
   resultado.style.transition = 'all 2s'
   setTimeout(()=>{
      resultado.style.opacity = 1
      resultado.innerHTML = `<h5 class='background-valido'>Seu IMC é ${imc}, ${msg}</h5>` 
   }, 500);
}

function verificaPesoAltura(p, a) { // função para verificar se o peso e a altura são valores válidos
   if (isNaN(p)) {return resultado.innerHTML =  `<h5 class='background-invalido'>Verifique o peso inserido</h5>`}
   if (isNaN(a)) {return resultado.innerHTML =  `<h5 class='background-invalido'>Verifique a altura inserida</h5>`}
}

// limpa os resultados
let limpar = document.querySelector('#reseta')
limpar.addEventListener('click', function reseta() {
   resultado.innerHTML = ''
})







