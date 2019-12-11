import { cardGame } from "./engine/cardGame.js";
import { cardData } from "./engine/Cards.js";
// assigns the authorization app to an easily typed variable bc im lazy
let auth = firebase.auth();

// handles login button press 
function toggleSignIn() {
    // if user is logged in already, logs them out 
    if (auth.currentUser) {
        auth.signOut(); 
    } else {
        // gets email and password from submitted form 
        let email = document.getElementById('email').value; 
        let password = document.getElementById('password').value; 
        auth.signInWithEmailAndPassword(email, password).catch(function(error) {
            // handles sign in errors here 
            let errorCode = error.code; 
            let errorMessage = error.message; 
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.'); 
            } else {
                alert(errorMessage); 
            }
            console.log(error); 
        })
    }
}

// handles sign up button press 
function handleSignUp() {
    let email = document.getElementById('email').value; 
    let password = document.getElementById('password').value; 
    // creates user with email and password gathered above 
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // handles error here 
        let errorCode = error.code; 
        let errorMessage = error.message; 
        if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.'); 
        } else {
            alert(errorMessage); 
        }
        console.log(error); 
    })
    toggleSignIn(); 
}

// handles logging in with google 
function toggleSignInWithGoogle() {
    // if person isn't already logged in 
    if (!auth.currentUser) {
        let provider = new firebase.auth.GoogleAuthProvider(); 
        // signs user in 
        auth.signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API. 
            let token = result.credential.accessToken; 
            let user = result.user; 
        }).catch(function(error) {
            // handles errors 
            let errorCode = error.code; 
            let errorMessage = error.message; 
            // The provider account's email address 
            let email = error.email; 
            // the pending google credential 
            let credential = error.credential; 
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.'); 
                // hande linking user accounts signed up with multiple auth providers here 
                // User's email already exists.
                // Asks the user their password.
                var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
                auth.signInWithEmailAndPassword(email, password).then(function(user) {
                    user.linkWithCredential(credential);
                });
            } else {
                console.log(error); 
            }
        });
    } else {
        auth.signOut(); 
    }
}

// renders login with google button *******************************************************************************************
    function onSuccess(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    }
    function onFailure(error) {
      console.log(error);
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }
  // ******************************************************************************************************************************8

function handleResetEmail() {
    let emailAddress = document.getElementById('resetEmail').value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
        // email sent 
    }).catch(function(error) {
        // handle errors here
        alert(error.message); 
    });
}

function loadGamePage() {
    const $root = $('#gameRoot'); 
    let page = ``; 
    page += `
        <div class="hero">
            <div class="hero-content">
                <button id="play" type="button">Play Game</button>
            </div>
        </div>
    `;
    $root.append(page); 
}

export function landingPage() {
    const $root = $('#root');
    //  $root.html('');
    let page = ``
    page+=`
    <div class='hero'>
        <div class='hero-content'>
            <!--The regular content-->
            <img src='' alt='logo'><br>
            <button>How to Play</button>
            <button>Card Wiki</button>
            <button id="initialLoginButton" onclick="document.getElementById('loginForm').style.display='block'">Login</button>
        </div>
    </div>
    `
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

function loadModal(){
    const $loginForm = $('#loginForm');
    let form=``;
    form+=`
    <span onclick="document.getElementById('loginForm').style.display='none'" class="close" title="Close Modal">&times;</span>

    <!-- Modal Content -->
    <form class="modal-content animate">
        <div class="container">
            <label for="email"><b>Email</b></label><br>
            <input type="text" placeholder="Enter Email" name="email" id="email" required><br><br>

            <label for="psw"><b>Password</b></label><br>
            <input type="password" placeholder="Enter Password" name="psw" id="password" required><br><br>

            <button type="submit" id="loginSubmit">Login</button>
            <button type="submit" id="createAccount">Create Account</button><br><br>

            <div id="my-signin2"></div><br>
        </div>

        <div class="container" style="background-color:#f1f1f1">
            <button type="button" onclick="document.getElementById('loginForm').style.display='none'" class="cancelbtn">Cancel</button>
            <span class="psw"><a href="forgotPassword.html">Forgot password?</a></span>
        </div>
    </form>
    `
    $loginForm.append(form);
}

$(function () {

    landingPage();
    loadModal();
    loadGamePage(); 
    $(document).on('click', '#play', function () {

        startgame();

    })
    $(document).on('click', '#wiki', function () {wikipage();})

  
    $(document).on('click', '#loginSubmit', toggleSignIn); 
    $(document).on('click', '#createAccount', handleSignUp);  
    $(document).on('click', '#my-login2', toggleSignInWithGoogle); 
    $(document).on('submit', '#resetPassword', handleResetEmail); 
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
