export async function login(user, pass) {
    let result = await axios({
        method: 'post', 
        url: '', 
        
    }); 
}

// Get the modal
var modal = document.getElementById('loginForm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}