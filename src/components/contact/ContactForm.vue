<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20 relative z-10">
    <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
      <div class="flex items-center gap-2 mb-6">
        <img src="@/assets/message.svg" alt="Message Icon" class="w-6 h-6" />
        <h2 class="text-xl font-bold text-gray-900">Kirim Pesan</h2>
      </div>

      <p class="text-gray-600 mb-8">
        Isi formulir di bawah dan kami akan merespons secepat mungkin
      </p>

      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Nama Lengkap -->
          <div>
            <label for="name" class="block text-sm font-bold text-gray-900 mb-2"
              >Nama Lengkap *</label
            >
            <input
              type="text"
              id="name"
              v-model="form.name"
              placeholder="Masukkan nama Anda"
              class="w-full bg-gray-50 border-none rounded-md py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-bold text-gray-900 mb-2">Email *</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="nama@email.com"
              class="w-full bg-gray-50 border-none rounded-md py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <!-- Nomor Telepon -->
          <div>
            <label for="phone" class="block text-sm font-bold text-gray-900 mb-2"
              >Nomor Telepon</label
            >
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
              placeholder="+62 812 3456 7890"
              class="w-full bg-gray-50 border-none rounded-md py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-500"
            />
          </div>

          <!-- Topik -->
          <div>
            <label for="topic" class="block text-sm font-bold text-gray-900 mb-2">Topik *</label>
            <div class="relative">
              <select
                id="topic"
                v-model="form.topic"
                class="w-full bg-gray-50 border-none rounded-md py-3 px-4 text-gray-900 appearance-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                required
              >
                <option value="" disabled selected>Pilih topik</option>
                <option v-for="option in topicOptions" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Pesan -->
        <div>
          <label for="message" class="block text-sm font-bold text-gray-900 mb-2">Pesan *</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            placeholder="Tuliskan pesan atau pertanyaan Anda..."
            class="w-full bg-gray-50 border-none rounded-md py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-500 resize-none"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="bg-[#7A8B7D] text-white font-bold py-3 px-8 rounded-md hover:bg-[#69786b] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Kirim Pesan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const topicOptions = [
  'Pertanyaan Umum',
  'Reservasi Tiket & Kunjungan Grup',
  'Donasi',
  'Program Sukarelawan',
  'Penelitian & Magang',
  'Media & Kerjasama',
  'Lainnya',
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
})

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted:', form.value)
  alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.')
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  }
}
</script>
