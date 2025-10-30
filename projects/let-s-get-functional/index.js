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
function(customer){
    return customer.gender === 'male';
}

_.filter = function(array, test){
    const output = [];
    for(i = 0; i < array.length; i++){
        if(test(array[i], i, array)){
            output.push(array[i]);
        }
    }
    return output;
}

var femaleCount;

var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
