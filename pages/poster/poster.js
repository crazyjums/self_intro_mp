const app = getApp()

Page({
  data: {
    saved: false
  },

  onReady() {
    this.draw()
  },

  draw() {
    const profile = app.globalData.profile
    const ctx = wx.createCanvasContext('poster', this)
    const W = 375
    const H = 600

    const bg = ctx.createLinearGradient(0, 0, W, H)
    bg.addColorStop(0, '#0B0F0E')
    bg.addColorStop(1, '#0E1914')
    ctx.setFillStyle(bg)
    ctx.fillRect(0, 0, W, H)

    ctx.setFillStyle('#10B981')
    ctx.fillRect(0, 0, W, 6)

    ctx.setFillStyle('#1A2E26')
    ctx.beginPath()
    ctx.arc(W, 0, 120, 0, Math.PI * 2)
    ctx.fill()
    ctx.drawImage('/images/avatar.png', W / 2 - 36, 28, 72, 72)

    ctx.setTextAlign('center')
    ctx.setFillStyle('#FFFFFF')
    ctx.setFontSize(30)
    ctx.fillText(profile.name, W / 2, 138)

    ctx.setFillStyle('#34D399')
    ctx.setFontSize(15)
    ctx.fillText(profile.title, W / 2, 170)

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
      ctx.beginPath()
      ctx.roundRect(x, 236, chipW, chipH, 15)
      ctx.fill()
      ctx.setFillStyle('#34D399')
      ctx.setFontSize(12)
      ctx.fillText(c, x + chipW / 2, 256)
    })

    // bottom bar
    ctx.setFillStyle('rgba(255,255,255,0.08)')
    ctx.beginPath()
    ctx.roundRect(28, 440, W - 56, 120, 20)
    ctx.fill()

    ctx.setTextAlign('left')
    ctx.setFillStyle('#FFFFFF')
    ctx.setFontSize(14)
    ctx.fillText('微信 · crazyjumsz', 52, 490)
    ctx.setFillStyle('#8E8E93')
    ctx.setFontSize(12)
    ctx.fillText('扫码查看完整简历', 52, 520)

    // QR placeholder
    ctx.setFillStyle('#FFFFFF')
    ctx.fillRect(W - 150, 452, 96, 96)
    ctx.setFillStyle('#0B0F0E')
    ctx.setFontSize(13)
    ctx.fillText('QR', W - 102, 500)
    ctx.strokeStyle = '#0B0F0E'
    ctx.lineWidth = 3
    ctx.strokeRect(W - 150, 452, 96, 96)

    ctx.setFillStyle('#6B7280')
    ctx.setFontSize(11)
    ctx.setTextAlign('center')
    ctx.fillText('jums.club', W / 2, 580)

    ctx.draw()
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
  }
})
