<script setup lang="ts">
  import { ref } from 'vue'
  import { IKanji } from '../models/kanji';
  import Api from '../api';

  const emit = defineEmits<{
    (e: 'receiveKanji', kanji: IKanji): IKanji
  }>()

  const inputValue = ref("");
  const showError = ref(false);

  const getKanji = () => {

    showError.value = false;

    Api.getKanji(inputValue.value)
      .then(response => {
        emit("receiveKanji", response.data)
      })
      .catch(() => {
        showError.value = true
      });

    inputValue.value = "";
  }

</script>

<template>
  <div class="search-bar">
    <input 
      v-model="inputValue" 
      type="search" 
      placeholder="Поиск..." 
      autofocus required 
    />
    <button @click="getKanji">
      <img class ="go" src="../assets/go-search.png" alt="Go">
    </button>   
  </div>

  <div v-if="showError" class="error">Ошибка! Ничего не найдено!</div> 
  
</template>

<style scoped>
  .search-bar {
    position: relative;
    width: 30rem;
    background: var(--primary);
    border-radius: .7rem;
    margin: 0 auto;
  }
  
  input, button {
    height: 5rem;
    font-family: 'Lato', sans-serif;
    border: 0;
    color: var(--light);
    font-size: 1.8rem;
  }
  
  input[type="search"] {
    outline: 0;
    width: calc(100% + 4px);
    margin-left:-2px;
    background: #2D2E2F;
    padding: 0 1.6rem;
    border-radius: .7rem;
    appearance: none;
    transition: all .3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }
  
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
  
  button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 6rem;
    font-weight: bold;
    background: var(--primary);
    border-radius: 0 .7rem .7rem 0;
  }
  
  input:not(:placeholder-shown) {
    border-radius: .7rem 0 0 .7rem;
    width: calc(100% - 6rem);
  }
  
  input:not(:placeholder-shown) + button {
    display: block;
  }
  .go {
    width: 6rem;
    height: 5rem;
    align-items: center;
    object-fit: contain;
  }

  .error {
    color: #dd0000;
    text-align: center;
    margin-top: .1rem;
  }
  
</style>