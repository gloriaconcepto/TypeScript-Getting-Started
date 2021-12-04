import Player from "./player";
import{Game}from "./game";
import{getValue}from "./utility";

let newGame:Game;
//add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click',()=>{
    const player:Player=new Player();
    player.name=getValue('playername');
    const problemCount:number=Number(getValue('problemCount'));
    const factor:number=Number(getValue('factor'));

    newGame=new Game(player,problemCount,factor);
    newGame.displayGame();
})

//add click handler to the calculate socre button 
document.getElementById('calculate')!.addEventListener('click',()=>{
    newGame.calculateScore();
})

// function startGame(){
// let playerName:string | undefined=getInputValue('playername');

// logPlayer(playerName)
// postScore(80,playerName)
//  let messagesElement=document.getElementById('messages');
//  messagesElement!.innerText='Welcome to mmk multimath! starting new game';
//  }

//  function logPlayer(name: string ='Multi Player'):void{
//      alert(`Hey buddy player:${name}`)
//  }

//  function getInputValue(elementID:string):string | undefined{
//      const inputElement:HTMLInputElement=<HTMLInputElement>document.getElementById(elementID)
//      if(inputElement.value ===''){
//          return undefined;
//      }else{
//          return inputElement.value;
//      }
//  }

//  function postScore(score:number,playerName:string="Multimath"):void{
//      let logger:(value: string)=>void;
//      if(score<0){
//          logger=logError;
//      }else{
//          logger=logMessage;
//      }
//     const scoreElement:HTMLElement | null=document.getElementById('postedScores')
//     scoreElement!.innerText=`${score} - ${playerName}`
// }

//  document.getElementById('startGame')!.addEventListener('click',startGame);
//  const logMessage=(message:string)=>console.log(message);

//  function logError(err:string):void{
//      console.error(err)
//  }

// const firstPlayer:Player=new Player();
// firstPlayer.name='mmk23';
// console.log(firstPlayer.formatName());

//  let myResult:Result={
//     playerName:"mmk",
//     score:5,
//     problemCount:5,
//     factor:7
//  }

//  let player:Person={
//     name:"marie",
//     formatName:()=>'mar'
//  }
