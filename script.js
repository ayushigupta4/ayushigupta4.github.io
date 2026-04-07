const tabs = document.querySelectorAll('.tab-link');

tabs.forEach(function(tab) {

    tab.addEventListener('click', function() {

        tabs.forEach(function(t) {
            t.classList.remove('active-tab');
        });

        tab.classList.add('active-tab');
    });
});

const skillBars = document.querySelectorAll('.skill-bar-fill');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {

        if(entry.isIntersecting) {

            skillBars.forEach(function(bar) {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth + '%';
            });
        }
    });
});

const skillsSection = document.querySelector('#skills');
observer.observe(skillsSection);

//Contact Form

const form = document.querySelector('.contact-form');
const button = form.querySelector('button');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if(name === '' || email === '' || message === '') {
        button.textContent = '⚠️ Please fill all fields';
        button.style.background = '#ea4335';
        setTimeout(function() {
            button.textContent = 'Send Message';
            button.style.background = '';
        }, 2500);
        return;
    }

    button.textContent = '✅ Message Sent!';
    button.style.background = '#34a853';
    setTimeout(function() {
        button.textContent = 'Send Message';
        button.style.background = '';
    }, 2500);
});