const app = getApp()

Page({
  data: {
    profile: {},
    pdfUrl: 'https://jums.club/pdf/resume2.pdf'
  },

  onLoad() {
    this.setData({ profile: app.globalData.profile })
  },

  openPdf() {
    wx.showLoading({ title: '加载中' })
    wx.downloadFile({
      url: this.data.pdfUrl,
      success: (res) => {
        wx.hideLoading()
        if (res.statusCode !== 200) {
          wx.showToast({ title: '下载失败', icon: 'none' })
          return
        }
        wx.openDocument({
          filePath: res.tempFilePath,
          fileType: 'pdf',
          showMenu: true,
          fail: () => {
            wx.showToast({ title: '打开失败', icon: 'none' })
          }
        })
      },
      fail: () => {
        wx.hideLoading()
        wx.showToast({ title: '网络异常', icon: 'none' })
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
