//Q1 DataTypes
//There are two types primitive and non primitive datatypes 
// Primitive 
// 1 String
// 2 Integer 
// 3 Boolean
//Non Primitive
//array
//Object


//example for the same are 
let num = 43;
let val =  true / false;
let ch = "dev";
let arr = ['dev','dev1','dev2'];

//Q2 What is hosting in js ?
//Hosting in JavaScript means running a website, web app, or service using JavaScript-based tools or frameworks — most commonly with Node.js on a server.

//Q3 Difference between var let and const ?
function testVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); //  10 (function scoped)
  }
  
  function testLet() {
    if (true) {
      let y = 20;
    }
    console.log(y); //  ReferenceError (block scoped)
  }
  
//Q4 what is clousre ? 
//A closure is when a function remembers the variables from its outer scope, even after the outer function has finished executing..
function outerFunction() {
    let counter = 0;
  
    function innerFunction() {
      counter++;
      console.log("Counter:", counter);
    }
  
    return innerFunction;
  }
  
  const myCounter = outerFunction();  // `outerFunction` runs and returns `innerFunction`
  
  myCounter();  // Counter: 1
  myCounter();  // Counter: 2
  myCounter();  // Counter: 3
//Q5 Difference between == and === ?
let valdd = 90;
function example1(valdd){
    let value = "90";
    if(val == value){
        return true
    } // here it check the value is equal
    if(val === value){//here it will check value and DataTypes
        return true;
    }
    else{
        return false;
    }
}

//Q6 what are the truly and falsy statement 

//A truthy value is any value that is considered true when evaluated in a boolean context
//A falsy value is a value that is considered false when evaluated in a boolean context.
false       // Boolean false
0           // Number zero
true // boolean true 

//undefined means the value is not assigned in perticular value and null means value has intentionally empty 
let y = null;
console.log(y); // null (manually set to empty)

let user = {
  name: "Dev",
  address: null,  // Address intentionally empty
};

//Q7 What is event delegation 
//vent Delegation is a technique where a single parent element handles events for its child elements using event bubbling.
//html code 
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
document.getElementById("myList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      alert("You clicked: " + event.target.textContent);
    }
  });

//Q8 What is use of this Keyword ?
//In JavaScript, this refers to the object that is calling the function.
const person = {
    name: "Dev",
    greet: function () {
      console.log("Hello, " + this.name);
    }
  };
  
  person.greet(); // "Hello, Dev"

  //Q9 What are the arrow function how it is diiferent from regular function ?
  //An arrow function is a shorter way to write functions in JavaScript that does not have its own this context.
  //regular function 
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3)); // 5
  //arrow function
  const add = (a, b) => a + b;
console.log(add(2, 3)); //  5

//Q10 Difference between Asynchronous code and Synchronous code ?
//In synchronous code, each line of code is executed one after the other, in a sequential manner. 
console.log('Start');
const data = fetchData(); // assume this takes 2 seconds to complete
console.log('Data:', data);
console.log('End');
//In asynchronous code, multiple operations can be executed concurrently, without blocking the program
console.log('Start');
fetchData((data) => {
  console.log('Data:', data);
});
console.log('End');

//Q11 Explain EventLoop in js ?
//The Event Loop is a fundamental concept in JavaScript that allows it to handle asynchronous operations and manage the execution of tasks
console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 2000);
console.log('End');

//Q12 What is promise how it is used ?
//A promise is a result object that is used to handle asynchronous operations in JavaScript. It represents a value that may not be available yet, but will be resolved at some point in the future.

const fetchUserProfile = () => {
    return new Promise((resolve, reject) => {
      // simulate an API call
      setTimeout(() => {
        const userProfile = { name: 'John Doe', email: 'john.doe@example.com' };
        resolve(userProfile);
      }, 2000);
    });
  };
  fetchUserProfile()
    .then((userProfile) => {
      console.log(userProfile); // handle the resolved user profile
    })
    .catch((error) => {
      console.error(error); // handle any errors that occurred
    });

//Q13  What are the callback function how they are Difference from promise ?
  
  //In JavaScript, a callback function is a function that is passed as an argument to another function, to be executed by that function at a later time.
  //call back example 
  function outerFunction(callback) {
    // do some work
    callback(); // execute the callback function
  }
  function innerFunction() {
    console.log("Callback executed!");
  }
  outerFunction(innerFunction);

  //A promise is a result object that is used to handle asynchronous operations in JavaScript. It represents a value that may not be available yet, but will be resolved at some point in the future.

  function outerFunction() {
    return new Promise((resolve, reject) => {
      // do some work
      resolve("Success!"); // resolve the Promise
    });
  }
  outerFunction().then((result) => {
    console.log(result); // "Success!"
  });

//Q14 Difference between map , filter , foreach ?

//map: Transforms each element and returns a new array.

//filter: Returns a new array of elements that match a condition.

//forEach: Runs a function on each element but returns nothing.

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); //  [2, 4, 6, 8, 10]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

numbers.forEach(num => {
    console.log(num); // prints 1, 2, 3, 4, 5
  });
  
// //Q15 How does setTimeout and setinterwal work 
//In JavaScript:

//setTimeout is used to execute a function once after a specific delay (in milliseconds).

//setInterval is used to execute a function repeatedly at specified intervals.
//Example using setTimeout with a Promise:

const fetchUserProfile1 = () => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const userProfile = {
        name: 'John Doe',
        email: 'john.doe@example.com'
      };
      resolve(userProfile);
    }, 2000);
  });
};
//Here, setTimeout delays the execution of the inner function by 2 seconds, simulating a delay like in real-world API calls. After the delay, the Promise is resolved with a user profile object.

//✅ Example of setInterval:

//setInterval(() => {
  console.log("This message shows every 3 seconds");
//}, 3000);
//This keeps printing the message every 3 seconds until manually stopped using clearInterval().



//Q16 What are the localstorage , sessionStorage ?
//localStorage, is a persistent storage mechanism that allows you to store data locally on the client-side. The data is stored in key-value pairs and is accessible across multiple sessions and even after the browser is closed.
// Set a value
localStorage.setItem('username', 'John Doe');
// Get a value
const username = localStorage.getItem('username');
console.log(username); // Output: John Doe
// Remove a value
localStorage.removeItem('username');
// Clear all values
localStorage.clear();

//sessionStorage

//sessionStorage is an nonpersistent storage mechanism that allows you to store sessionStorage.

//Q17 Explain call() , apply() , bind() methods ?
//call()
//The call() method calls a function with a given this value and individual arguments.
//var obj = { name: 'John' };
function greet(age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
  }
  greet.call(obj, 30); // O

//apply()
//The apply() method calls a function with a given this value and an array of arguments.
var obj = { name: 'John Doe' };
function greet(age, city) {
  console.log(`Hello, my name is ${this.name} and I am ${age} years old from ${city}.`);
}
var args = [30, 'Lahore'];
greet.apply(obj, args); // Output

//Bind()


//Q18 Explain async/await How do they simplify working with promise ?
//Promises are a fundamental concept in JavaScript for handling asynchronous operations. However, promise chains can become cumbersome and hard to read, especially when dealing with multiple nested promises.

Q19 What are the high order function ? 

High order functions are function that take argument as function 
for example 
myfun1(myinnerfun1){

} 
