import getRefs from './getRefs';

const refs = getRefs();

refs.myCallsCard.addEventListener('mouseover', onHoverCard);

export default function onHoverCard(e) {
  console.log(e.target);
  console.log(refs.heartIcon);

  const card = e.target;
  if (card){
    refs.heartIcon.style.visibility = 'visible';
    refs.editIcon.style.visibility = 'visible';
    refs.fullscreenIcon.style.visibility = 'visible';
  }
  if (!e.target) {
    refs.heartIcon.style.visibility = 'hidden';
    refs.editIcon.style.visibility = 'hidden';
    refs.fullscreenIcon.style.visibility = 'hidden';
  }
}

