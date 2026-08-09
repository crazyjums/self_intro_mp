const assets = require('./assets.js')

const profile = {
  name: '朱洪根',
  enName: 'Zhuhonggen',
  avatar: assets.avatar,
  title: 'Senior Backend Engineer',
  shortTitle: '后端开发工程师 / SRE',
  oneLiner: '专注后端开发、DevOps 平台建设与工程效率提升',
  slogan: '英雄不问出处，富贵当思原由',
  tags: ['Go', 'Python', 'Java', 'Kubernetes', 'Docker', 'CI/CD', 'Cloud Native', 'AI'],

  metrics: [
    { value: '15+', label: '工作年限' },
    { value: '30+', label: '项目经验' },
    { value: '10W+', label: '服务用户' },
    { value: '100%', label: '交付成功率' }
  ],

  career: {
    period: '2021 - 至今',
    company: '互联网公司',
    role: '高级后端工程师 / SRE',
    highlights: [
      '企业级发布平台建设',
      'CI/CD 自动化',
      'Kubernetes 发布系统',
      '工程效率平台'
    ]
  },

  workExperience: [
    {
      period: '2021.07 - 2023.07',
      title: '服务端开发工程师',
      org: '360 · 花椒直播技术部',
      points: [
        '负责花椒直播家族业务服务端需求的研发与迭代，慢日志响应时长缩短至 300ms 左右，提升 90%',
        '完成个播等级项目，提高主播上麦率和上麦时长，带动语音直播流水上涨',
        '完成才艺点单项目，相较旧项目流水提升约 100%',
        '参与用户系统上云，在不停服情况下将接口流量平滑切换至华为云'
      ]
    }
  ],

  educationExperience: [
    {
      period: '2018.09 - 2021.07',
      title: '硕士研究生 · 计算机专业',
      org: '华北科技学院（研究方向：数据挖掘与预测）',
      points: [
        '多次获得一等 / 二等奖学金，研究生期间担任大四本科生辅导员',
        '获第三届研究生网络与信息安全技术大赛京津冀赛区三等奖',
        '发表论文 3 篇：《计算机应用研究》（北核、CSCD 扩展版）等',
        '拥有 4 项软件著作权'
      ]
    },
    {
      period: '2014.09 - 2018.07',
      title: '本科 · 网络工程',
      org: '华北科技学院',
      points: [
        '通过英语四级（437 分），多次获得一等奖学金、励志奖学金',
        '参加华为、思科网络大赛均进入地区赛'
      ]
    }
  ],

  skills: [
    {
      group: '后端开发',
      items: [
        { name: 'Go', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 }
      ]
    },
    {
      group: '基础设施',
      items: [
        { name: 'Linux', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 82 }
      ]
    },
    {
      group: '工程体系',
      items: [
        { name: 'Jenkins', level: 85 },
        { name: 'GitLab CI/CD', level: 86 },
        { name: 'CI/CD Pipeline', level: 84 }
      ]
    },
    {
      group: '数据库',
      items: [
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 85 },
        { name: 'ElasticSearch', level: 72 }
      ]
    },
    {
      group: '消息',
      items: [
        { name: 'Kafka', level: 78 }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: '企业级 CI/CD 发布平台',
      category: '平台建设',
      status: '重点',
      period: '2021 - 至今',
      owner: '核心负责人',
      team: '团队 5 人',
      tech: ['Python', 'Go', 'Jenkins', 'Kubernetes'],
      intro: '负责设计和建设内部持续交付平台，支持自动构建、灰度发布、回滚、质量门禁。',
      background: '公司内部各业务线发布流程分散，人工操作多、效率低、易出错，需要一个统一的持续交付平台。',
      architecture: '平台采用 Go 构建核心调度服务，Python 提供管理与 API 层，Jenkins 负责流水线执行，Kubernetes 承载发布环境。',
      responsibilities: [
        '负责整体方案设计与核心模块开发',
        '设计自动构建与流水线编排能力',
        '实现灰度发布与一键回滚机制',
        '接入质量门禁，阻断不合格发布'
      ],
      problems: [
        '多环境配置碎片化，统一为配置中心管理',
        '发布窗口与构建资源冲突，引入资源调度排队',
        '回滚链路不闭环，建设自动化回滚能力'
      ],
      results: [
        '发布效率提升 70%',
        '上线事故率下降 60%',
        '全量业务线接入平台'
      ]
    },
    {
      id: 2,
      name: 'Kubernetes 自动发布系统',
      category: '云原生',
      status: '重点',
      period: '2020 - 2021',
      owner: '核心开发',
      team: '团队 8 人',
      tech: ['Go', 'K8s', 'Redis'],
      intro: '支持大规模应用发布、健康检查、自动化回滚。',
      background: '业务容器化后，应用发布依赖人工执行 kubectl，缺少可视化的发布控制与健康保障机制。',
      architecture: 'Go 编写发布引擎，通过 K8s API 操作 Deployment，Redis 做任务状态与发布锁存储。',
      responsibilities: [
        '发布引擎设计与开发',
        '健康检查与滚动发布策略',
        '自动化回滚触发器'
      ],
      problems: [
        '发布中断缺少补偿机制，增加幂等处理',
        '大集群 API 限流，实现指数退避重试'
      ],
      results: [
        '支持单次数千实例发布',
        '发布成功率 99.9%'
      ]
    },
    {
      id: 3,
      name: '微信小程序自动灰度发布系统',
      category: '平台建设',
      status: '在用',
      period: '2022',
      owner: '独立开发',
      team: '团队 2 人',
      tech: ['Scheduler', 'Redis', '任务调度'],
      intro: '实现小程序版本自动灰度、暂停恢复、发布状态管理。',
      background: '小程序发版需要人工跟踪灰度进度，缺少自动化的策略执行与状态可视化。',
      architecture: 'Scheduler 负责任务编排与定时触发，Redis 保存灰度状态与版本配置。',
      responsibilities: [
        '灰度策略引擎开发',
        '暂停 / 恢复 / 状态管理',
        '发布任务看板'
      ],
      problems: [
        '灰度中断不透明，建设实时状态上报',
        '多版本并发灰度，引入版本隔离'
      ],
      results: [
        '灰度流程全自动化',
        '版本发布风险显著降低'
      ]
    }
  ],

  growth: [
    { year: '2010', title: '开始程序员生涯', detail: 'Java 开发，参与多个业务系统研发' },
    { year: '2014', title: '夯实化架构实践', detail: '从单体到 SOA，面向服务架构快速成长' },
    { year: '2016', title: '微服务与治理', detail: '服务分层、链路追踪、容错降级实践' },
    { year: '2018', title: 'DevOps 体系建设', detail: 'CI/CD、自动化发布、质量门禁体系' },
    { year: '2021', title: '平台化建设', detail: '构建内部发布平台，提升工程效率' },
    { year: '2023', title: '云原生实践', detail: 'Kubernetes、大规模容器化落地' },
    { year: '2025', title: 'AI 工程实践', detail: 'AI 助手、智能运维、自动化开发工具' }
  ],

  articles: [
    { title: 'Kubernetes滚动发布最佳实践', category: 'Kubernetes', date: '2024-12-20', views: '3.2k', icon: 'K8s' },
    { title: '从0到1搭建企业级CI/CD平台', category: 'DevOps', date: '2024-11-15', views: '5.6k', icon: '∞' },
    { title: 'Go并发编程实战', category: 'Go', date: '2024-10-10', views: '2.8k', icon: 'Go' },
    { title: '大规模Pod健康检查系统设计', category: '云原生', date: '2025-01-05', views: '1.9k', icon: 'Pod' },
    { title: 'AI在运维中的应用探索', category: 'AI', date: '2025-02-20', views: '2.3k', icon: 'AI' }
  ],

  socials: [
    { name: 'GitHub', value: 'github.com/crazyjums', url: 'https://github.com/crazyjums', icon: '🐙' },
    { name: 'CSDN', value: 'blog.csdn.net/qq_33521184', url: 'https://blog.csdn.net/qq_33521184', icon: '📝' },
    { name: '掘金', value: 'juejin.cn/user/78820569780488', url: 'https://juejin.cn/user/78820569780488', icon: '⛏️' },
    { name: '个人博客', value: 'jums.club', url: 'https://jums.club/', icon: '🌐' }
  ],

  contacts: [
    { type: 'wechat', label: '微信', value: 'crazyjumsz', icon: '💬' },
    { type: 'site', label: '个人网站', value: 'jums.club', icon: '🌐' },
    { type: 'github', label: 'GitHub', value: 'github.com/crazyjums', icon: '🐙' }
  ]
}

module.exports = profile
