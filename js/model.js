class CharacterModel {
    constructor() {
        this.apiUrl = 'https://rickandmortyapi.com/api/character';
    }

    async getCharacters() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Erro ao buscar personagens');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Erro no Model:', error);
            throw error;
        }
    }
} 