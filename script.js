// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Reveal sections as they scroll into view
const revealed = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    revealed.forEach(el => io.observe(el));
} else {
    revealed.forEach(el => el.classList.add('in'));
}

// Highlight the nav link of the section on screen
const sections = [...document.querySelectorAll('header[id], section[id]')];
const links = document.querySelectorAll('.nav-links a[href^="#"]');
if (sections.length && links.length) {
    const spy = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
