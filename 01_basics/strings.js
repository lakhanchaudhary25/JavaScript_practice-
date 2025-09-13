const name ="lakhan-is a btech student"
const repo =4
console.log(name+repo)
// its quite old method 

// now we use  ` ${}` 

console.log(` hello my name is ${name} and the total repo i have made are ${repo}`)
console.log( ` i am a student of ${"btech"} and i am in ${"3rd"} year `)
console.log(` you are most welcome on this repo ${+true} and hope you like my work ${undefined}`)

// another way of declaring string
const l = new String("lakhan")
console.log(l)
// it is an ojbect datatype and will give its like {0:"l",1:"a"....}
console.log(name[2])

console.log(name.__proto__) // one way to initialise prototype 
console.log(name.toUpperCase())// this is how we can use uppercase methods or any other method 
console.log(name.toLocaleUpperCase())
console.log(name.charAt(6))// which char is at any index
console.log(name.indexOf("a"))// what is the index of any character

const str= name.substring(0,10)// want a part of string
console.log(str)

const str2=name.slice(6,-9)// can get a part with negative indexing also
console.log(str2)

const str3= "   lakhan   is  "
console.log(str3)
console.log(str3.trim())// remove the unwanted extra space

console.log(str3.replace("kh","--"))// can replace any part of string with desired value

console.log(str3 < str2)// can compare the strings 
console.log(str.includes("l"))

// another function to split the string ==> split(seperator, limit)
console.log(name.split("-"))// splits the string and gives o/p in array 
console.log(name.bold())
