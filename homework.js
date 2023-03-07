//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){    
   
    for (let name of dog_names) {

        let result = dog_string.toLowerCase().includes(name.toLowerCase());
        if (result == true) {
            console.log("Matched dog_name")
        }
        else {
            console.log("No Matches")
        }

    }
    
}    
findWords(dog_string, dog_names)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){

    for(let index = 0; index < arr.length; index ++){
        if (index % 2 == 0){
            arr.splice(index, 1, "even index");

        }
    }
    console.log(arr)
}

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

replaceEvens(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// CODEWARS PROBLEM # 1 
// MULTIPLY
// This code does not execute properly. Try to figure out why.

function multiply(a, b){
    return a * b
  }

  console.log(multiply(2,6))

// CODEWARS PROBLEM # 2
// CONVERT S NUMBER TO A STRING!
// We need a function that can transform a number (integer) into a string.

function numberToString(num) {
    return num.toString();
  }

  console.log(numberToString(4932))
