function searchChange(){
    console.log(event.target.value);
}

async function renderMovies(){
const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3dd6eeee`)
const data = await response.json();
console.log(data.Search);
}

renderMovies()



// fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3dd6eeee`)