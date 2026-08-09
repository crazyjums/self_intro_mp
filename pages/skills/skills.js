const app = getApp()

Page({
  data: {
    profile: {},
    shown: false
  },

  onLoad() {
    this.setData({ profile: app.globalData.profile })
  },

  onReady() {
    setTimeout(() => this.setData({ shown: true }), 100)
  }
})
