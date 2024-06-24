import axiosClient from '../axiosClient';

export async function searchMeals({ commit }, keyword) {
  try {
    const { data } = await axiosClient.get(`/search.php?s=${keyword}`);
    commit('setSearchedMeals', data.meals || []);
  } catch (error) {
    console.error('Failed to fetch meals:', error);
  }
}

export async function searchMealsByLetter({ commit }, letter) {
  try {
    const { data } = await axiosClient.get(`/search.php?f=${letter}`);
    commit('setMealsByLetter', data.meals || []);
  } catch (error) {
    console.error('Failed to fetch meals:', error);
  }
}

export async function searchMealsByIngredient({ commit }, ing) {
  try {
    const { data } = await axiosClient.get(`/filter.php?i=${ing}`);
    commit('setMealsByIngredients', data.meals || []);
  } catch (error) {
    console.error('Failed to fetch meals:', error);
  }
}