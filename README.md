# Barbearia DuarteSoura - One Page Application ✂️💈

Projeto desenvolvido como requisito de avaliação da unidade curricular de **Front-end**. Trata-se de uma Single Page Application (SPA) moderna, funcional e responsiva criada para a **Barbearia DuarteSoura** — um empreendimento real de um amigo —, com o objetivo de fortalecer sua presença digital e facilitar o agendamento de clientes diretamente pela web.

---

## 🎯 Tema Escolhido
A **Barbearia DuarteSoura** une a tradição das barbearias clássicas com técnicas modernas de visagismo masculino. O projeto nasceu da necessidade real de oferecer aos clientes do estabelecimento uma vitrine digital rápida e intuitiva para conhecer os serviços, conferir avaliações e realizar pré-agendamentos online de forma prática pelo celular ou computador, sem depender de processamento no lado do servidor (back-end).

---

## 🚀 Tecnologias Utilizadas
* **HTML5:** Estruturação semântica e acessível da página.
* **CSS3:** Estilização customizada utilizando variáveis (`CSS Custom Properties`), gradientes metálicos, efeitos de vidro fosco (*glassmorphism*) e ajustes de alto contraste (padrão WCAG).
* **Bootstrap v5.3:** Utilização do sistema de Grid responsivo, utilitários de espaçamento/tipografia e componentes nativos (Navbar fixa, Cards, Carousel e Alertas dinâmicos).
* **JavaScript (ES6+):** Manipulação do DOM, regras de negócio do agendamento, validação de dados e efeitos visuais.
* **Formspree:** Integração serverless para envio das solicitações de agendamento diretamente para o e-mail da barbearia.

---

## ⚙️ Recursos Dinâmicos em JavaScript
1. **Agendamento Inteligente com Bloqueio de Horários:**
   * **Filtro de Dias:** Bloqueia datas passadas e impede a seleção de domingos.
   * **Grade Dinâmica:** Gera automaticamente intervalos de 30 minutos conforme o dia da semana selecionado (**Segunda a Sexta:** das 13h30 às 19h00 | **Sábado:** das 12h00 às 19h00).
   * **Prevenção de Conflitos:** Verifica horários já reservados e os desabilita (`disabled`) no seletor para impedir agendamentos duplicados.
2. **Validação Dinâmica de Formulário:**
   * Verifica em tempo real o preenchimento correto de todos os campos obrigatórios (Nome, WhatsApp/Telefone, E-mail com Regex, Serviço, Data e Horário), exibindo feedbacks visuais claros de sucesso ou erro antes do disparo via AJAX.
3. **Alternância de Tema (Dark / Light Mode):**
   * Permite ao usuário alternar entre o tema escuro padrão da barbearia e o tema claro, ajustando dinamicamente as variáveis de cor e mantendo o contraste de leitura.
4. **Contadores Numéricos Animados:**
   * Animação progressiva das métricas da barbearia (cortes realizados, barbas feitas e índice de satisfação) acionada dinamicamente quando o usuário rola a página até a seção *Sobre Nós*.

---

## 📂 Estrutura de Pastas
```text
barbearia-duartesoura/
├── css/
│   └── style.css       # Estilos personalizados, temas e ajustes de contraste
├── js/
│   └── main.js         # Lógica de agendamento, validações, tema e contadores
├── img/
│   └── ...             # Imagens locais do projeto
├── index.html          # Estrutura principal da One Page
└── README.md           # Documentação do projeto