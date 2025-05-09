"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ------- CUSTOM CURSOR -------

const cursor = document.querySelector('.custom--cursor');      // Cursor
const outline = document.querySelector('.cursor--outline');    // Border Follow

let mouseX = 0, mouseY = 0;             // Coord Cursor
let outlineX = 0, outlineY = 0;         // Coord Border

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Cursor Mouvements
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
});

// Easing function
function animate() {
  // Ease (10%)
  outlineX += (mouseX - outlineX) * 0.1;
  outlineY += (mouseY - outlineY) * 0.1;

  // Apply new coords
  outline.style.left = `${outlineX}px`;
  outline.style.top = `${outlineY}px`;

  // New Frame request
  requestAnimationFrame(animate);
}

// Start Anim
animate();



// ------- NAVIGATION -------

const menu = document.querySelector(".nav__mb");
const menuButton = document.querySelector(".menu--btn");

menuButton.addEventListener("click", function () {
    const menuLinks = document.querySelectorAll(".nav__list .nav__link");

    menuButton.classList.toggle("open");

    if (menu.classList.contains("open")) {
        gsap.to(menuLinks, {
            opacity: 0,
            duration: 0.2,
            stagger: { each: 0.2, from: "end" },
            onComplete: function () {
                gsap.to(menu, {
                    y: "-100%",
                    duration: 0.2,
                    ease: "power3.out",
                });
                menu.classList.remove("open");
            },
        });
    } else {
        gsap.fromTo(
            menu,
            { y: "-100%" },
            {
                y: "0%",
                duration: 0.5,
                ease: "power4.out",
                onComplete: function () {
                    gsap.to(
                        menuLinks,
                        {
                            opacity: 1,
                            duration: 0.4,
                            stagger: 0.2,
                            ease: "power2.out",
                        }
                    );
                },
            }
        );

        menu.classList.add("open");
    }
});


//  ------- HEADER HOME -------

// Star animation 

const headerImage = document.querySelector(".header__text .star--header");

gsap.fromTo(
    headerImage, 
    {
        opacity: 0,
        scale: 0,
        rotation: 0,
    },
    {
        opacity: 1,
        scale: 1,
        rotation: 360,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.5,
    }
    
);

// Titles animation

const headerTitles = document.querySelectorAll(".header__content .title");

gsap.fromTo(
    headerTitles, 
    {
        opacity: 0,
        x: 20,
    },
    {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".header__content",
            start: "top 80%",
            end: "50% top",
            toggleActions: "play reverse play reverse",
        },
    }
    
);

// Breakline

const headerBreaklines = document.querySelectorAll(".page--breakline");

headerBreaklines.forEach(function (breakline) {
    gsap.fromTo(
        breakline,
        {
            opacity: 0,
            x: 80,
        },
        {
            delay: 0.2,
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: breakline,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            },
        }
    );
});

//  ------- MAIN HOME -------

// About

const homeAbout = document.querySelector(".section--about");

gsap.fromTo(
    homeAbout,
    {
        opacity: 0,
        x: -80,
    },
    {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 1,
        scrollTrigger: {
            trigger: ".section--about",
            start: "top 80%",
            end: "80% top",
            toggleActions: "play reverse play reverse",
        },
        
    }

);

// Projects Intro

const homeProjects = document.querySelector(".section--projects__intro");

gsap.fromTo(
    homeProjects,
    {
        opacity: 0,
        y: -160,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 1,
        scrollTrigger: {
            trigger: ".section--projects__intro",
            start: "top 50%",
            toggleActions: "play reverse play reverse",
        },
        
    }

);

// Cards

const homeCards = document.querySelectorAll(".section--projects__content .project");

gsap.fromTo(
    homeCards, 
    {
        opacity: 0,
        y: 160,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".section--projects__content",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
        },
    }
    
);