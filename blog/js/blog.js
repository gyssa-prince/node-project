var Posts = document.getElementById('#blog-container')
var Allblogs= document.getElementById('blog-container')


function displayblogs(doc){
let blogbox =document.createElement('div');
let blogimg =document.createElement('div');
let blogtxt =document.createElement('div');

blogbox.setAttribute('class','blog-box1')

blogbox.setAttribute('data-id', doc.id);

blogimg.setAttribute('class','blog-img')
blogtxt.setAttribute('class','blog-text')


let img= document.createElement('img');
     img.setAttribute('class','blog-img')
    let date= document.createElement('span');
    let blgtitle = document.createElement('a');
    blgtitle.setAttribute('class','blog-title');
    let p = document.createElement('p');
    let Readmore =document.createElement('button')
    Readmore.setAttribute('class', 'readmore');
    Readmore.setAttribute('id',doc._id);
   


      img.src = doc.Picture; 
    date.textContent = doc.date+' /GYSSAGARA';
    blgtitle.textContent = doc.Title; 
    p.textContent = doc.Body.substring(0,100)+'...';
    Readmore.textContent = "Read more"

    blogimg.appendChild(img);
    blogtxt.appendChild(date);
    blogtxt.appendChild(blgtitle);
    blogtxt.appendChild(p);
    blogtxt.appendChild(Readmore)
    blogbox.appendChild(blogimg);
    blogbox.appendChild(blogtxt);
    Allblogs.appendChild(blogbox);
    

    Readmore.addEventListener('click',(e) => {
      let Postid = (Readmore.getAttribute('id'));
      window.location.href="ablog.html#"+(Postid);
    })

}


  /*// getting data
db.collection('Posts').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
      displayblogs(doc);
    });
  });*/

    // getting data

    var i;
  fetch('https://gyssablog.herokuapp.com/blogs').then((data)=>{

return data.json();
}).then((completedata)=>{

  for(i=0;i<5;i++){
    displayblogs(completedata[i]);
  }
}).catch((err)=>{
    console.log(err);
})
 
