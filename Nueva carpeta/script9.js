const array1=[0,1,1,2,3,1,3,9,10];
let array2=[];
let contador=0;
for(let i=0; i<array1.length; i++){
    contador=1;

    for(let j=i+1; j<array1.length; j++){
        if(array1[i]== array1[j]){
            contador++;
        }
    }

    
    let yaintroducido = false;
    for(let k=0; k<array2.length; k++){
        if(array1[i] == array2[i]){
            yaintroducido=true;
            break;
        }
    }

    if(!yaintroducido){
        duplicados.push(array1[i])
    }
    
}