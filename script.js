// =====================================
// EQUIPOS DEL CAMPEONATO TEAM GLS
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
// =====================================

const tableHead = document.getElementById("tableHead");

const tableBody = document.getElementById("tableBody");

const standingsTable = document.getElementById("standingsTable");

const tabs = document.querySelectorAll(".tab");


// =====================================
// COLUMNAS DE CADA VISTA
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
// GENERAR ENCABEZADO
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
// GENERAR IDENTIFICADOR DEL EQUIPO
// =====================================

function getInitials(name) {

    return name
        .split(" ")
        .map(word => word[0])
        .slice(0, 2)
        .join("");

}


// =====================================
// GENERAR CELDA DEL EQUIPO
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
// GENERAR FILAS DE LA TABLA
// =====================================

function renderTeams(mode) {

    tableBody.innerHTML = "";

    teams.forEach((team, index) => {

        const position = index + 1;

        const formattedPosition = position
            .toString()
            .padStart(2, "0");

        const teamCell = renderTeamCell(team);

        let cells = "";


        // ---------------------------------
        // VISTA SHORT
        // ---------------------------------

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


        // ---------------------------------
        // VISTA FULL
        // ---------------------------------

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


        // ---------------------------------
        // VISTA FORM
        // ---------------------------------

        else if (mode === "form") {

            const formHTML = team.form.length > 0

                ? team.form.slice(-5).map(result => `

                    <span class="form-badge form-${result}">
                        ${result}
                    </span>

                `).join("")

                : Array(5).fill(`

                    <span class="form-badge form-empty">
                        -
                    </span>

                `).join("");


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


        const row = document.createElement("tr");

        row.innerHTML = cells;

        tableBody.appendChild(row);

    });

}


// =====================================
// CAMBIAR PESTAÑA
// =====================================

function changeTab(mode) {

    // Actualizar botón activo

    tabs.forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.tab === mode
        );

    });


    // Identificar vista actual para el CSS

    standingsTable.dataset.mode = mode;


    // Actualizar tabla

    renderHeader(mode);

    renderTeams(mode);

}


// =====================================
// EVENTOS DE LAS PESTAÑAS
// =====================================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const selectedTab = tab.dataset.tab;

        changeTab(selectedTab);

    });

});


// =====================================
// MENÚ LATERAL
// =====================================

const menuButton = document.getElementById("menuButton");

const sidebar = document.getElementById("sidebar");

const overlay = document.getElementById("overlay");


function toggleMenu() {

    const isOpen = sidebar.classList.toggle("open");

    overlay.classList.toggle("show", isOpen);

    menuButton.setAttribute(
        "aria-expanded",
        isOpen.toString()
    );

}


// Abrir y cerrar menú

menuButton.addEventListener("click", toggleMenu);


// Cerrar al presionar fuera

overlay.addEventListener("click", toggleMenu);


// =====================================
// INICIALIZAR SISTEMA
// =====================================

changeTab("short");
