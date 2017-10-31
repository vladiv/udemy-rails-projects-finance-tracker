/* global $*/
import { hideSpinner, showSpinner } from 'app/spinner';

export default function () {
  $('#stock-lookup-form').on('ajax:before', function (event, data, status) {
    showSpinner();
  });

  $('#stock-lookup-form').on('ajax:after', function (event, data, status) {
    hideSpinner();
  });

  $('#stock-lookup-form').on('ajax:error', function (event, xhr, status, error) {
    hideSpinner();
    $('#stock-lookup-results').hide();
    $('#stock-lookup-errors').show();
  });
}
