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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stacks and heap memory 
//stack(primitive)= copiedvalue       heap(non-primitive)=reference

let i="lakhan"
let j = i
console.log(j) // o/p= lakhan
j="chaudhary"
console.log(j) // o/p= chaudhary
console.log(i) // o/p= lakhan
// so the original value remains same because its passed by value in primitive datatypes

let k ={
    name:"lakhan",
    age:23
}
console.log(k)
let m = k
m.age= 4
console.log(m)
console.log(k)// in this the refrence of the original is paased so the value of original will also be changed

//basically the variable m, k are made in stack memory and the object  is saved in heap and the reference of that same obj is passed to both so both can change the object
