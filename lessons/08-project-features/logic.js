
const cart = localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")) : [];

const addToCart = (product) => {
    if (cart.map(p => p.id).includes(product.id)) {
        console.log("REMOVE FROM CART", product)
        cart.splice(cart.indexOf(product), 1)
    } else {
        console.log("ADD TO CART", product)
        cart.push(product)
    }

    if (cart.map(p => p.id).includes(product.id)) {
        addToCartButton.innerText = "Remove from cart"
    } else {
        addToCartButton.innerText = "Add to cart"
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    renderNewCartSize()
}

const selectProduct = (product) => {
    // console.log("SELECT PRODUCT", product)
    productsContainer.style.display = "none"
    productDetailsContainer.style.display = "block"

    renderProductDetails(product)
}

const deselectProduct = () => {
    console.log("DESELECT PRODUCT")
    productDetailsContainer.style.display = "none"
    productsContainer.style.display = "flex"
}

const applyFilters = (priceFrom, priceTo, selectedColors, selectedCategories) => {
    console.log("APPLY FILTERS", priceFrom, priceTo, selectedColors, selectedCategories)

    const filteredProducts = products.filter(product => {
        // return true or false
        if (product.price >= priceFrom && product.price <= priceTo) {
            return true
        } else {
            return false
        }
    }).filter(product => {
        // return true or false
        if (selectedColors.length === 0 || selectedColors.includes(product.color)){
            return true
        } else {
            return false
        }
    }).filter(product => {
        if (selectedCategories.length === 0 || selectedCategories.includes(product.category)) {
            return true
        } else {
            return false
        }
    })

    renderProducts(filteredProducts)
}

const applySortOption = (sortOption) => {
    if (sortOption === "DEFAULT") {
        products.sort((a, b) => {
            return a.id - b.id
        })
    } else if (sortOption === "PRICE_ASC") {
        products.sort((a, b) => {
            return a.price - b.price
        })
    } else if (sortOption === "PRICE_DES") {
        products.sort((a, b) => {
            return b.price - a.price
        })
    }
}

const createFilterObject = () => {
    let from = parseInt(fromPriceRangeInput.value)
    let to = parseInt(toPriceRangeInput.value)

    if (!from) {
        from = 0
    }
    if (!to) {
        to = highestProductPrice;
    }

    const selectedColors = []

    colorsCheckboxesContainer.querySelectorAll("input:checked").forEach(colorCheckbox => {
        selectedColors.push(colorCheckbox.value)
    })

    const selectedCategories = []

    categoriesCheckboxesContainer.querySelectorAll("input:checked").forEach(categoryCheckbox => {
        selectedCategories.push(categoryCheckbox.value)
    })

    return {
        from: from,
        to: to,
        selectedColors: selectedColors,
        selectedCategories: selectedCategories
    }
}