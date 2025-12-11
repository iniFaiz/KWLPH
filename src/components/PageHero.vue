<template>
  <section class="bg-[#7A8C7D] py-20 text-center text-white">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold mb-6">{{ title }}</h1>
      <p v-if="description" class="text-lg leading-relaxed">
        {{ description }}
      </p>
      <!-- Slot untuk konten tambahan jika diperlukan -->
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
