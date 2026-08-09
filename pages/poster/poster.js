const app = getApp()

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

Page({
  data: {
    saved: false
  },

  onReady() {
    this.draw()
  },

  draw() {
    const profile = app.globalData.profile
    const that = this
    wx.getImageInfo({ src: '/images/tech-bg.jpg', success: () => that.paint(profile), fail: () => that.paint(profile) })
  },

  paint(profile) {
    const ctx = wx.createCanvasContext('poster', this)
    const W = 375
    const H = 600

    ctx.setFillStyle('#071019')
    ctx.fillRect(0, 0, W, H)
    ctx.drawImage('/images/tech-bg.jpg', 0, 0, W, H)

    ctx.setFillStyle('#10B981')
    ctx.fillRect(0, 0, W, 5)

    const avatarPath = '/images/avatar.png'
    ctx.save()
    ctx.beginPath()
    ctx.arc(W / 2, 64, 36, 0, Math.PI * 2)
    ctx.clip()
    ctx.drawImage(avatarPath, W / 2 - 36, 28, 72, 72)
    ctx.restore()

    ctx.setTextAlign('center')
    ctx.setFillStyle('#FFFFFF')
    ctx.setFontSize(28)
    ctx.fillText(profile.name, W / 2, 138)

    ctx.setFillStyle('#34D399')
    ctx.setFontSize(14)
    ctx.fillText(profile.shortTitle, W / 2, 170)

    ctx.setFillStyle('#8E8E93')
    ctx.setFontSize(13)
    ctx.fillText(profile.oneLiner, W / 2, 198)

    // skills chips
    const chips = profile.tags.slice(0, 6)
    const chipW = 64
    const chipH = 30
    const startX = W / 2 - ((chips.length * (chipW + 12)) - 12) / 2
    chips.forEach((c, i) => {
      const x = startX + i * (chipW + 12)
      ctx.setFillStyle('#15211C')
      roundRect(ctx, x, 236, chipW, chipH, 15)
      ctx.fill()
      ctx.setFillStyle('#34D399')
      ctx.setFontSize(12)
      ctx.fillText(c, x + chipW / 2, 256)
    })

    // bottom bar
    ctx.setFillStyle('rgba(4, 20, 23, 0.82)')
    roundRect(ctx, 28, 440, W - 56, 120, 20)
    ctx.fill()

    ctx.setTextAlign('left')
    ctx.setFillStyle('#FFFFFF')
    ctx.setFontSize(14)
    ctx.fillText('微信 · crazyjumsz', 52, 490)
    ctx.setFillStyle('#8E8E93')
    ctx.setFontSize(12)
    ctx.fillText('扫码查看完整简历', 52, 520)

    // WeChat QR code
    ctx.setFillStyle('#FFFFFF')
    ctx.fillRect(W - 158, 444, 112, 112)
    ctx.drawImage('/images/wechat.jpg', W - 152, 450, 100, 100)
    ctx.strokeStyle = '#10B981'
    ctx.lineWidth = 2
    ctx.strokeRect(W - 158, 444, 112, 112)

    ctx.setFillStyle('#6B7280')
    ctx.setFontSize(11)
    ctx.setTextAlign('center')
    ctx.fillText('jums.club', W / 2, 580)

    ctx.draw()
  },

  onQrLongPress() {
    wx.setClipboardData({
      data: 'crazyjumsz',
      success: () => {
        wx.showToast({ title: '微信号已复制，去添加好友吧', icon: 'none' })
      }
    })
  },

  save() {
    wx.canvasToTempFilePath({
      canvasId: 'poster',
      success: (res) => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: () => wx.showToast({ title: '已保存到相册', icon: 'success' }),
          fail: (err) => {
            if (String(err.errMsg).indexOf('auth') > -1) {
              wx.showModal({
                title: '需要相册权限',
                content: '请在设置中允许保存图片到相册',
                confirmText: '去设置',
                success: (m) => {
                  if (m.confirm) wx.openSetting()
                }
              })
            } else {
              wx.showToast({ title: '保存失败', icon: 'none' })
            }
          }
        })
      }
    })
  },

  goBack() {
    wx.navigateBack({ fail: () => wx.switchTab({ url: '/pages/profile/profile' }) })
  },

  onShareAppMessage() {
    return {
      title: '朱洪根的个人技术名片',
      path: '/pages/index/index'
    }
  }
})
