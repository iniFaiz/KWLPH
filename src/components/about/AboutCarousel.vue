<template>
  <section class="py-12 bg-[#F9FAFB]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative group">
        <!-- Main Image -->
        <div class="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
          <img
            :key="currentIndex"
            :src="images[currentIndex]"
            alt="History Gallery"
            class="w-full h-full object-cover transition-opacity duration-500"
          />

          <!-- Navigation Arrows -->
          <button
            @click="prevSlide"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            @click="nextSlide"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <!-- Dots Navigation -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(image, index) in images"
            :key="index"
            @click="currentIndex = index"
            class="w-3 h-3 rounded-full transition-colors duration-300"
            :class="currentIndex === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import img1 from '../icons/sejarah1.jpg'
import img2 from '../icons/sejarah2.jpg'
import img3 from '../icons/sejarah3.png'

const images = [img1, img2, img3]
const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>
