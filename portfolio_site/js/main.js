
// Pequenas melhorias de UX (sem dependências externas)
document.addEventListener('DOMContentLoaded', () => {
  // Toggle do menu mobile
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-menu');
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Ano dinâmico no rodapé
  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Validação simples do formulário (apenas feedback visual/cliente)
  const form = document.querySelector('.contact-form');
  const hint = document.querySelector('.form-hint');
  if (form && hint){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = form.querySelector('#nome');
      const email = form.querySelector('#email');
      const mensagem = form.querySelector('#mensagem');

      // Regras de validação simples (apenas para demonstração)
      if (!nome.value.trim() || !email.value.includes('@') || !mensagem.value.trim()){
        hint.textContent = 'Por favor, preencha nome, e-mail válido e mensagem.';
        return;
      }
      hint.textContent = 'Obrigado! Esta é uma simulação — nenhum envio real foi feito.';
      form.reset();
    });
  }
});
