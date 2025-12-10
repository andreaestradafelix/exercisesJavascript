
let array = [3,6,12,15,1];
console.log(`Original: ${array.join(", ")}`);
for (let i = 0; i < array.length; i++){
    for (let j=0; j<array.length-1; j++){
        if (array[j]>array[j+1]){ //num actual > num sig
            let aux = array[j];
            array[j] = array[j+1]; //se intercambian num
            array[j+1] = aux;
        }
    }
}
console.log("sorted:");
for (let i = 0; i < array.length; i++){
    console.log(` ${array[i]}`);
}
