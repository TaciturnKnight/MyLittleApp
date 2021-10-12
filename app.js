App({
  //当前是否在播放音乐
  isPlaying: false,
  isPlayingId: -1,
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.cloud.init({
      env: 'tntest-8g4nxwtj18f11f51',
      traceUser: true
    })
    wx.cloud.callFunction({
      name: 'addFeeling',
      data: {
        type:1,
        content:'111'
      }
    }).then((res) => {

    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("启动")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {},

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {}
})