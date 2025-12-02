<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="brand-area" v-if="labInfo">
        <!-- 优先显示 Logo 图片 -->
        <img v-if="labInfo.logoUrl" :src="labInfo.logoUrl" class="brand-logo-img" alt="Logo" />
        <div v-else class="brand-logo">BDIS</div>
        <div class="brand-divider"></div>
        <div class="brand-texts">
          <div class="text-en">Big Data Intelligence Studio</div>
          <div class="text-cn">大数据智能工作室</div>
        </div>
      </div>
      <div v-else>Loading...</div>
      <nav class="nav-menu">
        <router-link to="/" active-class="active">首页</router-link>
        <router-link to="/news" active-class="active">动态</router-link>
        <router-link to="/projects" active-class="active">项目与成果</router-link>
        <router-link to="/join" active-class="active">加入我们</router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getLabInfo } from '../api';
const labInfo = ref(null);
onMounted(async () => { labInfo.value = await getLabInfo(); });
</script>

<style scoped>
.header-wrapper { background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.05); height: 80px; position: sticky; top: 0; z-index: 999; }
.header-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; height: 100%; display: flex; justify-content: space-between; align-items: center; }
.brand-area { display: flex; align-items: center; }
.brand-logo-img { height: 45px; margin-right: 15px; }
.brand-logo { font-size: 32px; font-weight: 900; color: #004098; }
.brand-divider { width: 1px; height: 40px; background: #ddd; margin: 0 15px; }
.text-en { font-size: 12px; font-weight: bold; color: #666; }
.text-cn { font-size: 18px; font-weight: bold; color: #333; }
.nav-menu { display: flex; gap: 30px; }
.nav-menu a { font-weight: 500; font-size: 16px; color: #333; }
.nav-menu a.active { color: #004098; }
</style>