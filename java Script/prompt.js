let peso = prompt("Digite seu Peso :");
let altura = prompt("Digite sua Altura:");

let imc = peso / (altura * altura);
console.log(imc);

document.body.innerHTML = `<h1>Seu IMC é ${imc}</h1>`