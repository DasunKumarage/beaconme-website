/* main.js for BeaconMe */

document.addEventListener('DOMContentLoaded', () => {
    // Clock
    const clockEl = document.getElementById('nav-clock');
    if (clockEl) {
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            const mins = now.getMinutes().toString().padStart(2, '0');
            clockEl.textContent = `${hours}:${mins} ${ampm} LK`;
        };
        updateClock();
        setInterval(updateClock, 60000);
    }

    // Lightbox
    window.openLightbox = function(src) {
        const lb = document.getElementById('image-lightbox');
        const img = document.getElementById('lightbox-img');
        if (lb && img) {
            img.src = src;
            lb.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
    window.closeLightbox = function() {
        const lb = document.getElementById('image-lightbox');
        if (lb) {
            lb.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Close lightbox on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.closeLightbox();
        }
    });

    // Scroll Observer for data-rev (with prefers-reduced-motion support)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revElements = document.querySelectorAll('[data-rev]');

    if (prefersReducedMotion) {
        revElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = parseInt(el.getAttribute('data-rev'), 10) || 0;
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, delay);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1 });

        revElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)';
            observer.observe(el);
        });
    }

    // --- Idle Auto-Hide Navigation (Throttled for Performance) ---
    let idleTimer;
    let lastActivityTime = 0;

    const resetIdleTimer = () => {
        const now = Date.now();
        // Throttle rapid triggers (e.g. mousemove/scroll) to at most once per 120ms
        if (now - lastActivityTime < 120) return;
        lastActivityTime = now;

        document.body.classList.remove('idle');
        clearTimeout(idleTimer);
        
        // Disable auto-hide entirely on mobile/tablet to ensure clear viewing
        if (window.innerWidth <= 768) return;

        // Hide navigation bars after 2 seconds of inactivity
        idleTimer = setTimeout(() => {
            document.body.classList.add('idle');
        }, 2000);
    };

    // Listen for user activity using passive event listeners
    const passiveOpts = { passive: true };
    window.addEventListener('mousemove', resetIdleTimer, passiveOpts);
    window.addEventListener('mousedown', resetIdleTimer, passiveOpts);
    window.addEventListener('scroll', resetIdleTimer, passiveOpts);
    window.addEventListener('keydown', resetIdleTimer, passiveOpts);
    window.addEventListener('touchstart', resetIdleTimer, passiveOpts);
    window.addEventListener('touchmove', resetIdleTimer, passiveOpts);

    // Initialize timer
    resetIdleTimer();
});
