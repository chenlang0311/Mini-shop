const db = wx.cloud.database()
const userDb = db.collection('user')
let user = {
  getUser(opt) {
    opt = opt || {}
    return new Promise((resolve, reject) => {
      userDb.where(opt).get({
        success: function (res) {
          if (res.errMsg == 'collection.get:ok') {
            resolve(res.data);
          } else {
            wx.showToast({
              title: '获取个人信息出错',
              icon: "none"
            })
          }
        }
      })
    })
  }
}
module.exports = {
  user
}