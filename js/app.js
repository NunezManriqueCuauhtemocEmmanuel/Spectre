let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let conf = document.querySelector('#menu-conf');
let configuracion = document.querySelector('.configuracion');
let icons = document.querySelector('.icons');
let box = document.querySelector('.color-box');
let tonoO = document.querySelector('.light-dark')
let tiempo = document.querySelector('#light-dark');
let buton = document.querySelectorAll('.btn')

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
}
conf.onclick = ()=>{
    configuracion.classList.toggle('active');
}
icons.onclick = () =>{
    box.classList.toggle('active');
}
tonoO.onclick= () =>{
    tiempo.classList.toggle('fa-sun');
}
