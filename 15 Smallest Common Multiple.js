/*******************************************
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
    Smallest Common Multiple
*******************************************/


function smallestCommons(arr) {
  
  var min, max;
  //Get the minimum and maximum
  //if the first index is greater than the second index
  if(arr[0] > arr[1]) {
    //the second index is the minimum
    min = arr[1];
    max = arr[0];
  //otherwise if the the second index is greater than the first
  }else {
    //the first index is the minimum
    min = arr[0];
    max = arr[1];
  }//end if else
  
  //test console.log to identify min and max
  console.log("Minimum is " + min + " and Maximum is " + max);
  
  //range array with indices min and max
  var range = [min, max];
  
  //empty array to hold all numbers between min and max
  var nums = [];
  
  //Generate an array that contains all numbers between min and max
   for(var i = min; i <= max; i++) {
    nums.push(i);
  }
  //Test console.log to see nums array
  console.log(nums);
  
    //Need to find the smallest common multiple of each of the range of numbers
    //The smallest number into which each number will divide evenly (i.e. no remainder)  
  
  return nums;
}//end smallestCommons


smallestCommons([1,5]);
