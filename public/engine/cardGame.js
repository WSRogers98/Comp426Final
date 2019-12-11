//lets get this bread (i messed up the commit)
import { cardData } from "./Cards.js";
export class cardGame {
    constructor() {
        //global initial declarations
        this.cardback = '';
        this.aiDeck = [...cardData];
        this.playerDeck = [...cardData];
        //loading test
        console.log(this.playerDeck)
        this.aihand = [];
        this.playerhand = [];
        this.playerboard = [];
        this.aiboard = [];
        this.turn = 0;
        this.first = '';
        this.playerturn = false;
        this.aiMana = 0;
        this.playerMana = 0;
        this.aiwon = false;
        this.playerwon = false;

        //stuff for the AI
        this.aiStance=''
        this.maxaiPlay=''
        this.aiPlayedCards=''
        this.maxManaUse=''
        this.aimanaUsed=''
    }
    //call start method to start a new game
    start() {
        this.aiwon = false;
        this.playerwon = false;
        this.aiDeck = this.shuffle(this.aiDeck);
        this.playerDeck = this.shuffle(this.playerDeck);
        this.playerhand= this.startingHand(true);
        this.aihand=this.startingHand(false);
        console.log(this.playerhand)
        this.playerMana = 100;
        this.aiMana = 100;
        if (Math.random() < 0.5) {
            this.first = 'player';
            this.playerturn = true;
        } else {
            this.first = 'ai';
            this.playerturn = false;
        }
    }
    endTurn() {
        this.turn+=1;
        if (this.playerturn === true) {
            this.playerturn = false
        } else {
            this.playerturn = true;
        }

    }
    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    return arr;
    }
    //deck = starting deck player= boolean value on if it is the player
    startingHand(player) {
        let arr=[]
        for (let i = 0; i < 5; i++) {
            if (player === true) {
                this.draw(true, arr)

            } else {
                this.draw(false, arr)

            }
        }
        return arr;
    }
    draw(player, arr) {
        if (player === true) {
            arr.push(this.playerDeck[0]);
            //  deck.shift();
            this.playerDeck.shift();

        } else {
            arr.push(this.aiDeck[0]);
            // deck.shift();
            this.aiDeck.shift();
        }

        return arr;
    }
    //card index should be the position of the card within the hand
    playCard(cardIndex, player) {
        console.log('hellyes');
        if (player === true) {
            console.log('ran1')
            this.playerMana = this.playerMana - this.playerhand[cardIndex].cost;
            this.playerboard.push(this.playerhand[cardIndex]);
            this.playerhand.splice(cardIndex, 1)
            console.log('ran2')
        } else {
            this.aiMana = this.aiMana - this.aihand[cardIndex].cost;
            this.aiboard.push(this.aihand[cardIndex]);
            this.aihand.splice(cardIndex, 1)
        }
console.log(this.playerboard)
    }
    //playersCard: is the card being destroyed belonging to the player
    destroyed(cardIndex, playersCard) {
        if (playersCard === true) {
            this.playerboard.splice(cardIndex, 1);
        } else {
            this.aiboard.splice(cardIndex, 1);
        }
    }
    // isPlayer: is the player being attacked or the AI true for player false fo ai
    attackPlayer(cardIndex, isPlayer) {
        if (isPlayer === true) {
            this.playerMana = this.playerMana - this.aiboard[cardIndex].attack;
            if (this.playerMana <= 0) {
                this.aiwon = true
            }
        } else {
            this.aiMana = this.aiMana - this.playerboard[cardIndex].attack;
            if (this.aiMana <= 0) {
                this.playerwon = true;
            }
        }
    }
    // isPlayer: is the player being attacked or the AI true for player false fo ai
    attackCard(attackerIndex, defenderIndex, isPlayer) {
        if (isPlayer === true) {
            this.playerboard[defenderIndex].defense = this.playerboard[defenderIndex].defense - this.aiboard[attackerIndex].attack;
            if (this.playerboard[defenderIndex].defense <= 0) {
                this.destroyed(defenderIndex, true);
            }
        } else {
            this.aiboard[defenderIndex].defense = this.aiboard[defenderIndex].defense - this.playerboard[attackerIndex].attack;
            if (this.aiboard[defenderIndex].defense <= 0) {
                this.destroyed(defenderIndex, false);
            }
        }
    }
    /*

    THE AI GOES HERE!! WOOOOO!!!! YAY FOR TECHNOLOGY!!
             this AI is about to be Smol Brain

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
/*
    variables to use:
    this.aiStance=
    this.maxaiPlay=
    this.aiPlayedCards=
    this.maxManaUse=
    this.aimanaUsed=
*/
    AI(){
        // determine AI Stance
        if ( (this.first ==='ai' && this.turn===0) || (this.first==='ai'&&this.turn===1) ){
            this.aiStance='setup'
        }
        else if(this.playerboard.length >3){
            // AI tries to kill your monsters
            this.aiStance= 'clearBoard';
        }
        else if(this.aiMana <=50 || this.aiboard.length <=0){
            this.aiStance='defensive';
        } else if(this.playerboard.length<=1 || this.playerMana<=50){
        this.aiStance='aggressive';
        }else{
            this.aiStance='neutral';
        }
        // determine AI Moves
    if(this.aiStance==='setup'){

    }else if(this.aiStance==='clearBoard'){

    }else if(this.aiStance==='defensive'){

    }else if(this.aiStance==='aggressive'){

    } else if(this.aiStance==='neutral'){

    }else{

    }

    }
}