// =====================================================
// Nancy Patel Portfolio - script.js
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // MOBILE MENU
    // =====================================================

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navbar.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });

        // Close mobile menu after clicking a navigation link
        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }


    // =====================================================
    // ACTIVE NAVIGATION LINK
    // =====================================================

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");

    function updateActiveNav() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navigationLinks.forEach(link => {
            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    // =====================================================
    // TYPING EFFECT
    // =====================================================

    const typingText = document.getElementById("typingText");

    if (typingText) {

        const words = [
            "Full Stack Developer",
            "Python Developer",
            "Web Developer",
            "Software Developer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingText.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {
                    deleting = true;

                    setTimeout(typeEffect, 1800);
                    return;
                }

            } else {

                typingText.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {
                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {
                        wordIndex = 0;
                    }
                }
            }

            const speed = deleting ? 60 : 100;

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }


    // =====================================================
    // SCROLL REVEAL ANIMATION
    // =====================================================

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }


    // =====================================================
    // PROJECT FILTER
    // =====================================================

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            // Active button
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            // Filter projects
            projectCards.forEach(card => {

                const category = card.dataset.category;

                if (filter === "all" || category === filter) {

                    card.classList.remove("hidden");

                    // Small animation restart
                    card.style.animation = "none";

                    requestAnimationFrame(() => {
                        card.style.animation = "";
                    });

                } else {

                    card.classList.add("hidden");
                }
            });

        });

    });


    // =====================================================
    // PROJECT DATA
    // =====================================================

    const projectData = {

        gramvoice: {
            title: "GramVoice",
            type: "Major Project",
            icon: "fas fa-microphone",
            description:
                "Gujarati voice-note complaint management system designed for Gram Panchayat complaint registration, tracking and status management.",
            tech: [
                "Python",
                "Flask",
                "HTML",
                "CSS",
                "JavaScript",
                "Database"
            ],
            features: [
                "Gujarati voice complaint recording",
                "Unique complaint number generation",
                "Complaint status tracking",
                "Talati Visit Mode",
                "Priority management",
                "Complaint analytics",
                "Gram Panchayat complaint management"
            ]
        },

        notesblog: {
            title: "NotesBlog",
            type: "CodeOrbit Internship • Task 5",
            icon: "fas fa-blog",
            description:
                "Full Stack Notes/Blog Application developed as part of the CodeOrbit Full Stack Development Internship. The application provides frontend and backend functionality for managing notes.",
            tech: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Express.js",
                "REST API"
            ],
            features: [
                "Create notes",
                "View notes",
                "Update notes",
                "Delete notes",
                "Full-stack architecture",
                "REST API integration",
                "Responsive user interface"
            ]
        },

        login: {
            title: "User Login & Registration System",
            type: "CodeOrbit Internship • Task 4",
            icon: "fas fa-user-lock",
            description:
                "Full-stack authentication system with user registration, email OTP verification, login, forgot password, password reset and Google authentication.",
            tech: [
                "Node.js",
                "Express.js",
                "JavaScript",
                "bcryptjs",
                "Nodemailer",
                "Google OAuth"
            ],
            features: [
                "User registration",
                "Email OTP verification",
                "Secure password hashing",
                "User login",
                "Forgot password",
                "Password reset with OTP",
                "Google authentication",
                "Dashboard and logout"
            ]
        },

        restapi: {
            title: "Notes REST API",
            type: "CodeOrbit Internship • Task 3",
            icon: "fas fa-server",
            description:
                "REST API built using Node.js and Express.js for creating, reading, updating and deleting notes using JSON data storage.",
            tech: [
                "Node.js",
                "Express.js",
                "REST API",
                "JSON",
                "Postman"
            ],
            features: [
                "GET notes",
                "POST new note",
                "PUT update note",
                "DELETE note",
                "JSON data storage",
                "REST API architecture",
                "Postman API testing"
            ]
        },

        taskflow: {
            title: "TaskFlow To-Do App",
            type: "CodeOrbit Internship • Task 2",
            icon: "fas fa-list-check",
            description:
                "Interactive To-Do List web application designed to manage daily tasks with priority, due dates, categories, search, progress tracking and local storage.",
            tech: [
                "HTML",
                "CSS",
                "JavaScript",
                "LocalStorage",
                "Responsive UI"
            ],
            features: [
                "Add tasks",
                "Delete tasks",
                "Complete tasks",
                "Task search",
                "Priority management",
                "Due dates",
                "Task categories",
                "Progress tracking",
                "LocalStorage",
                "Responsive design"
            ]
        },

        contact: {
            title: "Python Contact Book",
            type: "Python Project",
            icon: "fas fa-address-book",
            description:
                "Command-line Python contact management application for storing and managing contact information.",
            tech: [
                "Python",
                "JSON",
                "File Handling"
            ],
            features: [
                "Add contacts",
                "Search contacts",
                "Update contacts",
                "Delete contacts",
                "JSON storage",
                "File handling"
            ]
        },

        todo: {
            title: "Python To-Do List",
            type: "Python Project",
            icon: "fas fa-list",
            description:
                "Command-line task manager created using Python for managing daily tasks and storing them using file handling.",
            tech: [
                "Python",
                "CLI",
                "File Handling"
            ],
            features: [
                "Add tasks",
                "View tasks",
                "Complete tasks",
                "Delete tasks",
                "File-based storage",
                "Command-line interface"
            ]
        },

        guessing: {
            title: "Number Guessing Game",
            type: "Python Project",
            icon: "fas fa-gamepad",
            description:
                "Interactive Python number guessing game using random numbers, validation, hints and attempt tracking.",
            tech: [
                "Python",
                "Random",
                "Validation"
            ],
            features: [
                "Random number generation",
                "User input validation",
                "Higher/lower hints",
                "Attempt tracking",
                "Interactive gameplay"
            ]
        },

        calculator: {
            title: "Python Calculator",
            type: "Python Project",
            icon: "fas fa-calculator",
            description:
                "Simple Python calculator supporting arithmetic operations with input validation and exception handling.",
            tech: [
                "Python",
                "Functions",
                "Exceptions"
            ],
            features: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
                "Input validation",
                "Exception handling"
            ]
        }
    };


    // =====================================================
    // PROJECT MODAL
    // =====================================================

    const projectModal = document.getElementById("projectModal");
    const modalOverlay = projectModal
        ? projectModal.querySelector(".modal-overlay")
        : null;

    const modalClose = document.getElementById("modalClose");
    const modalIcon = document.getElementById("modalIcon");
    const modalType = document.getElementById("modalType");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalTech = document.getElementById("modalTech");
    const modalFeatures = document.getElementById("modalFeatures");

    const detailButtons = document.querySelectorAll(".details-btn");


    function openProjectModal(projectId) {

        const project = projectData[projectId];

        if (!project || !projectModal) {
            return;
        }

        // Icon
        if (modalIcon) {
            modalIcon.innerHTML =
                `<i class="${project.icon}"></i>`;
        }

        // Type
        if (modalType) {
            modalType.textContent = project.type;
        }

        // Title
        if (modalTitle) {
            modalTitle.textContent = project.title;
        }

        // Description
        if (modalDescription) {
            modalDescription.textContent =
                project.description;
        }

        // Technologies
        if (modalTech) {

            modalTech.innerHTML = "";

            project.tech.forEach(technology => {

                const span = document.createElement("span");

                span.textContent = technology;

                modalTech.appendChild(span);

            });
        }

        // Features
        if (modalFeatures) {

            modalFeatures.innerHTML = "";

            project.features.forEach(feature => {

                const li = document.createElement("li");

                li.innerHTML =
                    `<i class="fas fa-check"></i> ${feature}`;

                modalFeatures.appendChild(li);

            });
        }

        // Open modal
        projectModal.classList.add("active");

        document.body.classList.add("modal-open");
    }


    function closeProjectModal() {

        if (!projectModal) {
            return;
        }

        projectModal.classList.remove("active");

        document.body.classList.remove("modal-open");
    }


    detailButtons.forEach(button => {

        button.addEventListener("click", () => {

            const projectId =
                button.dataset.project;

            openProjectModal(projectId);

        });

    });


    if (modalClose) {
        modalClose.addEventListener("click", closeProjectModal);
    }


    if (modalOverlay) {
        modalOverlay.addEventListener("click", closeProjectModal);
    }


    // Close modal with ESC key
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeProjectModal();
        }

    });


    // =====================================================
    // THEME TOGGLE
    // =====================================================

    const themeToggle = document.getElementById("themeToggle");

    function setThemeIcon() {

        if (!themeToggle) {
            return;
        }

        const icon = themeToggle.querySelector("i");

        if (!icon) {
            return;
        }

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );
        }
    }


    // Load saved theme
    const savedTheme =
        localStorage.getItem("nancyPortfolioTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    setThemeIcon();


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const currentTheme =
                document.body.classList.contains("dark")
                    ? "dark"
                    : "light";

            localStorage.setItem(
                "nancyPortfolioTheme",
                currentTheme
            );

            setThemeIcon();

        });

    }


    // =====================================================
    // CONTACT FORM
    // =====================================================

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.getElementById("name")?.value.trim();

            const email =
                document.getElementById("email")?.value.trim();

            const subject =
                document.getElementById("subject")?.value.trim();

            const message =
                document.getElementById("message")?.value.trim();


            if (!name || !email || !subject || !message) {

                if (formMessage) {
                    formMessage.textContent =
                        "Please fill in all fields.";

                    formMessage.classList.add("show");
                }

                return;
            }


            // Basic email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                if (formMessage) {
                    formMessage.textContent =
                        "Please enter a valid email address.";

                    formMessage.classList.add("show");
                }

                return;
            }


            /*
             * This portfolio form is frontend-only.
             * It does not send email to a server.
             * We create a mailto link so the visitor can
             * send the message through their email client.
             */

            const mailSubject =
                encodeURIComponent(subject);

            const mailBody =
                encodeURIComponent(
                    `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
                );


            const mailto =
                `mailto:nancypatel126@gmail.com?subject=${mailSubject}&body=${mailBody}`;


            if (formMessage) {

                formMessage.textContent =
                    "Your email app will open to send the message.";

                formMessage.classList.add("show");
            }


            window.location.href = mailto;

            contactForm.reset();

        });

    }


    // =====================================================
    // BACK TO TOP BUTTON
    // =====================================================

    const backToTop =
        document.getElementById("backToTop");


    function updateBackToTop() {

        if (!backToTop) {
            return;
        }

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }


    window.addEventListener(
        "scroll",
        updateBackToTop
    );

    updateBackToTop();


    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    const smoothLinks =
        document.querySelectorAll('a[href^="#"]');


    smoothLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId.length < 2
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header =
                document.querySelector(".header");

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight +
                1;


            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    // =====================================================
    // CURRENT YEAR
    // =====================================================

    const yearElement =
        document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    // =====================================================
    // PREVENT BODY SCROLL WHEN MODAL IS OPEN
    // =====================================================

    const observer =
        new MutationObserver(() => {

            if (
                projectModal &&
                projectModal.classList.contains("active")
            ) {

                document.body.classList.add("modal-open");

            } else {

                document.body.classList.remove("modal-open");

            }

        });


    if (projectModal) {

        observer.observe(projectModal, {
            attributes: true,
            attributeFilter: ["class"]
        });

    }


    // =====================================================
    // PAGE LOAD
    // =====================================================

    window.addEventListener("load", () => {

        document.body.classList.add("page-loaded");

    });


    // =====================================================
    // CONSOLE INFO
    // =====================================================

    console.log(
        "Nancy Patel Portfolio loaded successfully."
    );

});