let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level =0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },450);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },450);
}

function levelUp(){
     userSeq =[];
    level++;
    h2=document.querySelector('h2');
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randBtn);
gameSeq.push(randomColor);
console.log(gameSeq)
    btnFlash(randBtn);

}
function checkAns(idx){

   if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length === gameSeq.length){
     setTimeout(levelUp,850)
    }
   }else{
    h2.innerHTML=`Game Over ! Your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
   }

}

function btnPress(){
 let btn = this;
 userflash(btn);

 let userColor = btn.getAttribute("id");
 userSeq.push(userColor);

 checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0
}