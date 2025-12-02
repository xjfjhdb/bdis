<template>
  <div class="app-layout">
    <NavBar />
    <main class="main-content">
      <slot></slot>
    </main>
    <LabFooter />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import LabFooter from '../components/LabFooter.vue';
</script>

<style scoped>
.app-layout { display: flex; flex-direction: column; min-height: 100vh; }
.main-content { flex: 1; }
</style>