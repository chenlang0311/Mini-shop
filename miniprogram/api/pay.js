let pay = {
  cloudPay(){
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: 'getPay',
        // data: {body:"body",attach:"attach",total_fee:1}, // 可传入相关参数。
        success: res => {
          console.log(res.result)
          if (!res.result.appId) return
          wx.requestPayment({
            ...res.result,
            success: res => {
              resolve(res.result)
              console.log(res)
            }
          })
        }
      })
    })
  }
  
}

module.exports = {
  pay
}