# Awesome Hawaii Documentaries 🌺
A collection documentaries related to Hawaii

Live site: https://raybb.github.io/awesome-hawaii-documentaries/

<a href="https://www.producthunt.com/posts/awesome-hawaii-documentaries?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-hawaii-documentaries" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=270520&theme=light" alt="Awesome Hawaii Documentaries - The best documentaries of Hawaii with the style of the 90s | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

# Why

Before moving to Hawaii I wanted to watch documentaries to learn about the area. Unfortunately, Google, Amazon, Netflix, IMDB, and local library searches all lead to just a few documentaries. I knew there were more out there so I started compiling a list from more obscure sources.

I uploaded much of the data to [The Movie Database](https://www.themoviedb.org/) (TMDB) and ultimately decided to make a [Web 1.0](https://en.wikipedia.org/wiki/Web_2.0#Web_1.0) themed website with the data.

# Tech

Staying true to the theme of Web 1.0, this site has no frameworks or premade stylesheets. Just artisanally handcrafted CSS, HTML, and a tad of JavaScript. Admittedly, I used media queries, arrow functions, lazy loading, and other modern web features. Vue, React, and similar frontend frameworks are overused. Here is a nod to the simple ways.


## Lazy Choices

* Images are hotlinked from TMDB so if TMDB goes down we won't have photos anymore
* Hotlinked images are relatively large (~8MB total)
* Storing data in TSV so it is easy to copy from Google Sheets
* Not using Google Sheets api because: Web 1.0, easier data, don't want to depend on Google
* Hardcoding HTML string in the JavaScript

## Theme Switcher

Clicking the sun in the top left corner of the screen switches from Web 1.0 to Web 2.0. Feature was added after a friend who actually wanted to see the documentaries said that the Web 1.0 theme made his eyes bleed. The feature required adding a bunch of CSS variables to the previously simple CSS. I also didn't add the whole bootstrap CSS, which could cause repainting if loaded on button click, so I just reused the parts I needed.

## TMDB

The code in the `tmdb` folder was used to pull the address of images for movie covers. I don't anticipate using it again since new movie covers are easy to grab manually.

# Credits
* [Marley](https://github.com/ma8642) for making the [honeycreeper](https://en.wikipedia.org/wiki/Honeycreeper) pixel art.
* [Gimp](https://gimp.org) for the electric blue pattern used in background.
* [Hawaiian Voice](https://www.hawaiianvoice.com/) for many great movies.

# Contributing

* If you'd like to add a movie open an issue with relevant info
* If you'd like to convert this project to React fork away and we can compare results
