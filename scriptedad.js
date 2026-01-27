function edadactual(anio){

    let resultado= new Date().getFullYear()-anio;
    return resultado;
}

let anio = prompt("DIME TU AÑO DE NACIMIENTO: ")
let resultado = edadactual(anio);
alert("TU EDAD ES: "+resultado);