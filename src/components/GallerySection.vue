<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
          <img :src="orangutan" alt="Bekantan" class="w-full h-full object-cover" />
        </div>
        <div class="order-1 md:order-2">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Galeri Foto</h2>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Penasaran seperti apa kehidupan di Pusat Beruang Madu? Lihat lebih dekat melalui galeri
            kami! Temukan foto-foto terbaik dari para beruang madu yang menggemaskan, keasrian
            lingkungan kami, dan senyum ceria para pengunjung yang telah belajar bersama kami.
          </p>
          <button
            class="bg-[#7A8C7D] hover:bg-[#657568] text-white px-6 py-2 rounded font-medium transition-colors"
          >
            Lihat Galeri Kami
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import orangutan from './icons/orangutan.jpg'
</script>
