let avvioForm = document.querySelector(".submit");

const eMailInput = document.getElementById("eMailInput");


const eMailList = ["primamail@gmail.com", "secondamail@gmail.com", "terzamail@gmail.com", "quartamail@gmail.com", "quintamail@gmail.com", "sestamail@gmail.com"];

let mySwitch = false;

avvioForm.addEventListener("click",
    function () {
        
        let eMailValue = eMailInput.value;

        for (let i = 0; i < eMailList.length; i++) {
            if (eMailValue == eMailList[i]) {
                mySwitch = true;   
            }
        }
        
        if (mySwitch == true) {
            console.log("accesso consentito")
            const answer = document.querySelector(".answer");
            answer.classList.remove("d_none");
            answer.append("accesso consentito");
            console.log(eMailValue);
        } else {
            console.log("errore di digitazione")
            const answer = document.querySelector(".answer");
            answer.classList.remove("d_none");
            answer.append("errore di digitazione");
            console.log(eMailValue);
        }
        
    }
);

const resetForm = document.querySelector('.reset_form');

resetForm.addEventListener('click', 
    function () {
        const answer = document.querySelector(".answer");
        answer.classList.add("d_none");
        console.log(eMailValue) ;
    }
);



