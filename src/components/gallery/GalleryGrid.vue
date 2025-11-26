<script setup>
import { ref, computed } from 'vue'
import beruang1 from '../icons/beruang1.jpg'
import beruang2 from '../icons/beruang2.jpeg'
import beruang3 from '../icons/beruang3.jpg'
import jembatan1 from '../icons/Jembatan1.jpg'
import jembatan2 from '../icons/jembatan2.jpg'
import orangutan from '../icons/orangutan.jpg'
import papan1 from '../icons/papan1.jpg'

const activeFilter = ref('semua')

const images = [
  { id: 1, src: beruang1, category: 'beruang', alt: 'Beruang Madu 1' },
  { id: 2, src: beruang2, category: 'beruang', alt: 'Beruang Madu 2' },
  { id: 3, src: jembatan1, category: 'jembatan', alt: 'Jembatan 1' },
  { id: 4, src: jembatan2, category: 'jembatan', alt: 'Jembatan 2' },
  { id: 5, src: beruang3, category: 'beruang', alt: 'Beruang Madu 3' },
  { id: 6, src: orangutan, category: 'lainnya', alt: 'Satwa Lain' },
  { id: 7, src: papan1, category: 'lainnya', alt: 'Papan Informasi' },
]

const filteredImages = computed(() => {
  if (activeFilter.value === 'semua') {
    return images
  }
  return images.filter((img) => img.category === activeFilter.value)
})

const setFilter = (filter) => {
  activeFilter.value = filter
}
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Filter Buttons -->
      <div class="flex justify-center space-x-4 mb-12">
        <button
          @click="setFilter('semua')"
          class="px-6 py-2 rounded-full text-sm font-bold transition-colors border"
          :class="
            activeFilter === 'semua'
              ? 'bg-[#7A8C7D] text-white border-[#7A8C7D]'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
          "
        >
          Semua
        </button>
        <button
          @click="setFilter('beruang')"
          class="px-6 py-2 rounded-full text-sm font-bold transition-colors border"
          :class="
            activeFilter === 'beruang'
              ? 'bg-[#7A8C7D] text-white border-[#7A8C7D]'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
          "
        >
          Beruang Madu
        </button>
        <button
          @click="setFilter('jembatan')"
          class="px-6 py-2 rounded-full text-sm font-bold transition-colors border"
          :class="
            activeFilter === 'jembatan'
              ? 'bg-[#7A8C7D] text-white border-[#7A8C7D]'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
          "
        >
          Jembatan
        </button>
      </div>

      <!-- Image Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="image in filteredImages"
          :key="image.id"
          class="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </section>
</template>
