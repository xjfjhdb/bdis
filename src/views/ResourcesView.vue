<!-- src/views/ResourcesView.vue -->
<template>
  <div class="page-container">
    <div class="page-header">
      <h1>学习资料推荐</h1>
      <p>Learning Resources</p>
    </div>

    <div class="resource-box" v-loading="loading">
      <el-tabs v-model="activeTab" class="custom-tabs">
        <!-- 书籍推荐 -->
        <el-tab-pane label="经典书籍" name="books">
          <div class="book-grid">
            <div v-for="book in resources.books" :key="book.id" class="book-card">
              <div class="book-cover" :style="{ backgroundImage: `url(${book.cover})` }"></div>
              <div class="book-info">
                <h4>{{ book.title }}</h4>
                <p class="author">作者：{{ book.author }}</p>
                <el-button type="primary" link size="small">查看详情</el-button>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <!-- 课程推荐 -->
        <el-tab-pane label="在线课程" name="courses">
          <div class="list-layout">
            <div v-for="course in resources.courses" :key="course.id" class="list-item">
              <div class="item-icon">🎓</div>
              <div class="item-text">
                <h4>{{ course.title }}</h4>
                <p>来源：{{ course.source }}</p>
              </div>
              <el-button round size="small">去学习</el-button>
            </div>
          </div>
        </el-tab-pane>

        <!-- 常用工具 -->
        <el-tab-pane label="开发工具" name="tools">
          <div class="tool-grid">
            <el-card v-for="tool in resources.tools" :key="tool.id" shadow="hover" class="tool-card">
              <div class="tool-header">
                <h3>{{ tool.title }}</h3>
                <a :href="tool.link" target="_blank" class="link-icon">↗</a>
              </div>
              <p>{{ tool.desc }}</p>
            </el-card>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getResources } from '../api';

const activeTab = ref('books');
const resources = ref({ books: [], courses: [], tools: [] });
const loading = ref(true);

onMounted(async () => {
  const res = await getResources();
  if (res) resources.value = res;
  loading.value = false;
});
</script>

<style scoped>
.page-container { max-width: 1000px; margin: 40px auto; padding: 0 20px; }
.page-header { text-align: center; margin-bottom: 40px; }
.page-header h1 { font-size: 32px; color: #333; margin-bottom: 5px; }
.page-header p { color: #999; text-transform: uppercase; }

/* 书籍样式 */
.book-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 30px; }
.book-card { background: #fff; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #eee; transition: transform 0.2s; }
.book-card:hover { transform: translateY(-5px); box-shadow: 0 8px 16px rgba(0,0,0,0.08); }
.book-cover { width: 120px; height: 160px; margin: 0 auto 15px; background-size: cover; background-color: #eee; box-shadow: 3px 3px 8px rgba(0,0,0,0.1); }
.book-info h4 { font-size: 15px; margin: 0 0 5px; height: 42px; overflow: hidden; }
.book-info .author { font-size: 12px; color: #888; margin-bottom: 10px; }

/* 课程列表样式 */
.list-layout { background: #fff; border-radius: 8px; padding: 20px; }
.list-item { display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #f0f0f0; }
.list-item:last-child { border-bottom: none; }
.item-icon { font-size: 24px; margin-right: 15px; background: #f0f4ff; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
.item-text { flex: 1; }
.item-text h4 { margin: 0 0 5px; font-size: 16px; }
.item-text p { margin: 0; font-size: 13px; color: #888; }

/* 工具卡片样式 */
.tool-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.tool-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.tool-header h3 { margin: 0; color: #004098; }
.tool-card p { color: #666; font-size: 14px; margin: 0; }
.link-icon { text-decoration: none; font-weight: bold; color: #999; }
</style>