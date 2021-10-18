// Iteration 1: Names and Input
let hacker1 = "Mario"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Rui"
console.log("The navigator's name is " +hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " +hacker1.length+ " characters.")     
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " +hacker2.length+ " characters.")
} else if (hacker1.length == hacker2.length) {
    console.log("Wow, you both have equally long names, " +hacker2.length+ " characters!")
}

// Iteration 3: Loops
let newName = ""

for (let i = 0; i < hacker1.length; i++){
    newName = newName + hacker1[i].toUpperCase() + " "   
}
// --------------------------------------------------------
let nameBackwards = ""

for (let b = hacker1.length -1; b >= 0; b--){
    nameBackwards = nameBackwards + hacker1[b]
}

// --------------------------------------------------------

let nameOrdered1 = ""
let nameOrdered2 = ""

for (let x = 0; x < hacker1.length; x++){
    nameOrdered1 = nameOrdered1 + hacker1[x]
    nameOrdered2 = nameOrdered2 + hacker2[x]
          
    if(nameOrdered1.charAt(x) < nameOrdered2.charAt(x)){
        console.log("The driver's name goes first.")
        break;
    } else if(nameOrdered1.charAt(x) > nameOrdered2.charAt(x)){
        console.log("Yo, the navigator goes first definitely.")
        break;
    }     
}

if(hacker1.length == hacker2.length){
  console.log("What?! You both have the same name?")
};



