<script setup lang="ts">

  import FormAdd from './FormAdd.vue';
  import InputForm from './InputForm.vue';
  import InputsForm from './InputsForm.vue';
  import WordForm from './WordForm.vue';
  import {ref} from 'vue'

  const props = defineProps<{
    text: string
  }>()

  interface IComposedMeaning {
    value: string
    id: number
  }

  const composedMeanings = ref<IComposedMeaning[]>([])

  const addComposedMeaning = () => {
    composedMeanings.value.push({
      value: '',
      id: Date.now()
    })
  }

  const deleteComposedMeaning = (id: number) => {
    composedMeanings.value = composedMeanings.value.filter(w => w.id !== id)
  }

</script>

<template>
  <div class="container">
    <FormAdd :text="props.text" :click="addComposedMeaning"/>
    <div class="composed-meanings">
      <div v-for="cm in composedMeanings" :key="cm.id" class="composed-meaning">
        <div>
          <span>Значение:</span>
          <InputForm inputType="text"/>
        </div>
        <div>
          <span>Источник значения:</span>
          <InputForm inputType="text"/>
        </div>
        <InputsForm text="Чтения" class="readings"/>
        <WordForm text="Слова" class="words"/>
        <span class="material-symbols-outlined" @click="deleteComposedMeaning(cm.id)">delete</span>
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
  .composed-meaning {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    border: 2px solid rgb(51, 51, 51);
    border-radius: 10px;
    padding: 25px;
  }
  .readings {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  .words {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
  }
  .material-symbols-outlined {
    color: #c0392b; 
    position: absolute; 
    bottom: 1;
    right: 0;
    top: 5px;
    user-select: none;
    cursor: pointer;
  }
</style>