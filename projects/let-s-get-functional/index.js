// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/**
 * I: input array
 * O: output number
 * C: use filter method
 * E:
 */

//return number of male customers from input array
var maleCount = function(array) {
  //create storage array
  const output = [];
  //loop through customer for gender
  for(let i = 0; i < array.length; i++){
    //if gender male; push to output array
    if(array[i].gender === 'male'){
        output.push(array[i]);
    
  }
}
    //return length of storage array
    return output.length;
};

var maleCount = function(array){
    const males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });
    return males.length;
}

//callback function
// function(customer){
//     return customer.gender === 'male';
// }

_.filter = function(array, test){
    const output = [];
    for(i = 0; i < array.length; i++){
        if(test(array[i], i, array)){
            output.push(array[i]);
        }
    }
    return output;
}

/**
 * I: input array
 * O: output number
 * C: use reduce method
 * E:
 */
//find the number of female customers in array
var femaleCount = function(array){

}

/**
 * I: input array
 * O: output string
 * C: 
 * E:
 */
//find oldest customer name in array
var oldestCustomer = function(array){

}

/**
 * I: input array
 * O: output string
 * C: 
 * E:
 */
//find youngest customer name in array
var youngestCustomer = function(array){

}
/**
 * I: input array
 * O: output number
 * C: 
 * E:
 */
//find avaerage balance of all customers
var averageBalance = function(array){

}

/**
 * I: input array, letter
 * O: output number
 * C: 
 * E:
 */
//find number of customer names that begin with a given letter
var firstLetterCount = function(array, letter){

}

/**
 * I: input array, customer, letter
 * O: output number
 * C: 
 * E:
 */
//find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = function(array, customer, letter){

}

/**
 * I: input array, name
 * O: output array of names
 * C: 
 * E:
 */
//find the customers and return their names pushed into an array that have a given name in their friends list
var friendsCount = function(array, name){

}

/**
 * I: input array
 * O: output array
 * C: 
 * E:
 */
//find the three most common tags among all customers' associated tags
var topThreeTags = function(array){

}

/**
 * I: input array
 * O: output object
 * C: use reduce method
 * E:
 */
//create an object with a summary of gender count from input array
//object has three keys: male, female, non-binary;
var genderCount = function(array){

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
