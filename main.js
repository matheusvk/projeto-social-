// Espera o HTML carregar antes de executar o código
document.addEventListener("DOMContentLoaded", function() {

    // Exemplo 1: Menu mobile toggle (se você tiver menu)
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if(menuBtn) {
        menuBtn.addEventListener("click", function() {
            nav.classList.toggle("ativo"); // ativa/desativa menu
        });
    }

    // Exemplo 2: Scroll suave para links internos
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

    // Exemplo 3: Alterar cabeçalho ao rolar a página
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if(window.scrollY > 50) {
            header.classList.add("scroll"); // você pode criar CSS para "scroll"
        } else {
            header.classList.remove("scroll");
        }
    });

});
