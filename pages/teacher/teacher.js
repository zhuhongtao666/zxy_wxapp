//teacher.js
//获取应用实例
import {getTeachers} from '../../api/wxApi.js'
var app = getApp()
Page({
  data:{
    trimg:'../../image/teacher.jpg',
    teachers:[]
  },
  /**
* 生命周期函数--监听页面加载
*/
  onLoad(options) {
    getTeachers().then(res => {
      this.setData({ teachers: res.data.extend.teachers })
    })
  },



})