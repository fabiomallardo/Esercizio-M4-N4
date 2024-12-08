let url = 'https://striveschool-api.herokuapp.com/books';

document.addEventListener('DOMContentLoaded', function() {
ottienifetch();
})


const ottienifetch = () => {
fetch(url)
  .then(response => {
    if (!response.ok) { // Controlla se la risposta HTTP non è OK (status 200-299)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Converte la risposta in JSON solo se è valida
  })
  .then(data => {
    let res = data; // Supponendo che `data` sia un array di oggetti libro
    console.log(res);
    
    let cont = document.querySelector('#productContainer');
    cont.innerHTML = res
      .map((book) => {
        return `
          <div class="col-lg-3 col-md-4 col-sm-6"> 
            <div class="card mb-4 shadow-sm" id="book_${book.asin}">
              <img src="${book.img}" class="card-img-top" alt="${book.name}">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">
                  <strong class="text-danger ms-2">€${book.price}</strong>
                  <span class="badge bg-danger text-uppercase ms-2">${book.category}</span>
                  <span class="ms-2">ASIN: ${book.asin}</span>
                </p>
              </div>
              <div class='d-flex align-items-center justify-content-between'>
                <a href="#" class="btn btn-primary btn-sm"> Aggiungi al carrello </a>
                <a href="#" class="btn btn-primary btn-sm"> Rimuovi prodotto </a>
              </div>
            </div>
          </div>`;
      })
      .join(''); // Usa `.join('')` per evitare virgole tra gli elementi
    
    })
  .catch(error => {
    console.error('Errore:', error); // Gestisce gli errori
  });
}



