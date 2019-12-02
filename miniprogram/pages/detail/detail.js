// miniprogram/pages/detail/detail.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options){
      if(options.id){
        this.setData({
          id: options.id
        })
        this.getDetail(options.id)
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getDetail(id){
    let that = this;
    console.log('getDetail',id)
    db.collection('goods').where({
      _id:id
    }).get({
      success: function (res) {
        console.log(res)
        if (res.errMsg == 'collection.get:ok') {
          that.setData({
            detail: res.data[0]
          })
        } else {
          wx.showToast({
            title: '获取商品详情出错',
            icon: "none"
          })
        }
      }
    })
  },
  toExchange(){
    wx.showToast({
      title: '点击兑换按钮',
      icon:"none"
    })
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