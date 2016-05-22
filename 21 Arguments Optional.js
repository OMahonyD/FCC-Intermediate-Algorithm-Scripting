/******************************************************
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument 
and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Closures
Arguments object
*****************************************************/

function addTogether() {
  
   //Use the arguments object because do not know if one or two arguments being passed
  if(arguments.length === 1 && typeof arguments[0] === 'number') {
    //return a function!
    var x = arguments[0];
    return function(y){
      if(typeof y === 'number') {
        return x + y;  
      }
    };
  }else if(typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
    return arguments[0] + arguments[1];
  }
}// end addTogether

addTogether(2,3);
