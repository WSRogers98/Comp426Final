

export function landingPage() {
    const $root = $('#root');
    $root.html('');
    let page=`<p>test</p>`
    page+=`<button type="button">Play Game</button>`
    $root.append(page);
}

$(function(){
    landingPage();
});