const numeros=[0, 1, -2, 3, 0, -5, 6];

let positivos=0;
let negativos=0;
let cero=0;

for(let i=0; i<numeros.length;i++){
    if (numeros[i]>0){
        positivos++;
    }
    else if (numeros[i]<0){
        negativos++;
    }
    else{
        cero++;
    }
}
console.log(numeros);
console.log("numeros positivos: "+positivos);
console.log("numeros negativos: "+negativos);
console.log("numeros cero: "+cero);
