const stack = require("./stack-n-queue");
let StarTrek = new stack();

// .1) Create a stack class

main = () => {
    StarTrek.push("Kirk");
    StarTrek.push("Spock");
    StarTrek.push("McCoy");
    StarTrek.push("Scotty");
    StarTrek.pop();
}

main();

// console.log(JSON.stringify(StarTrek));

// .2) Useful methods for a stack
// Implement peek() and display() isEmpty()

peek = () => {
    return StarTrek.top;
}

isEmpty = () => {
    if(StarTrek.top === null){
        return "The stack is empty"
    }else{
        return "The stack is not empty"
    }
}

display = () => {

    if(StarTrek.top === null){
        return "The stack is empty"
    }else{        
        return StarTrek.top
    }
}

console.log(display());