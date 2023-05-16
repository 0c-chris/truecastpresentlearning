<template>
    <div class="info-wrapper">
        <h3 class="link-title">Link: </h3>
        <a class="info-link" href="https://sweaty-server.onrender.com">https://sweaty-server.onrender.com</a>
    </div>
</template>

<script>
 export default {
     name: "SeshInfo",
 }
</script>

<style scoped>
 .info-wrapper {
     display: flex;
     position: relative;
     top: 5vh;
     border: 1px solid #4af626;
     border-radius: 5px;
     width: 40vw;
     background-color: black;
     margin-left: 1.15vw;
     box-shadow: 5px 5px 5px #4af626;
     padding: 0 1vw;
 }

 .link-title {
     margin-right: 15px;
     color: #87ceeb;
 }

 .info-link {
     position: relative;
     top: 1.6vw;
     color: #4af626;
     text-decoration: none;
 }

 .info-link:hover {
     text-decoration: underline;
     cursor: pointer;
 }
</style>
