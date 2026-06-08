const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const leadForm = document.querySelector('[data-lead-form]');
const formNote = document.querySelector('[data-form-note]');

function syncHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = header.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

header.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  leadForm.reset();
  formNote.textContent = 'Заявка подготовлена. Подключите почту или CRM, чтобы получать обращения.';
  formNote.classList.add('is-success');
});
