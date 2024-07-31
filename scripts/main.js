document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('test-form');
    const feedback = document.getElementById('form-feedback');
    const contrastButton = document.getElementById('toggle-contrast');
    const body = document.body;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        feedback.textContent = 'Formulário enviado com sucesso!';
    });

    contrastButton.addEventListener('click', function() {
        body.classList.toggle('high-contrast');
    });
});
