<script setup lang="ts">
  
  const props = defineProps<{
    text: string
    click: () => void
  }>()

</script>

<template>
  <div class="add-reading">
    <span>{{ props.text }}</span> 
    <span class="material-symbols-outlined" @click="click">
      add_circle
    </span>
  </div>
</template>

<style scoped>
  .add-reading {
    display: flex;
    gap: 5px;
    margin-bottom: 1rem;
  }
  .material-symbols-outlined {
    color: var(--primary);
    user-select: none;
    cursor: pointer;
  }
</style>