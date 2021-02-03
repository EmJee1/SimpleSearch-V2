import SimpleSearch from './simpleSearch.js'

const data = new SimpleSearch(
	document.getElementById('search-bar') as HTMLInputElement,
	Array.from(document.querySelectorAll('.searchItemNew')) as HTMLElement[],
	{ hideMethod: 'display', defaultDisplay: 'block', capitalStrict: false }
)