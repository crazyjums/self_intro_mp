const app = getApp()

Page({
  data: {
    profile: {},
    menuItems: [
      { label: '基本信息', type: 'home', icon: '/images/tab-user.png' },
      { label: '工作经历', type: 'experience', icon: '/images/tab-briefcase.png' },
      { label: '项目管理', type: 'projects', icon: '/images/tab-folder.png' },
      { label: '技能管理', type: 'skills', icon: '/images/tab-pulse.png' },
      { label: '文章管理', type: 'articles', icon: '/images/tab-mail.png' }
    ]
  },

  onLoad() {
    this.setData({ profile: app.globalData.profile })
  },

  openMenu(e) {
    const type = e.currentTarget.dataset.type
    const tabPages = {
      home: '/pages/index/index',
      projects: '/pages/projects/projects',
      skills: '/pages/skills/skills'
    }
    if (tabPages[type]) return wx.switchTab({ url: tabPages[type] })
    const pages = { experience: '/pages/experience/experience', articles: '/pages/articles/articles' }
    if (pages[type]) wx.navigateTo({ url: pages[type] })
  },

  shareCard() {
    wx.navigateTo({ url: '/pages/poster/poster' })
  },

  showPrivacy() {
    wx.showToast({ title: '隐私设置已开启', icon: 'none' })
  },

  showAbout() {
    wx.showModal({ title: '关于小程序', content: '朱洪根的个人技术档案，记录技能、项目与成长轨迹。', showCancel: false })
  },

  logout() {
    wx.showToast({ title: '已退出当前演示状态', icon: 'none' })
  }
})
