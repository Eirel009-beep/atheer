// MOBILE MENU

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {

    const isOpen = nav.classList.toggle('open');

    menuButton.setAttribute(
        'aria-expanded',
        String(isOpen)
    );

    menuButton.textContent = isOpen ? '×' : '☰';

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll('.nav a').forEach(link => {

    link.addEventListener('click', () => {

        nav.classList.remove('open');

        menuButton.setAttribute(
            'aria-expanded',
            'false'
        );

        menuButton.textContent = '☰';

    });

});


// SCROLL REVEAL ANIMATION

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


// APPLY ANIMATION TO ALL ELEMENTS

document.querySelectorAll('.reveal').forEach(item => {

    revealObserver.observe(item);

});