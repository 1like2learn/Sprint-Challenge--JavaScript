// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//Variables that are outside of a function are accesible inside of a function because of closure. myFunction is enclosed in the global scope and it can use entities that are within
//the global scope as well as it's own function scope. However, myFunction cannot access entities within nestedFunction's scope because it's brackets act as a one way door, allowing things in
//but not allowing them out. NestedFunction can access entities inside it's parent functions scope and the global scope for this reason.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param){
  let summation = 0;
  for (let i = 0; i<param; i++){
    summation = summation + i + 1 
  }
  return summation
};
console.log(summation(4))