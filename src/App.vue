<script setup>
import { RouterView } from 'vue-router'
import NavbarComp from './components/NavbarComp.vue'
</script>

<template>
  <header>
    <NavbarComp />
  </header>

  <RouterView />
</template>

<style scoped>
</style>
