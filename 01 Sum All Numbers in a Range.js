/***********************************************
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Math.max()

    Math.min()

    Array.reduce()
**********************************************/ 
unction sumAll(arr){
  
  //This gets the largest number in the array
  var highest = Math.max(arr[0], arr[1]);
  //This gets the lowest number in the array
  var lowest = Math.min(arr[0], arr[1]);
  
//NEED TO ACCESS ALL OF THE NUMBERS BETWEEN AND INCLUDING HIGHEST AND LOWEST
  
  //set up an empty array to hold the values
  var holderArray = [];
  //Create a variable (num) and set it equal to the lowest value in arr
  var num = lowest;
  //Create a while loop
    //while num is less than or equal to the highest value in arr
  while(num <= highest){
    //push num to holderArray
    holderArray.push(num);
    //Don't forget to increment num
    num++;
  }//end while loop

  
  //Reduce holderArray down to a single number by adding all values together
   return holderArray.reduce(function(previousValue, currentValue, currentIndex, array){
     return previousValue + currentValue;
   });
}

sumAll([10, 5]);
