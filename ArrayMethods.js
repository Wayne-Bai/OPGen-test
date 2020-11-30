//TODO: from
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

//TODO: isArray
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({foo: 123})); // false
console.log(Array.isArray('foobar'));   // false
console.log(Array.isArray(undefined));  // false

//TODO: of
console.log(Array.of(7));       // [7]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]

console.log(Array(7));          // array of 7 empty slots
console.log(Array(1, 2, 3));    // [1, 2, 3]

//TODO: concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers);

const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

const num4 = [[1]];
const num5 = [2, [3]];
const numbers1 = num4.concat(num5);
console.log(numbers1);
// results in [[1], 2, [3]]
// modify the first element of num1
num4[0].push(4);
console.log(numbers1);
// results in [[1, 4], 2, [3]]

//TODO: copyWithin
const array4 = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(array4.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]
// copy to index 1 all elements from index 3 to the end
console.log(array4.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

//TODO: entries
const array5 = ['a', 'b', 'c'];
const iterator1 = array5.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);
// expected output: Array [1, "b"]

//TODO: every
const isBelowThreshold = (currentValue) => currentValue < 40;
const array6 = [1, 30, 39, 29, 10, 13];
console.log(array6.every(isBelowThreshold));
// expected output: true

//TODO: fill
const array7 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array7.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]
// fill with 5 from position 1
console.log(array7.fill(5, 1));
// expected output: [1, 5, 5, 5]
console.log(array7.fill(6));
// expected output: [6, 6, 6, 6]

//TODO: filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//TODO: find
const array8 = [5, 12, 8, 130, 44];
const found = array8.find(element => element > 10);
console.log(found);
// expected output: 12

//TODO: findindex
const array9 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array9.findIndex(isLargeNumber));
// expected output: 3

//TODO: flat -> This method is not yet completely implemented
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// // expected output: [0, 1, 2, 3, 4]
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(2));
// // expected output: [0, 1, 2, [3, 4]]

//TODO: forEach
const array10 = ['a', 'b', 'c'];
array10.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

//TODO: includes
const array11 = [1, 2, 3];
console.log(array11.includes(2));
// expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// expected output: true
console.log(pets.includes('at'));
// expected output: false

//TODO: indexOf
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// expected output: 1
// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4
console.log(beasts.indexOf('giraffe'));
// expected output: -1

//TODO: join
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

//TODO: keys
const array12 = ['a', 'b', 'c'];
const iterator = array12.keys();
for (const key of iterator) {
  console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2

//TODO: lastIndexOf
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
// expected output: 3
console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

//TODO: map
const array13 = [1, 4, 9, 16];
// pass a function to map
const map1 = array13.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

//TODO: pop
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

//TODO: push
const animals1 = ['pigs', 'goats', 'sheep'];
const count = animals1.push('cows');
console.log(count);
// expected output: 4
console.log(animals1);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
animals1.push('chickens', 'cats', 'dogs');
console.log(animals1);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//TODO: reduce
const array14 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array14.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array14.reduce(reducer, 5));
// expected output: 15

//TODO: reduceRight
const array15 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);
console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]

//TODO: reverse
const array16 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

//TODO: shift
const array17 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1

//TODO: slice
const animals2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals2.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals2.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals2.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

//TODO: some
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true

//TODO: sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]
const array18 = [1, 30, 4, 21, 100000];
array18.sort();
console.log(array18);
// expected output: Array [1, 100000, 21, 30, 4]

//TODO: splice
const months1 = ['Jan', 'March', 'April', 'June'];
months1.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months1);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months1);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//TODO: toLocalString
const array19 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array19.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// expected output: "1,a,12/21/1997, 9:12:00 PM"

//TODO: toString
const array20 = [1, 2, 'a', '1a'];
console.log(array20.toString());
// expected output: "1,2,a,1a"

//TODO: unshift
const array21 = [1, 2, 3];
console.log(array21.unshift(4, 5));
// expected output: 5
console.log(array21);
// expected output: Array [4, 5, 1, 2, 3]

//TODO: values
const array22 = ['a', 'b', 'c'];
const iterator2 = array22.values();
for (const value of iterator2) {
  console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"


