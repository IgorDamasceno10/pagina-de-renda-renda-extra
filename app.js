document.addEventListener('DOMContentLoaded', () => {
    // Variáveis para o formulário de login e cadastro
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const formsWrapper = document.querySelector('.forms-wrapper');

    // Alternar entre login e cadastro
    loginBtn.addEventListener('click', () => {
        formsWrapper.style.transform = 'translateX(0)'; // Mover para a posição do login
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
    });

    registerBtn.addEventListener('click', () => {
        formsWrapper.style.transform = 'translateX(-50%)'; // Mover para a posição do cadastro
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });

    // Seção de FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Alterna a classe 'active' para o botão da pergunta
            question.classList.toggle('active');
            // Mostra ou oculta a resposta
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });

    // Feedback Visual para Formulários
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real do formulário
        alert("Login realizado com sucesso!"); // Exibe mensagem de sucesso
        loginForm.reset(); // Limpa o formulário
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real do formulário
        alert("Cadastro realizado com sucesso!"); // Exibe mensagem de sucesso
        registerForm.reset(); // Limpa o formulário
    });
});












