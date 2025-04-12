document.addEventListener('DOMContentLoaded', () => {
    const model = new CharacterModel();
    const view = new CharacterView();
    const controller = new CharacterController(model, view);
    
    controller.init();
}); 