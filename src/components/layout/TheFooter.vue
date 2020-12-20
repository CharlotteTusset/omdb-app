<template>
  <footer>
    <p>Data: <a class="link" href="https://developers.themoviedb.org/3">TMDB API</a></p>
    <p>2020 by Omdb.com</p>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  background-color: white;
  padding: 2rem 0;
  .link {
    color: #37b282;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>