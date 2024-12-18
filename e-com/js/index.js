import {productData,categoryData} from "../data/sample.js"

function renderProduct(productArray){
    let products="";
    for(let productItem of productArray){
        let product =`
        <div class="product-card">
            <div class="top-card-container">
                <span class="discount-badge">${productItem.discount}</span>
                <div class="image-container">
                    <img src="${productItem.image}" alt="${productItem.title}">
                </div>
                <div class="icons">
                    <span class="icon heart">&hearts;</span>
                    <span class="icon eye">&#128065;</span>
                </div>
                
            </div>

            <!-- Product Details -->
            <div class="product-info">
            <h3 class="product-title">${productItem.title}</h3>
            <div class="price">
                <span class="current-price">$${productItem.currentPrice}</span>
                <span class="original-price">$${productItem.originalPrice}</span>
            </div>
            <div class="rating">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span class="reviews">(${productItem.reviews})</span>
            </div>
            </div>
        </div>
        
        `
        products +=product
    }
    
    document.getElementById("product-container").innerHTML = products
    document.getElementById("best-selling-products").innerHTML = products


}

renderProduct(productData)

function renderCategory(arr){
    let categories = ""
    for(let categoryItem of arr){
        let category =`
            <button class="category-tab">
                <div class="category-tab__icon">
                    <img src="${categoryItem.icon}" />
                </div>
                <p class="category-tab__label">${categoryItem.label}</p>
            </button>
        `
        categories +=category
    }
    document.getElementById("categories-container").innerHTML = categories

}

renderCategory(categoryData)