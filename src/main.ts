//Datentypen
const message:string = "true"
const x:number = 0.5
const isOn:boolean = true

const book:object = {x, isOn}

const a:number = 1
const b:number = 2
//Operatoren

const add:number = a+b;
const sub:number = a-b;
const mul:number = a*b;
const dif:number = a/b;

const logicalAnd:boolean = false && true
const logicalOr:boolean = false || true
const logicalNot:boolean = !isOn

const test = false === false
const testNot = false !== false

for (let i:number = 0; i < 5; i++){
    console.log(i);
}

if (b <= 2){
    console.log("Hello")
}else {
    console.log("Bye")
}

console.log(test)

//Truthy / falsy

const y = 1; // falsy = false / 0 / "" / null / undefined / NaN

if (y){
    console.log("Truthy")
}else {
    console.log("Falsy")
}