document.addEventListener('DOMContentLoaded', () => {
    const modelo = new ModeloPersonagem();
    const visualizacao = new VisualizacaoPersonagem();
    const controlador = new ControladorPersonagem(modelo, visualizacao);
    
    controlador.iniciar();
}); 