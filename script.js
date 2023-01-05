const frutas = ["laranja", "limão", "uva"];

const fruta4 = document.getElementById("fruta-4")

const input = document.getElementById("fruta-digitada")

for(i=0; i<frutas.length; i++){
    let fruta = document.getElementById(`fruta-${[i+1]}`)
    fruta.innerHTML = frutas[i]
}

function adicionaFruta(){
    fruta4.innerHTML = input.value
    input.value = ""
}

function imprimiInput() {
    console.log(input.value)    
}