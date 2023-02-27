let randomPc = Math.floor(Math.random() * 6 ) + 1;
console.log(randomPc);

let randomPlayer = Math.floor(Math.random() * 6 ) + 1;
console.log(randomPlayer);

if (randomPc < randomPlayer) {
    console.log("Player has won!")
} else if (randomPc > randomPlayer) {
    console.log("Computer has won!")
}