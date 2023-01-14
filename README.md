# BluLib (BLUtoLIBrary)
An HTML JavaScript website/webapp library used by me
(This isn't really meant to be a publically availible thing; This is basically just a lite version of [ReactJS](https://reactjs.org/))

## Main Usage
HTML:
```html
<body>
  <input id="search-bar"></input>
  <button id="search-button">SEARCH</button>
</body>
```

JavaScript:
```js
// Refers to elements with ids 'search-bar' & 'search-button'
var SearchBar = new Elem("search-bar")
var SearchButton = new Elem("search-bar")

// Better event syntax
SearchButton.on(e => {
  // Can access properties
  print(SearchBar.value)
})
```
