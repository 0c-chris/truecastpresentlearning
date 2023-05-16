<template>
    <button>{{ Name }}</button>
</template>

<script>
 export default {
     name: "Button",
     props: {
         Name: {
             type: String,
             default: "button",
         }
     }
 }
</script>
