const eMail = prompt("inserisci la tua e-mail");

const eMailList = ["primamail@gmail.com", "secondamail@gmail.com", "terzamail@gmail.com", "quartamail@gmail.com", "quintamail@gmail.com", "sestamail@gmail.com"];

for (let i = 0; i < eMailList.length; i++) {
    if (eMail == eMailList[i]) {
        console.log("accesso consentito")
    } /*else {
        console.log("errore di digitazione")
    }*/
}