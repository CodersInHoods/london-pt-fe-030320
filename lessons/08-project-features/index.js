// DOM elements
const productsContainer = document.querySelector("#products")
const filtersContainer = document.querySelector("#filters")
const cartEl = document.querySelector("#cart")
const colorsCheckboxesContainer = filtersContainer.querySelector("#colors")
const categoriesCheckboxesContainer = filtersContainer.querySelector("#categories")
const applyFiltersButton = filtersContainer.querySelector("button")
const fromPriceRangeInput = filtersContainer.querySelector("input[name='from']")
const toPriceRangeInput = filtersContainer.querySelector("input[name='to']")
const sortOptionsContainer = document.querySelector("#sort-options")
const sortOptionInputs = sortOptionsContainer.querySelectorAll("input")

const productDetailsContainer = document.querySelector("#product-details")
const backButton = productDetailsContainer.querySelector("#back")
const carousel = productDetailsContainer.querySelector(".carousel")
const carouselLeftButton = carousel.querySelector("button:nth-of-type(1)")
const carouselRightButton = carousel.querySelector("button:nth-of-type(2)")
const productImage = carousel.querySelector("img")
const productName = productDetailsContainer.querySelector("h3")
const addToCartButton = productDetailsContainer.querySelector("#add-to-cart")
const productPrice = productDetailsContainer.querySelector("p:nth-of-type(1)")
const productDescription = productDetailsContainer.querySelector("p:nth-of-type(2)")
const productColor = productDetailsContainer.querySelector("p:nth-of-type(3)")
const productCategory = productDetailsContainer.querySelector("p:nth-of-type(4)")


// Product info
const highestProductPrice = [...products].sort((a, b) => b.price - a.price)[0].price;
const uniqueColors = products.map(p => p.color)
const uniqueCategories = [...new Set(products.map(p => p.category))]

// Add event listeners
applyFiltersButton.addEventListener("click", () => {
    console.log("APPLY FILTERS")

    const filterObject = createFilterObject()

    console.log("FILTER OBJECT", filterObject)

    applyFilters(filterObject.from, filterObject.to, filterObject.selectedColors, filterObject.selectedCategories)
})

sortOptionsContainer.addEventListener("change", (event) => {
    console.log("CHANGE OF SORT TYPE", event.target.value)
    applySortOption(event.target.value)

    const filterObject = createFilterObject()

    console.log("FILTER OBJECT", filterObject)

    applyFilters(filterObject.from, filterObject.to, filterObject.selectedColors, filterObject.selectedCategories)
})

backButton.addEventListener("click", () => {
    deselectProduct()
})

// Initialise page
renderNewCartSize()

renderProducts(products)

renderColors(uniqueColors)
renderCategories(uniqueCategories)