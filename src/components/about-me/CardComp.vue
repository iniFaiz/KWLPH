<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 text gap-12 items-center">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-6">Faiz Alrazi Hidayat </h1>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">11231025 - INFORMATIKA - ITK</h2>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus maxime officiis accusamus perspiciatis impedit voluptas corrupti totam, quibusdam sint sequi atque. Accusantium ducimus reprehenderit officiis mollitia temporibus nihil quam?
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img :src="fotorapi" alt="Beruang Madu" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fotorapi from '../icons/fotorapi.jpg'
</script>
