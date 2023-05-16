<template>
    <SeshInfo />
    <div class="news-wrapper">
        <h3 class="news-title">News</h3>
        <p class="news-content">>. We are still currently under development! Latest updates and progress will be posted here.</p>
    </div>
</template>

<script>

 import SeshInfo from "./SeshCliInfo"

 export default {
     name: "News",
     components: {
         SeshInfo,
     }
 }
</script>

<style scoped>
 .news-wrapper {
     position: relative;
     width: 50vw;
     left: 45vw;
     background-color: black;
     border: 1px solid #4af626;
     border-radius: 5px;
     box-shadow: 5px 5px 5px #4af626;
     padding: 0 1.5vw;
 }

 .news-title {
     color: #4af626;
     font-size: 1.3rem;
 }

 .news-content {
     color: #4af626;
     font-size: 1.15rem;
 }
</style>
