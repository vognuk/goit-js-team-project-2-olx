import searchInputTpl from '../templates/search-input.hbs';
export default function renderSearchInput() {
    const markup = searchInputTpl();
    const searchInputRef = document.querySelector('header');
    searchInputRef.insertAdjacentHTML('beforeend', markup);   
    }