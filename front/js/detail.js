const detailProduct = document.querySelector('#detailProduct')

const getProduct = async () => {
    const url = new URLSearchParams(window.location.search)
    const id = url.get('idproducto')

    try {
        let response = await fetch(`http://localhost:3008/api/productos/${id}`)
        let producto = await response.json()
        if(producto) return producto
    } catch (err) {
        alert('No existe el producto' + err)
    }
    
}

const renderDetail = (producto) => {
    const {nombre, descripcion, precio, imagen, categoria} = producto
    detailProduct.innerHTML = `
<div class="container">

        <div class="product-slides">

            <div class="slider-banner" data-slider>
              <figure class="product-banner">
                <img src="../${imagen}" width="600" height="600" loading="lazy" alt="Nike Sneaker"
                  class="img-cover">
              </figure>
            </div>

            <button class="slide-btn prev" aria-label="Previous image" data-prev>
              <ion-icon name="chevron-back" aria-hidden="true"></ion-icon>
            </button>

            <button class="slide-btn next" aria-label="Next image" data-next>
              <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
            </button>

          </div>

          <div class="product-content">

            <p class="product-subtitle">${categoria}</p>

            <h1 class="h1 product-title">${nombre}</h1>

            <p class="product-text">${descripcion}</p>

            <div class="wrapper">

              <span class="price" data-total-price>$${precio}</span>

              <span class="badge">50%</span>

              <del class="del">$250.00</del>

            </div>

            <div class="btn-group">

              <div class="counter-wrapper">

                <button class="counter-btn" data-qty-minus>
                  <ion-icon name="remove-outline"></ion-icon>
                </button>

                <span class="span" data-qty>1</span>

                <button class="counter-btn" data-qty-plus>
                  <ion-icon name="add-outline"></ion-icon>
                </button>

              </div>

              <button class="cart-btn">
                <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                <span class="span">Add to cart</span>
              </button>

            </div>

        </div>

</div
    `
}

document.addEventListener('DOMContentLoaded', async () => {
    let producto = await getProduct()
    console.log(producto)
    renderDetail(producto)
})

getProduct()