
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
    "SUDAMERICANOS": "assets/sudamericanos.png",
    "PARADISÍACO FC": "assets/paradisiaco.png",
    "INDEPENDIENTE": "assets/independiente.png",
    "OLYMPIC": "assets/olympic.png",
    "FRANSISQUIÑOS": "assets/fransisquinos.png",
    "FC AMIGOS": "assets/fc-amigos.png",
    "CARNICERIA FC": "assets/carniceria.png"
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
    },
    "2026-11-17-1920-OLY-CAR": {
        round: 3,
        kickoff: "2026-11-17T19:20:00-04:00",
        home: "OLYMPIC",
        away: "CARNICERIA FC",
        score: [2, 6],
        status: "finished",
        players: {
            "matias-pereyra": { name: "Matías Pereyra", team: "OLYMPIC", shirt: 13, goals: 2 },
            "alan-pierola": { name: "Alan Piérola", team: "CARNICERIA FC", shirt: 11, goals: 1 },
            "nicolas-rodriguez": { name: "Nicolás Rodríguez", team: "CARNICERIA FC", shirt: 7, goals: 1 },
            "erick-rojas": { name: "Erick Rojas", team: "CARNICERIA FC", shirt: 66, goals: 2 },
            "ronaldo-aviles": { name: "Ronaldo Avilés", team: "CARNICERIA FC", shirt: 10, goals: 1 },
            "pablo-triana": { name: "Pablo Triana", team: "CARNICERIA FC", shirt: 8, goals: 1 },
            "raul-ortiz": { name: "Raúl Ortiz", team: "CARNICERIA FC", shirt: 8 }
        }
    },
    "2026-11-17-2020-FCA-GLS": {
        round: 3,
        kickoff: "2026-11-17T20:20:00-04:00",
        home: "FC AMIGOS",
        away: "TEAM GLS",
        score: [3, 10],
        status: "finished",
        players: {
            "rodrigo-melgarejo": { name: "Rodrigo Melgarejo", team: "FC AMIGOS", shirt: 9, goals: 1 },
            "jorge-calancho": {
                name: "Jorge Calancho", team: "FC AMIGOS", shirt: 3, goals: 1,
                redCards: 1, yellowCards: 0, redCardReason: "doble amonestación"
            },
            "jose-andrade": {
                name: "José Andrade", team: "FC AMIGOS", shirt: 6, goals: 1,
                redCards: 1, yellowCards: 0, redCardReason: "doble amonestación"
            },
            "grover-felipe": { name: "Grover Felipe", team: "TEAM GLS", shirt: 19, goals: 1 },
            "gonzalo-lozano": { name: "Gonzalo Lozano", team: "TEAM GLS", shirt: 33, goals: 1 },
            "fabricio-mariaca": { name: "Fabricio Mariaca", team: "TEAM GLS", shirt: 20, goals: 4 },
            "guillermo-castanon": { name: "Guillermo Castañón", team: "TEAM GLS", shirt: 13, goals: 3 },
            "cristian-bautista": { name: "Cristian Bautista", team: "TEAM GLS", shirt: 11, goals: 1 },
            "romario-torres": { name: "Romario Torres", team: "TEAM GLS", shirt: 8, yellowCards: 1 }
        }
    },
    "2026-11-17-PAR-IND-WO": {
        round: 3,
        date: "2026-11-17",
        home: "PARADISÍACO FC",
        away: "INDEPENDIENTE",
        status: "walkover",
        walkoverTeam: "INDEPENDIENTE"
    }
};

