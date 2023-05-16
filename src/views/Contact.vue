<template>
    <SeshInfo />
    <div class="contact-wrapper">
        <h3 class="contact-title">Contact Us</h3>
        <p class="contact-content">Please leave us a brief message and we will try to get back to you in a
        timely manner. Thank you for visiting!</p>
        <div class="form-wrapper">
            <form action="/" method="POST">
                <label for="email" class="email-lab">Email: </label>
                <input type="email" class="email" name="email" placeholder="coder@example.web" />
                <br/><br/>
                <label for="message">Message: </label>
                <textarea type="text" placeholder="Type your message here..."></textarea>
                <br/><br/>
                <input type="submit" class="submit" name="submit" value="Send!" />
            </form>
        </div>
    </div>
</template>

<script>

 import SeshInfo from "./SeshCliInfo"

 export default {
     name: "Contact",
     components: {
         SeshInfo
     }
 }

</script>

<style scoped>
 .contact-wrapper {
     position: relative;
     width: 50vw;
     background-color: black;
     border: 1px solid #4af626;
     border-radius: 5px;
     top: -3.5vh;
     left: 46vw;
     box-shadow: 5px 5px 5px #4af626;
     padding-bottom: 3vh;
 }

 .contact-title {
     color: #4af626;
     font-size: 1.5rem;
 }

 .contact-content {
     color: #4af626;
     font-size: 1.2rem;
     padding-bottom: 1vh;
 }

 textarea {
     resize: none;
     width: 25vw;
 }

 label {
     color: #4af626;
 }

 .email {
     position: relative;
     left: -1.35vw;
     background-color: black;
     color: #4af626;
     border: none;
     border-bottom: 1px solid #4af626;
     font-size: 1.2rem;
 }

 .email:focus {
     outline: none;
 }

 textarea {
     background-color: black;
     color: #4af626;
     border: none;
     border-left: 1px solid #4af626;
     border-bottom: 1px solid #4af626;
     font-size: 1.2rem;
     padding: 0 .5vw;
 }

 textarea:focus {
     outline: none;
 }

 .form-wrapper {
     position: relative;
     left: -8.5vw;
     margin: 1.5vh 0;
 }

 .email-lab {
     position: relative;
     left: -3vw;
 }

 .submit {
     position: relative;
     left: 3vw;
     width: 25vw;
     border-radius: 5px;
     padding: .5vh 0;
     border: 1px solid #4af626;
     background-color: black;
     color: #4af626;
     font-size: 1.2rem;
 }

 .submit:hover {
     cursor: pointer;
     box-shadow: 5px 5px 5px #4af626;
     border: 1px solid #4af626;
 }
</style>
