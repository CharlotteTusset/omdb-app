<template>
<div class="notfound">
    <h1>Oops, it looks like the page you're looking for doesn't exist.</h1>
    <router-link to="/" class="back">
      <font-awesome-icon icon="arrow-left" id="arrow-icon"/> Home
    </router-link>
</div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped>
.notfound {
  text-align: center;
  margin: 12rem 0;
  .back {
    font-size: 2em;
    color: #37b282;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>