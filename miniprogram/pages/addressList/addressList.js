// pages/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[] ,
    index: null,
    loadInfo: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let addressList = wx.getStorageSync("addressList");
    if (!addressList){
      addressList = [{ "address_id": "22628", "receiver_phone": "18453571332", "receiver_name": "李翠凤", "receiver_address": "松山", "default_address": "0", "province_id": "15", "province_name": "山东省", "city_id": "228", "city_name": "烟台市", "area_id": "2555", "area_name": "栖霞市" }, { "address_id": "22627", "receiver_phone": "18453571332", "receiver_name": "李翠凤", "receiver_address": "松山", "default_address": "0", "province_id": "15", "province_name": "山东省", "city_id": "228", "city_name": "泰安市", "area_id": "2555", "area_name": "泰山风景区" }];
      wx.setStorageSync("addressList", addressList)
      this.setData({
        addressList: addressList
      })
    }else{
      this.setData({
        addressList: addressList
      })
    }
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
  delAddress(e) {
    let { id, idx } = e.currentTarget.dataset;
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确认删除该地址?',
      confirmText: "删除",
      success: (res) => {
        if (res.confirm) {
          console.log("删除")
          that.data.addressList.splice(idx, 1)
          that.setData({
            addressList: that.data.addressList
          })
        }
        if (res.cancel) {
          console.log("取消")
        }
      }
    })
  },
  editAddress(e){
    let {id,idx} =e.currentTarget.dataset
    let item = this.data.addressList[idx];
    wx.setStorageSync("addressItem", item)
    wx.$navigateTo({
      url: `/pages/address/address?editId=${id}`,
    })

  },
  addAddress(){
    wx.$navigateTo({
      url: '/pages/address/address',
    })
  },
})