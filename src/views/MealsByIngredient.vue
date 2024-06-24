<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import Meals from '../components/Meals.vue';

const store = useStore();
const route = useRoute();


const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>