document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Menghapus kelas 'active' dari semua tautan
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });

        // Menambahkan kelas 'active' ke tautan yang diklik
        this.classList.add('active');

        // Scroll ke div yang dituju
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

