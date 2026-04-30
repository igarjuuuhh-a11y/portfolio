// Lenis Smooth Scroll Setup
if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

// Add hover state to cursor when hovering over links/buttons
const hoverElements = document.querySelectorAll('a, button, .btn, .portfolio-item');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('hover-state');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-state');
    });
});

// Navbar Scroll Effect
const header = document.querySelector('.header');
const parallaxElements = document.querySelectorAll('.portfolio-item, .about-visual, .hero-content');

window.addEventListener('scroll', () => {
    // Navbar
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Viewport-relative Parallax
    const windowHeight = window.innerHeight;
    parallaxElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Check if element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Calculate distance from center of viewport
            const centerOffset = (rect.top + rect.height / 2) - (windowHeight / 2);
            const speed = el.classList.contains('hero-content') ? 0.2 : 0.05;
            const yOffset = centerOffset * speed;
            
            if (!el.matches(':hover')) {
                el.style.transform = `translateY(${yOffset}px)`;
            }
        }
    });
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navList = document.querySelector('.nav-list');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Scroll Reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
    observer.observe(el);
});

// Typing Effect for Hero
const typedTextSpan = document.querySelector(".typed-text");
if (typedTextSpan) {
    const textArray = ["Video Editor", "Creative Director", "Engineering Student", "Storyteller"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        if(textArray.length) setTimeout(type, newTextDelay + 250);
    });
}

// Know More Button
const knowMoreBtn = document.getElementById('knowMoreBtn');
const knowMoreContent = document.getElementById('knowMoreContent');

if (knowMoreBtn && knowMoreContent) {
    knowMoreBtn.addEventListener('click', function() {
        if (knowMoreContent.style.display === 'none' || knowMoreContent.style.display === '') {
            knowMoreContent.style.display = 'block';
            this.innerHTML = '<i class="fas fa-chevron-up" style="margin-right: 10px;"></i> Show Less';
        } else {
            knowMoreContent.style.display = 'none';
            this.innerHTML = '<i class="fas fa-chevron-down" style="margin-right: 10px;"></i> Know More About Me';
        }
    });
}

// Show More Works Button
const showMoreWorksBtn = document.getElementById('showMoreWorksBtn');
if (showMoreWorksBtn) {
    showMoreWorksBtn.addEventListener('click', function() {
        const hiddenItems = document.querySelectorAll('.portfolio-item.hide');
        hiddenItems.forEach(item => {
            item.classList.remove('hide');
            // Re-observe for scroll reveal
            if (typeof observer !== 'undefined') {
                observer.observe(item);
            }
        });
        this.style.display = 'none'; // hide the button after revealing
    });
}

// tsParticles Initialization
if (typeof tsParticles !== 'undefined') {
    tsParticles.load("particles-js", {
        background: {
            color: { value: "transparent" }
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble"
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 150,
                    size: 6,
                    duration: 2,
                    opacity: 1
                }
            }
        },
        particles: {
            color: { value: ["#ffffff", "#ff0000", "#ff4d4d"] },
            links: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" }
            },
            number: {
                density: { enable: true, area: 800 },
                value: 200
            },
            opacity: {
                value: { min: 0.1, max: 0.8 },
                random: true,
                anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
            },
            shape: { type: "circle" },
            size: {
                value: { min: 0.5, max: 2.5 },
                random: true,
                anim: { enable: true, speed: 1, size_min: 0.1, sync: false }
            }
        },
        detectRetina: true
    });
}

// Video Modal Logic
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.querySelector('.close-modal');

if (videoModal && modalVideo && closeModal) {
    // We attach event using delegation to body to handle both initial and 'Show More' videos
    document.body.addEventListener('click', function(e) {
        const item = e.target.closest('.portfolio-item');
        if (item) {
            const videoElement = item.querySelector('video source');
            if (videoElement) {
                const videoSrc = videoElement.getAttribute('src');
                modalVideo.querySelector('source').setAttribute('src', videoSrc);
                modalVideo.load();
                videoModal.classList.add('show');
                modalVideo.play();
            }
        }
    });

    closeModal.addEventListener('click', () => {
        videoModal.classList.remove('show');
        modalVideo.pause();
        modalVideo.currentTime = 0;
    });

    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('show');
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
    });
}
