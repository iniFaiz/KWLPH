<script setup>
import { RouterView } from 'vue-router'
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <header class="sticky top-0 z-50">
    <NavbarComp />
  </header>

  <RouterView />

  <FooterComp />
</template>

<style scoped></style>
