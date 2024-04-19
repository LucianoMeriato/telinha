var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var r = document.getElementById("r");
var Sinal = document.getElementById("Sinal")
var conta = document.getElementById('conta')


function somar(){
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    if(isNaN(resultado))
        r.textContent = "Digite um número";
    else
        r.textContent = resultado;
    var Sinais = '+';
    Sinal.textContent = (Sinais);
    var contas = 'soma';
    conta.textContent = (contas);
    
}

function subtrair(){
    var resultado = n1.valueAsNumber - n2.valueAsNumber;
    r.textContent = resultado;
    if(isNaN(resultado))
    r.textContent = "Digite um número";
else
    r.textContent = resultado;
    var Sinais = '-';
    Sinal.textContent = (Sinais);
    var contas = 'subtrair';
    conta.textContent = (contas);
}

function multiplicar(){
    var resultado = n1.valueAsNumber * n2.valueAsNumber;
    r.textContent = resultado;
    if(isNaN(resultado))
    r.textContent = "Digite um número";
else
    r.textContent = resultado;
    var Sinais = 'x';
    Sinal.textContent = (Sinais);
    var contas = 'multiplicar';
    conta.textContent = (contas);
}

function dividir(){
    var resultado = n1.valueAsNumber / n2.valueAsNumber;
    r.textContent = resultado;
    if(isNaN(resultado))
    r.textContent = "Digite um número";
else
    r.textContent = resultado;
    var Sinais = '÷';
    Sinal.textContent = (Sinais);
    var contas = 'dividir';
    conta.textContent = (contas);
}