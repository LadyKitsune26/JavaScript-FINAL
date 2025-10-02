const moviesWrapper = document.querySelector(`.movies`)


function searchChange(event){
    renderMovies(event.target.value)
}

async function renderMovies(searchTerm){
    console.log(`This is the searchTerm`,searchTerm);
const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=3dd6eeee`)
const data = await response.json();
const moviesArr = data.Search;
moviesWrapper.innerHTML = moviesArr.slice(0, 10).map((movie) => {
    return `<div class="movie">
    <img class="movie__poster" src="${movie.Poster}" alt="${movie.Title}"/>
    <h2 class="movie__titles">${movie.Title}</h2>
    <h4>${movie.Year}</h4>
    <button class="btn search__btn"> Learn More </button>
    </div>`
}).join(``)


}




// fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3dd6eeee`)