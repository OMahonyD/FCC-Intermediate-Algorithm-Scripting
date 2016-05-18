/**************************************************
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Arguments object
Array.shift()
Array.slice()
***************************************************/
function dropElements(arr, func) {
  //While function returns false on the 0 index
  while(!func(arr[0])) {
    //shift left until it is true
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
