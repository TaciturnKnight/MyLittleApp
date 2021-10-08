// pages/read/read.js
import {
  postList
} from "../../data/data.js"
Page({
  //点击收藏
  onclickStar: function (params) {
    console.log(params)
  },
  //点击列表跳转详情
  toDetail(event) {
    const readId = event.currentTarget.dataset.readId
    wx.navigateTo({
      url: '../read-detail/read-detail?readId=' + readId,
    })
  },
  //点击头像查看大图
  toBigImage(event) {
    console.log("点击头像")
  },
  /**
   * 页面的初始数据
   */
  data: {
    listData: postList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var content = {
      data: []
    }
    this.setData(content)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})