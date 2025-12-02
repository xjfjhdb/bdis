import { http, HttpResponse } from 'msw';

export const handlers = [
  // 1. 实验室信息
  http.get('/api/lab/info', () => HttpResponse.json({
    code: 0, message: "ok",
    data: {
      name: "大数据智能工作室",
      nameEn: "Big Data Intelligence Studio · BDIS",
      address: "重庆理工大学 博园4号楼305",
      email: "studio@example.com",
      logoUrl: "/logo.png" // 需在 public 放入 logo.png
    }
  })),

  // 2. 轮播图
  http.get('/api/home/banners', () => HttpResponse.json({
    code: 0, message: "ok",
    data: [
      { id: 1, title: "2025-2026年度社团招新启动", subtitle: "加入我们，共创精彩", imageUrl: "/banner1.png" }, // 需在 public 放入 banner1.png
      { id: 2, title: "省级创新创业大赛获奖", subtitle: "以赛促学，斩获佳绩", imageUrl: "https://via.placeholder.com/1200x400/2c3e50/ffffff?text=Award" }
    ]
  })),

  // 3. 新闻列表
  http.get('/api/news', ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('limit')) || 5;
    const list = [
      { id: 1, title: "2026春季招新说明", category: "recruit", publishDate: "2026-02-20", link: "/news/1", summary: "面向全校招募前端、后端开发成员。" },
      { id: 2, title: "3月组会：大模型应用实践分享", category: "activity", publishDate: "2026-03-01", link: "/news/2", summary: "分享 Transformer 架构落地案例。" },
      { id: 3, title: "《校园二手市场系统》项目招募", category: "project_recruit", publishDate: "2026-02-28", link: "/news/3", summary: "急需 Java 后端开发一名。" },
      { id: 4, title: "工作室3月值班安排通知", category: "notice", publishDate: "2026-02-29", link: "/news/4", summary: "请各位成员按时到岗。" },
      { id: 5, title: "省级数学建模竞赛组队通知", category: "contest", publishDate: "2026-03-02", link: "/news/5", summary: "提供指导老师与算力资源。" }
    ];
    return HttpResponse.json({ code: 0, message: "ok", data: list.slice(0, limit) });
  }),

  // 4. 新闻详情
  http.get('/api/news/:id', ({ params }) => {
    return HttpResponse.json({
      code: 0, message: "ok",
      data: {
        id: params.id,
        title: `此处是新闻标题 (ID: ${params.id})`,
        category: "activity",
        author: "BDIS 宣传部",
        publishDate: "2026-03-15",
        views: 1205,
        content: `<p>这是 ID 为 ${params.id} 的新闻详情内容。</p><h3>小标题</h3><p>这里是富文本模拟内容，支持 <strong>HTML</strong> 标签。</p>`
      }
    });
  }),

  // 5. 四宫格
  http.get('/api/home/features', () => HttpResponse.json({
    code: 0, message: "ok",
    data: [
      { id: 1, title: "加入工作室", type: "join", link: "/join" },
      { id: 2, title: "项目与成果", type: "projects", link: "/projects" },
      { id: 3, title: "技术活动", type: "events", link: "/activities" },
      { id: 4, title: "学习资料推荐", type: "resources", link: "/resources" }
    ]
  })),

  // 6. 项目列表
  http.get('/api/projects/highlight', () => HttpResponse.json({
    code: 0, message: "ok",
    data: [
      { id: 1, name: "党建矩阵·力量聚变", type: "系统", year: 2025, tags: ["Vue", "Java"], brief: "党建数据可视化管理平台", isRecruiting: false },
      { id: 2, name: "校园智慧导航", type: "合作", year: 2026, tags: ["GIS", "小程序"], brief: "提供校园内导航与预约功能", isRecruiting: true },
      { id: 3, name: "垃圾分类识别", type: "竞赛", year: 2025, tags: ["AI", "Python"], brief: "基于 CNN 的图像识别应用", isRecruiting: true }
    ]
  })),

  // 7. 技术活动
  http.get('/api/activities', () => HttpResponse.json({
    code: 0, message: "ok",
    data: [
      { id: 1, title: "第12期技术分享会", date: "2026-03-15", location: "4-305", tags: ["NLP"], description: "深入解析 Transformer。", image: "https://via.placeholder.com/400x200" },
      { id: 2, title: "春季团建", date: "2026-04-01", location: "南山", tags: ["生活"], description: "劳逸结合。", image: "https://via.placeholder.com/400x200" }
    ]
  })),

  // 8. 学习资源
  http.get('/api/resources', () => HttpResponse.json({
    code: 0, message: "ok",
    data: {
      books: [{ id: 1, title: "Python数据分析", author: "Wes McKinney", cover: "" }],
      courses: [{ id: 2, title: "CS231n", source: "Stanford" }],
      tools: [{ id: 3, title: "PyTorch", desc: "深度学习框架", link: "https://pytorch.org" }]
    }
  }))
];