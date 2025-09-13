let value =-3 
let neg= -value// assigning negative value
console.log(neg)

let s1="hello"
let s2 =" lakhan"
s3=" chaudhary"
console.log(s1+s2+s3)// can add two or more strings 

// very important concept "type coercion" in this js auto converts the typr of variable.
//The key rule here is that when the + operator encounters a string, it treats everything as a string and performs concatenation (joining strings together), not mathematical 

console.log("2"+1)
console.log("1"+2+3)// in this it will convert all into strings and add them according to it 
console.log(1+2+"3")
console.log("1"+2*3)// as * precedence is more than + thats why its calculated first 

// () > *,/,% > +,- > =
//order from left ➡️ right

console.log(+true)// prints 1
// its also a tricky conversions which converts into boolean

let gameCounter1=100
y1= gameCounter1++// gives incremented value after operation
console.log(gameCounter1)// o/p=101
console.log(y1)//o/p=100

let gameCounter=200
y= ++gameCounter// gives incremented value before operation
console.log(gameCounter) // o/p= 201
console.log(y)//o/p=201

//***********************************comparision************************************

// in js empty comparision "==" and comparision ">= ,<= " works differently
// comparision converts the null value into number, thus treating it as 0
console.log("1">2)// converts string to no. giving us false
console.log(null>0)// false
console.log(null>=0)// true 
console.log(null==0)// false
console.log(null<0)// false
console.log(null<=0)// true

// that's why always use same datatypes for comparision as it can give unexpected outcomes

// === this strictly checks for same datatypes .
