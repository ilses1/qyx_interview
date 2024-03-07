<script setup lang="ts">
// @ts-ignore
import eventbus from "easyer-eventbus"
import { ref } from "vue";
const text = ref('test')
eventbus.on("test", (data) => {
    console.log(data);
    text.value = data
})
</script>

<template>
    
    <h1> {{ text }}</h1>
</template>

<style scoped></style>