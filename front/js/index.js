const $ = document;
const contenido = $.querySelector('#contenido')

const newCard = ({nombre, descripcion, precio, imagen, id}) => {
    return `
            <div class="card" id="${id}">
            <img src="${imagen}" class="imagen-curso u-full-width">
            <div class="info-card">
                <h4>${nombre}</h4>
                <p>${descripcion.slice(0,40)}...</p>
                <img src="img/estrellas.png">
                <p class="precio"><span class="u-pull-left">$${precio} MXN</span></p>
                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${id}">Agregar Al Carrito</a>
            </div>
    `
}

const renderCards = (array) => {
    contenido.innerHTML += '';
    array.map(item => {
        contenido.innerHTML += newCard(item);
    })
}

const handleDetailCard = () => {
    
}

const addClickDetailCard = () => {
    const cards = $.querySelectorAll('.card');
    cards.forEach((card) => card.addEventListener('click', handleDetailCard ) )
}

const getAll = async () => {
    try {
        const response = await fetch('http://localhost:3008/api/productos')
        
        if(response.status !== 200) throw new Error('Error en la solicitud')
        const data = await response.json();
        renderCards(data);
        
    } catch (error){
        alert('Error' + error)
    }
}

$.addEventListener('DOMContentLoaded', async () => {
    await getAll();
    addClickDetailCard();
})

