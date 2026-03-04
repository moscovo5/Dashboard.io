/* ================= MENU RESPONSIVO ================= */

const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

/* ================= ANO AUTOMÁTICO ================= */

document.getElementById("ano").textContent =
    new Date().getFullYear();

/* ================= PESQUISA ================= */

const searchInput = document.querySelector('.search-box input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function () {

    const termo = this.value.toLowerCase().trim();

    cards.forEach(card => {
        const texto = card.textContent.toLowerCase();

        card.style.display =
            texto.includes(termo) ? "block" : "none";
    });

});

/* ================= ATUALIZAÇÃO AUTOMÁTICA ================= */

function atualizarCards() {

    document.getElementById("usuarios").textContent =
        Math.floor(Math.random() * 500) + 100;

    document.getElementById("gestores").textContent =
        Math.floor(Math.random() * 100) + 20;

    document.getElementById("empresas").textContent =
        Math.floor(Math.random() * 100) + 20;

    document.getElementById("financas").textContent =
        (Math.random() * 100000).toFixed(2) + " kz";
}

setInterval(atualizarCards, 5000);
atualizarCards();
