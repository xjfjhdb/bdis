import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import NewsDetailView from '../views/NewsDetailView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import JoinView from '../views/JoinView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import ResourcesView from '../views/ResourcesView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/news', name: 'news', component: NewsView },
  { path: '/news/:id', name: 'news-detail', component: NewsDetailView }, // 动态路由
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/join', name: 'join', component: JoinView },
  { path: '/activities', name: 'activities', component: ActivitiesView },
  { path: '/resources', name: 'resources', component: ResourcesView },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() { return { top: 0 } } // 切换页面自动回到顶部
})

export default router