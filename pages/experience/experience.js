const app = getApp()
const resumePdfBase64 = require('../../data/pdf/resume2_pdf.js')

Page({
  data: {
    profile: {}
  },

  onLoad() {
    this.setData({ profile: app.globalData.profile })
  },

  openPdf() {
    wx.showLoading({ title: '加载中' })
    const fs = wx.getFileSystemManager()
    const destPath = `${wx.env.USER_DATA_PATH}/resume2.pdf`
    fs.writeFile({
      filePath: destPath,
      data: wx.base64ToArrayBuffer(resumePdfBase64),
      success: () => {
        wx.hideLoading()
        wx.openDocument({
          filePath: destPath,
          fileType: 'pdf',
          showMenu: true,
          fail: (err) => {
            console.error('openDocument fail', err)
            wx.showToast({ title: '打开失败', icon: 'none' })
          }
        })
      },
      fail: (err) => {
        wx.hideLoading()
        console.error('writeFile fail', err)
        wx.showToast({ title: '写入失败', icon: 'none' })
      }
    })
  },

  copyContact(e) {
    const value = e.currentTarget.dataset.value
    wx.setClipboardData({
      data: value,
      success: () => {
        wx.showToast({ title: '已复制', icon: 'success' })
      }
    })
  }
})
