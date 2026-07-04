let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('.reset');
let newgame =document.querySelector("#new");
let msgcont =document.querySelector(".m-cont");
let msg= document.querySelector("#msg");
let turn0=true;
let movesO=[];
let movesX=[];

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const reset1=()=>{
    turn0=true;
    movesO=[];
    movesX=[];
    enable();
    msgcont.classList.add("hide");
};
const disable=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};
newgame.addEventListener("click",reset1);
reset.addEventListener("click",reset1);

const enable=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
     if(turn0){
        if(movesO.length===3){
            let oldest=movesO.shift();
            boxes[oldest].innerText="";
            boxes[oldest].disabled=false;
        }
        box.innerText='O';
        movesO.push(index);
        turn0=false;
    }
    else{
        if(movesX.length===3){
            let oldest=movesX.shift();
            boxes[oldest].innerText="";
            boxes[oldest].disabled=false;
        }
        box.innerText='X';
        movesX.push(index);
        turn0=true;
    }
    box.disabled=true;
    checkwin();
    });
});
const showwin=(winner)=>{
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disable();
};
const checkwin=()=>{
        for(p of win){
            let pos1=boxes[p[0]].innerText;
            let pos2=boxes[p[1]].innerText;
            let pos3=boxes[p[2]].innerText;
            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1===pos2 && pos2===pos3){
                    showwin(pos1);
                }
            }
        }




    };
