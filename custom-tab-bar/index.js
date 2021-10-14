// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    selectIndex: '0',
    selectColor: "#f391a9",
    unselectColor: "#999d9c",
    tabDatas: [{
      text: "心情",
      icon: "like",
      selectIcon: "like_fill",
      page: "/pages/feelings/feelings"
    }, {
      text: "视频",
      icon: "playon",
      selectIcon: "playon_fill",
      page: "/pages/videos/videos"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(event) {
      const position = event.currentTarget.dataset.position
      const tabUrl = this.data.tabDatas[position].page
      wx.switchTab({
        url: tabUrl
      })
      this.setData({
        selectIndex: position
      })
    }
  }
})