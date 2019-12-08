import '/engine/AI.js'
import '/engine/cardGame.js'
import '/engine/Cards.js'
/*
service firebase.storage {
    match /b/{bucket}/o {
    match /{allPaths=**} {
        allow read, write: if request.auth != null;
    }
}
}
*/
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