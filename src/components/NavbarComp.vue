<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-24">
        <!-- Logo Section -->
        <div class="shrink-0 flex items-center">
          <RouterLink to="/">
            <img class="h-16 w-auto" :src="logo" alt="Logo KWPLH" />
          </RouterLink>
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            to="/tentang-kami"
            class="text-black font-bold text-sm uppercase tracking-wide hover:text-green-600 transition-colors"
          >
            Tentang Kami
          </RouterLink>
          <RouterLink
            to="/galeri"
            class="text-black font-bold text-sm uppercase tracking-wide hover:text-green-600 transition-colors"
          >
            Galeri
          </RouterLink>
          <RouterLink
            to="/tiket"
            class="text-black font-bold text-sm uppercase tracking-wide hover:text-green-600 transition-colors"
          >
            Tiket
          </RouterLink>
          <RouterLink
            to="/kontak"
            class="text-black font-bold text-sm uppercase tracking-wide hover:text-green-600 transition-colors"
          >
            Kontak
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="text-gray-500 hover:text-gray-600 focus:outline-none p-2"
            aria-label="toggle menu"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden bg-white border-t border-gray-100">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <RouterLink
          to="/tentang-kami"
          class="block px-3 py-2 rounded-md text-base font-bold text-black hover:text-green-600 hover:bg-gray-50 uppercase"
          >Tentang Kami</RouterLink
        >
        <RouterLink
          to="/galeri"
          class="block px-3 py-2 rounded-md text-base font-bold text-black hover:text-green-600 hover:bg-gray-50 uppercase"
          >Galeri</RouterLink
        >
        <RouterLink
          to="/tiket"
          class="block px-3 py-2 rounded-md text-base font-bold text-black hover:text-green-600 hover:bg-gray-50 uppercase"
          >Tiket</RouterLink
        >
        <RouterLink
          to="/kontak"
          class="block px-3 py-2 rounded-md text-base font-bold text-black hover:text-green-600 hover:bg-gray-50 uppercase"
          >Kontak</RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logo from './icons/KWLPHlogo.png'

const isOpen = ref(false)
</script>
