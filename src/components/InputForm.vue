<script setup lang="ts">
  import { ref, watch } from 'vue'

  const props = defineProps<{
    inputType: "text" | "number"
    placeholderText?: string
    errorText?: string
    errorCondition?: RegExp
    modelValue?: string | number | null
  }>()

  const emit = defineEmits(['update:modelValue'])

  const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }

  const showError = ref(false);
  const inputValue = ref(props.modelValue || "")

  watch(inputValue, () => {
    props.errorCondition?.test(String(inputValue.value))
    ? showError.value = true 
    : showError.value = false;
  })
  
</script>

<template>
  <div class="container">
    <input 
      v-model="inputValue"
      :value="props.modelValue"
      :type="props.inputType" 
      :placeholder="props.placeholderText"
      @input="updateValue"
      class="input-form"
    >
    <div v-if="showError" class="error">{{ props.errorText }}</div>
  </div>
</template>

<style scoped>
  .input-form {
    background-color: var(--dark-object);
    color: var(--light);
    padding: 1em;
    border-radius: 5px;
    border: 2px solid transparent;
    outline: none;
    font-family: 'Fira sans', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    width: 16rem;
    height: 3rem;
    transition: all 0.2s;
    margin-top: 0;
  }
  .input-form:hover {
    background-color: var(--dark-object-hover);     
  }
  .input-form:focus {
    cursor: text;
    color: var(--light);
    background-color: var(--dark-object-hover);
    border-color: var(--dark-green);
    border-width: 1.5px;
  }
  .error {
    color: #dd0000;
    text-align: center;
    margin-top: .1rem;
  }
  
</style>