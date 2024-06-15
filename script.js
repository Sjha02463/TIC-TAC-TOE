console.log("Welcome to TIC TAC TOE")
let music = new Audio("C:\Users\Swati Jha\OneDrive\Desktop\TIC TAC TOE\assets\mixkit-achievement-bell-600.wav")
let  audioturn  = new Audio("C:\Users\Swati Jha\OneDrive\Desktop\TIC TAC TOE\assets\negative_beeps-6008.mp3")
let gameover = new Audio("assets\videogame-death-sound-43894.mp3")
let turn = "X"

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

// Function to checK FOR WIN
const checkWin = ()=>{
}
//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
let boxtext = element.querySelector('.boxtext');
element.addEventListener('click', (e)=>{
if(boxtext.innerText === ''){
    .innerText =turn;
    changeTurn();
    audioTurn.play()
    checkWin();
    document.getElementByClassName("info")[0].innerText ="Turn for" + turn;

}
})
})


