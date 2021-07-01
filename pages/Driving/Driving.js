// pages/Driving/Driving.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    showDialog2: false,
    array: ['张丰文 15185070538', '张丰才 15185070538', '张丰铁 15185070538', '张丰毅 15185070538'],
    index: 0,
    multiArray: [['7月-1日', '7月-2日', '7月-3日', '7月-4日', '7月-5日', '7月-6日', '7月-7日'], ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']],
    
    multiIndex: [0, 0, 0],
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  toggleDialog2() {
    this.setData({
      showDialog2: !this.data.showDialog2
    });
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