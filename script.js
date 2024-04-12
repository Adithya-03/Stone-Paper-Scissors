let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let button = document.querySelector(".btn")
let userscorepara =document.querySelector("#user-score")
let compscorepara =document.querySelector("#comp-score")

const comp = () => {
    let option = ["rock", "paper", "scissor"];
    let rand = Math.floor(Math.random() * 3);
    return option[rand];


}

const playgame = (userchoice) => {
    console.log("user choice", userchoice);
    const compchoice = comp();
    console.log("comp choice", compchoice);

    if (userchoice === compchoice) {
        button.innerHTML = "draw"
        button.style.backgroundColor = "yellow";
        console.log("draw")
    } else {
        if (userchoice === "rock") {

        if (compchoice == "paper") {
            button.innerHTML =  `comp win , your ${compchoice} beat ${userchoice}`
            button.style.backgroundColor = "red";
            console.log("comp win")
            compscore++
            compscorepara.innerText = compscore



        } else {
            button.innerHTML = `user win , your ${userchoice} beat ${compchoice}`
            button.style.backgroundColor = "green";
            console.log("user win")
            userscore++
            userscorepara.innerText = userscore


        }
    }

    if (userchoice === "paper") {
        if (compchoice === "rock") {
            button.innerHTML = `user win , your ${userchoice} beat ${compchoice}`
            button.style.backgroundColor = "green";
            console.log("user win")
            userscore++
            userscorepara.innerText = userscore

        } else {
            button.innerHTML = `comp win , your ${compchoice} beat ${userchoice}`
            button.style.backgroundColor = "red";
            console.log("comp win")
            compscore++
            compscorepara.innerText = compscore

        }
    }

    if (userchoice === "scissor") {
        if (compchoice === "rock") {
            button.innerHTML = `comp win , your ${compchoice} beat ${userchoice}`
            button.style.backgroundColor = "red";
            console.log("comp win")
            compscore++
            compscorepara.innerText = compscore

        } else {
            button.innerHTML = `user win , your ${userchoice} beat ${compchoice}`
            button.style.backgroundColor = "green";
            console.log("user win")
            userscore++
            userscorepara.innerText = userscore

        }
    }
}
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("burron was clicked", userchoice);
        playgame(userchoice)
    })

});

