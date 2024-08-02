//Ryan Hutchings
//Unit 14.3: Arrow Functions Exercise

//Part 1
//ES5 Map Callback
// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }


//ES2015 Arrow Functions Shorthand
/* Write an ES2015 Version */
const double = arr => arr.map(val => val * 2);

//Test case:
//console.log(double([1,2,3,4,5]));


//Part 2
//original
// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

//updated
const squareAndFindEvens = (numbers) => {
  return numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
}

//Test case:
// console.log([1,3,5,2,4,8,12,11])
// console.log(squareAndFindEvens([1,3,5,2,4,8,12,11]));