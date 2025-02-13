
document.querySelectorAll('.accordion .trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const accordion = trigger.parentElement;
    const isOpen = accordion.classList.contains('open');

    if (isOpen) {
      accordion.classList.remove('open');
    } else {
      document.querySelectorAll('.accordion').forEach(accordion => {
        accordion.classList.remove('open');
      });

      accordion.classList.add('open');
    }
  });
});


function copiarEmail(email) {
  navigator.clipboard.writeText(email);
  alert("Email copiado para a área de transferência!"); // Ou um feedback visual melhor
}