# 🛸 As Coisas Estranhas do Front-End — Gamified Roadmap

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Uma aplicação web gamificada e interativa inspirada no universo de **Stranger Things**. O projeto atua como um **Roadmap de Estudos em Desenvolvimento Front-End**, utilizando elementos narrativos, escolha de personagens e cenários da série para transformar o aprendizado de **HTML, CSS e JavaScript** em uma jornada imersiva.

---

## 🗺️ A Jornada (Fluxo da Aplicação)

A aplicação é estruturada no formato *Single-Page Application* (SPA), conduzindo o usuário por etapas narrativas:

1. **Abertura Cinematográfica:** Vinheta em vídeo com controles de áudio/vídeo e transição direta para o jogo.
2. **Tela de Boas-Vindas:** Apresentação temática com estética retrô *Neon Red* e tipografia 8-bit.
3. **Seleção de Avatar:** O estudante escolhe seu personagem (Dustin, Eddie, Demogorgon, etc.) para representá-lo na jornada.
4. **Seleção de Mundo:** Escolha entre explorar o **Mundo Normal** (Conceitos Básicos) ou o **Mundo Invertido** (Desafios Avançados do Front-End).
5. **Mapa Interativo do Roadmap:** Navegação pelos pontos-chave da cidade de Hawkins, onde cada localidade representa um módulo de aprendizado (HTML5, CSS3, DOM e JS Assíncrono).
6. **Tela Final de Vitória:** Telas de encerramento e celebração ("Você salvou o Mundo Invertido") ao concluir todas as etapas do roadmap.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica das seções, tags de mídia e gerenciamento do estado das páginas.
* **CSS3:** Estilização temática, tipografia *pixel art*, efeitos neon (`text-shadow`/`box-shadow`), layout responsivo e transições de tela.
* **JavaScript (ES6+):** Controle da API de vídeo, manipulação do DOM, fluxo de navegação entre seções, escolha de avatares e mapas.

---

## 📁 Estrutura do Projeto

```text
project-mission_level_up/
│
├── src/
│   ├── assets/
│   │   ├── fonts/         # Fontes temáticas retro/pixel
│   │   ├── icons/         # Ícones da interface (corações/vida, controles)
│   │   ├── img/           # Sprites dos avatares, mapas de Hawkins e telas finais
│   │   └── videos/        # Vinheta de entrada em vídeo
│   │
│   ├── css/
│   │   ├── page1.css      # Estilos do player e tela de vídeo
│   │   └── page2.css      # Estilos da tela de boas-vindas, avatares e mapas
│   │
│   └── js/
│       ├── page1.js       # Lógica do vídeo e transição inicial
│       └── page2.js       # Controle de seleção de avatares, mundos e progresso
│
├── index.html             # Estrutura principal de todas as telas (SPA)
└── README.md              # Documentação do projeto
```
## 💻 Como Rodar o código
1. **Clonar o Repositório**
   ```bash
   git clone [https://github.com/Marcuspdev/project-mission_level_up.git](https://github.com/Marcuspdev/project-mission_level_up.git)
 2. **Acessar a pasta do projeto**
  ```bash
 cd project-mission_level_up
```
3. Clicar no código HTML
## 📄 Licença
Este projeto é voltado para fins educacionais e de portfólio. Todos os direitos sobre os elementos visuais da série pertencem aos seus respectivos criadores.
