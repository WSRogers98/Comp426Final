// temp ai implementation

let aiStance=""
/*
read board to determine stance
if (firstTurn ==true){
aiStance="setup"
}
else if(playerSideBoard.size >=4){
aiStance= "clearBoard"
}
else if(AiHealth <=50 || AiSideBoard.size <=0){
aiStance="defensive"
}
 */

/*
overarching plan: weight types of moves differently based of the stance that determines what the AI should do.
this will allow the ai to make its own decisions and be as human like as possible
^ the above statement assumes that no one will master the game and that a "meta" or dominant strategy will not form
The ai stance will dictate the ai to be reactionary based off the player and less proactive
points assigned to move * decimal value of weight= should the ai make the move
if there is a tie, which is statistically improbable, the ai with randomly select one of the tied options
if there is a move that can win the game it will always take the highest priority regardless of stance
before the ai goes into priority mode, the amount of mana it is allowed to spend will be determined by its stance
and if decision tree conditions are met it will follow those conditions and reweight priority after accordingly
 */

//determine moves based off stance
export function defensive() {
if (Aihealth <=50){
    //max cards in hand is 7
    for(let i =0; i<7; i++){
        if( aiCardHand[i].ability=="heal"){
            play(cardData[i]);
            //change priorities or refactor stance
            break;
        }
    }
}
}
export function aggressive(){

}
export function neutral() {

}
export function setup() {

}

export function clearBoard() {

}
