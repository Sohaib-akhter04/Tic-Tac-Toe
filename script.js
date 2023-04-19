console.log("Welcome To Tic Tac Toe")
let audioturn=new Audio("ting.mp3")
let turn="X"
let gameover=false

// function to change the turn
const changeTurn=()=>{
    // return turn==="X"?"O":"X"
    if(turn==="X")
    {
        return "O"
    }
    else{
        return "X"
    }
}



// function to check win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="200px"
        }
    })
}


// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }
            
        }
    })
})


// add on click listener to resert button
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=''
    })
})

