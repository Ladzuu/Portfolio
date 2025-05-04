"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// BURGER MENU

const menu = document.querySelector(".nav__mb");
const menuButton = document.querySelector(".menu--btn");

menuButton.addEventListener("click", function () {
    const menuLinks = document.querySelectorAll(".nav__list .nav__link");

    // Ajout de la classe "open" pour le bouton
    menuButton.classList.toggle("open");

    if (menu.classList.contains("open")) {
        // Fermer le menu
        gsap.to(menuLinks, {
            opacity: 0,
            duration: 0.2,
            stagger: { each: 0.1, from: "end" }, // Animation du dernier au premier
            onComplete: function () {
                // Une fois les liens disparus, fermeture du menu
                gsap.to(menu, {
                    y: "-100%",
                    duration: 0.5,
                    ease: "power2.in",
                });
                menu.classList.remove("open");
            },
        });
    } else {
        // Ouvrir le menu
        gsap.fromTo(
            menu,
            { y: "-100%" },
            {
                y: "0%",
                duration: 0.5,
                ease: "power4.out",
                onComplete: function () {
                    // Animation des liens
                    gsap.fromTo(
                        menuLinks,
                        { opacity: 0 },
                        {
                            opacity: 1,
                            duration: 0.5,
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


// HEADER

// Star animation 

const headerImage = document.querySelector(".header__content img");

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

// Breakline animation

const headerBreakline = document.querySelectorAll(".page--breakline");

gsap.from(headerBreakline, {
    delay: 1,
    opacity: 0,
    x: 80,
    duration: 1,
    ease: "power4.out",
});

