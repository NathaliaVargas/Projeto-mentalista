var numeroSecreto = parseInt(Math.random() * 101)
var tentativa = 8
var acertou = false

function calcular(){
  while (chute != numeroSecreto){
    var chute = document.querySelector("#chute").value;
    tentativa = tentativa - 1
    if (tentativa <= 0){
      alert("Você atingiu o número máximo de tentativas, a resposta era: " + numeroSecreto)
      document.getElementById("reiniciar").hidden = false
    return
    }
    
    if (chute == numeroSecreto) {
       alert("Acertou! O número correto é: " + numeroSecreto) 
      document.getElementById("reiniciar").hidden = false
      return
    } else if (chute > numeroSecreto) {
      alert("Errou... o número secreto é menor. Restam apenas " + tentativa + " chances!")
      return
    } else if (chute < numeroSecreto) {
      alert("Errou... o número secreto é maior restam apenas " + tentativa + " chances!")
      return
    }  
  }
}

function reiniciar() {
  numeroSecreto = parseInt(Math.random() * 101)
  tentativa = 8
	acertou = false
    document.getElementById("reiniciar").hidden = true
}