import axios from 'axios';

const root = new axios.create({
    baseURL: "http://localhost:3000"
});
  
export const handleLogin = async function(e) {
    e.preventDefault(); 

//    const result = await root.post(`/account/login/`, {
//      'name': user, 
//      'pass': pass,
//    })

//    console.log(result); 
}

$(async function() {

    $(document).on('click', '#loginSubmit', console.log('login submit')); 

})