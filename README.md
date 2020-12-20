# Omdb - Open Movie Database

## Description

Assignment for taking part of project EVI360 as frontend developer.

### Instructions

Create a client for the Open Movie Database (OMDb) API, available on http://omdbapi.com. The app must implement this functionality:
• Search movies by title
• Present the result of the search on a list; each element on the list
• Must have a thumb image of the movie, if available
• Movie title, year and director
• The user can request a detail view of the movie, pressing on the
result list item and showing the details of the movie with the following: • The poster of the movie on big size, if available
• Details about the movie.

### Improvements

I decided to use The Movie DB API, available at https://developers.themoviedb.org/ instead of OMDB because none of the images are available and each movie should be fetched individually. 
As the goal of this assignment is assessing my skills, I took the freedom to use a better API to realise a better web application. 
## Stack

* Vue.js / Vue CLI V3
* Axios
* Sass

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Copy .env.example to .env and add your OMDB API
```
VUE_APP_TMDB_API_KEY=your_api
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
