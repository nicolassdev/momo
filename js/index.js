document.querySelectorAll(".faq-item").forEach(item=>{

item.addEventListener("click",()=>{

const answer=item.querySelector(".answer");

answer.style.display=
answer.style.display==="block"
?"none"
:"block";

});

});

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{opacity:0,transform:'translateY(40px)'},

{opacity:1,transform:'translateY(0px)'}

],{

duration:700,
fill:'forwards'

});

}

});

});

document
.querySelectorAll(".card, .feature, .step, .benefit-card, .faq-item")
.forEach(el => observer.observe(el));

const menu = document.getElementById("menu-toggle");

const nav = document.getElementById("nav-links");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {

    menu.classList.toggle("active");

    nav.classList.toggle("active");

    overlay.classList.toggle("active");


});

document.querySelectorAll("#nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

        menu.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");

});

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        menu.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");

    }

});


// night moode 


const themeBtn = document.getElementById("theme-toggle");

function applyTheme() {

    const isDark = document.body.classList.contains("dark");

    themeBtn.innerHTML = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    applyTheme();

});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

applyTheme();








