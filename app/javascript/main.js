/* global Rails, Turbolinks, $*/

import 'bootstrap';
import stocks from 'app/stocks';

export default function () {
  Rails.start();
  Turbolinks.start();

  document.addEventListener('turbolinks:load', () => {
    stocks();
  });

  window.$ = $; // Need this global for JS requests
}
