let userscore=0;
let compscore=0;
let check=document.querySelector("#body");
let signs=document.querySelectorAll(".image");
let reset=document.querySelector("#reset");
let namer=document.querySelectorAll(".name");
let winstatement=document.querySelector("#winstate");
let userpoints=document.querySelector("#user-score");
let compponits=document.querySelector("#comp-score");
let winnerrefery=()=>
{
    if(userscore==compscore)
        {
        winstatement.innerText=`😬😬😬This Game is Draw with ${userscore}-${compscore}😬😬😬`;
        winstatement.style.backgroundColor="#6e6c6a";
        }
        else if(userscore>compscore)
        {
        winstatement.innerText=`🎉🥳🏆🏆CONGRATULATIONS,You have won the game with ${userscore}-${compscore} 🏆🏆🥳🎉`;
        winstatement.style.backgroundColor="green";
        }
        else
        {
        winstatement.innerText=`😫😫😫OH NO Computer won the Game with ${userscore}-${compscore}! Better luck next time😫😫😫`;
        winstatement.style.backgroundColor="#ff7003";
        }
}
let generator=(userchoice)=>
{
    let compint=Math.floor(Math.random()*3);
    let compchoice=signs[compint].getAttribute("id");
    if(userchoice===compchoice)
    {
    winstatement.innerText="😮😮Close Game ! it's a Draw😮😮"
    winstatement.style.backgroundColor="#C8CFA0";
    }
    else 
    {
    let userwin="true";
    if(userchoice==="rock")
    {
    userwin=compchoice==="paper"?"false":"true";
    }
    if(userchoice==="paper")
    {
    userwin=compchoice==="scissor"?"false":"true";
    }
    if(userchoice==="scissor")
    {
    userwin=compchoice==="paper"?"true":"false";
    }
    if(userwin==="true")
    {
        winstatement.innerText=`🎉🥳you won this round! your ${userchoice} beats computer's ${compchoice} 🎉🥳`;
        winstatement.style.backgroundColor="blue";
        userscore++;
            if((userscore+compscore)==6)
            {
            winnerrefery();
            }          
        userpoints.innerText=userscore;
    }
    else
    {
        winstatement.innerText=`😔😔computer won this round ${compchoice} beats your's ${userchoice}😔😔`;
        winstatement.style.backgroundColor="red";
        compscore++;
        if((userscore+compscore)==6)
            {
            winnerrefery();
            }          
        compponits.innerText=compscore;
    }
    }
};
    let checkwinnerofround=(userchoice)=>
    {
    generator(userchoice);
    }
signs.forEach(sign => {
    sign.addEventListener("click",selector=()=>
    {
    if((userscore+compscore)==6)
    {
    sign.disabled=true;
    alert("click on reset game/new game button for new game");
    return 0;
    }
    else
    {
    let userchoice=sign.getAttribute("id");
    checkwinnerofround(userchoice);
    }    
})
sign.addEventListener("mouseenter",()=>
{
    if(sign==signs[0])
        {
        sign.style.border="1vmin solid red";
        namer[0].style.visibility="visible";
        }
    if(sign==signs[1])
        {
        sign.style.border="1vmin solid green";
        namer[1].style.visibility="visible";
        }  
    if(sign==signs[2])
        {
        sign.style.border="1vmin solid blue";
        namer[2].style.visibility="visible";
        }          
});
sign.addEventListener("mouseleave",()=>
{
    sign.style.border="1vmin solid white";
    namer[0].style.visibility="hidden";
    namer[1].style.visibility="hidden";
    namer[2].style.visibility="hidden";
});
});
reset.addEventListener("click",()=>
{
    userscore=0;
    compscore=0;
    userpoints.innerText="0";
    compponits.innerText="0";
    winstatement.innerText="play a move";
    winstatement.style.backgroundColor="#EF9C66";
});
