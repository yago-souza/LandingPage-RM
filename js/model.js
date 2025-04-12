class ModeloPersonagem {
    constructor() {
        this.urlApi = 'https://rickandmortyapi.com/api/character';
        this.paginaAtual = 1;
        this.temMaisPaginas = true;
    }

    async buscarPersonagens() {
        try {
            if (!this.temMaisPaginas) return [];
            
            const resposta = await fetch(`${this.urlApi}?page=${this.paginaAtual}`);
            if (!resposta.ok) {
                throw new Error('Erro ao buscar personagens');
            }
            const dados = await resposta.json();
            
            // Atualiza o estado da paginação
            this.paginaAtual++;
            this.temMaisPaginas = dados.info.next !== null;
            
            return dados.results;
        } catch (erro) {
            console.error('Erro no Modelo:', erro);
            throw erro;
        }
    }

    reiniciarPaginacao() {
        this.paginaAtual = 1;
        this.temMaisPaginas = true;
    }
} 