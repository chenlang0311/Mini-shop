// pages/checkout/checkout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedGoodsList: [],
    checkedAddress: {},
    checkedCoupon: [],
    couponList: [],
    goodsTotalPrice: 0.00, //商品总价
    freightPrice: 0.00,    //快递费
    couponPrice: 0.00,     //优惠券的价格
    orderTotalPrice: 0.00,  //订单总价
    actualPrice: 0.00,     //实际需要支付的总价
    addressId: 0,
    couponId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = {
      "errno": 0, "errmsg": "", "data": { "checkedAddress": { "id": 3, "name": "小明", "user_id": 1, "country_id": 1, "province_id": 20, "city_id": 233, "district_id": 2414, "address": "民族大道1号", "mobile": "13800008888", "is_default": 1, "province_name": "广东省", "city_name": "深圳市", "district_name": "南山区", "full_region": "广东省深圳市南山区" }, "freightPrice": 0, "checkedCoupon": {}, "couponList": [{ "id": 1, "coupon_id": 3, "coupon_number": "0", "user_id": 1, "used_time": 1242142681, "order_id": 4 }, { "id": 2, "coupon_id": 4, "coupon_number": "1000003379", "user_id": 1, "used_time": 1242976699, "order_id": 14 }, { "id": 3, "coupon_id": 4, "coupon_number": "1000018450", "user_id": 0, "used_time": 0, "order_id": 0 }, { "id": 4, "coupon_id": 4, "coupon_number": "1000023774", "user_id": 0, "used_time": 0, "order_id": 0 }, { "id": 5, "coupon_id": 4, "coupon_number": "1000039394", "user_id": 0, "used_time": 0, "order_id": 0 }, { "id": 6, "coupon_id": 4, "coupon_number": "1000049305", "user_id": 0, "used_time": 0, "order_id": 0 }, { "id": 7, "coupon_id": 4, "coupon_number": "1000052248", "user_id": 0, "used_time": 0, "order_id": 0 }, { "id": 8, "coupon_id": 4, "coupon_number": "1000061542", "user_id": 0, "used_time": 0, "order_id": 0 }, { "id": 9, "coupon_id": 4, "coupon_number": "1000070278", "user_id": 0, "used_time": 0, "order_id": 0 }, { "id": 10, "coupon_id": 4, "coupon_number": "1000080588", "user_id": 0, "used_time": 0, "order_id": 0 }, { "id": 11, "coupon_id": 4, "coupon_number": "1000091405", "user_id": 0, "used_time": 0, "order_id": 0 }, { "id": 24, "coupon_id": 3, "coupon_number": "0", "user_id": 1, "used_time": 0, "order_id": 0 }, { "id": 25, "coupon_id": 3, "coupon_number": "0", "user_id": 1, "used_time": 0, "order_id": 0 }, { "id": 26, "coupon_id": 3, "coupon_number": "0", "user_id": 1, "used_time": 0, "order_id": 0 }, { "id": 27, "coupon_id": 3, "coupon_number": "0", "user_id": 1, "used_time": 0, "order_id": 0 }, { "id": 28, "coupon_id": 3, "coupon_number": "0", "user_id": 1, "used_time": 0, "order_id": 0 }, { "id": 29, "coupon_id": 3, "coupon_number": "0", "user_id": 1, "used_time": 0, "order_id": 0 }, { "id": 30, "coupon_id": 3, "coupon_number": "0", "user_id": 1, "used_time": 0, "order_id": 0 }, { "id": 31, "coupon_id": 3, "coupon_number": "0", "user_id": 1, "used_time": 0, "order_id": 0 }], "couponPrice": 0, "checkedGoodsList": [{ "id": 99, "user_id": 1, "session_id": "1", "goods_id": 1128011, "goods_sn": "1128011", "product_id": 186, "goods_name": "趣味粉彩单面纱布超柔浴巾", "market_price": 79, "retail_price": 79, "number": 1, "goods_specifition_name_value": "", "goods_specifition_ids": "", "checked": 1, "list_pic_url": "http://yanxuan.nosdn.127.net/d6e25ec5b4ad7aa37e077ce751b56f46.png" }], "goodsTotalPrice": 79, "orderTotalPrice": 79, "actualPrice": 79 }
    };
    this.setData({
      checkedGoodsList: res.data.checkedGoodsList,
      checkedAddress: res.data.checkedAddress,
      actualPrice: res.data.actualPrice,
      checkedCoupon: res.data.checkedCoupon,
      couponList: res.data.couponList,
      couponPrice: res.data.couponPrice,
      freightPrice: res.data.freightPrice,
      goodsTotalPrice: res.data.goodsTotalPrice,
      orderTotalPrice: res.data.orderTotalPrice
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

  },
  selectAddress() {
    wx.navigateTo({
      url: '/pages/addressList/addressList',
    })
  },
  addAddress() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  submitOrder: function () {
    wx.showToast({
      title: '点击去付款',
      icon:"none"
    })
    return false;
    if (this.data.addressId <= 0) {
      util.showErrorToast('请选择收货地址');
      return false;
    }
    util.request(api.OrderSubmit, { addressId: this.data.addressId, couponId: this.data.couponId }, 'POST').then(res => {
      if (res.errno === 0) {
        const orderId = res.data.orderInfo.id;
        pay.payOrder(parseInt(orderId)).then(res => {
          wx.redirectTo({
            url: '/pages/payResult/payResult?status=1&orderId=' + orderId
          });
        }).catch(res => {
          wx.redirectTo({
            url: '/pages/payResult/payResult?status=0&orderId=' + orderId
          });
        });
      } else {
        util.showErrorToast('下单失败');
      }
    });
  }
})