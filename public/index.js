function main(){
    /*
    Everything that should run when page loads
    */
    fetch("./public/movies.tsv")
    .then(async (response) => {
        const movieTSV = await response.text();
        const movieArray = tsvJSON(movieTSV);
        document.querySelector(".main").innerHTML += movieArray.map(movie => createMovieHtml(movie)).join("");
    })
    document.body.querySelector("#theme-button").onclick = toggleTheme;
}

function createMovieHtml(movie) {
    /*
    Input: A movie json that has been converted from TSV.
    Output: Full HTML of a movie
    */
    const posterURL = movie.Poster ? "https://image.tmdb.org/t/p/original" + movie.Poster : "";
    const greyBackgroundClass = movie.Poster ? '' : 'gray-background'; // Only add grey background if there is no poster
    const movieLinksHTML = createMovieLinksHTML(getMovieLinks(movie));
    const movieHTML = `
    <div class="movie">
        <div class="poster-container ${greyBackgroundClass}">
            <img loading="lazy" class="movie-poster" src="${posterURL}">
            <img class="bird" src="./public/honeycreeper.png">
        </div>
        <div class="movie-info-container">
            <div class="full-width-center h4">${movie.Title}</div>
            <p class="movie-description">${movie.Description}</p>
            <span class="movie-links">
                ${movieLinksHTML}
            </span>
        </div>
    </div>
    `
    return movieHTML;
}

function getMovieLinks(movie) {
    /*
    Input: A movie json that has been converted from TSV.
    Output: A map with source as key and url as value.
    */
    let out = {};
    const sources = ["TMDB", "Wikipedia", "IMDB", "JustWatch", "WorldCat"]
    sources.forEach(source => {
        if (movie[source].includes("http")) {
            out[source] = movie[source];
        }
    })
    return out;
}

function createMovieLinksHTML(movieLinks) {
    /*
    Input: A map with source as key and url as value.
    Output: String of HTML with | separated anchors for each link;
    */
    const sources = Object.keys(movieLinks);
    const anchors = sources.map(source => {
        return `<a href="${movieLinks[source]}">${source}</a>`
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
        }, []);
}

function toggleTheme() {
    /*
    Switches from the Web 1.0 theme to the beautiful bootstrap theme.
    Also, sends an event to Google that the button was clicked.
    */
    const oldThemeClass = "theme-old-web";
    const newThemeClass = "theme-bootstrap";
    const bodyClasses = document.body.classList;
    const eventLabel = bodyClasses.contains(oldThemeClass) ? 'to New Theme' : 'to Old Theme';

    bodyClasses.toggle(oldThemeClass);
    bodyClasses.toggle(newThemeClass);
    document.querySelectorAll(".movie").forEach(m => m.classList.toggle("card"));

    gtag('event', 'Toggle Theme', {'event_label': eventLabel})
}

main();