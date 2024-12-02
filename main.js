document.addEventListener('DOMContentLoaded', function() {
    var type = new Typed(".text", {
        strings: ["Backend Developer", "Quality Assurance", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
function showDevelopmentMessage() {
    const isConfirmed = confirm("Maaf, fitur ini masih dalam pengembangan. Apakah Anda ingin kembali?");
    if (isConfirmed) {
        console.log("User memilih untuk kembali.");
    } else {
        console.log("User memilih untuk tetap di halaman.");
    }
}

// main.js

// Function to toggle the active class on navbar links
const toggleActiveClass = () => {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(item => item.classList.remove('active'));
            link.cla// Menambahkan event listener saat DOM telah dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Typed.js untuk efek teks ketik otomatis
    var type = new Typed(".text", {
        strings: ["Backend Developer", "Quality Assurance", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Smooth scroll untuk navigasi
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(navbarLink => {
        navbarLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = navbarLink.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 50;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Ambil elemen tombol "More About" di section home
    const moreAboutButton = document.querySelector(".btn-box");

    // Tambahkan event listener untuk klik
    moreAboutButton.addEventListener("click", function(event) {
        // Mencegah perilaku default dari tautan
        event.preventDefault();
    
        // Gulir ke elemen dengan ID "about"
        document.getElementById("about").scrollIntoView({
            behavior: "smooth" // Menambahkan efek gulir yang halus
        });
    });
    


    // Aktifkan link navbar
    const toggleActiveClass = () => {
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(item => item.classList.remove('active'));
                link.classList.add('active');
            });
        });
    };
    toggleActiveClass();

    // Tombol sosial media dengan link
    document.getElementById("waLink").addEventListener("click", function() {
        window.open("https://wa.me/6285867287565", "_blank");
    });
  


    document.getElementById("linkedinLink").addEventListener("click", function() {
        window.open("https://www.linkedin.com/in/samsul-dwi-cahyo-67965b1b2/", "_blank");
    });

    document.getElementById("githubLink").addEventListener("click", function() {
        window.open("https://github.com/samsuldwicahyo", "_blank");
    });

    document.getElementById("instagramLink").addEventListener("click", function() {
        window.open("https://www.instagram.com/samsuldwicahyo", "_blank");
    });

    // Efek portfolio hover
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.overlay').style.opacity = '1';
        });
        item.addEventListener('mouseout', () => {
            item.querySelector('.overlay').style.opacity = '0';
        });
    });

    // Form kontak
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Terima kasih! Pesan Anda telah terkirim.');
        contactForm.reset();
    });
});
ssList.add('active');
        });
    });
};

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    toggleActiveClass();
});
//link wa

    document.getElementById("waLink").addEventListener("click", function() {
        window.location.href = "https://wa.me/6285867287565";
    });

    document.getElementById("linkedinLink").addEventListener("click", function() {
        window.location.href = "https://www.linkedin.com/in/samsul-dwi-cahyo-67965b1b2/";
    });

    document.getElementById("githubLink").addEventListener("click", function() {
        window.location.href = "https://github.com/samsuldwicahyo";
    });

    document.getElementById("instagramLink").addEventListener("click", function() {
        window.location.href = "https://www.instagram.com/samsuldwicahyo";})

        //slide navbar
        document.addEventListener("DOMContentLoaded", function() {
            const navbarLinks = document.querySelectorAll('.navbar a');
        
            navbarLinks.forEach(navbarLink => {
                navbarLink.addEventListener('click', function(event) {
                    event.preventDefault();
        
                    const targetId = navbarLink.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
        
                    if (targetElement) {
                        const targetPosition = targetElement.offsetTop - 50;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
        