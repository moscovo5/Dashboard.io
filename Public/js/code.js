/* MENU */
const menu = document.querySelector('.menu-toggle');
const navbar = document.getElementById('navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('click-menu');
});

/* PESQUISA */
const searchInput = document.querySelector('.search-box input');
const cards = document.querySelectorAll('main .card');

searchInput.addEventListener('input', function () {

    const termo = this.value.toLowerCase().trim();

    cards.forEach(card => {

        const texto = card.textContent.toLowerCase();

        if (termo === "") {
            card.style.display = "block";
            return;
        }

        if (texto.includes(termo)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
/* ANO AUTOMÁTICO */
document.getElementById("ano").textContent =
    new Date().getFullYear();

    /* ================= ATUALIZAÇÃO AUTOMÁTICA DOS CARDS ================= */

function atualizarCards() {

    const usuarios = document.getElementById("usuarios");
    const empresas = document.getElementById("empresas");
    const financas = document.getElementById("financas");
    const gestores=document.getElementById("gestores");
    
    // Gerar valores aleatórios (simulação)
    usuarios.textContent = Math.floor(Math.random() * 500) + 100;
    empresas.textContent = Math.floor(Math.random() * 100) + 20;
    financas.textContent = (Math.random() * 100000).toFixed(2);
        gestores.textContent = Math.floor(Math.random() * 100) + 20;


}

// Atualiza a cada 5 segundos
setInterval(atualizarCards, 5000);

// Executa uma vez ao carregar
atualizarCards();