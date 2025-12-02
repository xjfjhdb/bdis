<!-- src/views/NewsView.vue -->
<template>
  <div class="page-container">
    <div class="page-header">
      <h1>新闻动态</h1>
      <p>News & Dynamics</p>
    </div>

    <div class="content-wrapper" v-loading="loading">
      <div v-if="newsList.length > 0" class="news-list">
        <div v-for="item in newsList" :key="item.id" class="news-card">
          <div class="news-date-box">
            <span class="day">{{ item.publishDate.split('-')[2] }}</span>
            <span class="year-month">{{ item.publishDate.split('-')[0] }}-{{ item.publishDate.split('-')[1] }}</span>
          </div>
          <div class="news-body">
            <div class="news-meta">
              <el-tag :type="getTagType(item.category)" size="small" effect="plain">
                {{ formatCategory(item.category) }}
              </el-tag>
            </div>
            <h3 class="news-title">{{ item.title }}</h3>
            <p class="news-summary">{{ item.summary }}</p>
            <el-button type="primary" link class="read-more">阅读全文 →</el-button>
          </div>
        </div>
      </div>
      <el-empty v-else description="暂无动态" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getNews } from '../api';

const newsList = ref([]);
const loading = ref(true);

const getTagType = (cat) => {
  const map = { recruit: 'warning', activity: 'primary', notice: 'danger', contest: 'success' };
  return map[cat] || 'info';
};

const formatCategory = (cat) => {
  const map = { notice: '通告', recruit: '招新', activity: '活动', project_recruit: '项目招募', contest: '竞赛' };
  return map[cat] || '动态';
};

onMounted(async () => {
  // 传入一个较大的 limit (比如 100) 来获取“全部”新闻
  newsList.value = await getNews(100);
  loading.value = false;
});
</script>

<style scoped>
.page-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
}
.page-header {
  text-align: center;
  margin-bottom: 50px;
}
.page-header h1 { font-size: 32px; color: #333; margin-bottom: 5px; }
.page-header p { color: #999; text-transform: uppercase; letter-spacing: 1px; }

.news-card {
  display: flex;
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.03);
  transition: transform 0.2s;
  border: 1px solid #eee;
}
.news-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }

.news-date-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 25px;
  margin-right: 25px;
  border-right: 1px solid #eee;
  min-width: 100px;
}
.day { font-size: 36px; font-weight: bold; color: #004098; line-height: 1; }
.year-month { font-size: 13px; color: #888; margin-top: 5px; }

.news-body { flex: 1; display: flex; flex-direction: column; align-items: flex-start; }
.news-meta { margin-bottom: 10px; }
.news-title { margin: 0 0 10px; font-size: 20px; color: #333; }
.news-summary { color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 15px; }
.read-more { padding: 0; }
</style>