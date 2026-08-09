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
    setTimeout(() => this.setData({ shown: true }), 50)
  },

  onTapTag() {
    wx.vibrateShort({ type: 'light' })
    wx.switchTab({ url: '/pages/skills/skills' })
  },

  openSocial(e) {
    const url = e.currentTarget.dataset.url
    wx.setClipboardData({
      data: url,
      success: () => wx.showToast({ title: '链接已复制', icon: 'none' })
    })
  },

  goExperience() {
    wx.switchTab({ url: '/pages/experience/experience' })
  },

  copyBlog() {
    wx.setClipboardData({
      data: 'https://jums.club/',
      success: () => wx.showToast({ title: '博客地址已复制', icon: 'none' })
    })
  }
})
