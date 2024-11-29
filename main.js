document.addEventListener('DOMContentLoaded', function() {
    var type = new Typed(".text", {
        strings: ["Backend Developer", "Quality Assurance", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
// main.js

// Function to toggle the active class on navbar links
const toggleActiveClass = () => {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
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
        