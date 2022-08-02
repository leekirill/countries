export { alertError, maxLenghError, alertSuccess };
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error, success } from '@pnotify/core';

function alertSuccess() {
  success({
    text: "You're cool!",
    delay: 2000,
  });
}

function alertError() {
  error({
    text: "I'm an error message.",
    delay: 2000,
  });
}
function maxLenghError() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 2000,
  });
}
