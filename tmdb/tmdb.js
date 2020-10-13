/*
Small script to get poster urls from TMDB
This isn't really needed since any additions could be done manually
*/
const API_KEY = "";
const axios = require('axios');

let urls = 
`https://www.themoviedb.org/movie/272895-the-women-and-the-waves


https://www.themoviedb.org/movie/725305-paniolo-o-hawai-i-cowboys-of-the-far-west


https://www.themoviedb.org/movie/717304-kama-aina`

async function main(){
    let ids = [];
    let urlsSplit = urls.split("\n")
    for (let i = 0; i < urlsSplit.length; i++){
        let id = await getTMDBPoster(urlsSplit[i]);
        ids.push(id)
    }

    console.log(ids.join("\n"));
}

main()

async function getTMDBPoster(url){
    if (url.includes("/tv/")){
        return await getTvPoster(url)
    } else {
        return await getMoviePoster(url)
    }
}

async function getTvPoster(showURL){
    // Example url
    //showURL = "https://www.themoviedb.org/tv/97099-earth-s-tropical-islands/season/1/episode/3"
    let parts = showURL.split("/")
    let tvID = parts[4];

    const requestURL = `https://api.themoviedb.org/3/tv/${tvID}?api_key=${API_KEY}&language=en-US`

    await axios.get(requestURL)
    .then(function (response) {
    posterPath = response.data.poster_path
    console.log("poster path: ", posterPath);
    })
    .catch(function (error) {
    console.log(error);
    })
    return posterPath;
}

async function getMoviePoster(movieURL){
    // example movie url
    //movieURL = "https://www.themoviedb.org/movie/723194-hidden-hawaii-national-parks-collection"
    let parts = movieURL.split("/")
    let movieID = parts[parts.length - 1];
    const requestURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`
    let posterPath = "ERROR";
    
    await axios.get(requestURL)
    .then(function (response) {
    posterPath = response.data.poster_path
    console.log("poster path: ", posterPath);
    })
    .catch(function (error) {
    console.log(error);
    })
    return posterPath;
}