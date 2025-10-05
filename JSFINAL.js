const moviesWrapper = document.querySelector(`.movies`)


function searchChange(event){
    renderMovies(event.target.value)
}

let currentMovies = []

async function renderMovies(searchTerm){
    console.log(`This is the searchTerm`,searchTerm);
const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=3dd6eeee`)
const data = await response.json();
currentMovies = data.Search;
    displayMoives(currentMovies)
}

function displayMoives(moviesList){
    moviesWrapper.innerHTML = moviesList.slice(0, 10).map((movie) => {
    return `<div class="movies">
    <img class="movie__poster" src="${movie.Poster}" alt="${movie.Title}"/>
        <div class="movie__info">
            <h2 class="movie__titles">${movie.Title}</h2>
            <h4 class="movie__year">${movie.Year}</h4>
            <button class="btn search__btn"> Learn More </button>
        </div>
    </div>`
}).join(``)
}

function sortChange(event){
    const sortOption = event.target.value
    let sortedMovies = [...currentMovies]

    if(sortOption === "newest"){
        const sortedMovies = currentMovies.sort((a,b) => b.Year - a.Year)
        displayMoives(sortedMovies)
    }
    else if (sortOption === "oldest"){
        const sortedMovies = currentMovies.sort((a,b) => a.Year - b.Year)
        displayMoives(sortedMovies)
    }
}







// fetch(`http://www.omdbapi.com/?s=tt3896198&apikey=3dd6eeee`)