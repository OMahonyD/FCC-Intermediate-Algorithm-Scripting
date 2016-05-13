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

function isPrime(num) {  
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num%i===0) return false;
  }
  return true;
}
function sumPrimes(num) {  
  var finalNum = 0;
  for (var i = 0; i < num; i++) {
    if (isPrime(i)) finalNum += i;
  }
  if (isPrime(num)) finalNum += num;
  return finalNum;
}

sumPrimes(10);  
