# awesome-hawaii-documentaries
A collection documentaries related to Hawaii

Live site: https://raybb.github.io/awesome-hawaii-documentaries/

# Why

Before moving to Hawaii I wanted to watch documentaries to learn about the area. Unfortunately, Google/Amazon/Netflix/IMDB/Library searches all lead to just a few documentaries. I knew there were more out there so I started compiling a list from more obscure sources.

I uploaded much of the data to [The Movie Database](https://www.themoviedb.org/) (TMDB) and ultimately decided to make a [Web 1.0](https://en.wikipedia.org/wiki/Web_2.0#Web_1.0) themed website with the data.

# Tech

Staying true to the theme of Web 1.0, this site has no frameworks or premade stylesheets. Just artisanally handcrafted CSS, HTML, and a tad of JavaScript. Admittedly, I used media queries, arrow functions, lazy loading, and other modern web features. Vue, React, and similar frontend frameworks are often overused so here's a nod to the simple ways.


## Lazy Choices

* Images are hotlinked from TMDB so if TMDB goes down we won't have photos anymore
* Hotlinked images are relatively large (~8MB total)
* Storing data in TSV so it is easy to copy from Google Sheets
* Not using Google Sheets api because: Web 1.0, easier data, don't want to depend on Google
* Hardcoding HTML in the JavaScript makes things a bit more fragile

## tmdb

The code in the `tmdb` folder is JavaScript used to pull the address of images for movie covers. I don't anticipate using this since they're relatively easy to grab manually when adding a movie.

# Credits
- [Marley](https://twitter.com/marley_alford) for making the [honeycreeper](https://en.wikipedia.org/wiki/Honeycreeper) pixel art.
- [Gimp](https://gimp.org) for the electric blue pattern used in background.
* [Hawaiian Voice](https://www.hawaiianvoice.com/) for many great movies.

# Contributing

* If you'd like to add a movie open an issue with relevant info
* If you'd like to convert this project to React fork away and we can compare results
