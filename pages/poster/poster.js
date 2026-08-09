const app = getApp()
const assets = require('../../data/assets.js')

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function drawDivider(ctx, x, y, w) {
  ctx.setStrokeStyle('rgba(157, 255, 208, 0.2)')
  ctx.setLineWidth(1)
  for (let current = x; current < x + w; current += 8) {
    ctx.beginPath()
    ctx.moveTo(current, y)
    ctx.lineTo(Math.min(current + 4, x + w), y)
    ctx.stroke()
  }
}

function drawChip(ctx, label, x, y) {
  const width = Math.max(50, label.length * 8 + 20)
  ctx.setStrokeStyle('rgba(97, 247, 174, 0.38)')
  ctx.setLineWidth(1)
  roundRect(ctx, x, y, width, 25, 12)
  ctx.stroke()
  ctx.setFillStyle('rgba(5, 35, 30, 0.72)')
  ctx.fill()
  ctx.setFillStyle('#62F6AE')
  ctx.setFontSize(11)
  ctx.setTextAlign('center')
  ctx.fillText(label, x + width / 2, y + 17)
  return width
}

Page({
  data: {
    saved: false,
    assets
  },

  onReady() {
    this.draw()
  },

  draw() {
    const profile = app.globalData.profile
    const sources = {
      sharePass: assets.sharePass,
      wechatQr: assets.wechatQr
    }
    const paths = {}
    let remaining = Object.keys(sources).length
    Object.keys(sources).forEach((key) => {
      wx.getImageInfo({
        src: sources[key],
        success: (res) => { paths[key] = res.path },
        fail: () => { paths[key] = sources[key] },
        complete: () => {
          remaining -= 1
          if (remaining === 0) this.paint(profile, paths)
        }
      })
    })
  },

  paint(profile, paths) {
    const ctx = wx.createCanvasContext('poster', this)
    const W = 375
    const H = 660

    ctx.setFillStyle('#020A0D')
    ctx.fillRect(0, 0, W, H)
    ctx.drawImage(paths.sharePass, 0, 0, W, H)
    ctx.setFillStyle('rgba(1, 10, 12, 0.18)')
    ctx.fillRect(0, 0, W, H)

    ctx.setFillStyle('rgba(6, 22, 25, 0.64)')
    ctx.fillRect(42, 20, 318, 605)
    ctx.setStrokeStyle('rgba(112, 255, 183, 0.22)')
    ctx.setLineWidth(1)
    roundRect(ctx, 42, 20, 318, 605, 18)
    ctx.stroke()

    ctx.setTextAlign('left')
    ctx.setFillStyle('rgba(221, 244, 234, 0.68)')
    ctx.setFontSize(10)
    ctx.fillText('DEVELOPER  ·  ENGINEER  ·  SOLVER', 61, 57)
    ctx.setTextAlign('right')
    ctx.setFillStyle('#51F2A0')
    ctx.setFontSize(10)
    ctx.fillText('JUMS.CLUB', 339, 57)
    drawDivider(ctx, 61, 74, 278)

    ctx.setTextAlign('left')
    ctx.setFillStyle('#FFFFFF')
    ctx.setFontSize(34)
    ctx.fillText(profile.name, 61, 132)

    ctx.setStrokeStyle('rgba(106, 246, 177, 0.36)')
    ctx.setLineWidth(1)
    roundRect(ctx, 235, 105, 92, 27, 13)
    ctx.stroke()
    ctx.setFillStyle('#44F69B')
    ctx.beginPath()
    ctx.arc(250, 118, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.setFillStyle('#D5FCE4')
    ctx.setFontSize(11)
    ctx.fillText('在线接单中', 260, 122)

    ctx.setFillStyle('#4FF4A2')
    ctx.setFontSize(17)
    ctx.fillText(profile.shortTitle, 61, 166)

    ctx.setStrokeStyle('rgba(157, 255, 208, 0.14)')
    ctx.beginPath()
    ctx.moveTo(61, 184)
    ctx.lineTo(339, 184)
    ctx.stroke()

    ctx.setFillStyle('#B4C7C0')
    ctx.setFontSize(13)
    ctx.fillText('专注后端开发、DevOps 平台建设', 61, 214)
    ctx.fillText('与工程效率提升', 61, 236)

    const chips = profile.tags.slice(0, 6)
    let x = 61
    chips.forEach((chip, index) => {
      if (index === 3) x = 61
      const y = index < 3 ? 260 : 293
      x += drawChip(ctx, chip, x, y) + 9
    })

    drawDivider(ctx, 61, 340, 278)

    ctx.setTextAlign('left')
    ctx.setFillStyle('#51F2A0')
    ctx.setFontSize(25)
    ctx.fillText('⌗', 62, 405)
    ctx.setFillStyle('#E2F7ED')
    ctx.setFontSize(14)
    ctx.fillText('微信扫一扫', 62, 435)
    ctx.setFillStyle('#A6BBB4')
    ctx.setFontSize(13)
    ctx.fillText('添加我为好友', 62, 457)

    ctx.setStrokeStyle('rgba(96, 247, 174, 0.35)')
    ctx.setLineWidth(1)
    roundRect(ctx, 218, 370, 119, 119, 12)
    ctx.stroke()
    ctx.setFillStyle('#FFFFFF')
    roundRect(ctx, 224, 376, 107, 107, 8)
    ctx.fill()
    ctx.drawImage(paths.wechatQr, 228, 380, 99, 99)

    ctx.setFillStyle('#52F2A1')
    ctx.setFontSize(12)
    ctx.fillText('微信号  crazyjumsz', 62, 510)
    ctx.setFillStyle('#A6BBB4')
    ctx.fillText('jums.club', 62, 535)

    ctx.setStrokeStyle('rgba(157, 255, 208, 0.14)')
    ctx.beginPath()
    ctx.moveTo(61, 568)
    ctx.lineTo(339, 568)
    ctx.stroke()
    ctx.setFillStyle('#52F2A1')
    ctx.setFontSize(10)
    ctx.fillText("LET'S BUILD SOMETHING GREAT", 61, 600)

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
      destWidth: 750,
      destHeight: 1320,
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
      path: '/pages/index/index',
      imageUrl: assets.sharePass
    }
  }
})
