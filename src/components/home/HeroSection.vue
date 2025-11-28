<template>
  <section class="relative h-screen max-h-[800px] w-full overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img :src="annaDongo" alt="Hero Background" class="h-full w-full object-cover" />
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Hero Content -->
    <div
      class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-end text-right"
    >
      <h1
        class="text-white text-4xl md:text-6xl font-bold leading-tight max-w-2xl mb-8 drop-shadow-lg"
      >
        <span class="text-[#C4D7C8]">SELAMAT DATANG</span> DI<br />
        KAWASAN WISATA<br />
        PENDIDIKAN<br />
        LINGKUNGAN HIDUP
      </h1>
      <div class="flex space-x-4">
        <RouterLink
          to="/tiket"
          class="bg-[#7A8C7D] hover:bg-[#657568] text-white px-6 py-3 rounded font-medium transition-colors"
        >
          Rencanakan Kunjungan
        </RouterLink>
        <RouterLink
          to="/tentang-kami"
          class="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white/10 transition-colors"
        >
          Detail
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import annaDongo from '../icons/anna dongo.jpg'
</script>
