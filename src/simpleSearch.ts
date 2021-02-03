interface Options {
	capitalStrict?: boolean
	hideMethod?: 'display' | 'visibility'
	minimumChars?: number
	typingTimeout?: number
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
	private minimumChars: number = 3
	private typingTimeout: number = 800
	private currentTypingTimeout: number | undefined = undefined

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
		if (options?.hideMethod) this.hideMethod = options.hideMethod
		if (options?.defaultDisplay) this.defaultDisplay = options.defaultDisplay
		if (options?.minimumChars) this.minimumChars = options.minimumChars
		if (options?.typingTimeout) this.typingTimeout = options.typingTimeout
	}

	private inputHandler() {
		if (this.currentTypingTimeout) {
			clearTimeout(this.currentTypingTimeout)
			this.currentTypingTimeout = undefined
		}

		this.currentTypingTimeout = setTimeout(() => {
			let inputText = this.searchBar.value
			if (!this.capitalStrict) inputText = inputText.toUpperCase()

			if (inputText.length < this.minimumChars) {
				this.showAll()
				return
			}

			this.searchElements.forEach(element => {
				let elementText = element.innerText.trim()
				if (!this.capitalStrict) elementText = elementText.toUpperCase()

				if (elementText.includes(inputText)) {
					this.showElement(element)
				} else {
					this.hideElement(element)
				}
			})
		}, this.typingTimeout)
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

	private showAll() {
		this.searchElements.forEach(
			element => (element.style.display = this.defaultDisplay)
		)
	}
}

export default SimpleSearch