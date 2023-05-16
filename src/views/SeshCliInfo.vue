<template>
    <div class="info-wrapper">
        <h3 class="link-title">Link: </h3>
        <a class="info-link" href="https://sweaty-server.onrender.com">https://sweaty-server.onrender.com</a>
    </div>
    <Button class="join-button" Name="Join!" />

</template>

<script>

 import Button from "./../components/Button"

 export default {
     name: "SeshInfo",
     components: {
         Button,
     }
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

 .join-button {
     position: relative;
     top: 6.5vh;
     right: 40vw;
     width: 15vw;
     padding: 1vh 0;
     background-color: black;
     border: none;
     border-bottom: 1px solid #4af626;
     border-radius: 5px;
     color: #4af626;
     font-size: 1rem;
     font-weight: bold;
 }

 .join-button:hover {
     cursor: pointer;
     box-shadow: 5px 5px 5px #4af626;
 }
</style>
