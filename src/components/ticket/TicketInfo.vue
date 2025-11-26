<script setup>
import clockIcon from '../icons/clock.svg'
import locationIcon from '../icons/location.svg'
import telephoneIcon from '../icons/telephone.svg'
import calendarIcon from '../icons/calender.svg'
</script>

<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Info Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Jam Operasional -->
        <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div class="bg-[#FFFBEB] w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <img :src="clockIcon" alt="Jam Operasional" class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Jam Operasional</h3>
          <div class="text-gray-600 text-sm space-y-1">
            <p>Senin - Minggu</p>
            <p class="font-bold text-gray-900">08.00 - 16.00 WIB</p>
            <p>(Tutup pada hari libur nasional)</p>
          </div>
        </div>

        <!-- Lokasi -->
        <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div class="bg-[#FFFBEB] w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <img :src="locationIcon" alt="Lokasi" class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Lokasi</h3>
          <p class="text-gray-600 text-sm">
            Jl. Soekarno-Hatta No. 185 Km. 23, Balikpapan, Kalimantan Timur
          </p>
        </div>

        <!-- Kontak -->
        <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div class="bg-[#FFFBEB] w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <img :src="telephoneIcon" alt="Kontak" class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Kontak</h3>
          <div class="text-gray-600 text-sm">
            <p>Telepon:</p>
            <p class="font-bold text-gray-900 mt-1">+62 811 5378 169</p>
          </div>
        </div>
      </div>

      <!-- Warning Banner -->
      <div
        class="bg-[#FFF5EB] border border-[#FED7AA] rounded-lg p-4 flex items-start md:items-center space-x-4"
      >
        <img :src="calendarIcon" alt="Info" class="w-6 h-6 shrink-0 mt-1 md:mt-0" />
        <p class="text-sm font-medium text-gray-800">
          Untuk kunjungan rombongan lebih dari 20 orang, harap melakukan reservasi minimal 3 hari
          sebelumnya melalui Kontak di navigation bar atau hubungi kami langsung.
        </p>
      </div>
    </div>
  </section>
</template>
