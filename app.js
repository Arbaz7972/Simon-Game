let gameseq=[];
let userseq=[];
let highScore = 0;

let btns=["red","yellow","green","purple"];
let start=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start==false){
         console.log("game started");
        start=true;
         levelUp()
    }

});

function  gameflash(btn){
   btn.classList.add("flash");

     setTimeout( function() {
        btn.classList.remove("flash");
       
        
    }, 250);

}

function  userflash(btn){
   btn.classList.add("userflash");

     setTimeout( function() {
        btn.classList.remove("userflash");
       
        
    }, 250);

}


function levelUp(){
    userseq=[];
    level++;  
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3); 
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);


//   console.log(randomIdx);
//    console.log(randomColor);
//     console.log(randomBtn);

 gameseq.push(randomColor);
gameflash(randomBtn);
console.log(gameseq);
    //   random btn choice
    gameflash(randomBtn);
   
}
function checkAns(idx){
    // console.log("curr level:",level);
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout( levelUp,1000)  ;
        

        }
      
    }else{
        if(level>highScore){
            highScore=level;
        }
       
        h2.innerHTML=`Game over!  your score was <b> ${level}</b>  <br> your highest score is<b>${highScore}</b> <br>press any key to start.`;
        //   reset function
         

        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
       
        resert();
    }

}

function  btnpress(){
    console.log(this);
   let btn=this;
   userflash(btn);

   let userColor=btn.getAttribute("id");
  userseq.push(userColor);
  checkAns(userseq.length-1);
}


let allBtns=document.querySelectorAll(".btn");

for (btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function resert(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}



