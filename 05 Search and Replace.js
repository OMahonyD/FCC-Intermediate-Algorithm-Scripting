/********************************************
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you 
mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Here are some helpful links:

    Array.splice()
    String.replace()
    Array.join()

*********************************************/

var myReplace = function(str, before, after){
	
    //1. Find the index of where "before" is on the string
    var index = str.indexOf(before);
    //2. Check to see if it is uppercase or not
    if(str[index] === str[index].toUpperCase()) {
    //3. If it is uppercase, change the first letter of "after" to be uppercase also      
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
      //4. Then replace the original string 
    return str.replace(before, after);
};

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
