const app = getApp()

Page({
  data: {
    contacts: []
  },

  onLoad() {
    this.setData({ contacts: app.globalData.profile.contacts })
  },

  copy(e) {
    const value = e.currentTarget.dataset.value
    wx.setClipboardData({
      data: value,
      success: () => wx.showToast({ title: '已复制', icon: 'none' })
    })
  },

  saveContact() {
    const lines = this.data.contacts.map(c => `${c.label}：${c.value}`).join('\n')
    wx.setClipboardData({
      data: lines,
      success: () => wx.showToast({ title: '联系方式已保存', icon: 'none' })
    })
  },

  goPoster() {
    wx.navigateTo({ url: '/pages/poster/poster' })
  }
})
