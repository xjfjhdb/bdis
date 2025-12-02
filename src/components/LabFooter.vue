<template>
  <footer class="site-footer" v-if="info">
    <div class="footer-inner">
      <h3>{{ info.name }}</h3>
      <p style="opacity: 0.7; margin-bottom: 20px;">{{ info.nameEn }}</p>
      <div class="contact-row">
        <span>📍 {{ info.address }}</span>
        <span style="margin-left: 20px;">📧 {{ info.email }}</span>
      </div>
      <div class="footer-copy">© 2025 BDIS Lab. All Rights Reserved.</div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getLabInfo } from '../api';
const info = ref(null);
onMounted(async () => { info.value = await getLabInfo(); });
</script>

<style scoped>
.site-footer { background: #002b66; color: #fff; padding: 40px 0 20px; margin-top: auto; }
.footer-inner { max-width: 1280px; margin: 0 auto; text-align: center; }
.footer-copy { border-top: 1px solid rgba(255,255,255,0.1); margin-top: 20px; padding-top: 20px; font-size: 12px; opacity: 0.5; }
</style>