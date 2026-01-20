const numeros=[0, 1, 32, 20, 8, 12];

let parmayor=0;

for(i=0; i<numeros.length; i++){
if((numeros[i]>10) && (numeros[i]%2==0)){
    parmayor++;}
}


console.log(numeros);
console.log("los números mayores de 10 y pares son: "+parmayor);