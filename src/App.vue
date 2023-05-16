<template>
  <Title />
  <Nav />
  <router-view></router-view>
</template>

<script>

 import Title from "./components/Title"
 import Nav from "./components/Nav"

export default {
  name: 'App',
  components: {
    Title,
    Nav,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

 body {
   background-color: #111;
 }
</style>
