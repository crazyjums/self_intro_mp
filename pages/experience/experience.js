const app = getApp()

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
    fs.copyFile({
      srcPath: 'data/pdf/resume2.pdf',
      destPath,
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
        console.error('copyFile fail', err)
        wx.showToast({ title: '读取失败', icon: 'none' })
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
