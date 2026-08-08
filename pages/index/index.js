const app = getApp()

Page({
  data: {
    profile: {}
  },

  onLoad() {
    this.setData({ profile: app.globalData.profile })
  },

  goAbout() {
    wx.switchTab({ url: '/pages/about/about' })
  },

  goExperience() {
    wx.switchTab({ url: '/pages/experience/experience' })
  }
})
