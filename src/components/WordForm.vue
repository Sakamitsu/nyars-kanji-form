<script setup lang="ts">

  import FormAdd from './FormAdd.vue';
  import InputForm from './InputForm.vue';
  import {ref} from 'vue'

  const props = defineProps<{
    text: string
  }>()

  interface IWord {
    wid: string
    word: string
    reading: string
    meaning: string
    source: string
    id: number
  }

  const words = ref<IWord[]>([])

  const addWord = () => {
    words.value.push({
      wid: '',
      word: '',
      reading: '',
      meaning: '',
      source: '',
      id: Date.now()
    })
  }
  
  const deleteWord = (id: number) => {
    words.value = words.value.filter(w => w.id !== id)
  }

</script>

<template>
  <div class="container">
    <FormAdd :text="props.text" :click="addWord"/>
    <div class="words">
      <div v-for="word in words" :key="word.id" class="word">
        <div class="wid">
          <span>ID слова:</span>
          <InputForm inputType="text"/>
        </div>
        <div class="writing">
          <span>Слово:</span>
          <InputForm inputType="text"/>
        </div>
        <div class="reading">
          <span>Чтение:</span>
          <InputForm inputType="text"/>
        </div>
        <div class="meaning">
          <span>Значение:</span>
          <InputForm inputType="text"/>
        </div>
        <div class="source">
          <span>Источник:</span>
          <InputForm inputType="text"/>
        </div>
        <span class="material-symbols-outlined" @click="deleteWord(word.id)">delete</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .words {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .word {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    gap: 1rem;
    border: 2px solid rgb(51, 51, 51);
    border-radius: 10px;
    padding: 15px;
  }
  .source {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
  }
  .source span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .material-symbols-outlined {
    color: #c0392b; 
    position: absolute; 
    bottom: 90%;
    right: 0;
    user-select: none;
    cursor: pointer;
  }
</style>