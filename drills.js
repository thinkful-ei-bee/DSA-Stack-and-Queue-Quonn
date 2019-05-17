const stack = require("./stack-n-queue");
let StarTrek = new stack();
main = () => {
    StarTrek.push("Kirk");
    StarTrek.push("Spock");
    StarTrek.push("McCoy");
    StarTrek.push("Scotty");
}

main();

console.log(JSON.stringify(StarTrek));