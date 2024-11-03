function updateClock() {
    const now = moment(); // Obtém a data e hora atuais
    document.getElementById('time').innerText = now.format('HH:mm:ss'); // Atualiza o horário
    document.getElementById('date').innerText = now.format('DD/MM/YYYY'); // Atualiza a data

    updateSeason(now.month(), now.date()); // Atualiza a estação do ano
}

function updateSeason(month, day) {
    let season;
    if ((month === 2 && day >= 21) || (month === 3 && day <= 20)) {
        season = "Verão"; // Estação do ano correta
    } else if ((month === 3 && day >= 21) || (month === 5 && day <= 20)) {
        season = "Outono"; // Corrigido para o outono
    } else if ((month === 5 && day >= 21) || (month === 8 && day <= 20)) {
        season = "Inverno"; // Estação do inverno
    } else if ((month === 8 && day >= 21) || (month === 11 && day <= 20)) {
        season = "Primavera"; // Estação da primavera
    } else {
        season = "Verão"; // Corretamente definido
    }
    document.getElementById('season').innerText = season; // Atualiza a estação na página
}

function changeTheme(theme) {
    document.body.className = theme; // Altera a classe do corpo para mudar o tema
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Muda o tema quando o seletor é alterado
document.getElementById('theme-selector').addEventListener('change', function() {
    changeTheme(this.value);
});

// Chamada inicial para definir o relógio e a estação
updateClock();