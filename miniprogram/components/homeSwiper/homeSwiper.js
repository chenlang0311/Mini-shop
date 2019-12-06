// components/homeSwiper/homeSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      default: () => []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    go(e) {
      let { url, type } = e.currentTarget.dataset;
      console.log(url, type)
      if(type="test"){
        wx.switchTab({
          url: url,
        })
      }
      if(type="index"){
        wx.$navigateTo({
          url: url
        })
      }
      
    
    },
  }
})
