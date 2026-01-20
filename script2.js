const notas=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -1];

let condicion= true;
let incorrectos=0;

for(i =0; i<notas.length; i++){
    if(notas[i]>10){
        incorrectos++;
        false;
    }
    else if(notas[i]<0){
        incorrectos++;
        false;
    }
}

console.log(notas);
console.log("la condición es: " +condicion);
console.log(incorrectos+" números no cumplen con la condición");