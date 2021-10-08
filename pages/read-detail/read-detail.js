// pages/read-detail/read-detail.js
import {
  postList
} from "../../data/data.js"
let manager
Page({
  /**
   * 页面的初始数据
   */
  data: {
    readId: null,
    collected: false,
    flag: "collects",
    isPlayingMusic: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    manager = wx.getBackgroundAudioManager()
    manager.onPlay((res) => {
      if (getApp.isPlayingId === this.data.readId) {
        getApp.isPlaying = true
        getApp.isPlayingId = this.data.readId
        this.updatePlayingIcon()
      }
    })
    manager.onPause((res) => {
      if (getApp.isPlayingId === this.data.readId) {
        getApp.isPlaying = false
        this.updatePlayingIcon()
      }
    })
    manager.onStop((res) => { 
      if (getApp.isPlayingId === this.data.readId) {
        getApp.isPlaying = false
        getApp.isPlayingId = -1
        this.updatePlayingIcon()
      } 
    })
    const nowIsPlaying = getApp.isPlaying
    this.data.readId = options.readId
    if (nowIsPlaying && this.data.readId === getApp.isPlayingId) {
      this.data.isPlayingMusic = getApp.isPlaying
    }
    const result = wx.getStorageSync(this.data.flag)
    this.data.collected = result[this.data.readId]
    var bean
    postList.forEach((element) => {
      if (this.data.readId === element.id.toString()) {
        bean = element
        this.data.readBean = bean
        this.setData(this.data)
        // this.startPlayMusic()
      }
    })
  },
  //点击收藏
  async onClickCollect(event) {
    const collectedObject = wx.getStorageSync(this.data.flag)
    if (this.data.collected) {
      //取消收藏
      collectedObject[this.data.readId] = false
      wx.setStorageSync(this.data.flag, collectedObject)
      this.data.collected = false
    } else {
      //添加收藏
      collectedObject[this.data.readId] = true
      wx.setStorageSync(this.data.flag, collectedObject)
      this.data.collected = true
    }
    this.setData(this.data)
    wx.showToast({
      title: this.data.collected ? "添加收藏成功" : "取消收藏成功",
      duration: 2000
    })
    // const clickResult = await wx.showModal({
    //   title: this.data.collected ? "添加收藏成功" : "取消收藏成功",
    // })
    // if (clickResult.confirm) {
    //   wx.showToast({
    //     title: '点击确定',
    //   })
    // } else if (clickResult.cancel) {
    //   wx.showToast({
    //     title: '点击取消',
    //   })
    // }
  },
  //点击分享
  async onClickShare() {
    const items = ["微信好友", "朋友圈", "qq好友", "qq空间"]
    // wx.showActionSheet({
    //   itemList: items,
    //   success(data) {
    //     const index = data.tapIndex
    //     wx.showToast({
    //       title: items[index],
    //     })
    //   }
    // })
    const selectResult = await wx.showActionSheet({
      itemList: items,
    })
    const index = selectResult.tapIndex
    const text = items[index]
    wx.showToast({
      title: text,
    })
  },
  //点击播放音乐
  clickPlayMusic() {
    if (this.data.isPlayingMusic) {
      //点击暂停
      manager.pause()
    } else {
      //点击播放
      this.startPlayMusic()
    }
  },
  startPlayMusic() {
    getApp.isPlayingId = this.data.readId
    manager.src = this.data.readBean.music.url
    manager.title = this.data.readBean.music.title
    manager.play()
  },
  updatePlayingIcon() {
    this.setData({
      isPlayingMusic: getApp.isPlaying
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})