import '/engine/AI.js'
import '/engine/cardGame.js'
import '/engine/Cards.js'

export function landingPage() {
    const $root = $('#root');
  //  $root.html('');
    let page=``
    page+=`<button type="button">Play Game</button>`
    $root.append(page);
}

$(function(){
    landingPage();
});