document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
