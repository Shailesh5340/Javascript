const name = "Shailesh";
const count = 10;

// console.log( name + count + "value"); // Concatenation using + operator
// console.log(`Hello my name is ${name} and the count is ${count}`);


const gameName = new String("BGMI");
// console.log(gameName);
// console.log(typeof gameName); // object

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("M"));


const anotherString = "Shailesh";

const anotherString2 = anotherString.slice(0,8);
console.log(anotherString2);