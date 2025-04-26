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
