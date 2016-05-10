/***********************************
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum 
of the previous two numbers.
As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
    Remainder
***********************************/

function sumFibs(num) {
  //Array of all fibonacci numbers
  var fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946,
             17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578,
             5702887];
  //Array to hold all odd fibonacci numbers
  var oddFib = [];
  //Array to send odd fibonacci numbers that pass the second test to
  var result = 0;
  
  //Iterate through fib array to find odd fibonacci numbers
  for(var i=0; i < fib.length; i++) {
    if(fib[i] % 2 !== 0) {
      oddFib.push(fib[i]);
    }//end if
  }//end for
  
  //Iterate through the oddFib array to find numbers that pass the if test
  for(var j = 0; j < oddFib.length; j++) {
    if(oddFib[j] <= num) {
      result += oddFib[j];      
    }//end if
  }//end for
  
  return result;
 
}

sumFibs(4);

