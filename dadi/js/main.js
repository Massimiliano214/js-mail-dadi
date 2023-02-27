let randomPc = Math.floor(Math.random() * 6 ) + 1;
console.log(randomPc);

let randomPlayer = Math.floor(Math.random() * 6 ) + 1;
console.log(randomPlayer);

if (randomPc < randomPlayer) {
    console.log("Player has won!");
    const answer = document.querySelector(".answer");
    answer.classList.remove("d_none");
    answer.append("Vince Il Player!");
} else if (randomPc > randomPlayer) {
    console.log("Computer has won!");
    const answer = document.querySelector(".answer");
    answer.classList.remove("d_none");
    answer.append("Vince Il Computer!");
} else {
    console.log("Pareggio!");
    const answer = document.querySelector(".answer");
    answer.classList.remove("d_none");
    answer.append("Pareggio!");
}

const score = document.querySelector(".score");
score.classList.remove("d_none");
score.append(
`
    Pc-score: ${randomPc};
    Player-score: ${randomPlayer};
`
);
