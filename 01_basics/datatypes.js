// primitives: means value is passed by value ( copied value)

// 7 types: string, Number, Boolean , null, undefined ,Symbol , BigInt

// non-primitive: reference type

// arrays , objects , functions 
 
const l=120
const l1=200.2
// both comes under Number as there is no seperate float datatype for declaring decimals.
const id= Symbol("123")
// its like a unique identifier
const id2 = Symbol("123")
console.log(id == id2)
// so even if the values are same the different id's makes it different 

const heros =["superman","ironman"]
const power={
    ironman:"tech",
    superman:"strength" // object
}
const myfun= function(){
    console.log('hello')

} // function has object data type but its return type is function called functionobject

console.log(typeof myfun)

