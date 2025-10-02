const moviesWrapper = document.querySelector


function searchChange(event){
    console.log(event.target.value);
}

async function renderMovies(){
const response = await fetch(`http://www.omdbapi.com/?s=fast&apikey=3dd6eeee`)
const data = await response.json();
const moviesArr = data.Search;


}

renderMovies()



// fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3dd6eeee`)