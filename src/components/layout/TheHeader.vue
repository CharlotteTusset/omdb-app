<template>
  <header>
    <nav class="navbar">
      <router-link to="/">
        <img alt="Vue logo" src="../../assets/logo.png" class="logo">
      </router-link>
      <div class="search"> 
        <input 
          type="text" 
          class="search-input" 
          id="query" 
          placeholder="Search for a movie"
          v-model="keyword"  
          @input="search"
        />
        <font-awesome-icon icon="search" id="icon-search"/>
        <div class="search-list" v-if="showSearchBox && suggestions.length">
          <ul class="results">
            <li v-for="(suggestion, i) in suggestions" :key="i" class="">
              <router-link
                :to="{ name: 'MovieSingle', params: { id: suggestion.id }}"
              >
                <span
                  class=""
                  @click="showSearchBox=false, keyword = ''"
                >
                  <img
                    v-if="suggestion.poster_path"
                    :src="`https://image.tmdb.org/t/p/w92/${suggestion.poster_path}`"
                    alt="poster"
                    class="poster"
                  />
                  <img v-else src="https://via.placeholder.com/50x75" alt="poster" class=""/>
                  <span
                    class="title"
                  >{{ suggestion.name ? suggestion.name : suggestion.original_title }}</span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import _ from "lodash";
import axios from "axios";

  export default {
    name: 'Header',

    data() {
      return {
        baseUrl: 'https://api.themoviedb.org/3',
        suggestions: "",
        keyword: "",
        showSearchBox: false,
      };
    },

    mounted() {
      document.body.addEventListener("keyup", e => {
        // escape key
        if (e.keyCode === 27) {
          this.showSearchBox = false;
        }
      });
    },

    methods: {
      search: _.debounce(function(e) {
        if (!e.target.value.length) {
          this.showSearchBox = false;
        } else {
          axios.get(this.baseUrl + '/search/movie?api_key=' + process.env.VUE_APP_TMDB_API_KEY + '&query=' + e.target.value)
            .then(res => {
              console.log(res);
              this.showSearchBox = true;
              this.suggestions = res.data.results;
            });
        }
      }, 500)
    }

  }
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #BDEFEF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .logo {
    max-width: 7rem;
  }
  .search {
    min-width: 40%;
    position: relative;
    input {
      height: 30px;
      width: 100%;
      background-color: #f0f5f5;
      border: 1px solid #BDEFEF;
      border-radius: 4px;
    }
    #icon-search {
      position: absolute;
      top: 9px;
      right: 0;
    }
    .search-list {
      position: absolute;
      background-color:#f0f5f5;
      width: 100%;
      ul {
        list-style-type: none;
        padding-left: 0;
        .poster {
          max-width: 4rem;
        }
        li {
          padding: 4px;
          &:hover {
            background-color: #cedbdb;
          }
        }
        a {
          text-decoration: none;
          color: #2c3e50;
        }
      }
    }
  }
}
</style>