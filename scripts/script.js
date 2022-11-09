// for (let i = 1; i <= 10; i++) {
//   console.log(Math.pow(2, i)); //2**i
// }

// let i = 1;
// while (i < 11) {
//   console.log(Math.pow(2, i)); //2**i
//   i++;
// }
// let input = "";
// do {
//   input = prompt("what is your name?"); //always return a string
// } while (!isNaN(Number(input))); // if user enters a number the result of Number() is a number, else it is NaN

// // alert("Hello " + input );
// alert(`Hello ${input}`);
// let arr = [1,2,3];
// arr[10] = 10;
// console.log(arr)
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
// fruits.pop();
fruits.unshift("Mango");
// console.log(fruits)
// fruits.shift();
// console.log(fruits);
// for (let i = 0; i < fruits.length; i++)
// {
//     console.log(fruits[i]);
// }

// for (let item of fruits )
// {
//     console.log(item);
// }

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  hobbies: ["music", "skiing"],
};
console.log(
  `my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}`
);
