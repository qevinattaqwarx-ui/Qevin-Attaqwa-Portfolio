// =========================================================
// QEVIN ATTAQWA — PORTFOLIO
// Interactive Behaviors
// =========================================================


// =========================================================
// 01. SCROLL REVEAL
// =========================================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .timeline-item, .certification-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================================================
// 02. ACTIVE NAVIGATION
// =========================================================

const sections = document.querySelectorAll(
    "main section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav-links a"
);

const navObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach((section) => {

    navObserver.observe(section);

});