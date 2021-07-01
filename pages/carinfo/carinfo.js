// pages/carinfo/carinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['非营运', '公路客运', '公交客运', '出租客运', '旅游客运', '租赁', '教练', '接送幼儿', '接送小学生', '接送中小学生', '接送初中生', '危险货物运输', '货运', '消防', '救护', '工程救险', '警用', '出租营转非', '营转非'],
    
    index: 0,
    showDialog2: false,
    images: [],
    tel: "",
    code: "",
    newPassword: "",
    sendTime: '发送验证码',
    sendColor: '#363636',
    snsMsgWait: 60
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      showDialog2: !this.data.showDialog2
    });

  },
  toggleDialog2() {
    this.setData({
      showDialog2: !this.data.showDialog2
    });

  },
  
  
  returnPre:function(e){
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      discount: e.currentTarget.dataset.discount,
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  inputTel: function(e) {
    this.setData({
      tel: e.detail.value
    })
  },
  inputCode: function(e) {
    this.setData({
      code: e.detail.value
    })
  },
  inputNewpassword: function(e) {
    this.setData({
      newPassword: e.detail.value
    })
  },
  // 获取验证码
  sendCode: function() {
    var that = this;

    if (this.data.tel == "") {
      this.toast('请输入手机号');
      return;
    }

    if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.data.tel))) {
      this.toast('手机号输入错误');
      return;
    }

    // 60秒后重新获取验证码
    var inter = setInterval(function() {
      this.setData({
        smsFlag: true,
        sendColor: '#cccccc',
        sendTime: this.data.snsMsgWait + 's后重发',
        snsMsgWait: this.data.snsMsgWait - 1
      });
      if (this.data.snsMsgWait < 0) {
        clearInterval(inter)
        this.setData({
          sendColor: '#363636',
          sendTime: '发送验证码',
          snsMsgWait: 60,
          smsFlag: false
        });
      }
    }.bind(this), 1000);

    // 写自己的服务器和接口- - 
    wx.request({
      url: ptserviceUrl + 'sendCode',
      data: {
        mobiles: this.data.tel,
      },
      method: "POST",
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success(res) {
        console.log(res);
        if (res.data.success) {
          that.toast('短信验证码发送成功，请注意查收');
        }
      }
    })
  },

  // 提交信息
  saveClick: function() {
    var that = this;
    if (that.data.tel == "") {
      that.toast("手机号不可为空");
      return;
    }
    if (that.data.code == "") {
      that.toast("验证码不可为空");
      return;
    }
    if (that.data.newPassword == "") {
      that.toast("新密码不可为空");
      return;
    }

    var md5psd = md5Utils.hexMD5(that.data.newPassword);
    
    // 写自己的服务器和接口- - 
    wx.request({
      url: ptserviceUrl + 'forget',
      data: {
        mobile: this.data.tel,
        phcode: this.data.code,
        npwd: md5psd,
      },
      method: "POST",
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success(res) {
        console.log(res);
        if (res.data.success) {
          wx.navigateBack({
            delta: 1,
          })
        } else {
          that.toast(res.data.msg);
        }
      }
    })
  },

  // toast方法抽取
  toast: function(msg) {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000,
      mask: true
    })
  },
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });

  },
  two() {
    this.setData({
      two: !this.data.two
    });

  },
  three() {
    this.setData({
      three: !this.data.three
    });

  },
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下1张照片
        this.data.images = images.length <= 1 ? images : images.slice(0, 3) 
        $digest(this)
      }
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