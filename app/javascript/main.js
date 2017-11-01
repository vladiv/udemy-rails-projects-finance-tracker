/* global Rails, Turbolinks, $*/

import 'bootstrap';
import stocks from 'app/stocks';
import friends from 'app/friends';

export default function () {
  Rails.start();
  Turbolinks.start();

  document.addEventListener('turbolinks:load', () => {
    stocks();
    friends();
  });

  window.$ = $; // Need this global for JS requests
}
