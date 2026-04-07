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