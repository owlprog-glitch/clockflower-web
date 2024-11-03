// Função para criar pétalas
function createPetals() {
    const petalContainer = document.getElementById('petal-container');

    for (let i = 0; i < 50; i++) { // Gera 50 pétalas
        const petal = document.createElement('div');
        petal.className = 'petal';

        // Atribuir uma classe de tema aleatória
        const themes = ['cherry-blossom-theme', 'lotus-theme', 'blue-spider-lily-theme', 'red-spider-lily-theme'];
        petal.classList.add(themes[Math.floor(Math.random() * themes.length)]);

        // Posição inicial
        petal.style.left = Math.random() * 100 + 'vw'; // Define a posição horizontal aleatória
        petal.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duração aleatória entre 5s e 10s
        petal.style.animationDelay = Math.random() * 10 + 's'; // Atraso aleatório antes de começar a cair

        petalContainer.appendChild(petal); // Adiciona a pétala ao contêiner
    }
}

// Atualizar relógio a cada segundo
setInterval(updateClock, 1000); // Chama a função updateClock a cada 1 segundo
createPetals(); // Cria as pétalas ao carregar a página
updateClock(); // Chamada inicial para definir o relógio e a data