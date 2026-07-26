// ================================
// HOSHINO SUBS
// script.js
// ================================

// ---------- SLIDER ----------

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

setInterval(nextSlide,5000);

// ---------- DOTS ----------

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide=index;

        showSlide(currentSlide);

    });

});

// ---------- HEADER ----------

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        header.style.background="rgba(10,12,18,.96)";

    }else{

        header.style.background="rgba(12,15,22,.85)";

    }

});

// ---------- DAYS ----------

const dayButtons=document.querySelectorAll(".day");

dayButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        dayButtons.forEach(item=>{

            item.classList.remove("active");

        });

        btn.classList.add("active");

    });

});

// ---------- ANIMATION ----------

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(
".card,.schedule-card,.popular-card,.video-card,.community-card"
).forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition=".6s";

    observer.observe(item);

});

// ---------- MOBILE MENU ----------

const burger=document.querySelector(".burger");
const nav=document.querySelector("nav");

if(burger){

    burger.addEventListener("click",()=>{

        nav.classList.toggle("show");

    });

}

// ---------- ACTIVE LINK ----------

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(a=>{

            a.classList.remove("active");

        });

        link.classList.add("active");

    });

});

console.log("Hoshino Subs yuklandi.");