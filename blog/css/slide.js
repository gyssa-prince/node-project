const next = document.getElementsByClassName('slid')[0]
const blogs = document.getElementsByClassName('blog-container2')[0]

next.addEventListener('click', () =>{
    blogs.classList.toggle('active')
})