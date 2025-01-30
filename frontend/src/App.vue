<script setup lang="ts">
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'
import Welcome from './pages/Welcome.vue';

onMounted(() => {
  console.log("Initializing theme-change");
  themeChange();
});

</script>


<template>
    <h1 class="text-center text-xl font-bold mb-4">EchoChat</h1>
    <button class="btn btn-primary" data-set-theme="light">Light Theme</button>
    <button class="btn btn-secondary" data-set-theme="dark">Dark Theme</button>
    <Welcome/>
</template>
  