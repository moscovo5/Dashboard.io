document.addEventListener("DOMContentLoaded", function () {

    /* ---------------- MENU ---------------- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.getElementById('navbar');
    const btnalertas = document.querySelector(".btn-alertas");
    const menualerta = document.querySelector(".menu-alerta");

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            navbar.classList.toggle('click-menu');
        });

        navbar.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    if (btnalertas && menualerta) {
        btnalertas.addEventListener('click', function (e) {
            e.stopPropagation();
            menualerta.classList.toggle('click-alertmenu');
        });

        menualerta.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    document.addEventListener('click', function () {
        if (navbar) navbar.classList.remove('click-menu');
        if (menualerta) menualerta.classList.remove('click-alertmenu');
    });


    /* ---------------- ANO AUTOMÁTICO ---------------- */
    const anoEl = document.getElementById("ano");
    if (anoEl) {
        anoEl.textContent = new Date().getFullYear();
    }


    /* ---------------- PESQUISA ---------------- */
    const searchInput = document.querySelector('.search-box input');
    const searchBox = document.querySelector('.search-box');
    const header = document.querySelector('header');
    const btnSearch = document.querySelector('.btn-search');
    const cards = document.querySelectorAll('main .card');

    if (btnSearch) {
        btnSearch.addEventListener("click", () => {
            searchInput.classList.toggle("SearchBtnBox");
            header.classList.toggle("header-menu");
            searchBox.classList.toggle("SearchBtnBox");
        });
    }

    if (searchInput && cards.length > 0) {
        searchInput.addEventListener('input', function () {
            const termo = this.value.toLowerCase().trim();
            cards.forEach(card => {
                const texto = card.textContent.toLowerCase();
                card.style.display = texto.includes(termo) || termo === "" ? "block" : "none";
            });
        });
    }


    /* ---------------- ATUALIZAÇÃO AUTOMÁTICA DOS CARDS ---------------- */
    function atualizarCards() {
        const usuarios = document.getElementById("usuarios");
        const empresas = document.getElementById("empresas");
        const financas = document.getElementById("financas");
        const gestores = document.getElementById("gestores");

        if (usuarios) usuarios.textContent = Math.floor(Math.random() * 500) + 100;
        if (empresas) empresas.textContent = Math.floor(Math.random() * 100) + 20;
        if (financas) financas.textContent = (Math.random() * 100000).toFixed(2) + " kz";
        if (gestores) gestores.textContent = Math.floor(Math.random() * 100) + 20;
    }

    atualizarCards();
    setInterval(atualizarCards, 5000);


    /* ---------------- ALERTAS ---------------- */
    const alertas = [
        { empresa: "Empresa A", tipo: "Financeiro", mensagem: "Pagamento atrasado" },
        { empresa: "Empresa B", tipo: "RH", mensagem: "Nova contratação" },
        { empresa: "Empresa C", tipo: "TI", mensagem: "Sistema em manutenção" },
        { empresa: "Empresa D", tipo: "Logística", mensagem: "Entrega atrasada" },
        { empresa: "Empresa E", tipo: "Marketing", mensagem: "Campanha lançada" }
    ];

    const container = document.querySelector('.alertas-grid');
    if (container) {
        container.innerHTML = '';
        alertas.forEach(alerta => {
            const div = document.createElement('div');
            div.classList.add('alerta-item');
            div.innerHTML = `
                <h4>${alerta.empresa}</h4>
                <p><strong>${alerta.tipo}:</strong> ${alerta.mensagem}</p>
            `;
            container.appendChild(div);
        });
    }


    /* ---------------- CORES DINÂMICAS PARA CARDS ---------------- */
    const cardElements = document.querySelectorAll('.cards .card');
    const colors = ['#6bc1ff', '#ff6b6b', '#6bff9e', '#ffd36b'];

    cardElements.forEach((card, index) => {
        card.style.backgroundColor = colors[index % colors.length];
        card.style.color = '#fff';
        const icon = card.querySelector('i');
        if (icon) icon.style.color = 'rgba(255,255,255,0.2)';
    });

});
