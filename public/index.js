fetch("./public/movies.tsv")
.then(async (response) => {
    const movieTSV = await response.text();
    const movieArray = tsvJSON(movieTSV);
    document.querySelector(".main").innerHTML += movieArray.map(movie => createMovieHtml(movie)).join("")
})

function createMovieHtml(movie) {
    const posterURL = movie.Poster ? "https://image.tmdb.org/t/p/original" + movie.Poster : "";
    let out = `
    <div class="movie">
        <div class="poster_container ${movie.Poster ? '' : 'gray_background'}">
            <img loading="lazy" class="movie_poster" src="${posterURL || ''}">
            <img class="bird" src="./public/honeycreeper.png">
        </div>
        <div class="description_and_links">
            <div class="full-width-center movie_title">${movie.Title}</div>
            <p class="movie_description">
                ${movie.Description}
            </p>
            <span class="movie_links">
                ${createMovieLinksHTML(getMovieLinks(movie))}
            </span>
        </div>
        <br>
    </div>
    `
    return out;
}
function getMovieLinks(movie) {
    let out = {}
    let toFind = ["TMDB", "Wikipedia", "IMDB", "JustWatch", "WorldCat"]
    toFind.forEach(linkType => {
        if (movie[linkType]?.includes("http")) {
            out[linkType] = movie[linkType]
        }
    })
    return out;
}
function createMovieLinksHTML(movieLinks) {
    let keys = Object.keys(movieLinks);
    let anchors = keys.map(key => {
        return `<a href="${movieLinks[key]}">${key}</a>`
    })
    return anchors.join(" | ");
}
function tsvJSON(tsv) {
    /*
    Taken from this handy dandy gist: https://gist.github.com/iwek/7154706
    */
    return tsv.split('\n')
        .map(line => line.split('\t'))
        .reduce((a, c, i, d) => {
            if (i) {
                const item = Object.fromEntries(c.map((val, j) => [d[0][j], val]))
                return a ? [...a, item] : [item]
            }
        }, [])
}