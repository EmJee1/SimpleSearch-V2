# SimpleSearch
SimpleSearch is a TypeScript library providing easy-to-use filtering on webpages.
It is made with small to medium datasets in mind, and ideal for frontend developers wanting to add some functionality to their website.

# Quick setup
1. Download the SimpleSearch.ts or SimpleSearch.js, or clone this repo.
2. Import it using ES6 modules, make sure the importing script tag is of type module (`<script type="module">`).
```ts
import SimpleSearch from './your/path/to/SimpleSearch.js'
```
3. Grab your searchbar and searchElements with a querySelector, here is a TypeScript example. Make sure that the searchItems are in an array, and not the default nodelist.
You can achieve this by wrapping the querySelector inside Array.from(), this is for compatibility reasons with edge and IE
```ts
const searchbar = document.getElementById('search-bar') as HTMLInputElement
const searchItems = Array.from(document.querySelectorAll('.searchItemNew')) as HTMLElement[]
```
4. Now it is time to instantiate the SimpleSearch class, it takes the following three parameters:
	- searchBar -> the input element
	- searchElements -> the items you want to search through
	- options -> An optional object that is used to pass all the options, we will go more in-depth on this later in the documentation
```ts
new SimpleSearch(searchbar, searchItems, {})
```
5. Congratulations! You have successfully created a SimpleSearch instance with default options, pretty easy right?
Now lets get into the good stuff, we will customize some options SimpleSearch offers.
# The Options object
As of writing this, the options object has 5 keys, they are displayed in the table underneath
| Key | Default | Description | Values |
| ------------- | ------------- | ------------- | ------------- |
| defaultDisplay | block | If a searchable item is visible, it is give a display of block, use this key to change this behaviour | any valid css display value |
| hideMethod  | display | By default, a searchable element is hidden with display: none, change this to visibility if you want to keep the space reserved | display or visibility |
| minimumChars | 3 | The minimum amount of characters that have to be entered in the input element, before searching | any valid number |
| capitalStrict | false | Makes the search case-sensitive | true or false |
| typingTimeout | 800 | The timeout before searching, this resets at every keypress to improve performance, provide a number in miliseconds | a number |

# Full example
```ts
import SimpleSearch from './simpleSearch.js'

const searchbar = document.getElementById('search-bar') as HTMLInputElement
const searchItems = Array.from(document.querySelectorAll('.searchItemNew')) as HTMLElement[]

const data = new SimpleSearch(searchbar, searchItems, {
	defaultDisplay: 'block',
	minimumChars: 3,
	capitalStrict: true,
	typingTimeout: 600,
	hideMethod: 'display',
})
```

# Other
1. The repository contains an example.html, check out this file to see SimpleSearch in action
