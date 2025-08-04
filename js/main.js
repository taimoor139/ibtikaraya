
    // Initialize GSAP animations
    document.addEventListener('DOMContentLoaded', function () {
        // Animate elements on scroll
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.animate-on-scroll').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Pulse animation for buttons
        document.querySelectorAll('.pulse-hover').forEach(button => {
            button.addEventListener('mouseenter', function () {
                gsap.to(this, {
                    scale: 1.05,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
                });
            });
        });

        // Service card hover effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function () {
                gsap.to(this, {
                    y: -10,
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                    duration: 0.3
                });
            });

            card.addEventListener('mouseleave', function () {
                gsap.to(this, {
                    y: 0,
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                    duration: 0.3
                });
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Animate solution sections when they come into view
        const solutions = document.querySelectorAll('.solutions .row');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__fadeInUp');
                }
            });
        }, {threshold: 0.1});

        solutions.forEach(solution => {
            observer.observe(solution);
        });
    });