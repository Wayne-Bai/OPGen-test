// Create
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2

//Acess
let first0 = fruits[0]
console.log(first0)
// Apple

let last0 = fruits[fruits.length - 1]
console.log(last0)
// Banana

//Loop
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1

//ADD
let newLength = fruits.push('Orange')
console.log(fruits)
// ["Apple", "Banana", "Orange"]

//Remove end
let last1 = fruits.pop() // remove Orange (from the end)
console.log(last1)
// ["Apple", "Banana"]

//Rmove begin
let first1 = fruits.shift() // remove Apple from the front
console.log(first1)
// ["Banana"]

//Add begin
let newLength1 = fruits.unshift('Strawberry') // add to the front
console.log(newLength1)
// ["Strawberry", "Banana"]

//Find index
fruits.push('Mongo')
let pos = fruits.indexOf('Banana')
console.log(pos)

//Remove by index
let removedItem = fruits.splice(pos, 1)
console.log(removedItem)
console.log(fruits)

//Remove from index
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos1 = 1
let n = 2

let removedItems = vegetables.splice(pos1, n)

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]

//Copy
let shallowCopy = fruits.slice()
console.log(shallowCopy)
// ["Strawberry", "Mango"]