// pages/task/task.js
// const db =wx.colud.database();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskList:[],
    btnObj:{
      normal:"领取任务",
      resolve:"领取奖励",
      received:"已领取"
    }
  },
  donormal(e){
    let that = this;
    // db.collection('todos').doc('').get({
    //   success: function (res) {
    //     // res.data 包含该记录的数据
    //     console.log(res.data)
    //   },
    //   fail:(res)=>{console.error(res)}
    // })
    // db.collection('todos').doc('e8f863ba5de7cb3e006297ac574f5ba2').update({
    //   // data 传入需要局部更新的数据
    //   data: {
    //     // 表示将 done 字段置为 true
    //     done: false
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    // return false;
    // wx.getStorageSync("openid"),
    let i = e.currentTarget.dataset.i;
    console.log(that.data.taskList[i]._id)
    let taskItem = that.data.taskList[i];
    delete taskItem["_id"]
    console.log(taskItem)
    db.collection('task').add({
      data: taskItem
    }).then(res=>{
      console.log(res)
    })
    // db.collection('task')
    //   .doc(that.data.taskList[i]._id)
    //   .update({
    //     data: {
    //       status: "6666",
    //       lv:1
    //     },
    //     success: function (res) {
    //       console.log(res)
    //     },
    //     fail:(res)=>{
    //       console.error(res)
    //     }
    //   })
    // db.collection('task').doc('21ad849c5de7bc550000005217dbde8e').update({
    //   // data 传入需要局部更新的数据
    //   data: {
    //     // 表示将 done 字段置为 true
    //     status: "normal"
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
      // .then(res=>{
      //   console.log(res)
      //   if (res.errMsg == 'document.update:ok'){
      //     let taskList = that.data.taskList;
      //     taskList[i].status = "received";
      //     wx.showToast({
      //       title: '领取成功',
      //     })
      //     that.setData({
      //       taskList: taskList
      //     })
      //   }
      // })
    
    
    console.log("donormal")
  },
  doresolve(e) {
    let that = this;
    console.log("doresolve")
    let i = e.currentTarget.dataset.i;
    console.log(that.data.taskList[i]._id)
    let taskItem = that.data.taskList[i];
    delete taskItem["_id"]
    console.log(taskItem)
    db.collection('task').add({
      data: taskItem
    }).then(res => {
      console.log(res)
    })
  },
  doreceived(e) {
    let that = this;
    console.log("doreceived")
    let i = e.currentTarget.dataset.i;
    console.log(that.data.taskList[i]._id)
    let taskItem = that.data.taskList[i];
    delete taskItem["_id"]
    console.log(taskItem)
    db.collection('task').add({
      data: taskItem
    }).then(res => {
      console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if (wx.getStorageSync('openid') && !!!this.data.userInfo) {
    //   this.getUser(wx.getStorageSync('openid'))
    // } 
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
    this.getTaskList();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  getTaskList(){
    let that  = this;
    db.collection('task')
      .get().then(res=>{
        if (res.errMsg == "collection.get:ok"){
          that.setData({
            taskList:res.data
          })
        }
      })
   
  },
  doTask(e){
    let id  = e.currentTarget.dataset.id;
    console.log(id)
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