/****************************************************************
Sum all the prime numbers up to and including the provided number.
A prime number is defined as having only two divisors, 1 and itself. 
For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, 
because it's only divisible by itself.
The provided number may not be a prime.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
    For Loops
    Array.push()
****************************************************************/

function sumPrimes(num) {
  
  //Array to hold all numbers
  var holderArray = [];
  var finalNum = 0;
  //Iterate through all numbers up to and including num and push them into the holderArray variable
  for(var i = 0; i <= num; i++) {
    holderArray.push(i);
  }
  
  //Attempt Sieve of Erathosthenes Algorithm
 
  //First number in holderArray is 2
    //Cross out every 2nd number in the list after it by counting in increments of 2
      //(These will be all the multiples of 2 in the list)
  for(var j = 2; j < holderArray.length; j++) {
    holderArray.splice(j, 1);
  }
  
  //Next number in holderArray after 2 is 3
    //Cross out every 3rd number in the list after it by counting in increments of 3
    //(These will be all the multiples of 3 in the list)
  
  //Next number in holderArray not yet crossed out after 3 is 5
    //Cross out every 5th number in the list after it by counting in increments of 5
    //(These will be all the multiples of 5 in the list)
  
  
  console.log(holderArray);
  return holderArray;
}
}

sumPrimes(10);
