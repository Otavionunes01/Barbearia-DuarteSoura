# Barbearia DuarteSoura - One Page Application ✂️💈

Projeto desenvolvido como requisito de avaliação da unidade curricular de **Front-end**. Trata-se de uma Single Page Application (SPA) moderna, funcional e responsiva criada para a **Barbearia DuarteSoura** — um empreendimento real de um amigo —, com o objetivo de fortalecer sua presença digital e facilitar o contato e pré-agendamento de clientes pela web.

---

## 🎯 Tema Escolhido
A **Barbearia DuarteSoura** une a tradição das barbearias clássicas com técnicas modernas de visagismo masculino. O projeto nasceu da necessidade real de oferecer aos clientes do estabelecimento uma vitrine digital rápida e intuitiva para conhecer os serviços, conferir avaliações e solicitar horários de atendimento diretamente pelo celular ou computador, sem depender de processamento no lado do servidor (back-end).

---

## 🚀 Tecnologias Utilizadas
* **HTML5:** Estruturação semântica e acessível da página.
* **CSS3:** Estilização customizada utilizando variáveis (`CSS Custom Properties`), gradientes metálicos, efeitos de vidro fosco (*glassmorphism*) e ajustes de alto contraste.
* **Bootstrap v5.3:** Utilização do sistema de Grid responsivo, utilitários de espaçamento/tipografia e componentes nativos (Navbar fixa, Cards, Carousel e Alertas dinâmicos).
* **JavaScript (ES6+):** Manipulação do DOM, validação dinâmica de formulário e efeitos visuais interativos.
* **Formspree:** Integração serverless para envio das solicitações de pré-agendamento diretamente para o e-mail da barbearia.

---

## ⚙️ Recursos Dinâmicos em JavaScript
1. **Alternância de Tema (Dark / Light Mode):**
   * Permite ao usuário alternar entre o tema escuro padrão da barbearia e o tema claro através de um botão na barra de navegação, ajustando dinamicamente as variáveis de cor e os ícones.
2. **Contadores Numéricos Animados:**
   * Animação progressiva das métricas da barbearia (cortes realizados, barbas feitas e índice de satisfação) acionada dinamicamente quando o usuário rola a página até a seção *Sobre Nós*.
3. **Validação Dinâmica de Formulário e Envio AJAX:**
   * Verifica em tempo real o preenchimento correto de todos os 5 campos obrigatórios (Nome, E-mail com Regex, WhatsApp/Telefone, Serviço desejado e Mensagem de preferência de data/horário), exibindo feedbacks visuais claros de sucesso ou erro antes de enviar os dados via `fetch` para o Formspree.

---

## 📂 Estrutura de Pastas
```text
Barbearia-DuarteSoura/
├── css/
│   └── style.css       # Estilos personalizados, temas e ajustes de contraste
├── js/
│   └── main.js         # Lógica de validação, alternância de tema e contadores
├── img/
│   └── ...             # Imagens locais da barbearia e dos serviços
├── index.html          # Estrutura principal da One Page
└── README.md           # Documentação do projeto
