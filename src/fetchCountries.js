import countryTpl from './templates/countryTpl';
const debounce = require('lodash/debounce');

import { defaultModules } from '/node_modules/@pnotify/core/dist/PNotify.js';
import { alert, notice, info, success, error } from '@pnotify/core';

const PNotifyBootstrap4 = require('@pnotify/bootstrap4');

defaultModules.set(PNotifyBootstrap4, {});

const refs = {
  input: document.querySelector('.country-search__input'),
  results: document.querySelector('.results-wrapper'),
};

refs.input.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(evt) {
  const result = evt.target.value;

  function fetchCountries(searchQuery) {
    fetch(`https://restcountries.com/v2/name/${searchQuery}`)
      .then(r => r.json())
      //   .then(e => e.map(e => markupTemplate(e.name)))
      .then(e => markupTemplate(countryTpl(...e)))
      .catch(alertError)
      .finally();
  }

  fetchCountries(result);
}

function markupTemplate(tmp) {
  return refs.results.insertAdjacentHTML('afterbegin', tmp);
}

function alertError() {
  error({
    text: "I'm an error message.",
  });
}
