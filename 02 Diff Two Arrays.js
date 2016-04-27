/********************
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Comparison Operators

    Array.slice()

    Array.filter()

    Array.indexOf()

    Array.concat()
********************/

function diffArray(arr1, arr2) {
  var holderArray = [];

  //Iterate through array 1
  for(var i = 0; i < arr1.length; i++) {
    //if array 2 doesn't contain items in array 1
    if(arr2.indexOf(arr1[i]) === -1) {
      //push the current item in array 1 to the holder array
      holderArray.push(arr1[i]);
    }//end if statement
  }//end for loop
  
  //Vice Versa switch array 2 for array 1
  for(var j = 0; j < arr2.length; j++) {
    if(arr1.indexOf(arr2[j]) === -1) {
      holderArray.push(arr2[j]);
    }//end if statement
  }//end for loop
  
  
  return holderArray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
