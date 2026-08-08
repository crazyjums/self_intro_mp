const app = getApp()

Page({
  data: {
    profile: {}
  },

  onLoad() {
    this.setData({ profile: app.globalData.profile })
  }
})
