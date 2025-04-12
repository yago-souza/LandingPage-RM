class ControladorPersonagem {
    constructor(modelo, visualizacao) {
        this.modelo = modelo;
        this.visualizacao = visualizacao;
        this.carregando = false;
        this.btnVoltarTopo = document.getElementById('btnVoltarTopo');
        
        // Vincula os métodos ao contexto da classe
        this.verificarScrollParaCarregar = this.verificarScrollParaCarregar.bind(this);
        this.verificarScrollParaBotao = this.verificarScrollParaBotao.bind(this);
        this.voltarAoTopo = this.voltarAoTopo.bind(this);
    }

    async iniciar() {
        try {
            // Carrega a primeira página
            const personagens = await this.modelo.buscarPersonagens();
            this.visualizacao.renderizarPersonagens(personagens, true);
            
            // Adiciona os listeners
            window.addEventListener('scroll', this.verificarScrollParaCarregar);
            window.addEventListener('scroll', this.verificarScrollParaBotao);
            this.btnVoltarTopo.addEventListener('click', this.voltarAoTopo);
        } catch (erro) {
            this.visualizacao.mostrarErro('Erro ao carregar os personagens. Por favor, tente novamente mais tarde.');
        }
    }

    verificarScrollParaCarregar() {
        // Verifica se já está carregando ou se não há mais páginas
        if (this.carregando || !this.modelo.temMaisPaginas) return;

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        // Carrega mais quando faltar 20% para chegar ao final da página
        if (scrollTop + clientHeight >= scrollHeight * 0.8) {
            this.carregarMaisPersonagens();
        }
    }

    verificarScrollParaBotao() {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 300) {
            this.btnVoltarTopo.classList.add('visivel');
        } else {
            this.btnVoltarTopo.classList.remove('visivel');
        }
    }

    voltarAoTopo() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    async carregarMaisPersonagens() {
        try {
            this.carregando = true;
            this.visualizacao.mostrarCarregando();

            const personagens = await this.modelo.buscarPersonagens();
            this.visualizacao.renderizarPersonagens(personagens);

        } catch (erro) {
            this.visualizacao.mostrarErro('Erro ao carregar mais personagens.');
        } finally {
            this.carregando = false;
            this.visualizacao.ocultarCarregando();
        }
    }
} 