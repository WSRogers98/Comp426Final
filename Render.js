
import { cardGame } from "./engine/cardGame.js";
import { cardData } from "./engine/Cards.js";

export function landingPage() {
    const $root = $('#root');
    let page = ``
    page += `<button id="play" type="button">Play Game</button>`
    page += `<button id="wiki" type="button">Wiki</button>`
    $root.append(page);
}
export function loadWiki() {
    let wikiPage = ``
    const $root = $('#root');

    start();
    let wpicture = `<div id="all">`
    const loadboard = function () {
        wpicture += `<div id="aiHealth">${cardgame.aiMana}</div>`;

        wpicture += `<br>`;
        //Cardbacks for the AI, Checks to make sure you have cards to actually show on the AI side
        wpicture += `<div id="aiHand">`
        for (let i = 0; i < 7; i++) {
            if (cardgame.aihand[i].id === 50) {
                wpicture += `${cardgame.cardback}`
            }
        }
        wpicture += `</div>`

        //Maybe write the "blank card check code" depending on implementation
        wpicture += `<br>`;
        wpicture += `<div id="aiDeck"> Card Left in Enemy Deck: ${cardgame.aiDeck.length}</div>`;

        wpicture += `<br>`;

        wpicture += `<div id="aiBoard">`
        for (let i = 0; i < 7; i++) {
            if (cardgame.aiboard[i].id != 50) {
                wpicture += `${cardgame.aiboard[i].cardimg}`
            }
        }
        wpicture += `</div>`
        wpicture += `<br>`;

        wpicture += `<div id="playerBoard">${cardgame.playerboard}</div>`;
        wpicture += `<br>`;
        wpicture += `<div id="playerDeck">Card left in Your Deck: ${cardgame.playerDeck.length}</div>`;
        wpicture += `<br>`;

        wpicture += `<button type="button" id="endTurn">End Turn</div>`



        //Checks to make sure you have cards to show within your hand.
        wpicture += `<div id="playerHand">`
        for (let i = 0; i < 7; i++) {
            if (cardgame.aihand[i].id === 50) {
                wpicture += `<div id="playerhand-${i}>${cardgame.playerhand[i].cardimg}</div>`

            }
        }
        wpicture += `</div>`;

        wpicture += `<br>`;
        wpicture += `<div id="playerHealth">${cardgame.playerMana}</div>`;
    }
    $root.append(wpicture);

}


export function wikipage() {
    let x = ``
    //Need to work with how we access card database.
    for (let i = 0; i < 50; i++) {
        x += `<div id="card-${cardData[i].id}">` +

            `<h3 id="title">${cardData[i].name}</h3>` +
            `<p id="img"><img src="/graphics/cards/${cardData[i].name}.img"></p>` +
            `<p id="ability">${cardData[i].abilityName}: ${cardData[i].abilityDescription}</p>` +
            `<p id="attdef">Attack: ${cardData[i].attack} Defense: ${cardData[i].defense}</p>` +
            `<p id="cost">Cost: ${cardData[i].cost}</p>` +
            `<p id="type">Type: ${cardData[i].type}</p>` +
            `</div><br>`;
    }
     $root.append(x);

}



export function lose(){
    let x = ``;
    x+=`<div id="loseScreen"> You lose.  Take another year at UNC.<div>`;
    x+=`<button type="button" id="playAgain">Play Again</div>`;
    x+=`<button type="button" id="landAgain">Back to Home Page</div>`;
    $root.append(x);
}

export function win(){
    let x =``;
    x+=`<div id="loseScreen"> You GRADUATED!!!! CONGRATS!!!?<div>`;
    x+=`<button type="button" id="playAgain">Play Again?</div>`;
    x+=`<button type="button" id="landAgain">Back to Home Page</div>`;
}
}

$(function () {
    landingPage();
    $(document).on('click', '#play', newGame)
    $(document).on('click', '#wiki', loadWiki)

})
