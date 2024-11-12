<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->


<!-- src/App.vue -->
<template>
  <Home />
</template>

<script setup>
import Home from "./views/Home.vue";
import { useHead } from '@unhead/vue'

useHead({
  title: "Natural Sweetness For the Future",
  meta: [
    { property: "og:title", content: "Natural Sweetness For the Future" },
    { property: "og:description", content: "The finest natural quality in every grain of palm sugar" },
    { property: "og:url", content: "https://gula-aren-semut.vercel.app" },
    { property: "og:image", content: "https://gula-aren-semut.vercel.app/assets/img/why-us.jpeg" },
  ]
})
</script>
<style>
body {
  font-family: 'Nunito', 'Inter', 'Roboto', sans-serif;
}
</style>
