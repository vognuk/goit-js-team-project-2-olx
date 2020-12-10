import footerTpl from '../templates/footer.hbs';
export default function renderFooter() {
    const markup = footerTpl();
    const footerPartRef = document.querySelector('footer');
    footerPartRef.insertAdjacentHTML('beforeend', markup);   
    }
