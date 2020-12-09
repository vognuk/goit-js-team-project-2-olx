import cardsTpl from '../templates/myCallsCards.hbs';
import getRefs from '../js/getRefs';

const refs = getRefs();

export default function myCallsRender(data) {
  const markup = cardsTpl(data);
  refs.main.insertAdjacentHTML('beforeend', markup);
}