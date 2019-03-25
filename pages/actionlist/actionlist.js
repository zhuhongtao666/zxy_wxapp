//actionlist.js
var app = getApp()
Page({
 data:{
   new:[],
   activity:{},
   activities:[{
     title:'招募老师',
     auther:'筑梦上大团队',
     time:'2019-03',
     content:"筑梦上大招募老师，快来加入我们，与我们共同筑梦！"
   },
   {
     title: '演讲咨询',
     auther: '筑梦上大团队',
     time: '2019-03',
     content: "演讲咨询"
   }
   ]
 },
 onLoad: function (options){
   var id = options.aId;
   this.setData({
     activity:this.data.activities[id-1]
   })
  //  wx.request({
  //    url: "https://wapp.cq-qq.com/index/index/wappnew",
  //    header: {
  //      'content-type': 'application/json'
  //    },
  //    method: "POST",
  //    data: { taken: "83f2e904ceec91d935593895e2d2dbfe", author: "goduer",id:newid },
  //    complete: function (res) {
  //      that.setData({
  //        new: res.data
  //      });
  //      console.log(res.data);
  //      if (res == null || res.data == null) {
  //        console.error('网络请求失败');
  //        return;
  //      }
  //    }
  //  })


 }



})