Object.assign(matches, {
    "2026-11-18-1920-SUD-GLS": {
        round: 4,
        kickoff: "2026-11-18T19:20:00-04:00",
        home: "SUDAMERICANOS",
        away: "TEAM GLS",
        score: [7, 3],
        status: "finished",
        players: {
            "juan-jose-huanca": { name: "Juan José Huanca", team: "SUDAMERICANOS", goals: 2 },
            "daner-flores": { name: "Daner Flores", team: "SUDAMERICANOS", goals: 1 },
            "miguel-salgado": { name: "Miguel Salgado", team: "SUDAMERICANOS", goals: 3 },
            "jose-manuel-ramos": { name: "José Manuel Ramos", team: "SUDAMERICANOS", goals: 1 },
            "danner-garcia": { name: "Danner García", team: "TEAM GLS", goals: 3, yellowCards: 1 },
            "cristian-bautista": { name: "Cristian Bautista", team: "TEAM GLS", goals: 0 }
        },
        fines: {
            "SUDAMERICANOS": {  },
            "TEAM GLS": { cintillo: 10, balon: 15, firma: 10, amarillas: 5 }
        }
    },
    "2026-11-18-2020-PAR-FRA": {
        round: 4,
        kickoff: "2026-11-18T20:20:00-04:00",
        home: "PARADISÍACO FC",
        away: "FRANSISQUIÑOS",
        score: [3, 5],
        status: "finished",
        players: {
            "luis-liriaga": { name: "Luis Liriaga", team: "PARADISÍACO FC", goals: 3 },
            "ignacio-pasquido": { name: "Ignacio Pasquido", team: "FRANSISQUIÑOS", goals: 3 },
            "hugo-carvajal": { name: "Hugo Carvajal", team: "FRANSISQUIÑOS", goals: 2 }
        },
        fines: {
            "PARADISÍACO FC": { firma: 10 },
            "FRANSISQUIÑOS": { firma: 10 }
        }
    },
    "2026-11-18-2110-IND-CAR": {
        round: 4,
        kickoff: "2026-11-18T21:10:00-04:00",
        home: "INDEPENDIENTE",
        away: "CARNICERIA FC",
        score: [5, 3],
        status: "finished",
        players: {
            "rodrigo-mamani": { name: "Rodrigo Mamani", team: "INDEPENDIENTE", goals: 1, yellowCards: 1 },
            "alex-ramirez": { name: "Álex Ramírez", team: "INDEPENDIENTE", goals: 1, yellowCards: 0, redCards: 1, redCardReason: "directa" },
            "gael-chalan": { name: "Gael Chalán", team: "INDEPENDIENTE", goals: 1, yellowCards: 1 },
            "benjamin-bautista": { name: "Benjamín Bautista", team: "INDEPENDIENTE", goals: 1 },
            "jair-chiri": { name: "Jair Chiri", team: "INDEPENDIENTE", goals: 1 },
            "pablo-triana": { name: "Pablo Triana", team: "CARNICERIA FC", goals: 2 },
            "erick-rojas": { name: "Erick Rojas", team: "CARNICERIA FC", goals: 1, yellowCards: 1 },
            "ronaldo-aviles": { name: "Ronaldo Avilés", team: "CARNICERIA FC", goals: 0, yellowCards: 0, redCards: 1, redCardReason: "directa" },
            "alan-pierola": { name: "Alan Piérola", team: "CARNICERIA FC", goals: 0, yellowCards: 0, redCards: 1, redCardReason: "doble amonestación" }
        },
        unresolvedPlayers: [
            { team: "CARNICERIA FC", shirt: 30, possiblePlayerIds: ["paul-ortiz","raul-ortiz"], goals: 0, yellowCards: 0, redCards: 0 }
        ],
        fines: {
            "INDEPENDIENTE": { cintillo: 10, balon: 15, firma: 10, amarillas: 10, rojas: 20 },
            "CARNICERIA FC": { amarillas: 5, rojas: 40 }
        }
    },
    "2026-11-19-1920-OLY-GLS": {
        round: 5,
        kickoff: "2026-11-19T19:20:00-04:00",
        home: "OLYMPIC",
        away: "TEAM GLS",
        score: [4, 9],
        status: "finished",
        players: {
            "richard-anturiano": { name: "Richard Anturiano", team: "OLYMPIC", goals: 1 },
            "mauricio-cardenas": { name: "Mauricio Cárdenas", team: "OLYMPIC", goals: 1 },
            "roberto-penaloza": { name: "Roberto Peñaloza", team: "OLYMPIC", goals: 1 },
            "max-achepa": { name: "Max Achepa", team: "OLYMPIC", goals: 1 },
            "fabricio-mariaca": { name: "Fabricio Mariaca", team: "TEAM GLS", goals: 2, yellowCards: 1 },
            "gonzalo-lozano": { name: "Gonzalo Lozano", team: "TEAM GLS", goals: 2 },
            "grover-felipe": { name: "Grover Felipe", team: "TEAM GLS", goals: 5 }
        },
        fines: {
            "OLYMPIC": {  },
            "TEAM GLS": { cintillo: 10, balon: 15, firma: 10, amarillas: 5 }
        }
    },
    "2026-11-19-CAR-FCA": {
        round: 5,
        date: "2026-11-19",
        home: "CARNICERIA FC",
        away: "FC AMIGOS",
        score: [7, 3],
        status: "finished",
        players: {
            "alan-pierola": { name: "Alan Piérola", team: "CARNICERIA FC", goals: 1 },
            "erick-rojas": { name: "Erick Rojas", team: "CARNICERIA FC", goals: 4 },
            "cristian-vasquez": { name: "Cristian Vásquez", team: "CARNICERIA FC", goals: 1 },
            "raul-ortiz": { name: "Raúl Ortiz", team: "CARNICERIA FC", shirt: 7, goals: 1 },
            "alvaro-capillas": { name: "Álvaro Capillas", team: "FC AMIGOS", goals: 1 },
            "edilson-sanchez": { name: "Edilson Sánchez", team: "FC AMIGOS", goals: 1 },
            "jose-andrade": { name: "José Andrade", team: "FC AMIGOS", goals: 1 }
        },
        fines: {
            "CARNICERIA FC": { firma: 10 },
            "FC AMIGOS": { firma: 10 }
        }
    },
    "2026-11-19-PAR-SUD": {
        round: 5,
        date: "2026-11-19",
        home: "PARADISÍACO FC",
        away: "SUDAMERICANOS",
        score: [7, 7],
        status: "finished",
        players: {
            "patrick-mena": { name: "Patrick Mena", team: "PARADISÍACO FC", goals: 1 },
            "carlos-delgadillo": { name: "Carlos Delgadillo", team: "PARADISÍACO FC", goals: 4 },
            "rodrigo-jorge": { name: "Rodrigo Jorge", team: "PARADISÍACO FC", goals: 1 },
            "carlos-mendo": { name: "Carlos Mendo", team: "PARADISÍACO FC", goals: 1, yellowCards: 1 },
            "luis-liriaga": { name: "Luis Liriaga", team: "PARADISÍACO FC", goals: 0, yellowCards: 1 },
            "marvin-melgarejo": { name: "Marvin Melgarejo", team: "SUDAMERICANOS", goals: 2 },
            "miguel-angel-huanca": { name: "Miguel Ángel Huanca", team: "SUDAMERICANOS", goals: 2 },
            "juan-jose-huanca": { name: "Juan José Huanca", team: "SUDAMERICANOS", goals: 1 },
            "jose-manuel-kama": { name: "José Manuel Kama", team: "SUDAMERICANOS", goals: 1 },
            "michael-gonzales": { name: "Michael Gonzales", team: "SUDAMERICANOS", goals: 1 }
        },
        fines: {
            "PARADISÍACO FC": { amarillas: 10 },
            "SUDAMERICANOS": {  }
        }
    }
});

