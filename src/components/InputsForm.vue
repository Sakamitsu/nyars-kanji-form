<script setup lang="ts">
  
  import InputForm from '../components/InputForm.vue'
  import FormAdd from './FormAdd.vue';
  import {ref} from 'vue'

  const props = defineProps<{
    text: string
    errorText?: string
    errorCondition?: RegExp
  }>()
  
  interface IInput {
    value: string
    id: number
  }

  const inputs = ref<IInput[]>([])

  const addInput = () => {
    inputs.value.push({
      value: '', 
      id: Date.now()
    })
  }
  
  const deleteInput = (id: number) => {
    inputs.value = inputs.value.filter(i => i.id !== id)
  }

</script>

<template>
  <div class="container">
    <FormAdd :text="props.text" :click="addInput"/>
    <div class="inputs">
      <div v-for="input of inputs" :key="input.id" class="input">
        <InputForm 
          inputType="text" 
          v-model="input.value"
          :errorText="props.errorText"
          :errorCondition="props.errorCondition"
        />
        <span class="material-symbols-outlined" @click="deleteInput(input.id)">delete</span>
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
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .input {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .material-symbols-outlined {
    color: #c0392b; 
    position: absolute; 
    left:230px; 
    bottom: calc(100%-40px);
    user-select: none;
    cursor: pointer;
  }
</style>