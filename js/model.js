class ModeloPersonagem {
    constructor() {
        this.urlApi = 'https://rickandmortyapi.com/api/character';
    }

    async buscarPersonagens() {
        try {
            const resposta = await fetch(this.urlApi);
            if (!resposta.ok) {
                throw new Error('Erro ao buscar personagens');
            }
            const dados = await resposta.json();
            return dados.results;
        } catch (erro) {
            console.error('Erro no Modelo:', erro);
            throw erro;
        }
    }
} 