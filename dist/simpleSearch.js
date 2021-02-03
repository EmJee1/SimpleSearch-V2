class SimpleSearch {
    constructor(searchBar, searchElements, options) {
        this.capitalStrict = false;
        this.hideMethod = 'display';
        this.defaultDisplay = 'block';
        this.minimumChars = 3;
        this.typingTimeout = 1800;
        this.currentTypingTimeout = undefined;
        this.searchBar = searchBar;
        this.searchElements = searchElements;
        this.initializeOptions(options);
        this.searchBar.addEventListener('input', () => this.inputHandler());
    }
    initializeOptions(options) {
        if (options === null || options === void 0 ? void 0 : options.capitalStrict)
            this.capitalStrict = true;
        if (options === null || options === void 0 ? void 0 : options.hideMethod)
            this.hideMethod = options.hideMethod;
        if (options === null || options === void 0 ? void 0 : options.defaultDisplay)
            this.defaultDisplay = options.defaultDisplay;
        if (options === null || options === void 0 ? void 0 : options.minimumChars)
            this.minimumChars = options.minimumChars;
        if (options === null || options === void 0 ? void 0 : options.typingTimeout)
            this.typingTimeout = options.typingTimeout;
    }
    inputHandler() {
        if (this.currentTypingTimeout) {
            clearTimeout(this.currentTypingTimeout);
            this.currentTypingTimeout = undefined;
        }
        this.currentTypingTimeout = setTimeout(() => {
            let inputText = this.searchBar.value;
            if (!this.capitalStrict)
                inputText = inputText.toUpperCase();
            if (inputText.length < this.minimumChars) {
                this.showAll();
                return;
            }
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
        }, this.typingTimeout);
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
    showAll() {
        this.searchElements.forEach(element => (element.style.display = this.defaultDisplay));
    }
}
export default SimpleSearch;
