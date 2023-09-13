<script setup lang="ts">

  import Sidebar from './components/Sidebar.vue'
  
</script>

<template>
  <div class="app">
    <Sidebar/>
    <RouterView/>
  </div>
</template>

<style>

  .app {
    display: flex;
  }

</style>