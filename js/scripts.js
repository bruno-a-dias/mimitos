document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContato');
    const formMsg = document.getElementById('formMsg');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            formMsg.innerHTML = '<div class="alert alert-success">Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.</div>';
            form.reset();
        });
    }

    // Scroll suave para âncoras
    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash) {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const leadForm = document.getElementById('leadForm');
    const leadMsg = document.getElementById('leadMsg');
    if (leadForm) {
        leadForm.addEventListener('submit', function (e) {
            e.preventDefault();
            leadMsg.innerHTML = '<div class="alert alert-success mt-2">Pronto! Cupom enviado para seu e-mail. Bem-vindo à família Mimitos 🐾</div>';
            leadForm.reset();
        });
    }
});
