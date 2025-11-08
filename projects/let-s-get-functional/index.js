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
//function written with for-loop and if statement
// var maleCount = function(array) {
//   //create storage array
//   const output = [];
//   //loop through customer for gender
//   for(let i = 0; i < array.length; i++){
//     //if gender male; push to output array
//     if(array[i].gender === 'male'){
//         output.push(array[i]);
    
//   }
// }
//     //return length of storage array
//     return output.length;
// };

//example of how filter method works under the hood
// _.filter = function(array, test){
//     const output = [];
//     for(i = 0; i < array.length; i++){
//         if(test(array[i], i, array)){
//             output.push(array[i]);
//         }
//     }
//     return output;
// }

/**
 * I: input array of customer objects
 * O: output number of male customers from input array
 * C: use filter method
 * E:
 */
//return number of male customers from input array
//write function usind filter method
var maleCount = function(array){
    //filter method
    //syntax: _.filter(input array, callback function)
    //syntax: _.filter(input array, function(index of array))
    const males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });
    return males.length;
}

//callback function
// function(customer){
//     return customer.gender === 'male';
// }

//example of how reduce works
// var femaleCount = function(array){
//     //use reduce method
//      //set reduce function equal to variable female
//     let variable = array.reduce((acc, variable name that represents current item) => {
//
//         //condition if statement
//         if(customer.gender === 'female'){
//             //increment valueHolder (acc) by 1
//             acc++;
//         } 
//         //return valueHolder (acc)
//         return acc; 
//
//         //start value if not specified should be 0
//     }, 0);
//
//         //return result; variable assigned to reduce function
//
//         return female;
// }

/**
 * I: input array
 * O: output number
 * C: use reduce method
 * E:
 */
// _.reduce = function(starting position in array, value you begin calculating with)
// //find the number of female customers in array
//return single value; use REDUCE
//search array for list of results; return number of results; use REDUCE to build an array
var femaleCount = function(array){
    //use reduce method
    let female = array.reduce((acc, customer) => {
        //condition if customer object gender key value = 'female'
        if(customer.gender === 'female'){
            //add 1 to the accumulator
            acc++;
        } 
        //return accumulator or valueHolder
        return acc; 
        //start value should be 0
    }, 0);
        //return variable female
        return female;
}


//example of how reduce method works under the hood
// _.reduce = function(    array,               func,                        seed){
//                                        current element,                   index
//                                                           starting point value / intial value 
//     let valueHolder; ==================================== > stores running result / as refered to as previousValue
//      let startIndex; =================================== > position where loop begins
//
//
//     //CONDITION: if seed / inital value exists === begin value and start position here; else start loop here
//      if(seed !== undefined){
//          valueHolder = seed; ============================== > VALUE to begin with
//          startIndex = 0; ======================================= > POSITION to start at
//      } else { else seed / inital value does NOT exist; begining value and start position here
//          valueHolder = array[0]; ============================== > VALUE to begin with is the first value in array
//          startIndex = 1; =========================================== > POSITION to start is 1 (skiping first position)
//      }
//      
//      //loop thru array using startIndex as defined above thru if / else statement
//     for(i = startIndex; i < array.length; i++){
//
//          //valueHolder or previousResult (defined above in if / else statement)
//          //set valueHolder = func or reduce function with parameters 
//                              valueHolder, array[i] (current element/position), i (index)
//          valueHolder = func(valueHolder,                array[i],                  i);
//         
//             
//         }
//     }
//          return valueHolder;
// }




/**
 * I: input array
 * O: output string
 * C: 
 * E:
 */
//find oldest customer name in array
//return single value; use REDUCE
//search array for greatest result; use REDUCE to find / search
var oldestCustomer = function(array){
    //use reduce
    //assign reduce function to return value; syntax: let variable = array.reduce((acc, element) => {})
    let oldest = array.reduce((previousCustomer, customer) => {

        //condition compare variables
        if(customer.age > previousCustomer.age){
            //return customer object
            return customer;
        } else{ //else return previousCustomer object as oldest
            return previousCustomer;
        }
    });
    //return result name
    return oldest.name;
}

/**
 * I: input array
 * O: output string
 * C: 
 * E:
 */
//find youngest customer name in array
//return single value; use REDUCE
//search array for greatest result; use REDUCE to find / search
var youngestCustomer = function(array){
    //use reduce method
    //assign result varibale to reduce function
    let youngest = array.reduce((previousCustomer, customer) => {

        //condition
        if(customer.age < previousCustomer.age){
            //return customer
            return customer;
        } else { //return previousCustomer as youngest
            return previousCustomer
        }
    });
    //return result name
    return youngest.name;
}
/**
 * I: input array
 * O: output number
 * C: 
 * E:
 */
