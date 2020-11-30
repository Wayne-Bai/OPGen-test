//Create
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3

//Property
fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6

//Increase
fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined

//Decrease
fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2