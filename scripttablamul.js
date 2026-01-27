
let numero = prompt("INTRODUCE UN NÚMERO PARA MOSTRAR SU TABLA DE MULTIPLICAR");

function tabla(numero){
    let cadena;
    for(let i=1; i<=10; i++){
        cadena=cadena + numero + " x " + i + " = " + numero * i;
        
    }
    return cadena;
}

let cadena = tabla(numero);
alert(cadena);


