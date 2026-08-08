const profile = {
  name: '朱洪根',
  enName: 'Zhuhonggen',
  avatar: 'https://jums.club/images/avatar.jpg',
  title: '服务端开发工程师',
  slogan: '英雄不问出处，富贵当思原由',
  summary: 'Go / Java / PHP 全栈服务端开发，3 年直播行业经验，擅长高并发系统设计与 MySQL 深度优化。',

  jobIntention: {
    position: '服务端开发工程师',
    city: '北京',
    experience: '3年',
    education: '硕士',
    salary: '面议'
  },

  basicInfo: [
    { label: '姓名', value: '朱洪根' },
    { label: '性别', value: '男' },
    { label: '出生年月', value: '1996.02' },
    { label: '户籍', value: '北京市' },
    { label: '学历', value: '硕士研究生 · 计算机专业' },
    { label: '毕业院校', value: '华北科技学院' },
    { label: '工作年限', value: '3 年（360 花椒直播）' }
  ],

  skills: [
    {
      group: '编程语言',
      items: [
        { name: 'Go', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'Python', level: 75 }
      ]
    },
    {
      group: '数据库',
      items: [
        { name: 'MySQL 优化', level: 85 },
        { name: 'Redis', level: 85 }
      ]
    },
    {
      group: '中间件 / 基础设施',
      items: [
        { name: 'Docker / K8s', level: 80 },
        { name: 'Kafka', level: 75 },
        { name: 'Elasticsearch', level: 70 },
        { name: 'Linux', level: 80 },
        { name: 'Vue', level: 70 }
      ]
    },
    {
      group: '计算机基础',
      items: [
        { name: '数据结构与算法', level: 80 },
        { name: '计算机网络', level: 80 },
        { name: '操作系统', level: 75 }
      ]
    }
  ],

  experience: [
    {
      type: 'work',
      period: '2021.07 - 2023.07',
      title: '服务端开发工程师',
      org: '360 · 花椒直播技术部',
      points: [
        '负责花椒直播家族业务服务端需求的研发与迭代，通过优化数据库和代码使慢日志响应时长缩短至 300ms 左右，提升 90%',
        '完成个播等级项目，提高主播上麦率和上麦时长，带动语音直播流水上涨',
        '完成才艺点单项目，相较旧项目流水提升约 100%',
        '参与用户系统上云，在不停服情况下将接口流量平滑切换至华为云'
      ]
    },
    {
      type: 'education',
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
      type: 'education',
      period: '2014.09 - 2018.07',
      title: '本科 · 网络工程',
      org: '华北科技学院',
      points: [
        '通过英语四级（437 分），多次获得一等奖学金、励志奖学金',
        '参加华为、思科网络大赛均进入地区赛'
      ]
    }
  ],

  projects: [
    {
      name: '花椒直播 / yohoo / 小兔爱聊',
      org: '360',
      period: '2022.10 - 2023.07',
      role: '服务端开发工程师',
      stack: 'Go（PHP/Java）、Redis、MySQL、Docker、K8s、PepperBus',
      points: [
        '负责用户系统开发与维护，针对现有问题进行优化和封装，提高代码质量和系统稳定性',
        '负责才艺点单项目方案设计与开发，对接口压测提升高并发能力，协调各端进度按时上线',
        '负责个播等级、VIP 社群管理等需求设计开发，保证新功能上线无影响',
        '参与花椒直播用户、消息系统上云，接口流量不停服平滑切换至华为云'
      ]
    },
    {
      name: '花椒直播家族信息管理系统',
      org: '360',
      period: '2022.01 - 2022.10',
      role: '服务端开发工程师',
      stack: 'PHP、Java、Spring Boot、MySQL、Redis、K8s、Docker',
      points: [
        '基于花椒家族管理系统开发 yohoo 马甲包家族系统，代码与数据隔离',
        '处理一起 P0 事故：大表慢查询引发蝴蝶效应，将单次查询从 3s 优化到 300ms，降低 90%',
        '导出接口改为异步队列下载并做限流，防止 MySQL 负载过大',
        '将 PHP 项目迁移到 Java，服务器同等配置下并发能力提升，后台响应更快更人性化'
      ]
    },
    {
      name: '基于 Spring Boot + MySQL + Bootstrap 的微服务系统',
      org: '公司实习项目',
      period: '2019.06 - 2019.09',
      role: '设计与 Java 开发',
      stack: 'Java、Spring Boot、MySQL、Mybatis、Bootstrap',
      points: [
        '经历需求分析 -> 详细设计 -> 软件开发 -> 测试与调试四个阶段，开发出整套微服务系统',
        '用 MySQL 作为中间缓存，解决 MaxCompute 计算结果向 Java 方法传参的难题'
      ]
    }
  ],

  hobbies: [
    { name: '游泳健身', icon: '🏊' },
    { name: '看书', icon: '📚' },
    { name: '电影', icon: '🎬' },
    { name: '写博客', icon: '✍️' },
    { name: '音乐', icon: '🎵' }
  ],

  quotes: [
    '英雄不问出处，富贵当思原由',
    '学习能力强、抗压能力强、动手能力强',
    '年轻有活力，积极向上'
  ],

  contacts: [
    { type: 'wechat', label: '微信', value: 'crazyjumsz', icon: '💬' },
    { type: 'email', label: '个人网站', value: 'jums.club', icon: '🌐' },
    { type: 'github', label: 'GitHub', value: 'github.com/crazyjums', icon: '🐙' }
  ]
}

module.exports = profile
