export default class cardGame {
    //So we start off with nothing, and intake a deck
    //The deck we intake is our own,  Mind you
    //I've written this so that it's initializing
    //1 side of the game, not the AI side of the game
    //Meaning that this is just how you play the game, There will be interactions with the opponents board
    //I just need to code them.
    constructor(p1deck, p2deck) {
        this.p1TurnCounter = 1;
        this.p1hp = 100;
        this.p1Hand = new Array[7];
        this.p1Board = new Array[7].fill(0);
        this.p1Deck = new Array[40].fill(0);

        this.p2TurnCounter = 1;
        this.p2hp = 100;
        this.p2Hand = new Array[7];
        this.p2Board = new Array[7].fill(0);
        this.p2Deck = new Array[40].fill(0);
        for (let i = 0; i < 40; i++) {
            this.p1Deck[i] = p1deck[i];
            this.p2Deck[i] = p2deck[i];
        }
    }
}
let aiDeck=cardData;
let playerDeck =cardData;
aiDeck =shuffle(aiDeck);
playerDeck=shuffle(playerDeck);
let aihand=[];
let playerhand=[];

export function shuffle(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

}
export function startingHand(deck, player){
    for(let i=0;i>7;i++){
        if (player===true){
            playerhand[i]=deck[i];
            deck.shift();
            playerDeck.shift();

        }else{
            aihand[i]=deck[i];
            deck.shift();
            aiDeck.shift();
        }
    }
}
export function draw(deck,player){
    if (player===true){
        playerhand.push(deck[0]);
        deck.shift();
        playerDeck.shift();

    }else{
        aihand.push(deck[0]);
        deck.shift();
        aiDeck.shift();
    }
}