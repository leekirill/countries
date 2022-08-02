export { markupTemplate, clearTemplate };

// импортируем объект refs
import { refs } from './getRefs';

function markupTemplate(tmp) {
  return refs.results.insertAdjacentHTML('afterbegin', tmp);
}

function clearTemplate() {
  return (refs.results.innerHTML = '');
}
