// =====================================
// 1. EQUIPOS DEL CAMPEONATO
// =====================================
//
// CÓMO ACTUALIZAR DESPUÉS DE CADA PARTIDO
// - played = partidos jugados
// - wins / draws / losses = ganados / empatados / perdidos
// - gf = goles a favor, ga = goles en contra
// - gd = gf - ga
// - points = 3 por victoria, 1 por empate
// - next = rival del próximo partido (o "-")
// - form = últimos resultados: "W" ganó, "D" empató, "L" perdió
//
// El orden de la tabla se calcula solo (puntos, diferencia de gol, goles a favor).

const teams = [

    // -------- FECHA 1 --------

    {
        name: "PARADISÍACO FC",
        played: 1,
        wins: 1,
        draws: 0,
        losses: 0,
        gf: 13,
        ga: 3,
        gd: 10,
        points: 3,
        next: "-",
        form: ["W"]
    },

    {
        name: "INDEPENDIENTE",
        played: 1,
        wins: 0,
        draws: 0,
        losses: 1,
        gf: 6,
        ga: 8,
        gd: -2,
        points: 0,
        next: "-",
        form: ["L"]
    },

    {
        name: "OLIMPYC",
        played: 1,
        wins: 0,
        draws: 0,
        losses: 1,
        gf: 3,
        ga: 13,
        gd: -10,
        points: 0,
        next: "-",
        form: ["L"]
    },

    {
        name: "SUDAMERICANOS",
        played: 1,
        wins: 1,
        draws: 0,
        losses: 0,
        gf: 8,
        ga: 3,
        gd: 5,
        points: 3,
        next: "-",
        form: ["W"]
    },

    {
        name: "FRANSISQUIÑOS",
        played: 1,
        wins: 1,
        draws: 0,
        losses: 0,
        gf: 8,
        ga: 6,
        gd: 2,
        points: 3,
        next: "-",
        form: ["W"]
    },

    {
        name: "FC AMIGOS",
        played: 1,
        wins: 0,
        draws: 0,
        losses: 1,
        gf: 3,
        ga: 8,
        gd: -5,
        points: 0,
        next: "-",
        form: ["L"]
    },

    // -------- AÚN NO JUEGAN --------

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
    },

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
    }

];


// =====================================
// ORDENAR LA TABLA AUTOMÁTICAMENTE
// =====================================

teams.sort((a, b) =>
    b.points - a.points ||
    b.gd - a.gd ||
    b.gf - a.gf ||
    a.name.localeCompare(b.name)
);


// =====================================
// REFERENCIAS HTML


const tableHead = document.getElementById("tableHead");

const tableBody = document.getElementById("tableBody");

const standingsTable = document.getElementById("standingsTable");

const tabs = document.querySelectorAll(".tab");


// =====================================
// 3. COLUMNAS DE CADA VISTA
// =====================================

const columns = {

    short: [
        "Pos.",
        "Team",
        "Pl",
        "W",
        "GD",
        "Pts."
    ],

    full: [
        "Pos.",
        "Team",
        "Pl",
        "W",
        "D",
        "L",
        "GF",
        "GA",
        "GD",
        "Pts.",
        "Next"
    ],

    form: [
        "Pos.",
        "Team",
        "Form"
    ]

};


// =====================================
// 4. GENERAR ENCABEZADO
// =====================================

function renderHeader(mode) {

    tableHead.innerHTML = `
        <tr>
            ${columns[mode].map(column => `
                <th>${column}</th>
            `).join("")}
        </tr>
    `;

}


// =====================================
// 5. OBTENER INICIALES
// =====================================

function getInitials(name) {

    return name
        .split(" ")
        .map(word => word[0])
        .slice(0, 2)
        .join("");

}


// =====================================
// 6. GENERAR CELDA DEL EQUIPO
// =====================================

function renderTeamCell(team) {

    const initials = getInitials(team.name);

    return `
        <div class="team-cell">

            <div class="team-logo">
                ${initials}
            </div>

            <span class="team-name">
                ${team.name}
            </span>

        </div>
    `;

}


// =====================================
// 7. GENERAR TABLA DE EQUIPOS
// =====================================

function renderTeams(mode) {

    tableBody.innerHTML = "";

    teams.forEach((team, index) => {

        const position = index + 1;

        const formattedPosition = String(position).padStart(2, "0");

        const teamCell = renderTeamCell(team);

        let cells = "";


        // =================================
        // SHORT
        // =================================

        if (mode === "short") {

            cells = `

                <td>${formattedPosition}</td>

                <td>${teamCell}</td>

                <td>${team.played}</td>

                <td>${team.wins}</td>

                <td>${team.gd}</td>

                <td>
                    <strong>${team.points}</strong>
                </td>

            `;

        }


        // =================================
        // FULL
        // =================================

        else if (mode === "full") {

            cells = `

                <td>${formattedPosition}</td>

                <td>${teamCell}</td>

                <td>${team.played}</td>

                <td>${team.wins}</td>

                <td>${team.draws}</td>

                <td>${team.losses}</td>

                <td>${team.gf}</td>

                <td>${team.ga}</td>

                <td>${team.gd}</td>

                <td>
                    <strong>${team.points}</strong>
                </td>

                <td>${team.next}</td>

            `;

        }


        // =================================
        // FORM
        // =================================

        else if (mode === "form") {

            const recentResults = team.form.slice(-5);

            let formHTML = "";

            if (recentResults.length > 0) {

                formHTML = recentResults.map(result => `

                    <span class="form-badge form-${result}">
                        ${result}
                    </span>

                `).join("");

            } else {

                formHTML = Array(5).fill(`

                    <span class="form-badge form-empty">
                        -
                    </span>

                `).join("");

            }


            cells = `

                <td>${formattedPosition}</td>

                <td>${teamCell}</td>

                <td>

                    <div class="form-results">
                        ${formHTML}
                    </div>

                </td>

            `;

        }


        // Crear fila

        const row = document.createElement("tr");

        row.innerHTML = cells;

        tableBody.appendChild(row);

    });

}


// =====================================
// 8. CAMBIAR ENTRE SHORT, FULL Y FORM
// =====================================

function changeTab(mode) {

    if (!columns[mode]) {
        return;
    }

    // Actualizar pestaña seleccionada

    tabs.forEach(tab => {

        const isActive = tab.dataset.tab === mode;

        tab.classList.toggle("active", isActive);

    });


    // Actualizar modo de la tabla

    standingsTable.dataset.mode = mode;


    // Actualizar encabezados y filas

    renderHeader(mode);

    renderTeams(mode);

}


// =====================================
// 9. EVENTOS DE LAS PESTAÑAS
// =====================================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const selectedMode = tab.dataset.tab;

        changeTab(selectedMode);

    });

});


// =====================================
// 10. MENÚ LATERAL
// =====================================

const menuButton = document.getElementById("menuButton");

const sidebar = document.getElementById("sidebar");

const overlay = document.getElementById("overlay");


function toggleMenu() {

    const isOpen = sidebar.classList.toggle("open");

    overlay.classList.toggle("show", isOpen);

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

}


// Abrir menú

menuButton.addEventListener("click", toggleMenu);


// Cerrar menú al tocar fuera

overlay.addEventListener("click", toggleMenu);


// =====================================
// 11. INICIALIZAR SISTEMA
// =====================================

changeTab("short");
