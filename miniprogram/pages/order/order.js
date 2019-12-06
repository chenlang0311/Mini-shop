// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
      id:9999,
      order_sn:"20191206123456789",
      order_status_text:"待付款",
      goodsList:[
        {
          id:1111,
          list_pic_url:"/images/task/invite.png",
          goods_name:"商品名字",
          number:"3"
        }
      ],
      actual_price:100,
      handleOption:{
        pay:true
      }
    }, {
        id: 9999,
        order_sn: "20191206123456789",
        order_status_text: "已完成",
        goodsList: [
          {
            id: 1111,
            list_pic_url: "/images/task/invite.png",
            goods_name: "商品名字",
            number: "3"
          }, {
            id: 1111,
            list_pic_url: "/images/task/invite.png",
            goods_name: "商品名字",
            number: "3"
          }
        ],
        actual_price: 100,
        handleOption: {
          pay: false
        }
      }]
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