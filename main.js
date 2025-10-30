
document.addEventListener("DOMContentLoaded", function() {

   
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if(menuBtn) {
        menuBtn.addEventListener("click", function() {
            nav.classList.toggle("ativo"); // ativa/desativa menu
        });
    }

    
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if(target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if(window.scrollY > 50) {
            header.classList.add("scroll"); 
        } else {
            header.classList.remove("scroll");
        }
    });

});
