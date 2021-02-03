import SimpleSearch from './simpleSearch.js';
const searchbar = document.getElementById('search-bar');
const searchItems = Array.from(document.querySelectorAll('.searchItemNew'));
const data = new SimpleSearch(searchbar, searchItems, {
    defaultDisplay: 'block',
    minimumChars: 3,
    capitalStrict: true,
    typingTimeout: 600,
    hideMethod: 'display',
});
