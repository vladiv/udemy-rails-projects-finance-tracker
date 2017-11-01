/* global $*/
import { hideSpinner, showSpinner } from 'app/spinner';

export default function () {
  $('#friend-lookup-form').on('ajax:before', function (event, data, status) {
    showSpinner();
  });

  $('#friend-lookup-form').on('ajax:after', function (event, data, status) {
    hideSpinner();
  });

  $('#friend-lookup-form').on('ajax:error', function (event, xhr, status, error) {
    hideSpinner();
    $('#friend-lookup-results').hide();
    $('#friend-lookup-errors').show();
  });
}
