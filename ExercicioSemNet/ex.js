const calcularIMC = () => {
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    let IMC = (peso / (altura ** 2)).toFixed(2); 

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `IMC: ${IMC}`;

    if (IMC <= 16.9) {
        resultado.innerHTML = `O seu IMC é ${IMC}. Você está Muito abaixo do peso`;
    } else if (IMC >= 17 && IMC <= 18.4) {
        resultado.innerHTML = `O seu IMC é ${IMC}. Você está Abaixo do peso`;
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        resultado.innerHTML = `O seu IMC é ${IMC}. Seu Peso está normal`;
    } else if (IMC >= 25 && IMC <= 29.9) {
        resultado.innerHTML = `O seu IMC é ${IMC}. Você está Acima do peso`;
    } else if (IMC >= 30 && IMC <= 34.9) {
        resultado.innerHTML = `O seu IMC é ${IMC}. Você está com a Obesidade grau 1`;
    } else if (IMC >= 35 && IMC <= 40) {
        resultado.innerHTML = `O seu IMC é ${IMC}. Você está com Obesidade grau 2`;
    } else if (IMC > 40) {
        resultado.innerHTML = `O seu IMC é ${IMC}. Você está com a Obesidade grau 3`;
    }
};

let calcular = document.querySelector("#botaoenviar");
calcular.addEventListener('click', calcularIMC);
