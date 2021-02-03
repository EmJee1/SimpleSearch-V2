interface Options {
	capitalStrict?: Boolean
	hideMethod?: 'display' | 'visibility'
	defaultDisplay?:
		| 'block'
		| 'contents'
		| 'flex'
		| 'flex-root'
		| 'grid'
		| 'inherit'
		| 'initial'
		| 'inline'
		| 'inline-block'
		| 'inline-flex'
		| 'inline-grid'
		| 'inline-table'
		| 'list-item'
		| 'none'
		| 'rever'
		| 'table'
		| 'table-caption'
		| 'table-cell'
		| 'table-column'
		| 'table-column-group'
		| 'table-footer-group'
		| 'table-header-group'
		| 'table-row'
		| 'table-row-group'
		| 'unset'
}

class SimpleSearch {
	private searchBar: HTMLInputElement
	private searchElements: HTMLElement[]
	private capitalStrict: Boolean = false
	private hideMethod: 'display' | 'visibility' = 'display'
	private defaultDisplay: string = 'block'

	constructor(
		searchBar: HTMLInputElement,
		searchElements: HTMLElement[],
		options: Options
	) {
		this.searchBar = searchBar
		this.searchElements = searchElements

		this.initializeOptions(options)

		this.searchBar.addEventListener('input', () => this.inputHandler())
	}

	private initializeOptions(options: Options) {
		if (options?.capitalStrict) this.capitalStrict = true
		if (options?.hideMethod === 'visibility') this.hideMethod = 'visibility'
		if (options?.defaultDisplay) this.defaultDisplay = options.defaultDisplay
	}

	private inputHandler() {
		let inputText = this.searchBar.value
		if (!this.capitalStrict) inputText = inputText.toUpperCase()

		this.searchElements.forEach(element => {
			let elementText = element.innerText.trim()
			if (!this.capitalStrict) elementText = elementText.toUpperCase()

			if (elementText.includes(inputText)) {
				this.showElement(element)
			} else {
				this.hideElement(element)
			}
		})
	}

	private hideElement(element: HTMLElement) {
		if (this.hideMethod === 'display') {
			element.style.display = 'none'
		} else if (this.hideMethod === 'visibility') {
			element.style.visibility = 'hidden'
		}
	}

	private showElement(element: HTMLElement) {
		if (this.hideMethod === 'display') {
			element.style.display = this.defaultDisplay
		} else if (this.hideMethod === 'visibility') {
			element.style.visibility = 'visible'
		}
	}
}

export default SimpleSearch