//find avaerage balance of all customers
var averageBalance = function(array){
    //use reduce
    let totalBalance = array.reduce(function(acc, customer){
        //define seed => return number
        //condition => no condition add all customer balances together
        //what to do with acc
        acc += Number(customer.balance.replaceAll("$", "").replaceAll(",", "")); 
        //return acc
        return acc;
    }, 0)
    //return average of total customer balance
    return totalBalance / array.length;
}

/**
 * I: input array, letter
 * O: output number
 * C: 
 * E:
 */
//find number of customer names that begin with a given letter
var firstLetterCount = function(array, letter){
    //use reduce
    let customerLetterCount = array.reduce(function(acc, customer){
        //define seed => return number of customers
            //condition => if customer name first letter === letter input; return 1 to acc
            if(customer.name[0] === letter.toUpperCase() || customer.name[0] === letter.toLowerCase()){
                acc += 1;
            }
            //return acc
            return acc;
    }, 0)
    //return customer letter count
    return customerLetterCount;
}

/**
 * I: input array, customer, letter
 * O: output number
 * C: 
 * E:
 */
//find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = function(array, customerName, letter){
//use reduce
let customerFriendLetterCount = array.reduce(function(acc, customer){
    //define seed => return a number => seed is 0
    if(customerName === customer.name){
        //condition => if customer name === customer input; return true => loop thru friends array
            //customer friend value is an array => create loop of customer friends
            for(let i = 0; i < customer.friends.length; i++){
                //condition => if customer friend name === letter; return 1 to acc
                if(customer.friends[i].name[0] === letter.toUpperCase() || customer.friends[i].name[0] === letter.toLowerCase()){
                    acc += 1;
                }
            }
        }
            //return acc
            return acc; 
        
}, 0)



            //return customer friend letter count
            return customerFriendLetterCount;
}

/**
 * I: input array, name
 * O: output array of names
 * C: 
 * E:
 */
//find the customers and return their names pushed into an array that have a given name in their friends list
var friendsCount = function(array, friendName){
    //given name of friend => find customer in array of customers that name key value in friend array === friendName input
    //use reduce => 
    let findFriendName = array.reduce(function(acc, customer){
        //define seed => return an array of names => seed is empty array []
            //condition => if friendName input === customerfriends array, name key value; push customer name into acc
                //create loop => loop thru friends array
                for(let i = 0; i < customer.friends.length; i++){
                    //condition=> if friendName input === customerfriends array, name key value; push customer name into acc
                    if(customer.friends[i].name === friendName){
                        acc.push(customer.name);
                    }
                }
                //return acc
                return acc;
    }, [])

                //return find friend name
                return findFriendName;
}

/**
 * I: input array
 * O: output array
 * C: 
 * E:
 */
//find the three most common tags among all customers' associated tags
var topThreeTags = function(array){
    //create array with all customer tags
        //use reduce
        let allTags = array.reduce(function(acc, customer){
            //define seed => result is an array
            //condition => no condition push all customer tags into acc
                //customer.tags value is an array => create loop of customer.tags
                for(let i = 0; i < customer.tags.length; i++){
                    //push all customer tags into acc
                    acc.push(customer.tags[i]);
                }
                //return acc
                return acc;
        }, [])
    //convert allTags array to object with tag key and value number of times that tag appears
        //use reduce
        let rateTags = allTags.reduce(function(acc, tag){
            //define seed => result is an object
                //condition => if customer !== acc.customer; add acc.customer to object; else add 1 to acc.customer
                if(!acc[tag]){
                    //add acc.customer to object
                    acc[tag] = 1;
                } else{
                    acc[tag] += 1;
                }
                //return acc
                return acc;
        }, {})
    //convert object to array of arrays with ONLY three tags that have highest key values with string of tag, number of how often it appears
        //declare result array equal to Object.entries
        let arrayRateTags = Object.entries(rateTags);
            //sort result array from highest value to lowest value
                //sort array of arrays in decending order
         let sortedTags =  arrayRateTags.sort(function(a, b){
                //return sort array of arrays in decending order
                return b[1] - a[1];
            })

            //create array of only tag names; use maps method
            let nameTags = sortedTags.map(function(tag){
                //return tag name
                return tag[0];
            })

            //return first three name reseults
            let resultTags = nameTags.slice(0, 3);

        //return result array
        return resultTags;
        

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
