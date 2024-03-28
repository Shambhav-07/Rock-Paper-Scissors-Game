let userscore = 0;
let compscore = 0;



const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

let btn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");
btn.addEventListener("click", () => {

    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
})

const gencompchoice =() => {
    const options = ["Rock","Paper","Scissors"];
   const Randidx= Math.floor(Math.random()*3);
   return options[Randidx];
}


let drawgame = () =>{
    console.log("Game Draw");
    msg.innerText = "Game Draw. Play Again!"
    msg.style.backgroundColor = "#081b31"
    
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText =`You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame= (userChoice) =>{
    console.log("user choice = ",userChoice);
    // computer choice gen
    const compChoice = gencompchoice();
    console.log("comp choice =",compChoice);

    if(userChoice===compChoice){
        drawgame();
    }
    else{
        let userWin=true;
        if(userChoice === "Rock"){
        // scissors, paper
        userWin = compChoice === "Paper" ? false : true;
    }
    else if(userChoice === "Paper") {
        // rock,scissors
        userWin = compChoice === "Scissors" ? false : true;
    } else {
        userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};


choices.forEach((choice) =>{
    
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("clicked",userChoice);
        playgame(userChoice);
    });
});