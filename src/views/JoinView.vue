<!-- src/views/JoinView.vue -->
<template>
  <div class="join-container">
    <div class="hero-banner">
      <h1>加入 BDIS</h1>
      <p>与我们一起探索大数据的无限可能</p>
    </div>

    <div class="content-body">
      <div class="section-block">
        <h2>我们正在寻找</h2>
        <div class="role-grid">
          <el-card class="role-card" shadow="hover">
            <template #header><div class="card-header">Web 前端开发</div></template>
            <ul>
              <li>熟悉 HTML/CSS/JavaScript 基础</li>
              <li>了解 Vue.js 或 React 框架</li>
              <li>热衷于界面交互与用户体验优化</li>
            </ul>
          </el-card>

          <el-card class="role-card" shadow="hover">
            <template #header><div class="card-header">后端开发 (Java/Python)</div></template>
            <ul>
              <li>熟悉 Java SpringBoot 或 Python Django/Flask</li>
              <li>了解数据库设计 (MySQL/Redis)</li>
              <li>具备良好的逻辑思维能力</li>
            </ul>
          </el-card>

          <el-card class="role-card" shadow="hover">
            <template #header><div class="card-header">数据挖掘与算法</div></template>
            <ul>
              <li>熟悉 Python 数据分析栈 (Pandas/Numpy)</li>
              <li>了解机器学习基础算法</li>
              <li>有数学建模竞赛经验者优先</li>
            </ul>
          </el-card>
        </div>
      </div>

      <div class="section-block contact-block">
        <h2>联系方式</h2>
        <p>如果你对以上方向感兴趣，请准备好简历发送至我们的邮箱。</p>
        <div class="contact-info">
          <div class="info-item">
            <span class="label">简历投递邮箱：</span>
            <span class="value highlight">studio@example.com</span>
          </div>
          <div class="info-item">
            <span class="label">招新咨询 QQ 群：</span>
            <span class="value">888888888</span>
          </div>
          <div class="info-item">
            <span class="label">实验室地址：</span>
            <span class="value">重庆理工大学 博园4号楼305</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.join-container { background-color: #fff; min-height: 80vh; }

.hero-banner {
  background: linear-gradient(135deg, #004098 0%, #002b66 100%);
  color: #fff;
  text-align: center;
  padding: 80px 20px;
}
.hero-banner h1 { margin: 0 0 10px; font-size: 40px; }
.hero-banner p { font-size: 18px; opacity: 0.8; }

.content-body { max-width: 1000px; margin: 0 auto; padding: 60px 20px; }
.section-block { margin-bottom: 60px; }
.section-block h2 { text-align: center; margin-bottom: 40px; font-size: 28px; color: #333; }

.role-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.role-card ul { padding-left: 20px; color: #666; font-size: 14px; line-height: 1.8; }
.card-header { font-weight: bold; font-size: 16px; color: #004098; }

.contact-block { text-align: center; background: #f8f9fb; padding: 40px; border-radius: 8px; }
.contact-info { margin-top: 30px; display: inline-block; text-align: left; }
.info-item { margin-bottom: 15px; font-size: 16px; }
.label { color: #666; width: 120px; display: inline-block; text-align: right; margin-right: 10px; }
.value { color: #333; font-weight: 500; }
.highlight { color: #004098; font-weight: bold; }
</style>