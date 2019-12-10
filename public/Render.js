
import {cardGame} from "./engine/cardGame.js";
import { cardData } from "./engine/Cards.js";

export function landingPage() {
    const $root = $('#root');
    let page = ``
    page += `<button id="play" type="button">Play Game</button>`
    page += `<button id="wiki" type="button">Wiki</button>`
    $root.append(page);
}
export function loadWiki() {
    let wikiPage=``
    const $root = $('#root');
    cardData.forEach(c=>{
        // TODO add image of card above its name in wikipage
    wikiPage+=
        `
<p>Name: ${c.name}</p>
<p>ability: ${c.abilityName}</p>
<p>${c.abilityDescription}</p>
<p>${c.ability}</p>
<p>attack: ${c.attack}</p>
<p>defense: ${c.defense}</p>
<p>cost: ${c.cost}</p>
`
    });
    $root.append(wikiPage);
}

export function newGame(){
    let game = new cardGame();
    game.start();
    let aiHand=``
    game.aihand.forEach(c=>{
        
    });
}
$(function () {
    landingPage();
    $(document).on('click', '#play', newGame)
    $(document).on('click', '#wiki',  loadWiki)

})
