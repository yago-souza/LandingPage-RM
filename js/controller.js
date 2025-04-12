class ControladorPersonagem {
    constructor(modelo, visualizacao) {
        this.modelo = modelo;
        this.visualizacao = visualizacao;
    }

    async iniciar() {
        try {
            const personagens = await this.modelo.buscarPersonagens();
            this.visualizacao.renderizarPersonagens(personagens);
        } catch (erro) {
            this.visualizacao.mostrarErro('Erro ao carregar os personagens. Por favor, tente novamente mais tarde.');
        }
    }
} 