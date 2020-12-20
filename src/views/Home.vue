<template>
  <div>
    <MoviesList />
    <transition name="fade" mode="in-out">
        <router-view />
    </transition>
  </div> 
</template>

<script>
import MoviesList from '../components/MoviesList.vue'

export default {
  name: 'Home',
  components: {
    MoviesList,
  },  
}

</script>

<style>
body {
  margin: 0;
}
</style>
