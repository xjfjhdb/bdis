<template>
  <div class="home-view">
    <!-- Banner + News -->
    <div class="section-hero container">
      <div class="banner-box">
        <el-carousel trigger="click" height="400px" arrow="always">
          <el-carousel-item v-for="item in banners" :key="item.id">
            <div class="banner-image" :style="{ backgroundImage: `url(${item.imageUrl})` }">
              <div class="banner-mask"><h2>{{ item.title }}</h2><p>{{ item.subtitle }}</p></div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="news-box">
        <div class="panel-header"><h3>最新动态</h3><router-link to="/news" class="more">更多 &gt;</router-link></div>
        <ul class="news-list" v-loading="loading">
          <li v-for="item in newsList" :key="item.id" class="news-item">
            <div class="news-date"><span class="day">{{ item.publishDate.split('-')[2] }}</span></div>
            <div class="news-content">
              <el-tag size="small" effect="plain" style="margin-bottom:4px">{{ item.category }}</el-tag>
              <router-link :to="item.link" class="title">{{ item.title }}</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Features -->
    <div class="section-features container">
      <div v-for="feat in features" :key="feat.id" class="feature-card" @click="$router.push(feat.link)">
        <h3>{{ feat.title }}</h3><p>点击探索更多</p>
      </div>
    </div>

    <!-- Projects -->
    <div class="section-projects container">
      <h2 class="center-title">代表项目与成果</h2>
      <div class="project-grid">
        <el-card v-for="proj in projects" :key="proj.id" class="proj-card" shadow="hover">
          <div class="proj-cover">{{ proj.type }}</div>
          <div class="proj-info">
            <h4>{{ proj.name }}</h4>
            <p>{{ proj.brief }}</p>
            <el-tag v-if="proj.isRecruiting" type="danger" size="small">招募中</el-tag>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getBanners, getNews, getFeatures, getProjects } from '../api';

const banners = ref([]);
const newsList = ref([]);
const features = ref([]);
const projects = ref([]);
const loading = ref(true);

onMounted(async () => {
  banners.value = await getBanners() || [];
  newsList.value = await getNews(5) || [];
  features.value = await getFeatures() || [];
  projects.value = await getProjects(3) || [];
  loading.value = false;
});
</script>

<style scoped>
.container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
.section-hero { margin-top: 30px; display: flex; gap: 20px; }
.banner-box { flex: 2; border-radius: 8px; overflow: hidden; }
.banner-image { height: 100%; background-size: cover; background-position: center; position: relative; }
.banner-mask { position: absolute; bottom: 0; width: 100%; background: rgba(0,0,0,0.6); color: #fff; padding: 20px; }

.news-box { flex: 1; background: #fff; padding: 20px; border-radius: 8px; }
.panel-header { display: flex; justify-content: space-between; border-bottom: 1px solid #eee; margin-bottom: 10px; }
.news-item { display: flex; margin-bottom: 15px; gap: 10px; }
.news-date .day { font-size: 20px; font-weight: bold; color: #004098; }
.news-content .title { display: block; color: #333; font-size: 14px; }
.news-content .title:hover { color: #004098; }

.section-features { margin: 40px auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.feature-card { background: #fff; padding: 30px; text-align: center; cursor: pointer; border-radius: 8px; transition: 0.3s; }
.feature-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

.center-title { text-align: center; margin: 50px 0 30px; }
.project-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding-bottom: 50px; }
.proj-cover { height: 150px; background: #eef2f6; display: flex; align-items: center; justify-content: center; font-size: 20px; color: #ccc; }
.proj-info { padding: 15px; }
</style>