
Page({
  data: {
    array: ['请选择反馈类型', '商品相关', '物流状况', '客户服务', '优惠活动', '功能异常', '产品建议', '其他'],
    index: 0,
    textLen:0,
    textValue:""
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function (options) {
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭
  },
  test(e){
    this.setData({
      textLen:e.length
    })
  },
  textInput(e){
    wx.$throttle(this.test,300,300)(e.detail.value)
  },
  formSubmit(e){
    let {value} = e.detail
    let {array,index} = this.data;
    Object.assign(value,{
      type: array[index]
    })
    console.log('填写的数据',value)
  },
})