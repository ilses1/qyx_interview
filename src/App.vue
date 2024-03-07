<script setup lang="ts">
import test from "./pages/test.vue";
// @ts-ignore
import eventbus from "easyer-eventbus"
const emit = () => {
    eventbus.emit("test", "hello world !!")
}
</script>

<template>
    <test></test>
    <h1 @click=emit>发布信息</h1>
</template>

<style scoped></style>