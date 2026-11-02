
/* =====================================
   MongSuinu Marma Portfolio
   JavaScript Functionality
===================================== */


/* =====================================
   1. Mobile Navigation Menu
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

    // Close menu after clicking a link

    navMenu.addEventListener("click", function (event) {

        if (event.target.closest("a")) {
            navMenu.classList.remove("active");
        }

    });

}


/* =====================================
   2. Sidebar Toggle
===================================== */

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

if (sidebar && sidebarToggle) {

    sidebarToggle.addEventListener("click", function () {

        sidebar.classList.toggle("active");

    });

}


/* =====================================
   3. Dark / Light Mode
===================================== */

const lightModeBtn = document.querySelector('[data-mode="light"]');
const darkModeBtn = document.querySelector('[data-mode="dark"]');

function setTheme(theme) {

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("portfolio-theme", theme);

}

if (lightModeBtn) {

    lightModeBtn.addEventListener("click", function () {

        setTheme("light");

    });

}

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        setTheme("dark");

    });

}

// Load saved theme

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {

    setTheme(savedTheme);

}


/* =====================================
   4. Accent Color Change
===================================== */

const colorButtons = document.querySelectorAll("[data-color]");

colorButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        // Using event.target

        const selectedButton = event.target.closest("[data-color]");

        if (!selectedButton) return;

        const selectedColor = selectedButton.getAttribute("data-color");

        document.documentElement.style.setProperty(
            "--primary",
            selectedColor
        );

        localStorage.setItem("portfolio-color", selectedColor);

    });

});

// Load saved accent color

const savedColor = localStorage.getItem("portfolio-color");

if (savedColor) {

    document.documentElement.style.setProperty(
        "--primary",
        savedColor
    );

}


/* =====================================
   5. Dynamic Typing Animation
===================================== */

const typingText = document.getElementById("typingText");

if (typingText) {

    const words = [
        "Web Developer",
        "Frontend Developer",
        "Web Designer",
        "Creative Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (isDeleting) {

            charIndex--;

        } else {

            charIndex++;

        }

        typingText.textContent = currentWord.substring(0, charIndex);

        let speed = isDeleting ? 60 : 120;

        if (!isDeleting && charIndex === currentWord.length) {

            speed = 1200;
            isDeleting = true;

        } else if (isDeleting && charIndex === 0) {

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            speed = 400;

        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

}


/* =====================================
   6. Scroll To Top Button
===================================== */

const scrollTopBtn = document.getElementById("scrollTop");

if (scrollTopBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    });

    scrollTopBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


/* =====================================
   7. Smooth Scroll Navigation
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});


/* =====================================
   8. FAQ Event Handling
===================================== */

const faqItems = document.querySelectorAll(".faqItem");

faqItems.forEach(function (item) {

    item.addEventListener("toggle", function (event) {

        if (event.target.open) {

            faqItems.forEach(function (otherItem) {

                if (otherItem !== event.target) {

                    otherItem.open = false;

                }

            });

        }

    });

});


/* =====================================
   9. Active Navigation Link
===================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navMenu a").forEach(function (link) {

    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});


/* =====================================
   10. Footer Current Year
===================================== */

const yearElement = document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


console.log("MongSuinu Portfolio Website Loaded Successfully!");









document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const contactMenu = document.getElementById('contactMenu');
    
    if (toggleBtn && contactMenu) {
        const iconOpen = toggleBtn.querySelector('.icon-open');
        const iconClose = toggleBtn.querySelector('.icon-close');

        toggleBtn.addEventListener('click', function() {
            // মেনু টগল করা
            contactMenu.classList.toggle('show-menu');
            
            // আইকন পরিবর্তন করা
            if (contactMenu.classList.contains('show-menu')) {
                if (iconOpen) iconOpen.style.display = 'none';
                if (iconClose) iconClose.style.display = 'inline';
            } else {
                if (iconOpen) iconOpen.style.display = 'inline';
                if (iconClose) iconClose.style.display = 'none';
            }
        });
    }
});