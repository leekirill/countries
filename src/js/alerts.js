export { alertError, maxLenghError, alertSuccess };
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error, success } from '@pnotify/core';

function alertSuccess() {
  success({
    text: 'We find your country!',
    delay: 3000,
  });
}

function alertError() {
  error({
    text: 'No matches found. Please enter a more specific query',
    delay: 3000,
  });
}
function maxLenghError() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 3000,
  });
}
