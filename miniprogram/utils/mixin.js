//路由事件
wx.$navigateTo = (opt) => {
  let pageLength = getCurrentPages().length;
  if (pageLength >= 9) {
    wx.redirectTo(opt)
  } else {
    wx.navigateTo(opt)
  }
}

//手机验证
wx.$phoneTest = /^1\d{10}$/;

//节流
wx.$throttle =function(fn,delay,duration){
  let that = this;
  let timer = this.timer;
  let begin  = Date.now();
  return function(){
    let contxt = that;
    let args = arguments;
    clearTimeout(that.timer);
    let current = Date.now()
    if (current - begin>=duration){
      fn.apply(contxt, args)
      begin = current;
    }else{
      that.timer = setTimeout(()=>{
        fn.apply(contxt, args)
      },delay)
    }
  }

}

//函数防抖（debounce）
//当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
wx.$debounce = function (fn, delay){
  let timer = null;
  return function(){
    let that = this;
    let args = arguments;
    console.log(timer)
    if (timer != null) clearTimeout(timer);
    timer = setTimeout(function() {
      
      fn.apply(that,args)
    },delay)
  }
}