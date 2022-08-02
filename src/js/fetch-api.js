import countryTpl from '../templates/countryTpl'; // импорт шаблонов и функций их отрисовки
import countryListTpl from '../templates/countryListTpl';
import { markupTemplate, clearTemplate } from './markup';
import API from './api-service'; // импорт апи [работа с бэкендом]
import { refs } from './getRefs'; // импорт refs с домом [забираем рефы]

import { alertError, maxLenghError, alertSuccess } from './alerts'; // импорт плагинов [pnotify и lodash]
const debounce = require('lodash/debounce');

// слушатель событий

refs.input.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(evt) {
  const result = evt.target.value;

  if (result !== '') API.fetchCountries(result).then(validator).catch(alertError);

  refs.input.innerHTML = '';
  clearTemplate();
}

function validator(searchResult) {
  if (searchResult.length > 10) {
    maxLenghError();
  } else if (searchResult.length === 1) {
    markupTemplate(countryTpl(...searchResult));
    alertSuccess();
  } else {
    markupTemplate(countryListTpl(searchResult));
  }
}
