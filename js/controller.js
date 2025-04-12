class CharacterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async init() {
        try {
            const characters = await this.model.getCharacters();
            this.view.renderCharacters(characters);
        } catch (error) {
            this.view.showError('Erro ao carregar os personagens. Por favor, tente novamente mais tarde.');
        }
    }
} 