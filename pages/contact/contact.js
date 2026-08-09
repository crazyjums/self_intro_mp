const app = getApp()
const assets = require('../../data/assets.js')

Page({
  data: {
    contacts: [],
    assets
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
  },

  previewQr() {
    wx.previewImage({
      urls: [this.data.assets.wechatQr],
      success: () => {
        wx.showToast({
          title: '长按可识别二维码',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})
