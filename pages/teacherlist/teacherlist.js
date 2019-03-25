//teacherlist.js
//获取应用实例
var app = getApp()
Page({
  data: {
    trimg: '../../image/teacher.jpg',
    teachers:[{
      name:'翟鑫奕',
      style:'风趣幽默，傻逼气十足',
      description:'这是一个十分傻逼的ceo，讲课非常让人崩溃，18阶考研第三名',
      school:'上海大学本科',
      courses:['数据结构','组成原理','人脸识别','深度学习']
    },
    {
      name: '张征宇',
      style: '上课和谐脏话连篇',
      description: '这是一个非常幽默的老师，专业性强',
      school: '上海大学本科',
      courses: ['数据结构', '组成原理', '人脸识别', '深度学习']
    },
    {
      name: '汪剑书',
      style: '上课让人想睡觉',
      description: '这是一个非常棒的老师，专业性强',
      school: '上海大学本科',
      courses: ['数据结构', '组成原理', '人脸识别', '深度学习']
    }
    ],
    teacher:{}
  },
  onLoad(options){
    console.log(options)
    var id = parseInt(options.tId) - 1
    this.setData({
      teacher:this.data.teachers[id]
    })
    var nav_title = '筑梦上大 - ' + this.data.teacher.name;
    wx.setNavigationBarTitle({
      title: nav_title
    })
  }


})