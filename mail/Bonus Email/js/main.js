let avvioForm = document.querySelector(".submit");

const eMail = document.getElementById("eMail");

const eMailList = ["primamail@gmail.com", "secondamail@gmail.com", "terzamail@gmail.com", "quartamail@gmail.com", "quintamail@gmail.com", "sestamail@gmail.com"];

let mySwitch = false;

avvioForm.addEventListener("click",
    function () {
        

        for (let i = 0; i < eMailList.length; i++) {
            if (eMail == eMailList[i]) {
                mySwitch = true;   
            }
        }
        
        if (mySwitch == true) {
            console.log("accesso consentito")
        } else {
            console.log("errore di digitazione")  
        }
        
    }
);

