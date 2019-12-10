import { cardGame } from "./engine/cardGame.js";
import { cardData } from "./engine/Cards.js";



export function landingPage() {
    const $root = $('#root');
    //  $root.html('');
    let page = ``
    page += `<button id="play" type="button">Play Game</button>`
    page += `<button id="wiki" type="button">View Wiki</button>`

    $root.append(page);
}


//Start of game
export function startgame() {
    let cardgame= new cardGame();
    cardgame.start();

    const $root = $('#root');
    $root.html(' ');

    let wpicture = `<div id="all">`
    const loadboard = function () {
        wpicture += `<div id="aiHealth">Enemy Health: ${cardgame.aiMana}</div>`;
        wpicture += `<br>`;
        //Cardbacks for the AI
        wpicture += `<div id="aiHand">'
    ${cardgame.cardback}
    ${cardgame.cardback}
    ${cardgame.cardback}
    ${cardgame.cardback}
    ${cardgame.cardback}
    ${cardgame.cardback}
    ${cardgame.cardback}
    wpicture+=</div>`;
        wpicture += `<br>`;
        //I may need to write a check, because if we're replacing the cards
        //Used with blank cards then we will need a for loop to fix shit up.

        //** fix fix fix fix fix  */
        wpicture += `<div id="aiDeck"> Card Left in Enemy Deck: ${cardgame.aiDeck.length}</div>`;
        wpicture += `<br>`;
        wpicture += `<div id="aiBoard">${cardgame.aiboard}</div>`;
        wpicture += `<br>`;

        wpicture += `<div id="playerBoard">${cardgame.playerboard}</div>`;
        wpicture += `<br>`;
        //Pulls in our hand and gives each card a id of
        //playerhand-0,playerhand-1, and so forth till 6 (7 total)
        wpicture += `<div id="playerHand">`
        ////////////////////////////////////////BIG NEED TO FIX  Draw isn't working???
        for (let i = 0; i < 5; i++) {
            if (cardgame.playerhand[i].id === 50) {
                wpicture += `<div id="playerhand-${i}>${cardgame.playerhand[i].cardimg}</div>`

            }
        }
        wpicture += `</div>`;
        wpicture += `<div id="playerDeck">Cards Left in your deck: ${cardgame.playerDeck.length}</div>`
        wpicture += `<br>`;
        wpicture += `<div id="playerHealth">Your Health: ${cardgame.playerMana}</div>`;
    }
    loadboard();
    $root.append(wpicture);
}

function update() {
    const $root = $('#root');
    start();
    let wpicture = `<div id="all">`
    const loadboard = function () {
        wpicture += `<div id="aiHealth">${cardgame.aiMana}</div>`;

        wpicture += `<br>`;

        wpicture += `</div>`

        //Maybe write the "blank card check code" depending on implementation
        wpicture += `<br>`;
        wpicture += `<div id="aiDeck"> Card Left in Enemy Deck: ${cardgame.aiDeck.length}</div>`;
        wpicture += `<br>`;
        wpicture += `<div id="aiBoard">`
        for (let i = 0; i < 5; i++) {
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

        wpicture += `<br>`;
        wpicture += `<div id="playerHealth">${cardgame.playerMana}</div>`;
    }
    $root.append(wpicture);

}


function wikipage() {
    const $root = $('#root');
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

function cardPlay(x, y) {
    playCard(x, y);
    if (cardgame.playerMana != 0) {
        update();
    } else {

    }
}

function lose() {
    let x = ``;
    x += `<div id="loseScreen"> You lose.  Take another year at UNC.<div>`;
    x += `<button type="button" id="playAgain">Play Again</div>`;
    x += `<button type="button" id="landAgain">Back to Home Page</div>`;
    $root.append(x);
}

function win() {
    let x = ``;
    x += `<div id="loseScreen"> You GRADUATED!!!! CONGRATS!!!?<div>`;
    x += `<button type="button" id="playAgain">Play Again?</div>`;
    x += `<button type="button" id="landAgain">Back to Home Page</div>`;
    $root.append(x);
}

$(function () {
    landingPage();
    $(document).on('click', '#play', function () {

        startgame();

    })
    $(document).on('click', '#wiki', function () {wikipage();})

    //Templates for xon clicks of cards and various items, need changes later ~~~~~Don't change the one above
    $(document).on('click', '#playerhand-0', function () { cardPlay(0, true); })
    $(document).on('click', '#playerhand-1', function () { cardPlay(1, true); })
    $(document).on('click', '#playerhand-2', function () { cardPlay(2, true); })
    $(document).on('click', '#playerhand-3', function () { cardPlay(3, true); })
    $(document).on('click', '#playerhand-4', function () { cardPlay(4, true); })
    $(document).on('click', '#playerhand-5', function () { cardPlay(5, true); })
    $(document).on('click', '#playerhand-6', function () { cardPlay(6, true); })

    $(document).on('click', '#playAgain', function () {
        startgame();
    })

    $(document).on('click', '#endTurn', function () {
        cardgame.endTurn();
    })
    $(document).on('click', '#landAgain', function () {
        landingPage();
    })
})
