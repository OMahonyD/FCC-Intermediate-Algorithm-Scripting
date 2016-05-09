/*************************************
Write a function that takes two or more arrays and returns a new array of unique values in the order 
of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
    Arguments object
    Array.reduce()
*************************************/
function uniteUnique(arr1, arr2, arr3) {
  //Create an empty holderArray
  var holderArray = [];
  
  //Use "Array.from" method to convert arguments to a real Array
  var args = Array.from(arguments);
  
  //args is equal to an array of arrays, i.e. [[1, 3, 2], [5, 2, 1, 4], [2, 1]]
                    //args.length == 3; args[i] here will be [1, 3, 2] [5, 2, 1, 4] [2, 1]  
  for(var i = 0; i < args.length; i++) {
    //go one level deeper; args[i] == top level with respect to this for loop
    for(var j = 0; j < args[i].length; j++) {
      //if holderArray does NOT contain an instance of args[i][j], 
        //which would be the integers within each args[i]
      if(holderArray.indexOf(args[i][j]) === -1) {
        //push the integer into holderArray
        holderArray.push(args[i][j]);
      }//end if     
    }//end inner for
 
  }//end outer for

  return holderArray;
  
}//end uniteUnique

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
