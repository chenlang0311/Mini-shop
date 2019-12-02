const db = wx.cloud.database()
let  swiper  = {
    getBanner(opt) {
    opt = opt || {}
    return new Promise((resolve, reject) => {
      db.collection('swiper').where(opt).get({
        success: function (res) {
          if (res.errMsg == 'collection.get:ok') {
            resolve(res.data);
          } else {
            wx.showToast({
              title: '获取首页轮播出错',
              icon: "none"
            })
          }
        }
      })
    })
  }
}
module.exports =  {
  swiper
}
