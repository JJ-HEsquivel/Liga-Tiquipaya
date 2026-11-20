
// =====================================
// 1. EQUIPOS DEL CAMPEONATO
// =====================================

const roster = [
    "TEAM GLS",
    "PARADISÍACO FC",
    "INDEPENDIENTE",
    "OLYMPIC",
    "SUDAMERICANOS",
    "FRANSISQUIÑOS",
    "FC AMIGOS",
    "CARNICERIA FC"
];

const teamCrests = {
    "TEAM GLS": "assets/team-gls.png",
    "SUDAMERICANOS": "assets/sudamericanos.png"
};

const matches = {
    "f1-fransisquinos-independiente": {
        round: 1,
        kickoff: "2026-11-11T19:20:00-04:00",
        home: "FRANSISQUIÑOS",
        away: "INDEPENDIENTE",
        score: [8, 6],
        status: "finished"
    },
    "f1-amigos-sudamericanos": {
        round: 1,
        kickoff: "2026-11-11T20:20:00-04:00",
        home: "FC AMIGOS",
        away: "SUDAMERICANOS",
        score: [3, 8],
        status: "finished"
    },
    "f1-paradisiaco-olympic": {
        round: 1,
        kickoff: "2026-11-11T21:20:00-04:00",
        home: "PARADISÍACO FC",
        away: "OLYMPIC",
        score: [13, 3],
        status: "finished"
    },
    "2026-11-12-FRA-SUD": {
        round: 2,
        date: "2026-11-12",
        home: "FRANSISQUIÑOS",
        away: "SUDAMERICANOS",
        score: [12, 4],
        status: "finished"
    },
    "2026-11-12-OLY-FCA": {
        round: 2,
        date: "2026-11-12",
        home: "OLYMPIC",
        away: "FC AMIGOS",
        score: [4, 10],
        status: "finished"
    },
    "2026-11-12-CAR-GLS": {
        round: 2,
        date: "2026-11-12",
        home: "CARNICERIA FC",
        away: "TEAM GLS",
        score: [6, 8],
        status: "finished"
    }
};

const finishedMatches = Object.values(matches)
    .filter(match => match.status === "finished")
    .sort((first, second) =>
        matchDate(first).localeCompare(matchDate(second)) ||
        (first.kickoff ?? "").localeCompare(second.kickoff ?? "")
    );

function matchDate(match) {
    return match.date ?? match.kickoff.slice(0, 10);
}

const standings = new Map(roster.map(name => [name, {
    name,
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
}]));

function recordResult(team, goalsFor, goalsAgainst) {
    team.played++;
    team.gf += goalsFor;
    team.ga += goalsAgainst;
    team.gd = team.gf - team.ga;

    if (goalsFor > goalsAgainst) {
        team.wins++;
        team.points += 3;
        team.form.push("W");
    } else if (goalsFor === goalsAgainst) {
        team.draws++;
        team.points++;
        team.form.push("D");
    } else {
        team.losses++;
        team.form.push("L");
    }
}

for (const { home, away, score: [homeGoals, awayGoals] } of finishedMatches) {
    recordResult(standings.get(home), homeGoals, awayGoals);
    recordResult(standings.get(away), awayGoals, homeGoals);
}

const teams = [...standings.values()].sort((first, second) =>
    second.points - first.points || second.gd - first.gd || second.gf - first.gf
);

function renderResults() {
    const results = document.getElementById("results");
    const rounds = new Map();

    for (const match of finishedMatches) {
        if (!rounds.has(match.round)) {
            rounds.set(match.round, []);
        }
        rounds.get(match.round).push(match);
    }

    const dateLabel = date => date.split("-").reverse().join("/");

    results.innerHTML = `
        <h2 class="results-phase">Ronda de ida</h2>
        ${Array.from(rounds, ([round, games]) => {
            const dates = [...new Set(games.map(matchDate))];
            const dateRange = dates.length === 1
                ? dateLabel(dates[0])
                : dateLabel(dates[0]) + " – " + dateLabel(dates[dates.length - 1]);

            return `
                <section class="results-round">
                    <header class="round-heading">
                        <h3>Fecha ${round}</h3>
                        <p>${dateRange}</p>
                    </header>
                    <ul class="round-matches">
                        ${games.map(({ kickoff, home, away, score }) => `
                            <li class="result-match">
                                <div class="result-team result-home">
                                    <span>${home}</span>
                                    ${renderTeamLogo(home)}
                                </div>
                                <div class="result-score">
                                    <strong>${score.join("–")}</strong>
                                    ${kickoff ? `<time datetime="${kickoff}">${kickoff.slice(11, 16)}</time>` : ""}
                                </div>
                                <div class="result-team result-away">
                                    ${renderTeamLogo(away)}
                                    <span>${away}</span>
                                </div>
                            </li>
                        `).join("")}
                    </ul>
                </section>
            `;
        }).join("")}
    `;
}


// =====================================
// 2. REFERENCIAS HTML
// =====================================

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

function renderTeamLogo(name) {
    const crest = teamCrests[name];
    return crest
        ? `<img class="team-logo team-crest" src="${crest}" alt="" decoding="async">`
        : `<div class="team-logo">${getInitials(name)}</div>`;
}

function renderTeamCell(team) {

    return `
        <div class="team-cell">

            ${renderTeamLogo(team.name)}

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
const viewLinks = sidebar.querySelectorAll('a[href="#standings"], a[href="#results"]');
const standingsView = document.getElementById("standings");
const resultsView = document.getElementById("results");
const viewTitle = document.getElementById("viewTitle");

function showView() {
    const showingResults = window.location.hash === "#results";
    standingsView.hidden = showingResults;
    resultsView.hidden = !showingResults;
    viewTitle.textContent = showingResults ? "Resultados" : "Tabla";

    for (const link of viewLinks) {
        const selected = link.hash === (showingResults ? "#results" : "#standings");
        link.classList.toggle("active", selected);
        if (selected) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    }
}

for (const link of viewLinks) {
    link.addEventListener("click", () => {
        if (sidebar.classList.contains("open")) {
            toggleMenu();
        }
    });
}

window.addEventListener("hashchange", showView);


// =====================================
// 11. INICIALIZAR SISTEMA
// =====================================

changeTab("short");
renderResults();
showView();
