document.addEventListener('DOMContentLoaded', () => {
    
    /* ======================================================
       RECURSO JS 1: Modo Claro / Escuro (Theme Toggle)
       ====================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const icon = themeToggleBtn.querySelector('i');
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                themeToggleBtn.classList.replace('btn-outline-gold', 'btn-gold');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                themeToggleBtn.classList.replace('btn-gold', 'btn-outline-gold');
            }
        });
    }

    /* ======================================================
       RECURSO JS 2: Contadores Numéricos Animados
       ====================================================== */
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;

    const startCounters = () => {
        const counterSection = document.getElementById('counter-section');
        if (!counterSection) return;

        const sectionPos = counterSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos && !hasAnimated) {
            hasAnimated = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const speed = 150;
                const increment = target / speed;

                const updateCount = () => {
                    const count = +counter.innerText;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        }
    };
    window.addEventListener('scroll', startCounters);

    /* ======================================================
       RECURSO OBRIGATÓRIO: Validação e Envio do Formulário
       ====================================================== */
    const form = document.getElementById('contactForm');
    const alertBox = document.getElementById('form-alert');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Limpa mensagens anteriores
            form.querySelectorAll('.form-control, .form-select').forEach(input => {
                input.classList.remove('is-invalid', 'is-valid');
            });

            const nome = document.getElementById('nome');
            const email = document.getElementById('email');
            const telefone = document.getElementById('telefone');
            const servico = document.getElementById('servico');
            const mensagem = document.getElementById('mensagem');

            let isValid = true;

            // Validar Nome (mínimo 3 caracteres)
            if (nome.value.trim().length < 3) {
                nome.classList.add('is-invalid');
                isValid = false;
            } else {
                nome.classList.add('is-valid');
            }

            // Validar E-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.add('is-valid');
            }

            // Validar Telefone (mínimo 8 dígitos)
            const phoneClean = telefone.value.replace(/\D/g, '');
            if (phoneClean.length < 8) {
                telefone.classList.add('is-invalid');
                isValid = false;
            } else {
                telefone.classList.add('is-valid');
            }

            // Validar Serviço
            if (servico.value === '') {
                servico.classList.add('is-invalid');
                isValid = false;
            } else {
                servico.classList.add('is-valid');
            }

            // Validar Mensagem (mínimo 10 caracteres)
            if (mensagem.value.trim().length < 10) {
                mensagem.classList.add('is-invalid');
                isValid = false;
            } else {
                mensagem.classList.add('is-valid');
            }

            if (!isValid) {
                showAlert('danger', 'Por favor, corrija os campos marcados em vermelho antes de enviar.');
                return;
            }

            submitBtn.disabled = true;
            submitBtn.querySelector('span').innerText = 'Enviando...';

            try {
                const dataForm = new FormData(form);
                const response = await fetch(form.action, {
                    method: form.method,
                    body: dataForm,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    showAlert('success', 'Solicitação enviada com sucesso! Entraremos em contato via WhatsApp ou E-mail.');
                    form.reset();
                    form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
                } else {
                    throw new Error('Erro ao enviar');
                }
            } catch (error) {
                showAlert('warning', 'Validação concluída! Lembre-se de colocar seu ID real do Formspree no arquivo HTML para receber os e-mails.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.querySelector('span').innerText = 'Solicitar Agendamento';
            }
        });
    }

    function showAlert(type, message) {
        alertBox.className = `alert alert-${type} alert-dismissible fade show`;
        alertBox.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        alertBox.classList.remove('d-none');
    }
});