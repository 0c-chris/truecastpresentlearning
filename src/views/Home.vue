<template>
    <SeshInfo />
    <div class="home-wrapper">
        <h3 class="home-title">Welcome, and lets get started!</h3>
    </div>
</template>

<script>

 import SeshInfo from "./SeshCliInfo"

 export default {
     name: "Home",
     components: {
         SeshInfo,
     }
 }
</script>

<style scoped>
 .home-wrapper {
     position: relative;
     width: 50vw;
     left: 46vw;
     border: 1px solid #4af626;
     border-radius: 5px;
     box-shadow: 5px 5px 5px #4af626;
     background-color: black
 }

 .home-title {
     color: #4af626;
     font-size: 1.3rem;
 }
</style>
