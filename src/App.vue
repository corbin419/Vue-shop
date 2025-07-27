<script setup>
import {useRoute, RouterView} from 'vue-router';
import navBar from './components/navBar.vue';
import myFooter from '@/components/footer.vue';

const hiddenLayoutPages = ['/loginPage'];
const route = useRoute();
</script>

<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
    crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />

  <header>
    <navBar v-if="!hiddenLayoutPages.includes(route.path)" />
  </header>

  <RouterView />

  <footer>
    <myFooter v-if="!hiddenLayoutPages.includes(route.path)" />
  </footer>
</template>
