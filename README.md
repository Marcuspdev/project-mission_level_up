# 🛸 Stranger Things — Web Experience

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Uma aplicação web interativa inspirada no universo de **Stranger Things**. O projeto combina uma vinheta em vídeo em tela cheia com transições dinâmicas para uma interface com estética retrô dos anos 80, animações neon e fontes em *pixel art*.

---

## 🚀 Funcionalidades

* **Vinheta Cinematográfica de Entrada:**
  * Exibição do vídeo em tela cheia com proporção adaptativa (`object-fit: cover`).
  * Controles customizados sobrepostos para Pausar/Reproduzir e Ligar/Desligar áudio.
  * Botão de transição manual ("Pular Vídeo").
  * Avanço automático para a tela inicial assim que o vídeo termina (`video.onended`).

* **Interface Temática 80s / Neon:**
  * Tipografia em *Pixel Art* via Google Fonts (*Press Start 2P*).
  * Efeitos visuais de iluminação *Neon Red* construídos em CSS3 (`text-shadow` e `box-shadow`).
  * Botões interativos com estados de *hover* e transições suaves.

* **Arquitetura SPA Modular:**
  * Múltiplas seções gerenciadas em um único arquivo HTML (`Single-Page Application`).
  * Isolamento de escopo por classe no CSS para evitar conflitos de estilo entre telas.
  * Separação de scripts de interatividade (`page1.js`, `page2.js`).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Tags semânticas (`<section>`, `<video>`) e estruturação das telas.
* **CSS3:** Flexbox, animações neon, regras utilitárias (`.escondido`) e manipulação de tipografia.
* **JavaScript (ES6+):** Controle da API nativa de mídia, manipulação de DOM e gerenciamento das transições de tela.

---

## 📁 Estrutura do Projeto

```text
project-mission_level_up/
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── img/
│   │   └── videos/
│   │       └── video.mp4          # Vinheta de entrada da aplicação
│   │
│   ├── css/
│   │   ├── page1.css              # Estilos do vídeo de entrada e controles
│   │   └── page2.css              # Estilos da tela de boas-vindas neon
│   │
│   └── js/
│       ├── page1.js               # Controle de player e transição do vídeo
│       └── page2.js               # Interações da tela de boas-vindas
│
├── index.html                     # Ponto de entrada da aplicação
└── README.md                      # Documentação do repositório

## 💻 Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/Marcuspdev/project-mission_level_up.git](https://github.com/Marcuspdev/project-mission_level_up.git)
