<template>
  <div>
    <router-link to="/" class="back">
      <font-awesome-icon icon="arrow-left" id="arrow-icon"/>
    </router-link>
    <div class="movie">
      <div class="poster" id="movieId">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="poster" />
      </div>
      <div class="info">
          <h1>{{ movie.title }}</h1>
          <p class="score">{{ movie.vote_average }}</p>
          <p class="summary">{{ movie.overview }}</p>
          <p class="date"><span>Release date: </span> {{ movie.release_date }}</p>
          <p class="genres"
              v-if="movie.genres"
            ><span>Genres: </span>{{ Array.prototype.map.call(movie.genres, function(item) { return item.name; }).join(", ") }}</p>
          <p class="countries"
              v-if="movie.production_countries"
            ><span>Countries: </span>{{ Array.prototype.map.call(movie.production_countries, function(item) { return item.name; }).join(", ") }}
            </p>
          <div class="feature">
            <div class="credits" >
              <div class="row">
                <h3>Crew</h3>
                <div class="crew" v-for="crew in crew.slice(0,6)" :key="crew.credit_id">
                  <div><span class="job">{{ crew.job }} </span> {{ crew.name }}</div>
                </div>
              </div>
              <div class="row">
                <h3>Cast</h3>
                <div class="cast" v-for="cast in cast.slice(0,10)" :key="cast.credit_id">
                  <div><span class="role">{{ cast.character }} </span> {{ cast.name }}</div>
                </div>
              </div>  
            </div>
          </div> 
      </div>
    </div>
        <router-view />

  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'MovieSingle',
    // props: 'movie_id',

    data(){
        return {
            baseUrl: 'https://api.themoviedb.org/3',
            movie: [],
            cast: [],
            crew: [],
            errors: [],
        }
    },

    // Fetches movies
    created() {
      axios.all([
        // get movie info
        axios.get(this.baseUrl + '/movie/' + this.$route.params.id + '?api_key=' + process.env.VUE_APP_TMDB_API_KEY)
        .then(response => {
          this.movie = response.data
          // console.log(response.data);
        })
        .catch(e => {
          this.errors.push(e)
          console.error("There was an error!", e);
        }),
        // get movie credits
        axios.get(this.baseUrl + '/movie/' + this.$route.params.id + '/credits?api_key=' + process.env.VUE_APP_TMDB_API_KEY)
        .then(response => {
          this.crew = response.data.crew;
          this.cast = response.data.cast;
          // console.log(response.data);
        })
        .catch(e => {
          this.errors.push(e)
          console.error("There was an error!", e);
        })
      ])
    }

}
</script>

<style lang="scss" scoped>
.back {
  display: flex;
  justify-content: flex-start;
  font-size: 1.5em;
  margin: 1rem;
  color: #37b282;
}
.movie {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 3rem;
  .poster {
    img {
      max-width: 100%;
      width: 25rem;
    }
  }
  .info {
    max-width: 60%;
    .score {
      color: #F9A03F;
      font-weight: bold;
      text-align: center;
      font-size: 2em;
      border: 1px solid #F9A03F;
      width: 50px;
      border-radius: 50%;
      padding: 15px;
    }
    .date span, .countries span, .genres span, .crew span, .cast span {
      font-weight: bold;
    }
  }
}

@media (max-width: 769px) {
  .movie {
    flex-direction: column;
    margin: 2rem 1rem;
    .info {
      max-width: 100%;
    }
  }
}
</style>