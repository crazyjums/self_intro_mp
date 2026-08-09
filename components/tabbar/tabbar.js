Component({
  properties: {
    active: { type: String, value: '' }
  },

  methods: {
    switchTab(e) {
      wx.switchTab({ url: e.currentTarget.dataset.url })
    }
  }
})
