const app = getApp()

Page({
  data: {
    project: null,
    shown: false
  },

  onLoad(options) {
    const id = Number(options.id)
    const projects = app.globalData.profile.projects
    const project = projects.find(p => p.id === id)
    this.setData({ project })
    wx.setNavigationBarTitle({ title: project ? project.name : '项目详情' })
  },

  onReady() {
    setTimeout(() => this.setData({ shown: true }), 80)
  },

  copyIntro() {
    wx.setClipboardData({
      data: this.data.project.intro,
      success: () => wx.showToast({ title: '已复制', icon: 'none' })
    })
  }
})
