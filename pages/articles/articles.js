const app = getApp()

Page({
  data: {
    articles: [],
    visibleArticles: [],
    filters: ['全部', 'DevOps', 'Kubernetes', 'Go', 'AI'],
    activeFilter: '全部'
  },

  onLoad() {
    const articles = app.globalData.profile.articles
    this.setData({ articles, visibleArticles: articles })
  },

  selectFilter(e) {
    const activeFilter = e.currentTarget.dataset.filter
    const visibleArticles = activeFilter === '全部'
      ? this.data.articles
      : this.data.articles.filter(article => article.category === activeFilter)
    this.setData({ activeFilter, visibleArticles })
  },

  openArticle(e) {
    wx.setClipboardData({ data: e.currentTarget.dataset.title, success: () => wx.showToast({ title: '文章标题已复制', icon: 'none' }) })
  }
})
