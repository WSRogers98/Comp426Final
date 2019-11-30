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
        this.p1Board = new Array[7];
        this.p1Deck = new Array[40].fill(0);

        this.p2TurnCounter = 1;
        this.p2hp = 100;
        this.p2Hand = new Array[7];
        this.p2Board = new Array[7];
        this.p2Deck = new Array[40].fill(0);
        for (let i = 0; i < 40; i++) {
            this.p1Deck[i] = p1deck[i];
            this.p2Deck[i] = p2deck[i];
        }
    }
}

function setupNewGame(deck) {
    const info = await axios({
        method: 'get',
        url: "https://comp426fa19.cs.unc.edu/a09/tweets/" + z,
        withCredentials: true
    });
}

function endTurn() {

}
//Helper function here to make sure we can get cards
//Within the 0-39 range of the deck array
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function drawPhasep1(hand) {
    if (this.p1TurnCounter === 1) {
        for (let i = 0; i < 6; i++) {
            hand[i] = getRandomArbitrary(0, 39);
        }
        duplicateCheck(hand);
    } else{
        
    }
}
//Checks and makes sure that the "hand" array which pulls out our initial starting stuff is not holding any duplicate array numbers
//These numbers within the hand array determine which cards we pull out of the deck.(intially at least)
function duplicateCheck(hand){
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (hand[i] === hand[j]) {
                shand[j] = getRandomArbitrary(0, 39);
            }
        }
    }
}

function drawPhasep2() {

}
