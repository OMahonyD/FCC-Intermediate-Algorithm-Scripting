/***********************************
Create a function that looks through an array (first argument) and returns the first element 
in the array that passes a truth test (second argument).
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Array.filter()
***********************************/
function findElement(arr, func) {
 
  
  //Make num undefined to begin
  var num;
  //Iterate through arr
  for(var i = 0; i < arr.length; i++) {
    //if func(the element) returns true
    if(func(arr[i])) {
      //make the element equal num
      num = arr[i];
      //return it
      return num;
    }//end if 
  }//end for
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

