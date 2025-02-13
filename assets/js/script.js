
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
  copyToClipboard(email);

  const message = document.querySelector('.text-clipboard-backdrop');
  message.style.display = 'block';
  message.style.opacity = 1;
  setTimeout(() => {
    message.style.opacity = 0;
    setTimeout(() => {
      message.style.display = 'none';
    }, 500);
  }, 3000);
}

function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(textArea);
}