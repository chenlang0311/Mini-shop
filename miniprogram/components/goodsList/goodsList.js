// components/goodsList/goodsList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      default:()=>[]
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
    toDetail(e){
      console.log(e)
      let id  = e.currentTarget.dataset.id;
      console.log(id)
      wx.$navigateTo({
        url:`/pages/detail/detail?id=${id}`
      })
    },
  }
})
