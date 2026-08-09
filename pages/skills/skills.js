const app = getApp()
const hideNativeTabbar = require('../../utils/hide-native-tabbar.js')

Page({
  data: {
    profile: {},
    shown: false
  },

  onLoad() {
    this.setData({ profile: app.globalData.profile })
  },

  onShow() {
    hideNativeTabbar()
  },

  onReady() {
    setTimeout(() => {
      this.setData({ shown: true })
      this.drawRadar()
    }, 80)
  },

  drawRadar() {
    const ctx = wx.createCanvasContext('skillsRadar', this)
    const W = 320
    const H = 215
    const centerX = W / 2
    const centerY = H / 2 + 4
    const radius = 74
    const labels = ['后端开发', '基础设施', '工程效能', '数据库', 'AI 与工具']
    const values = [0.9, 0.86, 0.9, 0.82, 0.74]
    const count = labels.length

    ctx.setLineWidth(1)
    for (let ring = 1; ring <= 4; ring += 1) {
      ctx.beginPath()
      for (let i = 0; i < count; i += 1) {
        const angle = -Math.PI / 2 + (Math.PI * 2 * i) / count
        const r = (radius * ring) / 4
        const x = centerX + Math.cos(angle) * r
        const y = centerY + Math.sin(angle) * r
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.setStrokeStyle('rgba(143, 212, 178, 0.22)')
      ctx.stroke()
    }

    for (let i = 0; i < count; i += 1) {
      const angle = -Math.PI / 2 + (Math.PI * 2 * i) / count
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius)
      ctx.setStrokeStyle('rgba(143, 212, 178, 0.22)')
      ctx.stroke()
    }

    ctx.beginPath()
    values.forEach((value, i) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * i) / count
      const x = centerX + Math.cos(angle) * radius * value
      const y = centerY + Math.sin(angle) * radius * value
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.closePath()
    ctx.setFillStyle('rgba(67, 245, 154, .22)')
    ctx.fill()
    ctx.setStrokeStyle('#45F59A')
    ctx.setLineWidth(2)
    ctx.stroke()

    ctx.setFillStyle('#55F6A7')
    values.forEach((value, i) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * i) / count
      const x = centerX + Math.cos(angle) * radius * value
      const y = centerY + Math.sin(angle) * radius * value
      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()
    })

    ctx.setFillStyle('#B7CCC5')
    ctx.setFontSize(11)
    labels.forEach((label, i) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * i) / count
      const x = centerX + Math.cos(angle) * (radius + 22)
      const y = centerY + Math.sin(angle) * (radius + 22)
      ctx.setTextAlign(x < centerX - 6 ? 'right' : (x > centerX + 6 ? 'left' : 'center'))
      ctx.fillText(label, x, y)
    })
    ctx.draw()
  }
})
