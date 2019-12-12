import { cardGame } from "./engine/cardGame.js";
import { cardData } from "./engine/Cards.js";

// assigns the authorization app to an easily typed variable bc im lazy
let auth = firebase.auth();
let cardgame;

//Is it ready to attack?
let playeratt = [];
playeratt[0] = false;
playeratt[1] = false;
playeratt[2] = false;
playeratt[3] = false;
playeratt[4] = false;
//has it already attacked?
let playerattacked = []
playerattacked[0] = false;
playerattacked[1] = false;
playerattacked[2] = false;
playerattacked[3] = false;
playerattacked[4] = false;


// handles login button press
function toggleSignIn() {
    // if user is logged in already, logs them out
    if (auth.currentUser) {
        auth.signOut();
    } else {
        // gets email and password from submitted form 
        let email = document.getElementById('email').value; 
        let password = document.getElementById('password').value; 
        auth.signInWithEmailAndPassword(email, password).then(loadGamePage()).catch(function(error) {
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

function loadGamePage() {
    const $root = $('#root');
    $root.html('');
    let page = ``;
    page += `
        <div class="hero">
            <div class="hero-content">
                <button id="play" type="button">Play Game</button>
            </div>
        </div>
    `;
    $root.append(page);
    document.getElementById('loginForm').style.display='none'
}

// handles sign up button press
function handleSignUp() {
    let email = document.getElementById('email').value; 
    let password = document.getElementById('password').value; 
    // creates user with email and password gathered above 
    auth.createUserWithEmailAndPassword(email, password).then(loadGamePage()).catch(function(error) {
        // handles error here 
        let errorCode = error.code; 
        let errorMessage = error.message; 
        if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}

// Initiate Firebase Auth.
function initFirebaseAuth() {
    // Listen to auth state changes.
    auth.onAuthStateChanged(firebase.auth().onAuthStateChanged(user => {
        if (user) {
            loadGamePage(); 
        }
    }));
}

function loadGameIfSignedIn() {
    if (user) {
        loadGamePage(); 
    }
}

function handleResetEmail() {
    let emailAddress = document.getElementById('resetEmail').value;

    auth.sendPasswordResetEmail(emailAddress).then(function () {
        // email sent
    }).catch(function (error) {
        // handle errors here
        alert(error.message);
    });
}

export function landingPage() {
    const $root = $('#root');
    $root.html('');
    let page = ``
    page += `
      <div class='hero'>
          <div class='hero-content'>
              <!--The regular content-->
              <img src='' alt='logo'><br>
              <button id="howTo">How to Play</button>
              <button id="wiki">Card Wiki</button>
              <button id="initialLoginButton" onclick="document.getElementById('loginForm').style.display='block'">Login</button>
          </div>
      </div>
    `
    $root.empty();
    $root.append(page);
}

//Start of game
export function startgame() {
    cardgame = new cardGame();
    cardgame.start();

    const $root = $('#root');
    $root.html(' ');

    let wpicture = `<div id="all">`
    const loadboard = function () {
        wpicture += `<div id="aiHealth">Enemy Health: ${cardgame.aiMana}</div>`;
        wpicture += `<br>`;
        //Cardbacks for the AI
        wpicture += `<div id="aiHand">`
        for (let i = 0; i < cardgame.aihand.length; i++) {
            // wpicture += `<div id="aihand-${i}>${cardgame.cardback}</div>`
            wpicture += `<div id="aihand-${i}>${cardgame.aihand[i].name}</div>`


        }
        wpicture += `</div>`;
        wpicture += `<br>`;
        //I may need to write a check, because if we're replacing the cards
        //Used with blank cards then we will need a for loop to fix shit up.

        //** fix fix fix fix fix  */
        wpicture += `<div id="aiDeck"> Card Left in Enemy Deck: ${cardgame.aiDeck.length}</div>`;
        wpicture += `<br>`;
        for (let i = 0; i < cardgame.aiboard.length; i++) {
            wpicture += `<div id="aiboard-${i}">${cardgame.aiboard[i].name}</div>`;
        } wpicture += `<br>`;

        wpicture += `<div id="playerBoard">${cardgame.playerboard}</div>`;
        wpicture += `<br>`;
        //Pulls in our hand and gives each card a id of
        //playerhand-0,playerhand-1, and so forth till 6 (7 total)
        wpicture += `<div id="playerHand">`
        ////////////////////////////////////////BIG NEED TO FIX  Draw isn't working???
        for (let i = 0; i < cardgame.playerhand.length; i++) {
            // if (cardgame.playerhand[i].id !== 50) {
            // wpicture += `<div id="playerhand-${i}>${cardgame.playerhand[i].cardimg}</div>`
            wpicture += `<div id="playerhand-${i}"><p>${cardgame.playerhand[i].name}</p></div>`

            // }
        }
        wpicture += `<button id="endTurn" type="button">End Turn</button>`;
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
    // startgame();
    let wpicture = `<div id="all">`
    const loadboard = function () {
        wpicture += `<div id="aiHealth">Enemy Health: ${cardgame.aiMana}</div>`;
        wpicture += `<br>`;
        //Cardbacks for the AI
        wpicture += `<div id="aiHand">`
        for (let i = 0; i < cardgame.aihand.length; i++) {
            // wpicture += `<div id="aihand-${i}>${cardgame.cardback}</div>`
            wpicture += `<div id="aihand-${i}>${cardgame.aihand[i].name}</div>`


        }
        wpicture += `</div>`;
        wpicture += `<br>`;
        //I may need to write a check, because if we're replacing the cards
        //Used with blank cards then we will need a for loop to fix shit up.

        //** fix fix fix fix fix  */
        wpicture += `<div id="aiDeck"> Card Left in Enemy Deck: ${cardgame.aiDeck.length}</div>`;
        wpicture += `<br>`;
        wpicture += `<div id="aiboard">`
        for (let i = 0; i < cardgame.aiboard.length; i++) {
            wpicture += `<div id="aiboard-${i}">${cardgame.aiboard[i].name}</div>`;

        }
        wpicture += `</div>`
        wpicture += `<br>`;
        wpicture += `<div id="playerboard">`;
        for (let i = 0; i < cardgame.playerboard.length; i++) {
            // if (cardgame.playerhand[i].id !== 50) {
            // wpicture += `<div id="playerhand-${i}>${cardgame.playerhand[i].cardimg}</div>`
            wpicture += `<div id="playerboard-${i}"><p>${cardgame.playerboard[i].name}</p></div>`;
            // }
        }
        wpicture += `</div>`;
        wpicture += `<br>`;
        //Pulls in our hand and gives each card a id of
        //playerhand-0,playerhand-1, and so forth till 6 (7 total)
        wpicture += `<div id="playerHand">`
        ////////////////////////////////////////BIG NEED TO FIX  Draw isn't working???
        for (let i = 0; i < cardgame.playerhand.length; i++) {
            // if (cardgame.playerhand[i].id !== 50) {
            // wpicture += `<div id="playerhand-${i}>${cardgame.playerhand[i].cardimg}</div>`
            wpicture += `<div id="playerhand-${i}"><p>${cardgame.playerhand[i].name}</p></div>`

            // }
        }
        wpicture += `<button id="endTurn" type="button">End Turn</button>`;

        wpicture += `</div>`;
        wpicture += `<div id="playerDeck">Cards Left in your deck: ${cardgame.playerDeck.length}</div>`
        wpicture += `<br>`;
        wpicture += `<div id="playerHealth">Your Health: ${cardgame.playerMana}</div>`;
    }
    loadboard();
    $root.empty();
    $root.append(wpicture);

}

function wikipage() {
    const $root = $('#root');
    let x = ``
    $root.html(' ');
    //Need to work with how we access card database.
    x += `<div><input type="text" id="search"/>`
    x += `<button type="button" id="searchButton">Search</button></div>`;
    x += `<div id="searchDiv" style="display:none"><a href="" id="searchLink">Go to Card</a></div>`
    // does not autocomplete yet
    for (let i = 0; i < 50; i++) {
        // <div id="card-${cardData[i].id}">` +
        x += `<div id="card-${cardData[i].id}">` +
            `<h3 id="${cardData[i].id}">${cardData[i].name}</h3>` +
            `<p id="img"><img src="/graphics/cards/${cardData[i].name}.img"></p>` +
            `<p id="ability">${cardData[i].abilityName}: ${cardData[i].abilityDescription}</p>` +
            `<p id="attdef">Attack: ${cardData[i].attack} Defense: ${cardData[i].defense}</p>` +
            `<p id="cost">Cost: ${cardData[i].cost}</p>` +
            `<p id="type">Type: ${cardData[i].type}</p>` +
            `</div><br>`;
    }
    x+=`<button id="wiki-back-to-home">Go Back</button>`
    $root.append(x);
    let results = ["Kris Jordan", "Departmental King, KMP", "The Eternal One: David Plaisted",
        "COMP110 TA", "Office Hours", "Curve", "Stack Overflow", "Exam", "Snoeyink the Origami Lord",
        "Anish, the Prankster", "Comp Sci Overcrowding!", "Sitterson Pizza Event", "Legendary TA Rosh",
        "Robotics Lord Ron Alterovitz", "Legendary Professor Bishop: Destroyer of Worlds", "WeedOut Classes",
        "BS to BA", "Caffeine Addiction", "Mips Rush", "Sitterson: Departmental Home", "Procrastinate",
        "Coding Passion", "Djisktras Algorithm", "Legendary Professor: Montek", "Legendary Professor: McMillan the Villain",
        "Echoes of the Past: Pozefsky", "Classmates in Genome 100", "Internship", "BA to BS", "Computer Science Friends",
        "Computer Science Enemies", "Good Study Group", "Bad Study Group", "Code Leech", "Honour Court",
        "Switch to Comp Minor", "Hackathon", "Tech Job Fair", "Fred Brooks", "Pearl Hacks",
        "Obscure Youtube Coding Tutorial Channel", "Comp 426 Selfie", "Crying in the Sitterson Bathroom",
        "Kurama", "Rate my Professor", "Skipping Class", "Bug", "The Meme Shit Post Groupme", "CPU Hat",
        "Graduation"];
    $("#search").autocomplete({
        source: results
    });
}
function search() {
    let name = document.getElementById("search").value;
    let x = "#";
    for (let i = 0; i < 50; i++) {
        if (name === cardData[i].name) {
            x += cardData[i].id;
        }
    }
    $("#searchLink").attr("href", x);
    document.getElementById("searchDiv").style.display = "block";
}

function search() {
    let name = document.getElementById("search").value;
    let x = "#";
    for (let i = 0; i < 50; i++) {
        if (name === cardData[i].name) {
            x += cardData[i].id;
        }
    }
    $("#searchLink").attr("href", x);
    document.getElementById("searchDiv").style.display = "block";
}

function cardPlay(x, y) {
    cardgame.playCard(x, y);
}

//JINKIES FUCKING SCOOBEROOO
function cardAttack(x) {
    //If it exists?

}

function lose() {
    let x = ``;
    x += `<div id="loseScreen"> You lose.  Take another year at UNC.<div>`;
    x += `<button type="button" id="playAgain">Play Again</div>`;
    x += `<button type="button" id="landAgain">Back to Home Page</div>`;
    $root.append(x);
}

function win() {
    const $root = $('#root');
    let x = ``;
    x += `<div id="loseScreen"> You GRADUATED!!!! CONGRATS!!!?<div>`;
    x += `<button type="button" id="play">Play Again?</div>`;
    x += `<button type="button" id="landAgain">Back to Home Page</div>`;
    $root.empty();
    $root.append(x);
}

function loadModal() {
    const $loginForm = $('#loginForm');
    let form = ``;
    form += `
    <span onclick="document.getElementById('loginForm').style.display='none'" class="close" title="Close Modal">&times;</span>

    <!-- Modal Content -->
    <form class="modal-content animate">

        <div class="container" id="loginFormContent">
            <label for="email"><b>Email</b></label><br>
            <input type="text" placeholder="Enter Email" name="email" id="email" required><br><br>

            <label for="psw"><b>Password</b></label><br>
            <input type="password" placeholder="Enter Password" name="psw" id="password" required><br><br>

            <button type="button" id="loginSubmit">Login</button>
            <button type="button" id="createAccount">Create Account</button><br><br>
            <div id="my-signin2"></div><br>
        </div>

        <div class="container" style="background-color:#f1f1f1">
            <button type="button" onclick="document.getElementById('loginForm').style.display='none'" class="cancelbtn">Cancel</button>
            <span class="psw"><a href="forgotPassword.html">Forgot password?</a></span>
        </div>

    </form>`;
    $loginForm.append(form);
}

function howToPage() {
    const $root = $('#root');
    let text = ``
    $root.html(' ');
    text += `
    <hr>
    <h4 class="head">Basics</h4>
    <p>UNC Compstone is a card game between two players. 
        The goal of the game is to play cards from your hand onto the board and then 
        use the cards on the board to damage the enemy's grade and eventually bring 
        them down to 0.</p>

    <hr>
    <h4 class="head">Start of the game</h4>
    <p>Each player starts with 7 cards in their hand and 0 on their board. The player 
        that goes first is decided randomly.</p>

    <hr>
    <h4 class="head">Turn progression</h4>
    <p>On a player's turn, they can play cards from their hand onto their board. 
        Each board can only have 7 cards on it at a time. 
        Playing a card from the hand costs health and 
        when a card is played it can't be used to attack until the 
        turn after it is played. Many cards have abilities that are activated upon 
        playing the card from the hand.</p>

    <hr>
    <h4 class="head">End of Game</h4>
    <p>The game ends when one of the players goes down to 0 health.</p>
    <br><button id="how-to-back-to-home">Go Back</button>
    `
    $root.append(text);
}

$(function () {
    landingPage();
    loadModal();
    initFirebaseAuth();

    $(document).on('click', '#play', function () {
        startgame();
        update();

    })
    $(document).on('click', '#landAgain', function () {
        landingPage();
    });

    $(document).on('click', '#wiki', function () { wikipage(); })
    $(document).on('click', '#howTo', howToPage)
    $(document).on('click', '#loginSubmit', toggleSignIn);
    $(document).on('click', '#createAccount', handleSignUp);
    $(document).on('submit', '#resetPassword', handleResetEmail);

    //Templates for xon clicks of cards and various items, need changes later ~~~~~Don't change the one above
    // whatever was above this appears to be gone lol
    $(document).on('click', '#playerhand-0', function () {
        cardPlay(0, true); update(); win();
    })
    $(document).on('click', '#playerhand-1', function () {
        cardPlay(1, true); update();
    })
    $(document).on('click', '#playerhand-2', function () {
        cardPlay(2, true); update();
    })
    $(document).on('click', '#playerhand-3', function () {
        cardPlay(3, true); update();
    })
    $(document).on('click', '#playerhand-4', function () {
        cardPlay(4, true); update();
    })

    $(document).on('click', '#playerboard-0', function () {

        if (playerattacked[0] === false) {
            for (let i = 0; i < 5; i++) {
                playeratt[i] = false;
            }
            playeratt[0] = true;

        }

    })

    $(document).on('click', '#playerboard-1', function () {


        if (playerattacked[1] === false) {
            for (let i = 0; i < 5; i++) {
                playeratt[i] = false;
            }
            playeratt[1] = true;
        }
    })

    $(document).on('click', '#playerboard-2', function () {


        if (playerattacked[2] === false) {
            for (let i = 0; i < 5; i++) {
                playeratt[i] = false;
            }
            playeratt[2] = true;
        }
    })

    $(document).on('click', '#playerboard-3', function () {


        if (playerattacked[3] === false) {
            for (let i = 0; i < 5; i++) {
                playeratt[i] = false;
            }
            playeratt[3] = true;
        }
    })

    $(document).on('click', '#playerboard-4', function () {


        if (playerattacked[4] === false) {
            for (let i = 0; i < 5; i++) {
                playeratt[i] = false;
            }
            playeratt[4] = true;
        }
    })

    $(document).on('click', '#aiboard-0', function () {
        for (let i = 0; i < 5; i++) {
            if (playerattacked[i] === false && playeratt[i] === true) {
                cardAttack(i, 0);
                playerattacked[i] = true;
            }
        }
        update();
    });
    $(document).on('click', '#aiboard-1', function () {
        for (let i = 0; i < 5; i++) {
            if (playerattacked[i] === false && playeratt[i] === true) {
                cardAttack(i, 1);
                playerattacked[i] = true;
            }
        }
        update();
    });
    $(document).on('click', '#aiboard-2', function () {
        for (let i = 0; i < 5; i++) {
            if (playerattacked[i] === false && playeratt[i] === true) {
                cardAttack(i, 2);
                playerattacked[i] = true;
            }
        }
        update();
    });
    $(document).on('click', '#aiboard-3', function () {
        for (let i = 0; i < 5; i++) {
            if (playerattacked[i] === false && playeratt[i] === true) {
                cardAttack(i, 3);
                playerattacked[i] = true;
            }
        }
        update();
    });
    $(document).on('click', '#aiboard-4', function () {
        for (let i = 0; i < 5; i++) {
            if (playerattacked[i] === false && playeratt[i] === true) {
                cardAttack(i, 4);
                playerattacked[i] = true;
            }
        }
        update();
    });

    // $(document).on('click', '#aiboard-1', function () { cardAttack()})
    // $(document).on('click', '#aiboard-2', function () { cardAttack()})
    // $(document).on('click', '#aiboard-3', function () { cardAttack()})
    // $(document).on('click', '#aiboard-4', function () { cardAttack()})

    $(document).on('click', '#searchButton', function () { search() });
    $(document).on('click', '#aiHealth', function () {
        for (let i = 0; i < 5; i++) {
            if (playerattacked[i] === false && playeratt[i] === true) {
                cardgame.attackPlayer(i, false);
                playerattacked[i] = true;
            }
        }
        update();

    });

    $(document).on('click', '#playAgain', function () {
        startgame();
    })
    $(document).on('click', '#endTurn', function () {
        cardgame.endTurn();
        for (let i = 0; i < 5; i++) {
            playerattacked[i] = false;
        }
        //insert ai function call
        cardgame.AI();
        update();

    });
    $(document).on('click', '#landAgain', function () {
        landingPage();
    });
    $(document).on('click', '#wiki-back-to-home', function() {
        landingPage(); 
    });
    $(document).on('click', '#how-to-back-to-home', function() {
        landingPage(); 
    }); 
});

