<template>
    <div class="nav-wrapper">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/news">News</router-link>
    </div>
</template>

<script>
 export default {
     name: "Nav",
 }
</script>

<style scoped>
 .nav-wrapper {
     position: relative;
     top: 2vh;
     background-color: black;
     padding: 1vh 0;
     border: 1px solid #4af626;
     border-radius: 5px;
     box-shadow: 5px 5px 5px #4af626;
 }

 .nav-wrapper .link {
     padding: 1vh 5vw;
     color: #4af626;
     text-decoration: none;
     font-weight: bold;
 }

 .nav-wrapper .link:hover {
     text-decoration: underline;
     cursor: pointer;
 }
</style>
