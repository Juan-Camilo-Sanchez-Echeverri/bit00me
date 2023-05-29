'use strict';

const $form = document.getElementById('form');
const $gratitude = document.getElementById('gratitude');

$form.addEventListener('submit', (event) => {
  event.preventDefault();

  const $name = document.getElementById('name').value;
  const $email = document.getElementById('email').value;
  const $message = document.getElementById('message').value;

  let information = {
    name: $name,
    email: $email,
    message: $message,
  };

  let info = `<h2>Bienvendid@  ${information.name} gracias por visitar mi sitio Web, espero contactarte muy pronto y compartir contigo.</h2><a href="../../docs/index.html" class="btn btn-primary">Continuar</a>`;

  cambioEstilos();

  $gratitude.innerHTML = info;
  $form.reset();

  console.log(information);
});

function cambioEstilos() {
  $form.style.display = 'none';
  $gratitude.style.display = 'flex';
}
