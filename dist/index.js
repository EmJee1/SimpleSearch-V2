import SimpleSearch from './simpleSearch.js';
const data = new SimpleSearch(document.getElementById('search-bar'), Array.from(document.querySelectorAll('.searchItemNew')), { hideMethod: 'display', defaultDisplay: 'block', capitalStrict: false });
