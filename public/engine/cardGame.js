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
    }
    //call start method to start a new game
    start() {
        this.aiwon = false;
        this.playerwon = false;
        this.aiDeck = this.shuffle(this.aiDeck);
        this.playerDeck = this.shuffle(this.playerDeck);
        this.startingHand(true);
        this.startingHand(false);
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

    }
    //deck = starting deck player= boolean value on if it is the player
    startingHand(player) {
        for (let i = 0; i > 7; i++) {
            if (player === true) {
                this.draw(true)
                // playerhand[i]=playerDeck[i];
                //  deck.shift();
                //  playerDeck.shift();

            } else {
                this.draw(false)
                // aihand[i]=aiDeck[i];
                //  deck.shift();
                //  aiDeck.shift();
            }
        }
    }
    draw(player) {
        if (player === true) {
            this.playerhand.push(this.playerDeck[0]);
            //  deck.shift();
            this.playerDeck.shift();

        } else {
            this.aihand.push(this.aiDeck[0]);
            // deck.shift();
            this.aiDeck.shift();
        }
    }
    //card index should be the position of the card within the hand
    playCard(cardIndex, player) {
        if (player === true) {
            this.playerMana = this.playerMana - this.playerhand[cardIndex].cost;
            this.playerboard.push(this.playerhand[cardIndex]);
            this.playerhand.splice(cardIndex, 1)
        } else {
            this.aiMana = this.aiMana - this.aihand[cardIndex].cost;
            this.aiboard.push(this.aihand[cardIndex]);
            this.aihand.splice(cardIndex, 1)
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
}