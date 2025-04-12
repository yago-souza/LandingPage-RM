class VisualizacaoPersonagem {
    constructor() {
        this.containerGrid = document.getElementById('characters-grid');
        this.carregando = false;
    }

    renderizarPersonagens(personagens, limparExistentes = false) {
        if (limparExistentes) {
            this.containerGrid.innerHTML = '';
        }
        
        personagens.forEach(personagem => {
            const card = this.criarCardPersonagem(personagem);
            this.containerGrid.appendChild(card);
        });
    }

    criarCardPersonagem(personagem) {
        const card = document.createElement('div');
        card.className = 'character-card';

        const imagem = document.createElement('img');
        imagem.className = 'character-image';
        imagem.src = personagem.image;
        imagem.alt = personagem.name;

        const info = document.createElement('div');
        info.className = 'character-info';

        const nome = document.createElement('h2');
        nome.className = 'character-name';
        nome.textContent = personagem.name;

        const status = document.createElement('span');
        status.className = `character-status status-${personagem.status.toLowerCase()}`;
        status.textContent = personagem.status;

        const especie = document.createElement('p');
        especie.className = 'character-species';
        especie.textContent = personagem.species;

        info.appendChild(nome);
        info.appendChild(status);
        info.appendChild(especie);

        card.appendChild(imagem);
        card.appendChild(info);

        return card;
    }

    mostrarErro(mensagem) {
        const erro = document.createElement('div');
        erro.className = 'error-message';
        erro.textContent = mensagem;
        this.containerGrid.appendChild(erro);
    }

    mostrarCarregando() {
        if (!this.carregando) {
            const loadingElement = document.createElement('div');
            loadingElement.className = 'loading-message';
            loadingElement.textContent = 'Carregando mais personagens...';
            this.containerGrid.appendChild(loadingElement);
            this.carregando = true;
        }
    }

    ocultarCarregando() {
        const loadingElement = this.containerGrid.querySelector('.loading-message');
        if (loadingElement) {
            loadingElement.remove();
        }
        this.carregando = false;
    }
} 