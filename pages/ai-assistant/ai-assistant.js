const assets = require('../../data/assets.js')
const hideNativeTabbar = require('../../utils/hide-native-tabbar.js')

Page({
  data: {
    draft: '',
    assets,
    scrollInto: 'chat-end',
    suggestions: ['介绍一下你的CI/CD发布平台', '你的技术栈是什么？'],
    messages: [
      {
        id: 1,
        role: 'assistant',
        text: '这个平台是我在 2021 年开始负责设计和建设的，主要目标是解决公司内部多业务线发布效率低、流程不一致的问题。\n\n整体架构如下：\nPMO → GitLab → Jenkins → 质量门禁\n                ↓\n          Harbor → Kubernetes\n\n我主要负责平台架构设计与核心开发，发布流程编排与自动化回滚。'
      },
      {
        id: 2,
        role: 'assistant',
        text: '这套平台目前已经服务公司 30+ 业务线，日均发布千次级别，发布成功率 100%。'
      }
    ]
  },

  onShow() {
    hideNativeTabbar()
  },

  onInput(e) {
    this.setData({ draft: e.detail.value })
  },

  useSuggestion(e) {
    this.setData({ draft: e.currentTarget.dataset.text }, () => this.sendMessage())
  },

  sendMessage() {
    const text = (this.data.draft || '').trim()
    if (!text) return
    const userMessage = { id: Date.now(), role: 'user', text }
    const reply = this.replyFor(text)
    const assistantMessage = { id: Date.now() + 1, role: 'assistant', text: reply }
    this.setData({
      messages: this.data.messages.concat([userMessage, assistantMessage]),
      draft: '',
      scrollInto: `msg-${assistantMessage.id}`
    })
  },

  replyFor(text) {
    if (text.indexOf('技术栈') > -1) return `我的核心技术栈是 Go、Python、Java，重点关注 Kubernetes、Docker、Jenkins 以及 CI/CD 工程体系。\n\n目前也在持续探索 AI 在智能运维和自动化开发中的应用。`
    if (text.indexOf('项目') > -1 || text.indexOf('发布') > -1) return `我最有代表性的项目是企业级 CI/CD 发布平台，包含自动构建、灰度发布、回滚、质量门禁等能力，已经覆盖 30+ 业务线。`
    return `我会从个人经历、技能、项目和技术文章几个方面回答。你可以试试问我“你的技术栈是什么？”或“介绍一下你的 CI/CD 项目”。`
  },

  goBack() {
    wx.navigateBack({ fail: () => wx.switchTab({ url: '/pages/index/index' }) })
  }
})
