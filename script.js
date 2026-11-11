
/* ==============================
   EQUIPOS DEL CAMPEONATO
================================ */

const teams = [
    {
        name: "TEAM GLS",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
        next: "-",
        form: []
    },
    {
        name: "PARADISÍACO FC",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
        next: "-",
        form: []
    },
    {
        name: "INDEPENDIENTE",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
        next: "-",
        form: []
    },
    {
        name: "OLYMPIC",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
        next: "-",
        form: []
    },
    {
        name: "SUDAMERICANOS",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
        next: "-",
        form: []
    },
    {
        name: "FRANSISQUIÑOS",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
        next: "-",
        form: []
    },
    {
        name: "FC AMIGOS",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
        next: "-",
        form: []
    },
    {
        name: "CARNICERIA FC",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
        next: "-",
        form: []
    }
];


/* ==============================
   REFERENCIAS HTML
================================ */

const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");

const tabs = document.querySelectorAll(".tab");


/* ==============================
   COLUMNAS DE CADA VISTA
================================ */

const columns = {
    short: ["Pos", "Team", "Pl", "W", "GD", "Pts"],

    full: [
        "Pos", "Team", "Pl", "W",
        "D", "L", "GF", "GA", "GD", "Pts", "Next"
    ],

    form: ["Pos", "Team", "Form"]
};


/* ==============================
   GENERAR ENCABEZADO
================================ */

function renderHeader(mode) {

    tableHead.innerHTML = `
        <tr>
            ${columns[mode].map(column =>
                `<th>${column}</th>`
            ).join("")}
        </tr>
    `;
}


/* ==============================
   GENERAR FILAS
================================ */

function renderTeams(mode) {

    tableBody.innerHTML = "";

    teams.forEach((team, index) => {

        let row = document.createElement("tr");

        let position = index + 1;

        // Iniciales para identificar visualmente cada equipo
        let initials = team.name
            .split(" ")
            .map(word => word[0])
            .slice(0, 2)
            .join("");

        let teamCell = `
            <div class="team-cell">
                <div class="team-logo">${initials}</div>
                <span class="team-name">${team.name}</span>
            </div>
        `;

        let cells = "";

        // VISTA SHORT
        if (mode === "short") {

            cells = `
                <td>${position.toString().padStart(2, "0")}</td>
                <td>${teamCell}</td>
                <td>${team.played}</td>
                <td>${team.wins}</td>
                <td>${team.gd}</td>
                <td><strong>${team.points}</strong></td>
            `;
        }

        // VISTA FULL
        else if (mode === "full") {

            cells = `
                <td>${position.toString().padStart(2, "0")}</td>
                <td>${teamCell}</td>
                <td>${team.played}</td>
                <td>${team.wins}</td>
                <td>${team.draws}</td>
                <td>${team.losses}</td>
                <td>${team.gf}</td>
                <td>${team.ga}</td>
                <td>${team.gd}</td>
                <td><strong>${team.points}</strong></td>
                <td>${team.next}</td>
            `;
        }

        // VISTA FORM
        else if (mode === "form") {

            let formHTML = team.form.length
                ? team.form.map(result => `
                    <span class="form-badge form-${result}">
                        ${result}
                    </span>
                `).join("")
                : Array(5).fill(`
                    <span class="form-badge form-empty">-</span>
                `).join("");

            cells = `
                <td>${position.toString().padStart(2, "0")}</td>
                <td>${teamCell}</td>
                <td>
                    <div class="form-results">
                        ${formHTML}
                    </div>
                </td>
            `;
        }

        row.innerHTML = cells;

        tableBody.appendChild(row);
    });
}


/* ==============================
   CAMBIAR PESTAÑAS
================================ */

function changeTab(mode) {

    tabs.forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.tab === mode
        );

    });

    renderHeader(mode);
    renderTeams(mode);
}


/* ==============================
   EVENTOS DE LAS PESTAÑAS
================================ */

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const selectedTab = tab.dataset.tab;

        changeTab(selectedTab);

    });

});


/* ==============================
   MENÚ LATERAL
================================ */

const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {

    const isOpen = sidebar.classList.toggle("open");

    overlay.classList.toggle("show", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen);

}

menuButton.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);


/* ==============================
   INICIALIZAR SISTEMA
================================ */

changeTab("short");
