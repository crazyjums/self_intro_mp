const app = getApp()
const hideNativeTabbar = require('../../utils/hide-native-tabbar.js')

Page({
  data: {
    projects: [],
    visibleProjects: [],
    filters: ['全部', '后端开发', 'DevOps', '平台建设'],
    activeFilter: '全部'
  },

  onLoad() {
    const projects = app.globalData.profile.projects
    this.setData({ projects, visibleProjects: projects })
  },

  onShow() {
    hideNativeTabbar()
  },

  selectFilter(e) {
    const activeFilter = e.currentTarget.dataset.filter
    const visibleProjects = activeFilter === '全部'
      ? this.data.projects
      : this.data.projects.filter(project => {
          if (project.category === activeFilter) return true
          if (activeFilter === '后端开发') return project.tech.indexOf('Go') > -1
          if (activeFilter === 'DevOps') return project.tech.indexOf('Jenkins') > -1 || project.tech.indexOf('Scheduler') > -1
          return false
        })
    this.setData({ activeFilter, visibleProjects })
  },

  openDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/project-detail/project-detail?id=${id}` })
  }
})
