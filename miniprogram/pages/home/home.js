// pages/home/home.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    iconList:[],
    goodsList:[]
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
    this.getBanner();
    this.getGoods();
    this.getAdIcon();
  },
  getAdIcon(){
    let that = this;
    db.collection('ad_icon').get({
      success: function (res) {
        if (res.errMsg == 'collection.get:ok') {
          that.setData({
            iconList: res.data
          })
          // let data ={
          //   img: res.data[0].img,
          //   title: "精选优品",
          //   url: res.data[0].url
          // }
          // db.collection('ad_icon').add({
          //   data:data,
          //   success:(res)=>{
          //     console.log(res)
          //   }
          // })
        } else {
          wx.showToast({
            title: '获取首页商品出错',
            icon: "none"
          })
        }
      }
    })
  },
  getGoods(){
    let that = this;
    db.collection('goods').get({
      success: function (res) {
        console.log(res)
        if (res.errMsg == 'collection.get:ok') {
          that.setData({
            goodsList: res.data
          })
        } else {
          wx.showToast({
            title: '获取首页商品出错',
            icon: "none"
          })
        }
      }
    })
  },
  getBanner(){
    let that = this;

    db.collection('swiper').where({
      type:"index"
    }).get({
      success: function (res) {
        if (res.errMsg == 'collection.get:ok'){
          that.setData({
            bannerList: res.data
          })
        }else{
          wx.showToast({
            title: '获取首页轮播出错',
            icon:"none"
          })
        }
      }
    })
  },
  go(e){
    let url = e.currentTarget.dataset.url;
    console.log(url)
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