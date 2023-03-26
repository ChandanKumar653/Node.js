console.log("hello world")
console.log(__dirname)
console.log(__filename)

//varialbe
const n1 = 5
    // n1 = 2
const n2 = 6
const n3 = n1 + n2
console.log(n3)

let r = 5
r = 6
console.log(r)

//Control Statement
if (r == '6')
    console.log("matched")
if (r === 6)
    console.log("matched")

//Loop
for (i = 0; i < 10; i++)
    console.log(i)

//Array
const arr = [1, 2, 3, 4, 5, 3, 4, 3]
console.log(arr)
console.log("first element of array:" + arr[0])
arr.filter((item) => { //like for each loop
    console.log(item)
})
let res = arr.filter((item) => {
    // return item === 3
    return item > 2
})
console.warn(res)

//variable and functions from other file
let hello = require('./hello') //import
console.log(hello)
console.log(hello.x)
console.log(hello.y)
console.log(hello.z())
console.log("test nodemon")