const app = getApp()

Page({
  data: {
    projects: []
  },

  onLoad() {
    this.setData({ projects: app.globalData.profile.projects })
  },

  openDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/project-detail/project-detail?id=${id}` })
  }
})
