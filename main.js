function contadorPlus(){
  const counter = document.getElementById('contador')
  let value = parseInt(counter.textContent); // Transformando String em numero
  value++

  counter.textContent = value.toString().padStart(2, "0") // variavel counter novamento em String e .padStart acrescentar "0"  na soma do numero se necessario
}

function contadorLess(){
  const counter = document.getElementById("contador")
  let value = parseInt(counter.textContent);
  if( value > 1){
    value--

    counter.textContent = value.toString().padStart(2, "0")
    
  }
}