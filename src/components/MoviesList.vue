<template>
<div class="movies-wrapper">
  <h1>{{ title }}</h1>
  <ul v-if="movies && movies.length" class="movies">
    <li v-for="movie in movies" :movie="movie.id" v-bind:key="movie.id" class="movie">
        <router-link :to="{name : 'MovieSingle', params : {id : movie.id}, hash :'#movieId'}">
          <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" v-bind:alt="movie.title">
        </router-link>
        <div class="content">
          <p class="title link"><strong>
            <router-link :to="{name : 'MovieSingle', params : {id : movie.id}}">
              {{movie.title}}
            </router-link>
          </strong></p>
          <p class="year">{{ $filters.formateDate(movie.release_date) }}</p>
        </div>
    </li>
  </ul>
</div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    name: "MoviesList",

    data(){
        return {
            title: 'Recommended by OMDB',
            baseUrl: 'https://api.themoviedb.org/3',
            movies: [],
            errors: []
        }
    },

    // Fetches movies
    created() {
        // get movies
        axios.get(this.baseUrl + '/list/7069224?api_key=' + process.env.VUE_APP_TMDB_API_KEY)
        .then(response => {
          this.movies = response.data.items
          // console.log(response.data.items);
        })
        .catch(e => {
          this.errors.push(e)
          console.error("There was an error!", e);
        })
    },

}

</script>

<style lang="scss" scoped>
.movies-wrapper {
  margin-top: 3rem;
  h1 {
    text-align: center;
  }
  .movies {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    .movie {
      margin: 2rem 1rem;
      img {
        max-width: 250px;
      }
      .title {
        max-width: 250px;
      }
      .year {
        font-weight: bold;
      }
    }
  }
}
.link, a {
  color: #37b282;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>