const reportedMatches = Object.values(matches)
    .filter(match => match.status === "finished" || match.status === "walkover")
    .sort((first, second) =>
        matchDate(first).localeCompare(matchDate(second)) ||
        (first.kickoff ?? "z").localeCompare(second.kickoff ?? "z")
    );

const finishedMatches = reportedMatches.filter(match => match.status === "finished");

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

function recordOutcome(team, outcome) {
    team.played++;
    team.form.push(outcome);

    if (outcome === "W") {
        team.wins++;
        team.points += 3;
    } else if (outcome === "D") {
        team.draws++;
        team.points++;
    } else {
        team.losses++;
    }
}

function recordGoals(team, goalsFor, goalsAgainst) {
    team.gf += goalsFor;
    team.ga += goalsAgainst;
    team.gd = team.gf - team.ga;
}

for (const { home, away, score, walkoverTeam, status } of reportedMatches) {
    const homeTeam = standings.get(home);
    const awayTeam = standings.get(away);

    if (status === "walkover") {
        const homeLost = walkoverTeam === home;
        recordOutcome(homeTeam, homeLost ? "L" : "W");
        recordOutcome(awayTeam, homeLost ? "W" : "L");
        continue;
    }

    const [homeGoals, awayGoals] = score;
    recordGoals(homeTeam, homeGoals, awayGoals);
    recordGoals(awayTeam, awayGoals, homeGoals);
    recordOutcome(homeTeam, homeGoals > awayGoals ? "W" : homeGoals === awayGoals ? "D" : "L");
    recordOutcome(awayTeam, awayGoals > homeGoals ? "W" : homeGoals === awayGoals ? "D" : "L");
}

const teams = [...standings.values()].sort((first, second) =>
    second.points - first.points || second.gd - first.gd || second.gf - first.gf
);

function getPlayerTotals() {
    const totals = new Map();

    for (const match of finishedMatches) {
        for (const [id, player] of Object.entries(match.players ?? {})) {
            const total = totals.get(id) ?? { name: player.name, goals: 0, yellowCards: 0, redCards: 0 };
            total.goals += player.goals ?? 0;
            total.yellowCards += player.yellowCards ?? 0;
            total.redCards += player.redCards ?? 0;
            totals.set(id, total);
        }
    }

    return totals;
}

function renderResults() {
    const results = document.getElementById("results");
    const rounds = new Map();

    for (const match of reportedMatches) {
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
                        ${games.map(({ kickoff, home, away, score, walkoverTeam }) => `
                            <li class="result-match">
                                <div class="result-team result-home">
                                    <span>${home}</span>
                                    ${renderTeamLogo(home)}
                                </div>
                                <div class="result-score">
                                    ${walkoverTeam
                                        ? `<abbr title="Walkover de ${walkoverTeam}" aria-label="Walkover de ${walkoverTeam}">WO</abbr>`
                                        : `<strong>${score.join("–")}</strong>`}
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
        "Equipo",
        "PJ",
        "V",
        "DG",
        "Pts."
    ],

    full: [
        "Pos.",
        "Equipo",
        "PJ",
        "V",
        "E",
        "D",
        "GF",
        "GC",
        "DG",
        "Pts.",
        "Próx."
    ],

    form: [
        "Pos.",
        "Equipo",
        "Racha"
    ]

};

const formLabels = { W: "V", D: "E", L: "D" };


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
                        ${formLabels[result]}
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
