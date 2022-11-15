// Operandos

var getNum1 = () => parseInt(document.getElementById("number-1").value);
var getNum2 = () => parseInt(document.getElementById("number-2").value);


// Operaciones

var suma = () => getNum1() + getNum2();
var resta = () => getNum1() - getNum2();
var multiplicacion = () => getNum1() * getNum2();
var division = () => getNum1() / getNum2();

// Condicionales 

var condicionSuma = () => {
    if (!getNum1() || !getNum2()) {
       return document.getElementById("result").innerText = "Debe introducir dos valores numéricos";
    } else {
       return suma();
    };
}

var condicionResta = () => {
    if (!getNum1() || !getNum2()) {
       return document.getElementById("result").innerText = "Debe introducir dos valores numéricos";
    } else {
       return resta();
    };
}

var condicionMultiplicacion = () => {
    if (!getNum1() || !getNum2()) {
       return document.getElementById("result").innerText = "Debe introducir dos valores numéricos";
    } else {
       return multiplicacion();
    };
}

var condicionDivision = () => {
    if (!getNum1() || !getNum2()) {
       return document.getElementById("result").innerText = "Debe introducir dos valores numéricos";
    } else {
       return division();
    };
}

// Imprimir resultados en pantalla

var printResultSuma = () => document.getElementById("result").innerText = condicionSuma();
var printResultresta = () => document.getElementById("result").innerText = condicionResta();
var printResultmultiplicacion = () => document.getElementById("result").innerText = condicionMultiplicacion();
var printResultdivision = () => document.getElementById("result").innerText = condicionDivision();

// Eventos

document.getElementById("suma").addEventListener("click", printResultSuma);
document.getElementById("resta").addEventListener("click", printResultresta);
document.getElementById("multiplicacion").addEventListener("click", printResultmultiplicacion);
document.getElementById("division").addEventListener("click", printResultdivision);

