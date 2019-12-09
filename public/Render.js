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
    let email = document.getElementById('emailSignUp').value; 
    let password = document.getElementById('passwordSignUp').value; 
    // creates user with email and password gathered above 
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
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
}

$(function() {
    $(document).on('click', '#loginSubmit', toggleSignIn()); 
    $(document).on('click', '#signUpSubmit', handleSignUp()); 
})