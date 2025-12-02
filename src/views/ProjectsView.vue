<!-- src/views/ProjectsView.vue -->
<template>
  <div class="page-container">
    <div class="page-header">
      <h1>项目与成果</h1>
      <p>Projects & Achievements</p>
    </div>

    <div class="content-wrapper" v-loading="loading">
      <div class="project-grid">
        <div v-for="proj in projectList" :key="proj.id" class="proj-card">
          <div class="proj-cover">
            <span class="proj-type">{{ proj.type }}</span>
          </div>
          <div class="proj-info">
            <div class="proj-header">
              <h3>{{ proj.name }}</h3>
              <el-tag v-if="proj.isRecruiting" type="danger" size="small" effect="dark">招募中</el-tag>
            </div>
            <p class="proj-year">{{ proj.year }} 年度项目</p>
            <p class="proj-brief">{{ proj.brief }}</p>
            <div class="proj-tags">
              <span v-for="tag in proj.tags" :key="tag">#{{ tag }}</span>
            </div>
            <div class="proj-actions">
              <el-button type="primary" plain size="small" class="action-btn">查看详情</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getProjects } from '../api';

const projectList = ref([]);
const loading = ref(true);

onMounted(async () => {
  projectList.value = await getProjects(20); // 获取更多项目
  loading.value = false;
});
</script>

<style scoped>
.page-container { max-width: 1200px; margin: 40px auto; padding: 0 20px; }
.page-header { text-align: center; margin-bottom: 50px; }
.page-header h1 { font-size: 32px; color: #333; margin-bottom: 5px; }
.page-header p { color: #999; text-transform: uppercase; }

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); /* 响应式网格 */
  gap: 30px;
}

.proj-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: all 0.3s;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
}
.proj-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }

.proj-cover {
  height: 200px;
  background-color: #eef2f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #ccd5e6;
  text-transform: uppercase;
}

.proj-info { padding: 25px; flex: 1; display: flex; flex-direction: column; }
.proj-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px; }
.proj-header h3 { margin: 0; font-size: 18px; color: #333; }
.proj-year { font-size: 12px; color: #999; margin-bottom: 15px; }
.proj-brief { font-size: 14px; color: #666; line-height: 1.6; margin-bottom: 20px; flex: 1; }

.proj-tags { margin-bottom: 20px; }
.proj-tags span {
  display: inline-block; font-size: 12px; color: #004098; 
  background: #f0f4ff; padding: 3px 8px; border-radius: 4px; margin-right: 8px; margin-bottom: 5px;
}

.action-btn { width: 100%; }
</style>