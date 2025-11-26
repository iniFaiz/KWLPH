<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900">Nilai-Nilai Kami</h2>
        <p class="mt-4 text-gray-500">
          Prinsip-prinsip yang menjadi landasan kerja kami dalam konservasi beruang madu
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Misi Kami -->
        <div
          class="border border-gray-200 rounded-lg p-6 flex items-start space-x-4 hover:shadow-md transition-shadow"
        >
          <div class="bg-[#FFFBEB] p-3 rounded-full shrink-0">
            <img :src="bulletIcon" alt="Misi" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-2">Misi Kami</h3>
            <p class="text-gray-600 text-sm">
              Menyelamatkan dan merehabilitasi beruang madu serta habitat mereka melalui konservasi
              aktif dan edukasi masyarakat.
            </p>
          </div>
        </div>

        <!-- Visi Kami -->
        <div
          class="border border-gray-200 rounded-lg p-6 flex items-start space-x-4 hover:shadow-md transition-shadow"
        >
          <div class="bg-[#FFFBEB] p-3 rounded-full shrink-0">
            <img :src="eyesIcon" alt="Visi" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-2">Visi Kami</h3>
            <p class="text-gray-600 text-sm">
              Menjadi pusat konservasi beruang madu terkemuka di Asia Tenggara dan menciptakan
              kesadaran global tentang pelestarian satwa.
            </p>
          </div>
        </div>

        <!-- Komitmen -->
        <div
          class="border border-gray-200 rounded-lg p-6 flex items-start space-x-4 hover:shadow-md transition-shadow"
        >
          <div class="bg-[#FFFBEB] p-3 rounded-full shrink-0">
            <img :src="awardIcon" alt="Komitmen" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-2">Komitmen</h3>
            <p class="text-gray-600 text-sm">
              Berkomitmen untuk standar tertinggi dalam perawatan hewan, dan praktik konservasi
              berkelanjutan.
            </p>
          </div>
        </div>

        <!-- Komunitas -->
        <div
          class="border border-gray-200 rounded-lg p-6 flex items-start space-x-4 hover:shadow-md transition-shadow"
        >
          <div class="bg-[#FFFBEB] p-3 rounded-full shrink-0">
            <img :src="peopleIcon" alt="Komunitas" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-2">Komunitas</h3>
            <p class="text-gray-600 text-sm">
              Membangun komunitas peduli konservasi melalui program edukasi, volunteer, dan
              kemitraan dengan berbagai organisasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bulletIcon from '../icons/bullet.svg'
import eyesIcon from '../icons/eyes.svg'
import awardIcon from '../icons/award.svg'
import peopleIcon from '../icons/peopleblack.svg'
</script>
