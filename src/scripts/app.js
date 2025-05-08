"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

gsap.fromTo(headerImage, 
    {
        opacity: 0,
        scale: 0,
        rotation: 0,
    },
    {
        opacity: 1,
        scale: 1,
        rotation: 360,
        duration: 1.2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 1,
    }
    
);

// Titles animation

const headerTitles = document.querySelectorAll(".header__content .title");

gsap.from(headerTitles, {
    opacity: 0,
    x: 20,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out",
    yoyo: true,
    repeat: -1,
    repeatDelay: 0.7,
});

// Breakline

const headerBreakline = document.querySelectorAll(".page--breakline");

gsap.from(headerBreakline, {
    delay: 1,
    opacity: 0,
    x: 80,
    duration: 1,
    ease: "power4.out",
});