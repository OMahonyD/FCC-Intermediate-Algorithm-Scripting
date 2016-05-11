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
  //Iterate through all numbers in holderArray
  for(var j = 0; j < holderArray.length; j+=2){
    holderArray.splice(holderArray[j], 1);
  }
  
  
  console.log(holderArray);
  return holderArray;
}
}

sumPrimes(10);
