// Rendering
const renderProduct = product => {
    const div = document.createElement("div")
    div.style.backgroundColor = product.color

    const h3 = document.createElement("h3")
    h3.innerText = product.name

    const img = document.createElement("img")
    img.src = product.thumb

    const priceP = document.createElement("p")
    priceP.innerText = `£${product.price}`

    div.append(h3, img, priceP)

    div.addEventListener("click", () => {
        selectProduct(product)
    })

    productsContainer.append(div)
}

const renderProducts = productsToRender => {
    productsContainer.innerText = ""
    productsToRender.forEach(product => {
        renderProduct(product)
    }) 
}

const renderColors = (colors) => {
    colors.forEach(color => {
        const label = document.createElement("label")
        label.innerText = color
        label.style.backgroundColor = color
        const input = document.createElement("input")
        input.type = "checkbox"
        input.value = color
        
        label.append(input)

        colorsCheckboxesContainer.append(label)
    })
}

const renderCategories = (categories) => {
    categories.forEach(category => {
        const label = document.createElement("label")
        label.innerText = category

        const input = document.createElement("input")
        input.type = "checkbox"
        input.value = category
        
        label.append(input)

        categoriesCheckboxesContainer.append(label)
    })
}

const renderProductDetails = product => {
    console.log("RENDER PRODUCT DETAILS", product)

    productName.innerText = product.name
    productPrice.innerText = `£${product.price}`

    let imageIndex = 0

    productImage.src = product.images[imageIndex]

    if (cart.map(p => p.id).includes(product.id)) {
        addToCartButton.innerText = "Remove from cart"
    } else {
        addToCartButton.innerText = "Add to cart"
    }

    // ALWAYS ADDING
    // addToCartButton.addEventListener("click", () => {
    //     addToCart(product)
    // })

    addToCartButton.onclick = () => {
        addToCart(product)
    }

    carouselRightButton.onclick = () => {
        imageIndex++
        if (imageIndex > product.images.length - 1) {
            imageIndex = 0
        }
        console.log("NEXT IMAGE", imageIndex)
        productImage.src = product.images[imageIndex]
    }

    carouselLeftButton.onclick = () => {
        imageIndex--
        if (imageIndex < 0) {
            imageIndex = product.images.length - 1
        }
        console.log("PREV IMAGE", imageIndex)
        productImage.src = product.images[imageIndex]
    }

}

const renderNewCartSize = () => {
    cartEl.innerText = `Cart: ${cart.length}`
}