const app = getApp()
const assets = require('../../data/assets.js')
const hideNativeTabbar = require('../../utils/hide-native-tabbar.js')

Page({
  data: {
    profile: {},
    projects: [],
    metrics: [],
    shown: false,
    assets
  },

  onLoad() {
    const profile = app.globalData.profile
    this.setData({ profile, projects: profile.projects.slice(0, 3), metrics: profile.metrics.slice(0, 3) })
  },

  onReady() {
    setTimeout(() => this.setData({ shown: true }), 50)
  },

  onShow() {
    hideNativeTabbar()
  },

  onTapTag() {
    wx.vibrateShort({ type: 'light' })
    wx.switchTab({ url: '/pages/skills/skills' })
  },

  openProject(e) {
    wx.navigateTo({ url: `/pages/project-detail/project-detail?id=${e.currentTarget.dataset.id}` })
  },

  goProjects() {
    wx.switchTab({ url: '/pages/projects/projects' })
  },

  goSkills() {
    wx.switchTab({ url: '/pages/skills/skills' })
  },

  goArticles() {
    wx.navigateTo({ url: '/pages/articles/articles' })
  },

  openSocial(e) {
    const url = e.currentTarget.dataset.url
    wx.setClipboardData({
      data: url,
      success: () => wx.showToast({ title: '链接已复制', icon: 'none' })
    })
  },

  goExperience() {
    wx.navigateTo({ url: '/pages/experience/experience' })
  },

  copyBlog() {
    wx.setClipboardData({
      data: 'https://jums.club/',
      success: () => wx.showToast({ title: '博客地址已复制', icon: 'none' })
    })
  }
})
