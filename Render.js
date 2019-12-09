import '/engine/AI.js'
import '/engine/cardGame.js'
import '/engine/Cards.js'
import { startingHand, playCard } from './engine/cardGame';
import { start } from 'repl';

export function landingPage() {
    const $root = $('#root');
    //  $root.html('');
    let page = ``
    page += `<button id="play" type="button">Play Game</button>`
    $root.append(page);
}


//Start of game 
export function game() {
    const $root = $('#root');
    start();
    let wpicture = `<div id="all">`
    const loadboard = function () {
        wpicture += `<div id="aiHealth">${cardGame.aiMana}</div>`;
        wpicture += `<br>`;
        //Cardbacks for the AI
        wpicture += `<div id="aiHand">
    ${cardGame.cardback}
    ${cardGame.cardback}
    ${cardGame.cardback}
    ${cardGame.cardback}
    ${cardGame.cardback}
    ${cardGame.cardback}
    ${cardGame.cardback}
    </div>`;
        wpicture += `<br>`;
        //I may need to write a check, because if we're replacing the cards
        //Used with blank cards then we will need a for loop to fix shit up.
        wpicture += `<div id="aiDeck"> Card Left in Enemy Deck: ${cardGame.aiDeck.length}</div>`;
        wpicture += `<br>`;
        wpicture += `<div id="aiBoard">${cardGame.aiboard}</div>`;
        wpicture += `<br>`;

        wpicture += `<div id="playerBoard">${cardGame.playerboard}</div>`;
        wpicture += `<br>`;
        wpicture += `<div id="playerDeck">Card left in Your Deck: ${cardGame.playerDeck.length}</div>`;
        wpicture += `<br>`;
        //Pulls in our hand and gives each card a id of 
        //playerhand-0,playerhand-1, and so forth till 6 (7 total)
        wpicture += `<div id="playerHand">`
        for (let i = 0; i < 7; i++) {
            if (cardGame.aihand[i].id === 50) {
                wpicture += `<div id="playerhand-${i}>${cardGame.playerhand[i].cardimg}</div>`
            }
        }
        wpicture += `</div>`;
        wpicture += `<br>`;
        wpicture += `<div id="playerHealth">${cardGame.playerMana}</div>`;
    }
}

export function update() {
    const $root = $('#root');
    start();
    let wpicture = `<div id="all">`
    const loadboard = function () {
        wpicture += `<div id="aiHealth">${cardGame.aiMana}</div>`;
        wpicture += `<br>`;
        //Cardbacks for the AI, Checks to make sure you have cards to actually show on the AI side
        wpicture += `<div id="aiHand">`
        for (let i = 0; i < 7; i++) {
            if (cardGame.aihand[i].id === 50) {
                wpicture += `${cardGame.cardback}`
            }
        }
        wpicture += `</div>`

        //Maybe write the "blank card check code" depending on implementation
        wpicture += `<br>`;
        wpicture += `<div id="aiDeck"> Card Left in Enemy Deck: ${cardGame.aiDeck.length}</div>`;
        wpicture += `<br>`;

        wpicture += `<div id="aiBoard">`
        for (let i = 0; i < 7; i++) {
            if (cardGame.aiboard[i].id != 50) {
                wpicture += `${cardGame.aiboard[i].cardimg}`
            }
        }
        wpicture+= `</div>`
        wpicture += `<br>`;

        wpicture += `<div id="playerBoard">${cardGame.playerboard}</div>`;
        wpicture += `<br>`;
        wpicture += `<div id="playerDeck">Card left in Your Deck: ${cardGame.playerDeck.length}</div>`;
        wpicture += `<br>`;


        //Checks to make sure you have cards to show within your hand.
        wpicture += `<div id="playerHand">`
        for (let i = 0; i < 7; i++) {
            if (cardGame.aihand[i].id === 50) {
                wpicture += `<div id="playerhand-${i}>${cardGame.playerhand[i].cardimg}</div>`
            }
        }
        wpicture += `</div>`;

        wpicture += `<br>`;
        wpicture += `<div id="playerHealth">${cardGame.playerMana}</div>`;
    }



    export function wikipage() {
        let x =``
        for(let i = 0 ; i <50; i++){
           x+= `<div id="${cardData[i].name}">` +
            `<h3 id="title">${cardData[i].name}</h3>` +
            `<p id="img"><img src="/graphics/cards/${cardData[i].name}.img"></p>` +
            `<p id="ability">${cardData[i].abilityName}: ${cardData[i].abilityDescription}</p>` +
            `<p id="attdef">Attack: ${cardData[i].attack} Defense: ${cardData[i].defense}</p>` +
            `<p id="cost">Cost: ${cardData[i].cost}</p>` +
            `<p id="type">Type: ${cardData[i].type}</p>` +
            `</div><br>`;
        }
        return x;
    }

    export function cardPlay(){
        playCard();
    }


    $(function () {
        landingPage();
        $(document).on('click', '#play', function () { game(); })
        //Templates for on clicks of cards and various items, need changes later ~~~~~Don't change the one above
        $(document).on('click', '#playerhand-0', function () { game(); })
        $(document).on('click', '#playerhand-1', function () { game(); })
        $(document).on('click', '#playerhand-2', function () { game(); })
        $(document).on('click', '#playerhand-3', function () { game(); })
        $(document).on('click', '#playerhand-4', function () { game(); })
        $(document).on('click', '#playerhand-5', function () { game(); })
        $(document).on('click', '#playerhand-6', function () { game(); })


        $(document).on('click', '#play', function () { game(); })
        $(document).on('click', '#play', function () { game(); })
        $(document).on('click', '#play', function () { game(); })
        $(document).on('click', '#play', function () { game(); })
        $(document).on('click', '#play', function () { game(); })
        $(document).on('click', '#play', function () { game(); })
        $(document).on('click', '#play', function () { game(); })
        $(document).on('click', '#play', function () { game(); })

    })
