
var Token

const loginForm =document.querySelector('#login-form');
btnLogin.addEventListener('click', (e)=> {
    e.preventDefault();

    //get user info 
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;
    login ();
    async function Auth(Token){
   if(typeof Token!== "undefined",Token!='Emai or password is not correct'){
       localStorage.setItem('auth-token',Token);
    //check token
    fetch('https://gyssablog.herokuapp.com/message',{method: "GET",
    headers:{
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem("auth-token") 
    }}).then((data)=>{

        return data.json();
        }).then(data=>{
            window.location.href="dashboard.html"; 
        }
        ).catch((err)=>{
            document.getElementById("err").style.display = "flex";
            loginForm.reset();
        })


   
   }else{
    document.getElementById("err").style.display = "flex";
    loginForm.reset();
   }}
   
    //log the user in 
    // auth.signInWithEmailAndPassword(email, password).then((cred)=>{
    //     //rest form
    //     loginForm.reset();
    //     window.location.href="./dashboard.html";
    // }).catch(function(){
    //     loginForm.reset();
    //     alert("Invalid login details")
    // });
    async function login (){
await fetch('https://gyssablog.herokuapp.com/login',{
method: "POST",
headers:{
    'Content-Type': 'application/json'
},
body: JSON.stringify({
Email:email,
Password:password
})
}).then(response => response.text())
.then(data => Auth(data))
//user login
} 
});

//user login

///