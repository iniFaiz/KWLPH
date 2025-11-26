<template>
  <footer class="bg-[#0B1221] text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Left Section: Logo & Description -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="bg-white rounded-full p-1">
              <img :src="logo" alt="Logo KWPLH" class="h-12 w-12 object-contain" />
            </div>
            <h2 class="text-lg font-bold">Pusat Beruang Madu</h2>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
            Kawasan wisata pendidikan lingkungan hidup yang berfokus pada konservasi dan
            perlindungan beruang madu Indonesia.
          </p>
        </div>

        <!-- Middle Section: Contact Info -->
        <div>
          <h3 class="text-lg font-bold mb-4">Kontak Kami</h3>
          <ul class="space-y-4 text-sm text-gray-300">
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mr-3 mt-0.5 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>Jl. Soekarno-Hatta No. 185 Km. 23, Balikpapan, Kalimantan Timur</span>
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mr-3 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span>+62 811 5378 169</span>
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mr-3 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <a href="mailto:kwplh.balikpapan@gmail.com" class="hover:text-white transition-colors"
                >kwplh.balikpapan@gmail.com</a
              >
            </li>
          </ul>
        </div>

        <!-- Right Section: Social & Hours -->
        <div>
          <h3 class="text-lg font-bold mb-4">Ikuti kami</h3>
          <div class="flex space-x-4 mb-8">
            <!-- Instagram -->
            <a
              href="https://www.instagram.com/kwplh_balikpapan/"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zm1.49 11.013a3.375 3.375 0 11-4.869-4.869 3.375 3.375 0 014.869 4.869zm-9.335-9.242a1.533 1.533 0 112.169 2.17 1.533 1.533 0 01-2.17-2.17z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <!-- Facebook -->
            <a
              href="https://www.facebook.com/KWPLH.Balikpapan/"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>

          <h3 class="text-lg font-bold mb-2">Jam Operasional</h3>
          <p class="text-gray-300 text-sm">
            Senin - Minggu<br />
            08.30-17:00
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from './icons/KWLPHlogo.png'
</script>
