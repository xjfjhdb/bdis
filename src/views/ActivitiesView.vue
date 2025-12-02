<!-- src/views/ActivitiesView.vue -->
<template>
  <div class="page-container">
    <div class="page-header">
      <h1>技术活动</h1>
      <p>Tech Events & Activities</p>
    </div>

    <div class="timeline-wrapper" v-loading="loading">
      <el-timeline>
        <el-timeline-item
          v-for="item in activities"
          :key="item.id"
          :timestamp="item.date"
          placement="top"
          type="primary"
          size="large"
        >
          <el-card class="activity-card">
            <div class="activity-content">
              <div class="activity-img" :style="{ backgroundImage: `url(${item.image})` }"></div>
              <div class="activity-info">
                <h3>{{ item.title }}</h3>
                <div class="meta-row">
                  <span class="location">📍 {{ item.location }}</span>
                  <div class="tags">
                    <el-tag v-for="tag in item.tags" :key="tag" size="small" effect="plain" style="margin-right: 5px">
                      {{ tag }}
                    </el-tag>
                  </div>
                </div>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getActivities } from '../api';

const activities = ref([]);
const loading = ref(true);

onMounted(async () => {
  activities.value = await getActivities();
  loading.value = false;
});
</script>

<style scoped>
.page-container { max-width: 900px; margin: 40px auto; padding: 0 20px; }
.page-header { text-align: center; margin-bottom: 50px; }
.page-header h1 { font-size: 32px; color: #333; margin-bottom: 5px; }
.page-header p { color: #999; text-transform: uppercase; }

.activity-card { border-radius: 8px; overflow: hidden; }
.activity-content { display: flex; gap: 20px; }
.activity-img { width: 200px; height: 120px; background-size: cover; background-position: center; border-radius: 4px; flex-shrink: 0; }
.activity-info { flex: 1; }
.activity-info h3 { margin: 0 0 10px; font-size: 18px; color: #333; }
.meta-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; font-size: 13px; color: #666; }
.activity-info p { margin: 0; font-size: 14px; color: #555; line-height: 1.6; }

@media (max-width: 600px) {
  .activity-content { flex-direction: column; }
  .activity-img { width: 100%; height: 150px; }
}
</style>