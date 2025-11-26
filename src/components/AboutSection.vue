<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Tentang Beruang Madu</h2>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Beruang madu (Helarctos malayanus) adalah spesies beruang terkecil di dunia dan
            merupakan satwa endemik Asia Tenggara. Di Indonesia, beruang madu dapat ditemukan di
            hutan-hutan Kalimantan dan Sumatera. Sayangnya, populasi mereka terus menurun akibat
            perburuan liar dan hilangnya habitat alami.
          </p>
          <button
            class="bg-[#7A8C7D] hover:bg-[#657568] text-white px-6 py-2 rounded font-medium transition-colors"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img :src="beruang1" alt="Beruang Madu" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import beruang1 from './icons/beruang1.jpg'
</script>
