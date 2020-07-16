Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#f5ac50",
    list: [{
        pagePath: "/pages/index/index",
        iconPath: "/pages/images/index-ico.png",
        selectedIconPath: "/pages/images/indexactive-ico.png",
        text: "首页"
      },
      {
        pagePath: "/pages/inspect/inspect",
        iconPath: "/pages/images/chedao-ico.png",
        selectedIconPath: "/pages/images/chedaoactive-ico.png",
        text: "车道"
        
      }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index,
      })
    }
  }
})