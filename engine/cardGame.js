//lets get this bread (i messed up the commit)

let aiDeck = cardData;
let playerDeck = cardData;
//aiDeck =shuffle(aiDeck);
//playerDeck=shuffle(playerDeck);
let aihand = [];
let playerhand = [];
let playerboard = [];
let aiboard = [];

export function start() {
    aiDeck = shuffle(aiDeck);
    playerDeck = shuffle(playerDeck);
    startingHand(true)
    startingHand(false)

}
export function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

}
//deck = starting deck player= boolean value on if it is the player
export function startingHand(player) {
    for (let i = 0; i > 7; i++) {
        if (player === true) {
            draw(true)
            // playerhand[i]=playerDeck[i];
            //  deck.shift();
            //  playerDeck.shift();

        } else {
            draw(false)
            // aihand[i]=aiDeck[i];
            //  deck.shift();
            //  aiDeck.shift();
        }
    }
}
export function draw(player) {
    if (player === true) {
        playerhand.push(playerDeck[0]);
        //  deck.shift();
        playerDeck.shift();

    } else {
        aihand.push(aiDeck[0]);
        // deck.shift();
        aiDeck.shift();
    }
}
//card index should be the position of the card within the hand
export function playCard(cardIndex, player) {
    if (player === true) {
        playerboard.push(playerhand[cardIndex]);
        playerhand.splice(cardIndex, 1)
    } else {
        aiboard.push(aihand[cardIndex]);
        aihand.splice(cardIndex, 1)
    }

}