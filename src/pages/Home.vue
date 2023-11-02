<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <Personas />

    </main>

    <Footer />

  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

import Header from '@/partials/Header.vue'
import PageIllustration from '@/partials/PageIllustration.vue'
import Personas from '@/partials/Personas.vue'
import Footer from '@/partials/Footer.vue'

//composables
import { usePersonas } from '@/composables/usePersonas.js'
import { useCategories } from '@/composables/useCategories.js'
const { personas, usedCategories, skills, getPersonas, getSkills, getUsedCategories } = usePersonas()

onMounted(() => {
  console.log("Accessing the API at", import.meta.env.VITE_API_URL)
  getPersonas();
})



</script>