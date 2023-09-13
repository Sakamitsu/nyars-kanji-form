<script setup lang="ts">
  
  const props = defineProps<{
    placeholderText?: string
    modelValue?: string | null
  }>()
  
  const emit = defineEmits(['update:modelValue'])
  
  const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }

</script>

<template>
  <textarea 
    :placeholder="props.placeholderText"
    :value="props.modelValue || ``"
    @input="updateValue"
  >
  </textarea>
</template>

<style scoped>
  textarea {
    background-color: var(--dark-object);
    color: var(--light);
    padding: 1em;
    border-radius: 10px;
    border: 2px solid transparent;
    outline: none;
    font-family: 'Fira sans', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    width: 30rem;
    height: 20rem;
    transition: all 0.2s;
  }
  textarea:hover {
    background-color: var(--dark-object-hover);
  }
  textarea:focus {
    cursor: text;
    color: var(--light);
    background-color: var(--dark-object-hover);
    border-color: var(--dark-green);
  }

</style>