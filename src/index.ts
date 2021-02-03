import SimpleSearch from './simpleSearch.js'

const searchbar = document.getElementById('search-bar') as HTMLInputElement
const searchItems = Array.from(document.querySelectorAll('.searchItemNew')) as HTMLElement[]

new SimpleSearch(searchbar, searchItems, {
	defaultDisplay: 'block',
	minimumChars: 3,
	capitalStrict: true,
	typingTimeout: 600,
	hideMethod: 'display',
})