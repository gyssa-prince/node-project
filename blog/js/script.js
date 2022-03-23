
fetch('https://gyssablog.herokuapp.com/blogs').then((data)=>{

return data.json();
}).then((completedata)=>{
    
}).catch((err)=>{
    console.log(err);
})