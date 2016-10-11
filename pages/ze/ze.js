Page({
  data:{
    obj: {
        name: "SU_ZE__"
    },
    status: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  changeName: function () {
      var obj = this.data.obj;
      if (!this.data.status) {
          obj.name = "世界";
          this.setData({
              status: 1
          });
      } else {
          obj.name = "SU_ZE__";
          this.setData({
              status: 0
          });
      }
      this.setData({
          obj: obj
      });
  }
})