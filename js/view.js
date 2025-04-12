class CharacterView {
    constructor() {
        this.gridContainer = document.getElementById('characters-grid');
    }

    renderCharacters(characters) {
        this.gridContainer.innerHTML = '';
        
        characters.forEach(character => {
            const card = this.createCharacterCard(character);
            this.gridContainer.appendChild(card);
        });
    }

    createCharacterCard(character) {
        const card = document.createElement('div');
        card.className = 'character-card';

        const image = document.createElement('img');
        image.className = 'character-image';
        image.src = character.image;
        image.alt = character.name;

        const info = document.createElement('div');
        info.className = 'character-info';

        const name = document.createElement('h2');
        name.className = 'character-name';
        name.textContent = character.name;

        const status = document.createElement('span');
        status.className = `character-status status-${character.status.toLowerCase()}`;
        status.textContent = character.status;

        const species = document.createElement('p');
        species.className = 'character-species';
        species.textContent = character.species;

        info.appendChild(name);
        info.appendChild(status);
        info.appendChild(species);

        card.appendChild(image);
        card.appendChild(info);

        return card;
    }

    showError(message) {
        this.gridContainer.innerHTML = `<div class="error-message">${message}</div>`;
    }
} 