<template>
  <section class="relative border-t border-transparent dark:border-gray-800">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
      aria-hidden="true"></div>
    <!-- End background gradient -->
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 class="h2 font-red-hat-display mb-4">Pick your Persona</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Select from our ever-growing library of digital personas to
            guide your AI interactions.</p>
        </div>

        <!-- Section content -->
        <div>
  <div class="grid grid-cols-3 gap-12 lg:gap-6">
    <!-- {{ filteredPersonas }} -->
    <div v-for="(persona, index) in filteredPersonas" :key="'persona' + index" class="max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
      <div class="relative">
        <div @click="selectAndInteract(persona)" class="w-full">
          <!-- Image container -->
          <div class="w-full h-64 overflow-hidden"> <!-- Set a fixed height -->
            <img class="w-full h-full object-cover" :src="persona.url || defaultImage" alt="Persona thumbnail" />
          </div>
          <!-- Label -->
          <div class="px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
            <div>
              {{ persona.name }}<br />
              {{ persona.description.en }}
            </div>
            <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">
              <button class="hover:opacity-75 transition duration-150 ease-in-out">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import defaultImage from "../images/persona1.png"
import { usePersonas } from '@/composables/usePersonas.js'
import { useCategories } from '@/composables/useCategories.js'
const { personas, selectedPersona, usedCategories, skills, getPersonas, getSkills, getUsedCategories } = usePersonas()
const { categories, selectedCategory, getCategories, createAdminCategories } = useCategories()


let filteredPersonas = computed(() => {

  let filteredPersonas = personas.value;
  if (selectedCategory.value) {
    filteredPersonas = personas.value.filter(persona => {
      return persona.categories.some(category => {
        return category.code === selectedCategory.value.code;
      });
    });
  }

  return filteredPersonas;


})

const router = useRouter()
const route = useRoute()


function selectCategory(category) {
  selectedCategory.value = category;
}

function selectAndInteract(persona) {
  selectedPersona.value = persona;
  console.log("Selected Persona", persona)
  router.push({ name: 'chat', params: { personaId: persona.uuid } })

}


</script>