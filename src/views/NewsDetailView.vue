<template>
  <div class="detail-container container">
    <el-button @click="$router.back()" style="margin-bottom: 20px">← 返回</el-button>
    <div v-if="article" class="article-wrap">
      <h1>{{ article.title }}</h1>
      <div class="meta">
        <span>{{ article.publishDate }}</span>
        <el-tag size="small">{{ article.category }}</el-tag>
      </div>
      <div class="content" v-html="article.content"></div>
    </div>
    <el-empty v-else description="加载中..." />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getNewsDetail } from '../api';

const route = useRoute();
const article = ref(null);

onMounted(async () => {
  article.value = await getNewsDetail(route.params.id);
});
</script>

<style scoped>
.container { max-width: 900px; margin: 40px auto; padding: 0 20px; }
.article-wrap { background: #fff; padding: 40px; border-radius: 8px; }
.meta { color: #999; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px; }
.content { font-size: 16px; line-height: 1.8; }
</style>