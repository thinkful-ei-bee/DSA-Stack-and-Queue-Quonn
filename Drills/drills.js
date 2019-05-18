const { Stack, Queue } = require("./stack-n-queue");
const DLL = require("./DoublyLinkedList")

// const Queue = require("./Stack-n-queue");
let StarTrek = new Stack();

// .1) Create a Stack class

main = () => {
    StarTrek.push("Kirk");
    StarTrek.push("Spock");
    StarTrek.push("McCoy");
    StarTrek.push("Scotty");
    StarTrek.pop();
}

main();

// console.log(JSON.stringify(StarTrek));

// .2) Useful methods for a Stack
// Implement peek() and display() isEmpty()

peek = () => {
    return StarTrek.top;
}

isEmpty = () => {
    if (StarTrek.top === null) {
        return "The Stack is empty"
    } else {
        return "The Stack is not empty"
    }
}

display = () => {

    if (StarTrek.top === null) {
        return "The Stack is empty"
    } else {
        return StarTrek.top
    }
}

// console.log(display());

// .3) Check for Palindromes

is_palindrome = s => {
    if (s === s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")) {
        return "palindrome"
    } else {
        return "not a palindrome"
    }
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// .4) Matching parentheses in an expression
let index;
parensMatch = (exp) => {
    let pStack = new Stack();

    exp.split("").map((char, i) => {
        if (pStack.top === null && char === "(") {
            index = i;
            pStack.push(char)
        } else if (pStack.top === null && char === ")") {
            index = i;
        } else if (pStack.top !== null && char === ")") {
            pStack.push(char)
        }
    })

    if (pStack.top === null) {
        if (index > -1) {
            return `Open paren @ index ${index + 1}`;
        }
    } else {

        if (pStack.top.next === null) {
            if (index > -1) {
                return `Open paren @ index ${index + 1}`;
            }
        } else {
            return "parens do match"
        }
    }


}

// console.log(parensMatch("2(x + 3) or 2 * x + 3"))
// console.log(parensMatch("2(x + 3 or 2 * x + 3"))
// console.log(parensMatch("2x + 3) or 2 * x + 3"))

//. Sort Stack

const unsortedStack = new Stack();
const tempStack = new Stack();
sort = () => {
    unsortedStack.push(4);
    unsortedStack.push(2);
    unsortedStack.push(5);
    unsortedStack.push(3);
    unsortedStack.push(1);
    let temp = unsortedStack.pop()
    tempStack.push(temp)
    while (tempStack.top !== null) {
        if (tempStack.top > temp) {
            // console.log("go")
            // return;
        }
    }
    console.log(JSON.stringify(tempStack))

}

// sort();
// // console.log(JSON.stringify(unsortedStack));

// .6) Create a queue using Singly linked list

let StarTrekQ = new Queue();

singleQueue = () => {
    StarTrekQ.enqueue("Kirk");
    StarTrekQ.enqueue("Spock");
    StarTrekQ.enqueue("Uhura");
    StarTrekQ.enqueue("Sulu");
    StarTrekQ.enqueue("Checkov");
    return JSON.stringify(StarTrekQ);
}

peek = () => {
    return JSON.stringify(StarTrekQ.first);
}

display = () => {
    return JSON.stringify(StarTrekQ)
}

remove = name => {
    if (StarTrekQ.first !== null) {
        if (StarTrekQ.first !== name) {
            let temp = StarTrekQ.dequeue()
            StarTrekQ.dequeue()
            StarTrekQ.enqueue(temp)
        }
    }
    return StarTrekQ
}

// singleQueue();
// console.log(remove("Spock"))


// .7) Create a queue class using Doubly linked List
let DLLQ = new Queue();
doubleQueue = () => {
    DLLQ.enqueue("Kirk");
    DLLQ.enqueue("Spock");
    DLLQ.enqueue("Uhura");
    DLLQ.enqueue("Sala");
    DLLQ.enqueue("Checkov");
    return DLLQ
}

// console.log(doubleQueue())


// .8) Queue implementation using 2 stacks

let stack1 = new Stack();
let stack2 = new Stack();

twoStacksQ = () => {

    // simultes enqueue(item)
    stack1.push("a");
    stack1.push("b");
    stack1.push("c");
    stack1.push("d");

    let temp = stack1.pop();

    stack2.push(temp)

    // dequeue
if(stack2.top !== null){
    while(stack1.top !== null){
        stack2.push(stack1.pop())
    }
}
//return stack2.pop()
    
    return stack2
}

console.log(JSON.stringify(twoStacksQ()));


