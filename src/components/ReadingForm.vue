<script setup lang="ts">
  
  import InputForm from './InputForm.vue'
  import TagInput from './TagInput.vue'
  import FormAdd from './FormAdd.vue'
  import {ref} from 'vue'

  const props = defineProps<{
    text: string
    tagList: string[]
  }>()

  interface IReading {
    value: string,
    tags: string[],
    source: string
    id: number
  }

  const readings = ref<IReading[]>([])

  const addReading = () => {
    readings.value.push({
      value: '',
      tags: [],
      source: '',
      id: Date.now()
    })
  }

  const deleteReading = (id: number) => {
    readings.value = readings.value.filter(r => r.id !== id)
  }

</script>

<template>
  <div class="container">
    <FormAdd :text="props.text" :click="addReading"/>
    <div class="readings">
      <div v-for="reading in readings" :key="reading.id" class="reading">
        <div  class="input">
          <InputForm inputType="text" v-model="reading.value"/>
          <TagInput :tagList="props.tagList"/>
        </div>
        <div class="source">
          <span>Источник:</span>
          <InputForm inputType="text" v-model="reading.source"/>
        </div>
        <span class="material-symbols-outlined" @click="deleteReading(reading.id)">delete</span>
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

  .material-symbols-outlined {
    color: #c0392b; 
    position: absolute; 
    bottom: 90%;
    right: 0;
    user-select: none;
    cursor: pointer;
  }
  .readings {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    @media (max-width: 1050px ) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 700px ) {
      grid-template-columns: 1fr ;
    }
  }
  .reading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border:2px solid rgb(51, 51, 51);
    border-radius: 10px;
    padding: 20px;
  }
  .source {
    text-align: center;
  }
  .input {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>