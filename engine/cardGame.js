//lets get this bread (i messed up the commit)

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
//deck = starting deck player= boolean value on if it is the player
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