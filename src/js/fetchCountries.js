// импорт шаблонов

import countryTpl from '../templates/countryTpl';
import countryListTpl from '../templates/countryListTpl';

// импорт плагина

// import { defaultModules } from '/node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

const debounce = require('lodash/debounce');

// рефы дом

const refs = {
  input: document.querySelector('.country-search__input'),
  results: document.querySelector('.results-wrapper'),
};

// слушатель событий

refs.input.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(evt) {
  const result = evt.target.value;

  fetchCountries(result);
  clearTemplate();
}

// fetch

function fetchCountries(searchQuery) {
  const URL = 'https://restcountries.com/v2/name/';

  fetch(URL + searchQuery)
    .then(r => r.json())
    .then(e => {
      if (e.length > 10) {
        maxLenghError();
      } else if (e.length === 1) {
        markupTemplate(countryTpl(...e));
      } else {
        markupTemplate(countryListTpl(e));
      }
    })
    .catch(alertError);
}

// рендерим разметку

function markupTemplate(tmp) {
  return refs.results.insertAdjacentHTML('afterbegin', tmp);
}

function clearTemplate() {
  return (refs.results.innerHTML = '');
}

// alert при ошибке

function alertError() {
  error({
    text: "I'm an error message.",
  });
}
function maxLenghError() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 1000,
  });
}
