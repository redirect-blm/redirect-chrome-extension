class Scraper {
    constructor(document) {
        this.document = document
    }
    // get the page title, or return home if the title corresponds to the home page
    get page() {
        const title = this.document.getElementsByTagName('title')[0].innerText.replace(/Amazon.com: /, '')
        return /Online Shopping for/.test(title) ? 'Home' : title
    }
    // get the category selected in the dropdown selector on the home page
    get category() {
        const dropDown = document.getElementById('searchDropdownBox')
        if (!dropDown) return null
        const options = dropDown.getElementsByTagName('option');
        const selectedIndex = dropDown.selectedIndex;
        // defaults to 0, so returns false if category is all
        return !!selectedIndex && options[selectedIndex].innerText
    }
    // get a list of the brands on the page
    get brands() {
        const { document } = this;
      // some pages have a list of brands in a descriptive div
      // the brand div contains a UL and each list item has an id equal to something like p_89/Nike (p_###/<productname>)
        const easyBrandItems = !!document.getElementById('brandsRefinements') && document.getElementById('brandsRefinements').getElementsByTagName('li')
        if (easyBrandItems) return [...easyBrandItems].map(({ innerText }) => innerText.replace(/\w_\d.\//,""))
      // some pages have a a list of brands under a div with no id, where each brand is in an LI
      // the brand name is contained in the aria-label property of the li element
        const ariaLabelBrandItems = [...document.getElementsByTagName('li')].filter(_l => _l.ariaLabel)
        if (ariaLabelBrandItems.length) return ariaLabelBrandItems.map(_l => _l.ariaLabel)
      // some pages have brands as a list of anchor tags under a h3 with no id or class (xD?)
        const headers = document.getElementsByTagName('h3')
        const brandHeader = [...headers].filter(_h => _h.innerText === 'Featured Brands')[0]
        const anchorBrandList = !!brandHeader && [...brandHeader.nextSibling.getElementsByTagName('a')].map(_a => _a.innerText)
        if (anchorBrandList) return anchorBrandList;
        return null
    }
    // use this to get the user's search term typed into the input box
    get searchTerm() {
        const { document } = this;
        const input = document.getElementById('twotabsearchtextbox')
        return !!input && input.value;
    }
}

module.exports = {
    Scraper
}