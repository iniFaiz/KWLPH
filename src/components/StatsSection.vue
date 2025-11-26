<template>
  <section class="bg-[#FDF8F4] py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Stat 1 -->
        <div class="flex flex-col items-center">
          <div
            class="bg-white rounded-full p-6 mb-4 shadow-sm flex items-center justify-center w-24 h-24"
          >
            <img :src="heartIcon" alt="Saved" class="w-10 h-10 object-contain" />
          </div>
          <h3 class="text-3xl font-bold text-gray-900">6+</h3>
          <p class="text-gray-500 text-sm mt-1">Beruang madu diselamatkan</p>
        </div>
        <!-- Stat 2 -->
        <div class="flex flex-col items-center">
          <div
            class="bg-white rounded-full p-6 mb-4 shadow-sm flex items-center justify-center w-24 h-24"
          >
            <img :src="peopleIcon" alt="Visitors" class="w-10 h-10 object-contain" />
          </div>
          <h3 class="text-3xl font-bold text-gray-900">50K+</h3>
          <p class="text-gray-500 text-sm mt-1">Pengunjung per Tahun</p>
        </div>
        <!-- Stat 3 -->
        <div class="flex flex-col items-center">
          <div
            class="bg-white rounded-full p-6 mb-4 shadow-sm flex items-center justify-center w-24 h-24"
          >
            <img :src="treeIcon" alt="Area" class="w-10 h-10 object-contain" />
          </div>
          <h3 class="text-3xl font-bold text-gray-900">1,3 Ha</h3>
          <p class="text-gray-500 text-sm mt-1">Area Konservasi</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heartIcon from './icons/heart.svg'
import peopleIcon from './icons/bluepeople.svg'
import treeIcon from './icons/tree.svg'
</script>
