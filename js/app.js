let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let conf = document.querySelector('#menu-conf');
let configuracion = document.querySelector('.configuracion');
let icons = document.querySelector('.icons');
let box = document.querySelector('.color-box');
let tonoO = document.querySelector('.light-dark')
let tiempo = document.querySelector('#light-dark');
let buttons = document.querySelectorAll('.btn')

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('abierto')
}
conf.onclick = ()=>{
    configuracion.classList.toggle('abierto');
}
icons.onclick = () =>{
    box.classList.toggle('open');
}
tonoO.onclick= () =>{
    tiempo.classList.toggle('fa-sun');
}

for (var button of buttons) {

    button.addEventListener("click", (e)=>{
        let target = e.target;

        let open = document.querySelector(".open");
        if(open) open.classList.remove("open");

        document.querySelector(".active").classList.remove("active");
        target.classList.add("active");

        let root = document.querySelector(":root"),
        dataColor = target.getAttribute("data-color"),
        color = dataColor.split(" ");

        root.style.setProperty("--white", color[0]);
        root.style.setProperty("--black", color[1]);
        root.style.setProperty("--menus", color[2]);
        root.style.setProperty("--switchers-main", color[3]);
        root.style.setProperty("--light-bg", color[4]);
        root.style.setProperty("--hover-color", color[5]);

        console.log(dataColor)

    })
}