//lets get this bread (i messed up the commit)
import { cardData } from "./Cards.js";
export class cardGame {
    constructor() {
        //global initial declarations
        this.cardback = '';
        this.aiDeck = [...cardData];
        this.playerDeck = [...cardData];
        //loading test
        this.ai34=false;
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
        this.aiStance='';
        this.maxaiPlay=0;
        this.aiPlayedCards=0;
        this.maxManaUse=0;
        this.aimanaUsed=0;

    }

    //call start method to start a new game
    start() {
        this.aiwon = false;
        this.playerwon = false;
        this.aiDeck = this.shuffle(this.aiDeck);
        this.playerDeck = this.shuffle(this.playerDeck);
        this.playerhand= this.startingHand(true);
        this.aihand=this.startingHand(false);

        this.playerMana = 100;
        this.aiMana = 100;
        let temp=(Math.round(Math.random()));
        console.log('temp: '+temp);
        if(temp===0){
            this.first = 'player';
            this.playerturn = true;
        } else {
            this.first = 'ai';
            this.playerturn = false;
        }
        console.log('first: '+this.first);
        if(this.first==='ai'){
            this.AI();
        }
    }
    endTurn() {
        this.turn+=1;
        if (this.playerturn === true) {
            this.playerturn = false
            if(this.aihand.length<5){
                this.draw(false,this.aihand)
            }
        } else {
            this.playerturn = true;
            if(this.playerhand.length<5){
                this.draw(true,this.playerhand)
            }
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
        if (player === true &&this.playerhand.length<=5) {
            console.log('player drew card');
            arr.push(this.playerDeck[0]);
            //  deck.shift();
            this.playerDeck.shift();

        } else {
            if(this.aihand.length<=5) {
                console.log('ai drew card');
                arr.push(this.aiDeck[0]);
                // deck.shift();
                this.aiDeck.shift();
            }
        }

        return arr;
    }
    //card index should be the position of the card within the hand
    playCard(cardIndex, player) {

        //player play
        if (player === true) {
            if(this.playerboard.length<5) {
                this.playerMana = this.playerMana - this.playerhand[cardIndex].cost;
                this.playerboard.push(this.playerhand[cardIndex]);
                this.playerhand.splice(cardIndex, 1);
                if (this.playerboard[this.playerboard.length - 1].id === 6) {
                    let uwu = (Math.round(Math.random()));
                    if (uwu === 1) {
                        this.playerMana += 5;
                        this.destroyed((this.playerboard.length - 1), true)
                    } else {
                        this.playerMana -= 5;
                        this.destroyed((this.playerboard.length - 1), true)
                    }
                } else if (this.playerboard[this.playerboard.length - 1].id === 10) {
                    this.playerMana -= 10;
                    this.aiMana -= 10;
                    this.destroyed((this.playerboard.length - 1), true)
                } else if (this.playerboard[this.playerboard.length - 1].id === 14) {
                    for (let i = 0; i < this.playerboard.length; i++) {
                        if (this.playerboard[i].id != 14) {
                            this.destroyed(i, true);
                        }
                    }
                    for (let i = 0; i < this.aiboard.length; i++) {
                        if (this.aiboard[i].id != 14) {
                            this.destroyed(i, true);
                        }
                    }
                } else if (this.playerboard[this.playerboard.length - 1].id === 22) {
                    this.aiMana -= 5;
                } else if (this.playerboard[this.playerboard.length - 1].id === 27) {
                    this.aiMana -= 5;
                    this.draw(true, this.playerhand);
                    this.draw(true, this.playerhand);
                    this.destroyed((this.playerboard.length - 1), true)
                } else if (this.playerboard[this.playerboard.length - 1].id === 34) {
                    this.playerMana += 30;
                    this.destroyed((this.playerboard.length - 1), true)
                } else if (this.playerboard[this.playerboard.length - 1].id === 35) {
                    this.playerMana -= 2;
                    this.draw(true, this.playerhand);
                    this.draw(true, this.playerhand);
                    this.destroyed((this.playerboard.length - 1), true)
                } else if (this.playerboard[this.playerboard.length - 1].id === 38) {
                    this.aiMana += 5;
                    this.playerMana += 5;
                } else if (this.playerboard[this.playerboard.length - 1].id === 43) {
                    for (let i = 0; i < 5; i++) {
                        this.draw(true, this.playerhand);
                    }
                } else if (this.playerboard[this.playerboard.length - 1].id === 11) {
                    this.playerMana += 10;
                    this.aiMana += 10;
                    this.destroyed((this.playerboard.length - 1), true)
                } else if (this.playerboard[this.playerboard.length - 1].id === 15) {
                    this.playerMana -= 5;
                    this.aiMana -= 5;
                    this.destroyed((this.playerboard.length - 1), true)
                } else {
                    if (this.playerboard[this.playerboard.length - 1].type === 'heal') {
                        // temp heal benefit
                        this.playerMana += this.playerboard[this.playerboard.length - 1].defense;
                        ;
                        this.destroyed(this.playerboard.length - 1, true)
                    }
                    if (this.playerboard[this.playerboard.length - 1].type === 'hurt') {
                        // temp hurt benefit
                        this.aiMana -= this.playerboard[this.playerboard.length - 1].defense;
                        this.destroyed((this.playerboard.length - 1), true)
                    }
                }
            }
            //ai play card

        } else {
            if (this.aiboard.length < 5) {
                this.aiMana = this.aiMana - this.aihand[cardIndex].cost;
                this.aiboard.push(this.aihand[cardIndex]);
                this.aihand.splice(cardIndex, 1);
                if (this.aiboard[this.aiboard.length - 1].id === 6) {
                    let uwu = (Math.round(Math.random()));
                    if (uwu === 1) {
                        this.aiMana += 5;
                        this.destroyed((this.aiboard.length - 1), false)
                    } else {
                        this.aiMana -= 5;
                        this.destroyed((this.aiboard.length - 1), false)
                    }
                } else if (this.aiboard[this.aiboard.length - 1].id === 10) {
                    this.playerMana -= 10;
                    this.aiMana -= 10;
                    this.destroyed((this.aiboard.length - 1), false)
                } else if (this.aiboard[this.aiboard.length - 1].id === 14) {
                    for (let i = 0; i < this.playerboard.length; i++) {
                        if (this.playerboard[i].id != 14) {
                            this.destroyed(i, true);
                        }
                    }
                    for (let i = 0; i < this.aiboard.length; i++) {
                        if (this.aiboard[i].id != 14) {
                            this.destroyed(i, true);
                        }
                    }
                } else if (this.aiboard[this.aiboard.length - 1].id === 22) {
                    this.playerMana -= 5;
                } else if (this.aiboard[this.aiboard.length - 1].id === 27) {
                    this.playerMana -= 5;
                    this.draw(false, this.aihand);
                    this.draw(false, this.aihand);
                    this.destroyed((this.aiboard.length - 1), false)
                } else if (this.aiboard[this.aiboard.length - 1].id === 34) {
                    this.aiMana += 30;
                    this.ai34 = true;
                    this.destroyed((this.aiboard.length - 1), false)
                } else if (this.aiboard[this.aiboard.length - 1].id === 35) {
                    this.aiMana -= 2;
                    this.draw(false, this.aihand);
                    this.draw(false, this.aihand);
                    this.destroyed((this.aiboard.length - 1), false)
                } else if (this.aiboard[this.aiboard.length - 1].id === 38) {
                    this.aiMana += 5;
                    this.playerMana += 5;
                } else if (this.aiboard[this.aiboard.length - 1].id === 43) {

                    for (let i = 0; i < 5; i++) {
                        this.draw(false, this.aihand);
                    }
                } else if (this.aiboard[this.aiboard.length - 1].id === 11) {
                    this.playerMana += 10;
                    this.aiMana += 10;
                    this.destroyed((this.aiboard.length - 1), false)
                } else if (this.aiboard[this.aiboard.length - 1].id === 15) {
                    this.playerMana -= 5;
                    this.aiMana -= 5;
                    this.destroyed((this.aiboard.length - 1), false)
                } else {
                    if (this.aiboard[this.aiboard.length - 1].type === 'heal') {
                        // temp heal benefit
                        this.aiMana += this.aiboard[this.aiboard.length - 1].defense;
                        this.destroyed(this.aiboard.length - 1, false)
                    }
                    if (this.aiboard[this.aiboard.length - 1].type === 'hurt') {
                        // temp hurt benefit
                        this.playerMana -= this.aiboard[this.aiboard.length - 1].defense;
                        this.destroyed(this.aiboard.length - 1, false)
                    }
                }
            }
        }
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
            if(this.playerboard[defenderIndex].id===1){
                this.aiboard[attackerIndex].defense = this.aiboard[attackerIndex].defense - this.aiboard[attackerIndex].attack;
            }else if(this.playerboard[defenderIndex].id===2){
                this.playerboard[defenderIndex].defense = this.playerboard[defenderIndex].defense - 1;
            }else if(this.playerboard[defenderIndex].id===12){
                this.playerboard[defenderIndex].defense = this.playerboard[defenderIndex].defense - ((this.aiboard[attackerIndex].attack)/2);
            }else if(this.aiboard[attackerIndex].id===12){
                this.playerboard[defenderIndex].defense = this.playerboard[defenderIndex].defense - ((this.aiboard[attackerIndex].attack)*2);
            }
            else {
                this.playerboard[defenderIndex].defense = this.playerboard[defenderIndex].defense - this.aiboard[attackerIndex].attack;
                if (this.playerboard[defenderIndex].defense <= 0) {
                    this.destroyed(defenderIndex, true);
                }
            }
        }

        // is AI
        else {
            if(this.aiboard[defenderIndex].id===1){
                this.playerboard[attackerIndex].defense = this.playerboard[attackerIndex].defense - this.playerboard[attackerIndex].attack;
            }
            else if(this.aiboard[defenderIndex].id===2){
                this.aiboard[defenderIndex].defense = this.aiboard[defenderIndex].defense - 1;
            }else if(this.aiboard[defenderIndex].id===12){
                this.aiboard[defenderIndex].defense = this.aiboard[defenderIndex].defense - ((this.playerboard[attackerIndex].attack)/2);
            }else if(this.playerboard[attackerIndex].id===12){
                this.aiboard[defenderIndex].defense = this.aiboard[defenderIndex].defense - ((this.playerboard[attackerIndex].attack)*2);
            }
            else {
                this.aiboard[defenderIndex].defense = this.aiboard[defenderIndex].defense - this.playerboard[attackerIndex].attack;
                if (this.aiboard[defenderIndex].defense <= 0) {
                    this.destroyed(defenderIndex, false);
                }
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
        this.aimanaUsed=0;
        this.aiPlayedCards=0;
        let cardspLayedThisTurn=[];
        // determine AI Stance
        if ( (this.first ==='ai' && this.turn===0) || (this.first==='player'&&this.turn===1) ){
            this.aiStance='setup'
            this.maxaiPlay=2;
            this.maxManaUse=20;
        }
        else if(this.playerboard.length >3){
            // AI tries to kill your monsters
            this.aiStance= 'clearBoard';
            this.maxaiPlay=3;
            this.maxManaUse=30;

        }
        else if(this.aiMana <=50 || this.aiboard.length <=0){
            this.aiStance='defensive';
            this.maxaiPlay=4;
            this.maxManaUse=10;
        } else if(this.playerboard.length<=1 || this.playerMana<=40){
        this.aiStance='aggressive';
            this.maxaiPlay=3;
            this.maxManaUse=20;
        }else{
            this.aiStance='neutral';
            this.maxaiPlay=1;
            this.maxManaUse=10;
        }
        console.log('aistance: ' + this.aiStance);
        // determine AI Moves
    if(this.aiStance==='setup'){

    for(let i=0; i<this.aihand.length;i++){
        if(this.aiPlayedCards===this.maxaiPlay ||this.aimanaUsed===this.maxManaUse){
            break;
        }
        if( (this.aihand[i].type ==='legendary creature' &&this.aihand[i].cost+this.aimanaUsed<=this.maxManaUse) || (this.aihand[i].type==='creature'&&this.aihand[i].cost+this.aimanaUsed<=this.maxManaUse)){
            this.aiPlayedCards++;
            this.aimanaUsed+= this.aihand[i].cost;
            this.playCard(i, false);
        }
    }
    if(this.aiPlayedCards===0){
        let healplayed=false;
        let hurtplayed=false;
        for(let i=0; i<this.aihand.length;i++){
            if(this.aiPlayedCards===this.maxaiPlay ||this.aimanaUsed===this.maxManaUse){
                break;
            }
            else if(healplayed===false &&this.aihand[i].type ==='heal'){
                healplayed=true;
                this.aiPlayedCards++;
                this.aimanaUsed+= this.aihand[i].cost;
                this.playCard(i, false);
            }
            else if(hurtplayed===false &&this.aihand[i].type ==='hurt'){
                hurtplayed=true;
                this.aiPlayedCards++;
                this.aimanaUsed+= this.aihand[i].cost;
                this.playCard(i, false);
            }
        }
        for(let i=0; i<this.aihand.length;i++){
            if(this.aiPlayedCards===this.maxaiPlay ||this.aimanaUsed===this.maxManaUse){
                break;
            }
            else if( (healplayed===true&&hurtplayed===false) &&this.aihand[i].type ==='heal'){
                this.aiPlayedCards++;
                this.aimanaUsed+= this.aihand[i].cost;
                this.playCard(i, false);
            }
            else if( (hurtplayed===true &&healplayed===false) &&this.aihand[i].type ==='hurt'){
                this.aiPlayedCards++;
                this.aimanaUsed+= this.aihand[i].cost;
                this.playCard(i, false);
            }
        }
        this.endTurn();
    }
    }else if(this.aiStance==='clearBoard'){
        for(let i=0; i<this.aihand.length;i++) {
            if (this.aiPlayedCards === this.maxaiPlay || this.aimanaUsed === this.maxManaUse) {
                break;
            }
            if(this.aihand.type==='hurt'&&this.aihand[i].cost+this.aimanaUsed<=this.maxManaUse){
                this.aiPlayedCards++;
                this.aimanaUsed+= this.aihand[i].cost;
                cardspLayedThisTurn.push(this.aihand[i]);
                this.playCard(i, false);
            }

        }
        for(let i=0; i<this.aiboard.length;i++){
            let canplay=true;
            let hasattacked=false;
            for(let j=0;j <cardspLayedThisTurn.length;j++){
                if(this.aiboard[i]===cardspLayedThisTurn[j]){
                    canplay=false;
                }
            }
            if(canplay===true&& hasattacked===false){
                for(let k=0; k<this.playerboard.length;k++){
                    if(this.playerboard[k].defense <= this.aiboard[i].attack){
                        hasattacked=true;
                        this.attackCard(i,k,true);
                    }
                }
            }
        }
        this.endTurn();

    }else if(this.aiStance==='defensive'){
        let onePlay=false;
            for(let i=0; i<this.aihand.length;i++){
                if(this.aiPlayedCards===this.maxaiPlay ||this.aimanaUsed===this.maxManaUse){
                    break;
                }
                if(this.aihand[i].type==='heal'){
                    this.aiPlayedCards++;
                    this.aimanaUsed+= this.aihand[i].cost;
                    this.playCard(i, false);
                }
               if( onePlay===false&&((this.aihand[i].type ==='legendary creature' &&this.aihand[i].cost+this.aimanaUsed<=this.maxManaUse) || (this.aihand[i].type==='creature'&&this.aihand[i].cost+this.aimanaUsed<=this.maxManaUse))){
                   this.playCard(i, false);
                   onePlay=true;
               }
        }
this.endTurn();
    }else if(this.aiStance==='aggressive'){
        for(let i=0; i<this.aihand.length;i++) {
            if (this.aiPlayedCards === this.maxaiPlay || this.aimanaUsed === this.maxManaUse) {
                break;
            }
            if(this.aihand.type==='hurt'&&this.aihand[i].cost+this.aimanaUsed<=this.maxManaUse){
                this.aiPlayedCards++;
                this.aimanaUsed+= this.aihand[i].cost;
                cardspLayedThisTurn.push(this.aihand[i]);
                this.playCard(i, false);
            }

        }
        for(let i=0; i<this.aiboard.length;i++){
            let canplay=true;
            let hasattacked=false;
            for(let j=0;j <cardspLayedThisTurn.length;j++){
                if(this.aiboard[i]===cardspLayedThisTurn[j]){
                    canplay=false;
                }
            }
            if(canplay===true&& hasattacked===false){
                        hasattacked=true;
                        this.attackPlayer(i,true)
                }
            }
        this.endTurn();
    } else if(this.aiStance==='neutral') {
        for (let i = 0; i < this.aihand.length; i++) {
            if (this.aiPlayedCards === this.maxaiPlay || this.aimanaUsed === this.maxManaUse) {
                break;
            }
            if ((this.aihand[i].type === 'legendary creature' && this.aihand[i].cost + this.aimanaUsed <= this.maxManaUse) || (this.aihand[i].type === 'creature' && this.aihand[i].cost + this.aimanaUsed <= this.maxManaUse)) {
                this.aiPlayedCards++;
                this.aimanaUsed += this.aihand[i].cost;
                this.playCard(i, false);
            }
        }
        if (this.aiPlayedCards === 0) {
            let x = Math.round(Math.random());
            let played = false;
            if (x === 0) {
                for (let j = 0; j < this.aihand.length; j++) {
                    if (this.aihand[j].type === 'heal')
                        this.aiPlayedCards++;
                    this.aimanaUsed += this.aihand[j].cost;
                    played = true;
                    this.playCard(j, false);
                }
            } else {
                for (let j = 0; j < this.aihand.length; j++) {
                    if (this.aihand[j].type === 'hurt')
                        this.aiPlayedCards++;
                    this.aimanaUsed += this.aihand[j].cost;
                    played = true;
                    this.playCard(j, false);
                }
            }
            if (x === 0 && played === false) {
                for (let j = 0; j < this.aihand.length; j++) {
                    if (this.aihand[j].type === 'hurt')
                        this.aiPlayedCards++;
                    this.aimanaUsed += this.aihand[j].cost;
                    played = true;
                    this.playCard(j, false);
                }
            } else if (played === false) {
                for (let j = 0; j < this.aihand.length; j++) {
                    if (this.aihand[j].type === 'heal')
                        this.aiPlayedCards++;
                    this.aimanaUsed += this.aihand[j].cost;
                    played = true;
                    this.playCard(j, false);
                }
            }

        }
    }

        this.endTurn();
    }
}