let a = "12345"
console.log(typeof a);
// can also use in ()
console.log(typeof (a));
let value= Number(a) // convert into number
let b="123abc"
let valueB=Number(b)// this has converted the value of b in Number even though it has characters value 

console.log(valueB); // this will give NaN
console.log(typeof valueB)// so keep in check whats the actual value of your no.

let c= null
let valueC=Number(c)
console.log(valueC)// will give 0 , but keep in mind its empty not any actual value 0
console.log(typeof valueC)// it will give Number again 
let d= undefined
let valueD=Number(d)
console.log(valueD)// will give NaN
console.log(typeof valueD)
// so in short the js allows any type of conversion and will show converted type but the actual printed value will depend on the variable.
let e="lakhan"
let valueE=Number(e)
console.log(valueE)

let isLogged=1// cant use 1 or 0 for giving boolean type
console.log(typeof isLogged)
let boolean=Boolean(isLogged)
console.log(typeof boolean)
let isIn=true
console.log(typeof isIn)// can use true and false for boolean type 

let isLoggedIN=""
console.log(typeof isLoggedIN)
let boolean1=Boolean(isLoggedIN)
console.log(boolean1)// boolean conversion of an empty string will give us false 

let isLoggedIN1=null
console.log(typeof isLoggedIN1)
let boolean2=Boolean(isLoggedIN1)
console.log(boolean2)// boolean conversion of null will give us false 

let isLoggedIN2=undefined
console.log(typeof isLoggedIN2)
let boolean3=Boolean(isLoggedIN2)
console.log(boolean3)// boolean of undefined will also give us false

let isLoggedIN3="lakhan"
console.log(typeof isLoggedIN3)
let boolean4=Boolean(isLoggedIN3)
console.log(boolean4)// will give true
