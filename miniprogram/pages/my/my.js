// pages/my/my.js
const db = wx.cloud.database();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    showLoginDialog: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      userInfo: app.globalData.userInfo || wx.getStorageSync("userInfo"),
    });
    if (wx.getStorageSync('openid')&&!!!this.data.userInfo) {
      this.getUser(wx.getStorageSync('openid'))
    } 
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

  },
  onUserInfoClick: function () {
    let that = this;
    if (wx.getStorageSync('openid')) {
      that.getUser(wx.getStorageSync('openid'))
    } else {
      this.showLoginDialog();
    }
  },

  showLoginDialog() {
    this.setData({
      showLoginDialog: true
    })
  },

  onCloseLoginDialog() {
    this.setData({
      showLoginDialog: false
    })
  },

  onDialogBody() {
    // 阻止冒泡
  },
  getUser(openid){
    let that = this;
    db.collection('user')
      .where({
        _openid: openid
      }).get().then(res => {
        console.log(res.data)
        if (res.errMsg == 'collection.get:ok') {
          that.setData({
            userInfo: res.data[0],
            showLoginDialog: false
          });
          app.globalData.userInfo = res.data[0];
          // app.globalData.token = res.data.token;
          wx.setStorageSync('userInfo', res.data[0]);
        }
      })
  },
  onWechatLogin(e) {
    let that = this;
    if (e.detail.errMsg !== 'getUserInfo:ok') {
      if (e.detail.errMsg === 'getUserInfo:fail auth deny') {
        return false
      }
      wx.showToast({
        title: '微信登录失败',
      })
      return false
    }
    let openid = wx.getStorageSync("openid")
    if (openid) {
      that.getUser(openid)
    } else {
      app.getOpenId().then(res => {
        console.log(res)
        openid = res;
      })
      let userInfo = e.detail.userInfo;
      wx.setStorageSync('userInfo', userInfo);
      db.collection('user')
        .add({
          data: userInfo,
          succsess: (res) => {
            console.log(res)
          },
          fail: (err) => {
            console.log(err)
          }
        })
    }

    // util.login().then((res) => {
    //   return util.request(api.AuthLoginByWeixin, {
    //     code: res,
    //     userInfo: e.detail
    //   }, 'POST');
    // }).then((res) => {
    //   console.log(res)
    //   if (res.errno !== 0) {
    //     wx.showToast({
    //       title: '微信登录失败',
    //     })
    //     return false;
    //   }
    //   // 设置用户信息
    //   this.setData({
    //     userInfo: res.data.userInfo,
    //     showLoginDialog: false
    //   });
    //   app.globalData.userInfo = res.data.userInfo;
    //   app.globalData.token = res.data.token;
    //   wx.setStorageSync('userInfo', JSON.stringify(res.data.userInfo));
    //   wx.setStorageSync('token', res.data.token);
    // }).catch((err) => {
    //   console.log(err)
    // })
  },

  onOrderInfoClick: function (event) {
    wx.navigateTo({
      url: '/pages/ucenter/order/order',
    })
  },

  onSectionItemClick: function (event) {

  },

  // TODO 移到个人信息页面
  exitLogin: function () {
    wx.showModal({
      title: '',
      confirmColor: '#b4282d',
      content: '退出登录？',
      success: function (res) {
        if (res.confirm) {
          wx.removeStorageSync('token');
          wx.removeStorageSync('userInfo');
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      }
    })

  }
})