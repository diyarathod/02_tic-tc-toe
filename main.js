let turn="X";
let gameover=false;
//function to change the turn
const changeTurn=()=>{
    return turn === "X"?"0":"X";
}

//function to check the win
const checkWin= ()=>{
    let boxtexts=document.getElementsByClassName('boxtext')
     let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ]
   wins.forEach(e=>{
    if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) &&(boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')){
        document.querySelector('.showMsg').innerText = boxtexts[e[0]].innerText + " WON"; 
        gameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
    }

   })  
} 

//main logic
let boxes1=document.getElementsByClassName("box");
Array.from(boxes1).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',(e) =>{
        if(boxtext.innerText === '') {
            boxtext.innerText= turn;
            turn= changeTurn();
            checkWin();
        }
    })
})

//reset button
btn.addEventListener('click',()=>{
    let boxes=document.querySelectorAll('.boxtext');
    Array.from(boxes).forEach(element=>{
        element.innerText='';
    turn='X';
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display= 'none';
    })
})
