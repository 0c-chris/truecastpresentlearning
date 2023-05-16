<template>
    <SeshInfo />
    <div class="home-wrapper">
        <h3 class="home-title">Welcome, and lets get started!</h3>
        <p class="home-content">Copy the session link to the right and send it to all desired participants.<br/>
        When ready, press the join button and your presentation will begin on all connected devices!</p>
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
     top: -3.5vh;
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

 .home-content {
     color: #4af626;
     font-size: 1.15rem;
 }
</style>
