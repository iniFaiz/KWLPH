<script setup>
import greenPeopleIcon from '../icons/greenpeople.svg'
</script>

<template>
  <section class="py-12 bg-[#F9FAFB]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Harga Tiket Masuk</h2>
      <p class="text-gray-500 text-sm mb-8">
        *harga belum termasuk jika kamu ingin mencoba wahana canopy bridge +Rp25.000
      </p>

      <div class="flex justify-center">
        <div
          class="bg-white border border-gray-200 rounded-xl p-8 w-full max-w-xs shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            class="bg-[#F0FDF4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <img :src="greenPeopleIcon" alt="Perorang" class="w-8 h-8" />
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Perorang</h3>
          <p class="text-3xl font-bold text-[#22C55E]">5.000</p>
        </div>
      </div>
    </div>
  </section>
</template>
