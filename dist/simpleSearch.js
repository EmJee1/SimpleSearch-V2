class SimpleSearch {
    constructor(searchBar, searchElements, options) {
        this.capitalStrict = false;
        this.hideMethod = 'display';
        this.defaultDisplay = 'block';
        this.searchBar = searchBar;
        this.searchElements = searchElements;
        this.initializeOptions(options);
        this.searchBar.addEventListener('input', () => this.inputHandler());
    }
    initializeOptions(options) {
        if (options === null || options === void 0 ? void 0 : options.capitalStrict)
            this.capitalStrict = true;
        if ((options === null || options === void 0 ? void 0 : options.hideMethod) === 'visibility')
            this.hideMethod = 'visibility';
        if (options === null || options === void 0 ? void 0 : options.defaultDisplay)
            this.defaultDisplay = options.defaultDisplay;
    }
    inputHandler() {
        let inputText = this.searchBar.value;
        if (!this.capitalStrict)
            inputText = inputText.toUpperCase();
        this.searchElements.forEach(element => {
            let elementText = element.innerText.trim();
            if (!this.capitalStrict)
                elementText = elementText.toUpperCase();
            if (elementText.includes(inputText)) {
                this.showElement(element);
            }
            else {
                this.hideElement(element);
            }
        });
    }
    hideElement(element) {
        if (this.hideMethod === 'display') {
            element.style.display = 'none';
        }
        else if (this.hideMethod === 'visibility') {
            element.style.visibility = 'hidden';
        }
    }
    showElement(element) {
        if (this.hideMethod === 'display') {
            element.style.display = this.defaultDisplay;
        }
        else if (this.hideMethod === 'visibility') {
            element.style.visibility = 'visible';
        }
    }
}
export default SimpleSearch;
