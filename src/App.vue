<template>
<div>
  <Header />
  <router-link to="/"></router-link>
  <router-view></router-view>
  <Footer />
</div>
   
</template>

<script>
import Header from './components/layout/TheHeader.vue'
import Footer from './components/layout/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },

}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f0f5f5;
  max-width: 114rem;
  margin-right: auto;
  margin-left: auto;
}
</style>
