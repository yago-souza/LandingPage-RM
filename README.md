# Rick and Morty - Lista de Personagens

Este projeto é uma aplicação web que exibe personagens da série Rick and Morty, utilizando a API pública disponível. A aplicação foi desenvolvida seguindo o padrão MVC (Model-View-Controller) adaptado para o Front-End, com foco em boas práticas de desenvolvimento e experiência do usuário.

## 🚀 Funcionalidades

- Listagem de personagens em grid responsivo
- Scroll infinito para carregar mais personagens automaticamente
- Botão "Voltar ao Topo" para melhor navegação
- Cards com informações detalhadas dos personagens
- Design responsivo que se adapta a diferentes tamanhos de tela
- Tratamento de erros e feedback visual para o usuário

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- [Rick and Morty API](https://rickandmortyapi.com/)

## 📋 Estrutura do Projeto

```
.
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos da aplicação
├── js/
│   ├── model.js        # Lógica de dados e API
│   ├── view.js         # Manipulação do DOM
│   ├── controller.js   # Controle da aplicação
│   └── app.js          # Inicialização
└── README.md           # Documentação
```

## 🎨 Design

- Layout em grid responsivo (4 colunas em desktop)
- Cards com efeito hover
- Cores temáticas do Rick and Morty
- Indicadores visuais de status dos personagens
- Botão de voltar ao topo com animação suave

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Abra o arquivo `index.html` em seu navegador

## 📱 Responsividade

A aplicação se adapta a diferentes tamanhos de tela:
- Desktop: 4 colunas
- Tablets: 3 colunas
- Tablets pequenos: 2 colunas
- Mobile: 1 coluna

## 🔄 Funcionamento

1. A aplicação carrega inicialmente 20 personagens
2. Ao rolar até 80% da página, mais personagens são carregados automaticamente
3. O botão "Voltar ao Topo" aparece quando o usuário rola mais de 300px
4. Cada card exibe:
   - Imagem do personagem
   - Nome
   - Status (Vivo, Morto, Desconhecido)
   - Espécie

## 🛠️ Arquitetura MVC

- **Modelo**: Gerencia os dados e a comunicação com a API
- **Visualização**: Responsável pela interface do usuário
- **Controlador**: Coordena a interação entre Modelo e Visualização

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do repositório. 