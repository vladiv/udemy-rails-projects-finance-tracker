import 'bootstrap';

export default function () {
  Rails.start();
  Turbolinks.start();

  document.addEventListener('turbolinks:load', () => {
  });

  window.$ = $; // Need this global for JS requests
}
