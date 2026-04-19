// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button, .portfolio-item');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    // Smooth delay for follower
    setTimeout(() => {
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, 50);
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        document.body.classList.add('hover-state');
    });
    link.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-state');
    });
});

// Dynamic Typing Effect
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Videographer", "Video Editor", "Engineering Student", "Creative Problem Solver"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (!typedTextSpan) return;
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (!typedTextSpan) return;
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

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Scroll Animations using IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-up, .fade-in');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => {
    observer.observe(el);
});

// Sticky Header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.classList.remove('hide');
            } else {
                if (item.classList.contains(filterValue)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            }
        });
    });
});

// Dynamic Video Trimming (Loop 8 seconds early)
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    heroVideo.addEventListener('timeupdate', function () {
        // If the video has metadata loaded and is within 8 seconds of the end, loop it
        if (this.duration && this.currentTime >= this.duration - 8) {
            this.currentTime = 0;
            this.play();
        }
    });
}

// tsParticles Interactive Galaxy
tsParticles.load("particles-js", {
    background: { color: { value: "transparent" } },
    particles: {
        number: { value: 200, density: { enable: true, value_area: 800 } },
        color: { value: ["#ffffff", "#ff0000", "#cc0000"] }, // White and Theme Red stars
        shape: { type: "circle" },
        opacity: { value: { min: 0.1, max: 0.8 }, animation: { enable: true, speed: 1, sync: false } },
        size: { value: { min: 1, max: 2.5 }, animation: { enable: true, speed: 2, sync: false } },
        links: { enable: false },
        move: { enable: true, speed: 0.8, direction: "none", random: true, outModes: "out" }
    },
    interactivity: {
        detectsOn: "window",
        events: {
            onHover: {
                enable: true,
                mode: ["repel", "bubble"], // Stars repel away from cursor and bubble up
                parallax: { enable: true, force: 60, smooth: 10 } // True galaxy parallax effect
            }
        },
        modes: {
            repel: { distance: 100, duration: 0.3 },
            bubble: { distance: 150, size: 4, duration: 0.3 }
        }
    },
    detectRetina: true
});

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navList = document.querySelector('.nav-list');
if (mobileToggle && navList) {
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

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Video Lightbox Modal Logic
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.close-modal');
const watchBtns = document.querySelectorAll('.watch-btn');

if (modal && modalVideo) {
    watchBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const videoSrc = btn.getAttribute('data-video');
            if (videoSrc) {
                modalVideo.src = videoSrc;
                modal.classList.add('show');
                modalVideo.play();

                // Hide cursor follower inside player overlay for better viewing
                document.body.style.cursor = 'default';
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('show');
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = ""; // Clear src to stop continued background downloading
        document.body.style.cursor = 'none'; // Restore custom cursor
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close clicking out on dark rim
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on ESC keypress
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Show More Posters Logic
const showMorePostersBtn = document.getElementById('showMorePostersBtn');
if (showMorePostersBtn) {
    showMorePostersBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const hiddenPosters = document.querySelectorAll('.posters-grid .poster-item.hide');

        if (hiddenPosters.length > 0) {
            // Show them by removing the hide class
            hiddenPosters.forEach(poster => {
                poster.classList.remove('hide');
                // Optional small animation effect when showing
                poster.style.opacity = '0';
                setTimeout(() => {
                    poster.style.transition = 'opacity 0.6s ease';
                    poster.style.opacity = '1';
                }, 10);
            });
            // Update button text to 'Show Less'
            this.innerHTML = '<i class="fas fa-minus" style="margin-right: 10px;"></i> Show Less';
        } else {
            // Re-hide posters 5 to end
            const allPosters = document.querySelectorAll('.posters-grid .poster-item');
            allPosters.forEach((poster, index) => {
                if (index >= 4) {
                    poster.classList.add('hide');
                    poster.style.opacity = '';
                    poster.style.transition = '';
                }
            });
            // Update button text to 'Show More Posters'
            this.innerHTML = '<i class="fas fa-plus" style="margin-right: 10px;"></i> Show More Posters';

            // Scroll back up to the posters section softly
            document.getElementById('posters').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Show More Certificates Logic
const showMoreCertsBtn = document.getElementById('showMoreCertsBtn');
if (showMoreCertsBtn) {
    showMoreCertsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const hiddenCerts = document.querySelectorAll('.cert-grid .cert-item-grid.hide');

        if (hiddenCerts.length > 0) {
            // Show them by removing the hide class
            hiddenCerts.forEach(cert => {
                cert.classList.remove('hide');
                // Optional small animation effect when showing
                cert.style.opacity = '0';
                setTimeout(() => {
                    cert.style.transition = 'opacity 0.6s ease';
                    cert.style.opacity = '1';
                }, 10);
            });
            // Update button text to 'Show Less'
            this.innerHTML = '<i class="fas fa-minus" style="margin-right: 10px;"></i> Show Less';
        } else {
            // Re-hide certs 7 to end
            const allCerts = document.querySelectorAll('.cert-grid .cert-item-grid');
            allCerts.forEach((cert, index) => {
                if (index >= 6) {
                    cert.classList.add('hide');
                    cert.style.opacity = '';
                    cert.style.transition = '';
                }
            });
            // Update button text to 'Show More Certificates'
            this.innerHTML = '<i class="fas fa-plus" style="margin-right: 10px;"></i> Show More Certificates';

            // Scroll back up to the certificates section softly
            document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Know More About Me Toggle Logic
const knowMoreBtn = document.getElementById('knowMoreBtn');
const knowMoreContent = document.getElementById('knowMoreContent');
if (knowMoreBtn && knowMoreContent) {
    knowMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (knowMoreContent.style.display === 'none') {
            knowMoreContent.style.display = 'block';
            knowMoreContent.style.opacity = '0';
            setTimeout(() => {
                knowMoreContent.style.transition = 'opacity 0.8s ease';
                knowMoreContent.style.opacity = '1';
            }, 10);
            this.innerHTML = '<i class="fas fa-chevron-up" style="margin-right: 10px;"></i> Show Less';
        } else {
            knowMoreContent.style.display = 'none';
            this.innerHTML = '<i class="fas fa-chevron-down" style="margin-right: 10px;"></i> Know More About Me';
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }
    });
}
// ================= EMAILJS CONTACT FORM =================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_8dygcks",   // 🔴 replace with your Service ID
            "template_d9barsv",  // 🔴 replace with your Template ID
            this
        )
            .then(function () {
                alert("✅ Message sent successfully!");
                contactForm.reset(); // clear form after sending
            })
            .catch(function (error) {
                console.error("EmailJS Error:", error);
                alert("❌ Failed to send message. Check console.");
            });
    });
}