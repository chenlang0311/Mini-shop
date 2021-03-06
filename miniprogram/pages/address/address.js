// miniprogram/pages/address/address.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    receiver_phone:"",
    receiver_name:"",
    receiver_address:"",
    isEdit:false,
    btnText:"保存"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options&&options.editId){
      let addressItem = wx.getStorageSync("addressItem")
      let region=[];
      region[0] = addressItem["province_name"]
      region[1] = addressItem["city_name"]
      region[2] = addressItem["area_name"]
      this.setData({
        isEdit:true,
        region: region,
        receiver_phone: addressItem["receiver_phone"],
        receiver_name: addressItem["receiver_name"],
        receiver_address: addressItem["receiver_address"],
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
  name: function (e) {
    this.setData({
      receiver_name: e.detail.value
    })
  },
  phone: function (e) {
    this.setData({
      receiver_phone: e.detail.value
    })
  },
  detailArea: function (e) {
    this.setData({
      receiver_address: e.detail.value
    })
  },
  //保存按钮
  save(e){
    let that = this;
    let data = e.detail.value
    if (!wx.$phoneTest.test(data.phone)) {
      wx.showToast({
        icon: 'none',
        title: '手机号码错误',
      })
      return false;
    }
    if (!data.name || !data.phone || !data.detailAddress || !that.data.region) {
      wx.showToast({
        icon: 'none',
        title: '资料填写不完整'
      })

      return false;
    }
    let sendData = Object.assign(data,{
      address: that.data.region
    })
    console.log('保存按钮携带值为', sendData)
   
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
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