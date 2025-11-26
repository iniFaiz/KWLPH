<script setup>
import TicketHero from '../components/ticket/TicketHero.vue'
import TicketInfo from '../components/ticket/TicketInfo.vue'
import TicketPricing from '../components/ticket/TicketPricing.vue'
import TicketFacilities from '../components/ticket/TicketFacilities.vue'
</script>

<template>
  <div class="flex flex-col w-full">
    <TicketHero />
    <TicketInfo />
    <TicketPricing />
    <TicketFacilities />
  </div>
</template>
