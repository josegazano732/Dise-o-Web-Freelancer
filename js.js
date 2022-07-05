//Ejercicio 1

function llopDePares(){
    for (let i = 0; i < 100; i++) {
        if(i % 2 == 0){
            console.log(i + " El nro el Par");
        } else {
            console.log(i + " Es Impar");
        }
    }
}

//Ejercicio 2
function nuevoArreglo(number){
    let newArray = [];
    for (let i = 0; i < number; i++){
        newArray[i] = i+1;
        console.log(newArray);
    }
    return newArray;
}

//Ejercicio 3
function oneProperty(arr, prop) {
    let nuevArr = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {  name: "lucas", edad: 20 ,  name: "santi", edad: 22 };
        
        nuevArr.push(obj);
        console.log(nuevArr);
    }
    return nuevArr;
}

function summation(number){
    let sum = number;
    for (let i = 0; i < number; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;
}

const middleCharacter = (String)=>{
    let posicion;
    let largo;
    if(string / 2 !== 0) {
        posicion = string.length / 2;
        largo = 1;
    }else {
        posicion = string.length / 2 - 1;
        largo = 2;
    }
    console.log(string,substring(posicion, posicion + largo));
}

// 1 llopDePares();
// 2 nuevoArreglo(10);
// 3 oneProperty("arr","name");
// 4summation(8);
middleCharacter("cosas")