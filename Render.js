import axios from 'node_modules\axios\dist\axios.js';

const root = new axios.create({
    baseURL: "http://localhost:3000"
});
  
export const handleLogin = async function(e) {
    e.preventDefault(); 
    console.log('login submit is working'); 
}

$(async function() {

    await root.post(`/account/create/`, {
        "name": "admin",
        "pass": "password",
    });
    
    $(document).on('click', '#loginSubmit', handleLogin); 

});