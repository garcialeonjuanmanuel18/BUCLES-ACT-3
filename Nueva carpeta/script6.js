const array1=[0,1,2,3,4,5];
const array2=[2,1,2,3,1,5];
let iguales=true;

if(array1.length!=array2.length){
    iguales=false;
}

for(let i=0; i<array1.length; i++){
    console.log(+array1[i]+ " "+array2[i]);

    if(array1[i]==array2[i]){
    console.log("La posición "+i+ " coincide");
    }

    else{
        console.log("Los números no coinciden en ambos arrays");
        iguales=false;
break;
    }

}

if(iguales==true){
console.log("Los arrays son iguales");
}

else{
    console.log("Los arrays no son iguales");
}


