export async function getGame() {
   
}
//--------------------------
export function load() {

}
//---------------------------
export function gameRender() {
  

}
//--------------------------------


//--------------------------------


//--------------------------------

//--------------------------------



//I need to write functions to give me
//name of people who tweet
//date of the tweet
//body of tweet IS DONE
//isliked
//isretweeted
$(function () {
    renderTweeter();
    $(document).on('click', `#postt`, function () {postTweet();});
    $(document).on('click', `.like`, function () {likeTweet();});
    $(document).on('click', `.edit`, function () {openEditTweet();});
    $(document).on('click', `.delete`, function () {destroyTweet();});
    //worry about retweet later 
    $(document).on('click', `.retweet`, function () {retweetOpen();});
    $(document).on('click', `.reply`, function () {openReplyTweet();});
});