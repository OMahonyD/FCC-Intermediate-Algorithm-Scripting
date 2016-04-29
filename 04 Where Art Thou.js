/************************************
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Global Object

    Object.hasOwnProperty()

    Object.keys()
**************/

function whereAreYou(collection, source) {
  
  //2. doesContain takes in an item
  var doesContain = function(item){
    //3. Iterates over source
    for(var i in source){
      //4. If the current index of source is not equal to the current index of item
      if(source[i] != item[i]){
        return false;
      }//end if
    }//end for
    return true;
  };//end doesContain
  
  //1. Make the variable arr equal to the collection array, filtered by the doesContain function
  var arr = collection.filter(doesContain);
  return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
