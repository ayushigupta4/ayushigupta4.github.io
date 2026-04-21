document.addEventListener('DOMContentLoaded', function() {

    const tabs = document.querySelectorAll('.tab-link');

    tabs.forEach(function(tab) {

        tab.addEventListener('click', function() {

            tabs.forEach(function(t) {
                t.classList.remove('active-tab');
            });

            tab.classList.add('active-tab');
        });
    });

    /* const skillBars = document.querySelectorAll('.skill-bar-fill');

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
    observer.observe(skillsSection); */

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

    //Hero Section

    const phrases =  [
        'Full-Stack Developer',
        'Problem Solver',
        'Open Source Contributor',
        'Civil Services Prelims Qualifier'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterEl = document.getElementById('typewriter');

    function typewriter() {

        //console.log('charIndex:', charIndex, 'isDeleting:', isDeleting, 'phrase:', phraseIndex);
        const currentPhrase = phrases[phraseIndex];

        if(isDeleting) {
            typewriterEl.textContent = currentPhrase.slice(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterEl.textContent = currentPhrase.slice(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(function() {isDeleting = true;}, 1500);
        }

        if(isDeleting && charIndex === 0) {
            isDeleting = false;
            charIndex = 0;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        setTimeout(typewriter, isDeleting? 60:100);
    }

    typewriter();

    //tabs

    const sections = document.querySelectorAll('.tab-section');

    function switchTab(targetId) {
        //Update tabs
        tabs.forEach(function(tab) {
            tab.classList.remove('active-tab');
        });

        //Update sections
        sections.forEach(function(section) {
            section.classList.remove('active-section');
        });

        //Show or hide hero based on active tab
        const hero = document.getElementById('hero');
        if (targetId === 'about') {
            hero.classList.add('active-hero');
        } else {
            hero.classList.remove('active-hero');
        }

        //Activate clicked tab
        const clickedTab = document.querySelector(`.tab-link[href="#${targetId}"]`);
        if(clickedTab) clickedTab.classList.add('active-tab');

        const targetSection = document.getElementById(targetId);
        if(targetSection) targetSection.classList.add('active-section');
    }

    //Listen for tab clicks
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = tab.getAttribute('href').replace('#', '');
            switchTab(targetId);
        });
    });

    //Show first tab by default
    switchTab('about');

    function handleHeroBtn(event, targetId) {
        event.preventDefault();
        switchTab(targetId);
    }

    //Skill stars

    const starContainers = document.querySelectorAll('.stars');

    starContainers.forEach(function(container) {
        const rating = parseFloat(container.getAttribute('data-stars'));
        let starsHTML = '';

        for(let i = 1; i <= 5; i++) {
            if(i <= Math.floor(rating)) {
                starsHTML += '<span class="star full">★</span>';
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                starsHTML += '<span class="star half">★</span>';
            } else {
                starsHTML += '<span class="star empty">★</span>';
            }
        }

        container.innerHTML = starsHTML;
    });

});
