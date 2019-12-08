//lets get this bread (i messed up the commit)
import '/engine/AI.js'
import '/engine/Cards.js'

//global initial declarations
let aiDeck= [...cardData];
let playerDeck =[...cardData];
let aihand=[];
let playerhand=[];
let playerboard=[];
let aiboard=[];
let turn=0;
let first='';
let playerturn=false;
let aiMana=0;
let playerMana=0;
let aiwon=false;
let playerwon=false;

//call start method to start a new game
export function start(){
    aiwon=false;
    playerwon=false;
    aiDeck =shuffle(aiDeck);
    playerDeck=shuffle(playerDeck);
    startingHand(true);
    startingHand(false);
    playerMana=100;
    aiMana=100;
    if(Math.random() < 0.5){
    first='player';
    playerturn=true;
}else{
    first='ai';
    playerturn=false;
    }
}
export function endTurn(){
    turn++;
    if(playerturn===true){
        playerturn=false
    }else{
        playerturn=true;
    }

}
export function shuffle(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

}
//deck = starting deck player= boolean value on if it is the player
export function startingHand(player){
    for(let i=0;i>7;i++){
        if (player===true){
            draw(true)
           // playerhand[i]=playerDeck[i];
          //  deck.shift();
          //  playerDeck.shift();

        }else{
            draw(false)
           // aihand[i]=aiDeck[i];
          //  deck.shift();
          //  aiDeck.shift();
        }
    }
}
export function draw(player){
    if (player===true){
        playerhand.push(playerDeck[0]);
      //  deck.shift();
        playerDeck.shift();

    }else{
        aihand.push(aiDeck[0]);
       // deck.shift();
        aiDeck.shift();
    }
}
//card index should be the position of the card within the hand
export function playCard(cardIndex, player){
    if(player===true){
        playerMana=playerMana-playerhand[cardIndex].cost;
        playerboard.push(playerhand[cardIndex]);
        playerhand.splice(cardIndex,1)
    }else{
        aiMana=aiMana-aihand[cardIndex].cost;
        aiboard.push(aihand[cardIndex]);
        aihand.splice(cardIndex,1)
    }

}
//playersCard: is the card being destroyed belonging to the player
export function destroyed(cardIndex, playersCard){
    if(playersCard===true){
    playerboard.splice(cardIndex,1);
    }else{
        aiboard.splice(cardIndex,1);
    }
}
// isPlayer: is the player being attacked or the AI true for player false fo ai
export function attackPlayer(cardIndex, isPlayer){
   if(isPlayer===true){
playerMana=playerMana-aiboard[cardIndex].attack;
if(playerMana<=0){
    aiwon=true
}
   } else{
aiMana=aiMana-playerboard[cardIndex].attack;
if(aiMana<=0){
    playerwon=true;
}
   }
}
// isPlayer: is the player being attacked or the AI true for player false fo ai
export function attackCard(attackerIndex, defenderIndex, isPlayer){
    if(isPlayer===true){
    playerboard[defenderIndex].defense= playerboard[defenderIndex].defense-aiboard[attackerIndex].attack;
    if(playerboard[defenderIndex].defense<=0){
        destroyed(defenderIndex, true);
    }
    } else{
        aiboard[defenderIndex].defense= aiboard[defenderIndex].defense-playerboard[attackerIndex].attack;
        if(aiboard[defenderIndex].defense<=0){
            destroyed(defenderIndex, false);
        }
    }
}