<template>
  <section class="py-16 bg-[#F9FAFB]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <!-- Text Content -->
        <div class="w-full md:w-1/2">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Sejarah Singkat</h2>
          <p class="text-gray-600 leading-relaxed">
            Sejarah KWPLH dimulai dari meningkatnya konflik antara manusia dan satwa liar akibat
            deforestasi dan pembukaan lahan di Kalimantan Timur. Banyak beruang madu yang kehilangan
            habitatnya, masuk ke area pemukiman, atau dipelihara secara ilegal oleh warga dalam
            kondisi yang tidak layak.
          </p>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2">
          <div class="rounded-2xl overflow-hidden shadow-lg">
            <img
              :src="historyImage"
              alt="Sejarah Singkat KWPLH"
              class="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import historyImage from '../icons/sejarahsingkat.jpg'
</script>
