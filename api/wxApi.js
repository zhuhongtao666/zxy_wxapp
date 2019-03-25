
import api_urls from './urls'
function request(url,data){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: url,
      data:data,
      method: 'POST',
      success(res) {
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}

/**
 *
 * 获取课程信息
 * @returns Promise对象
 */
function getCourses(){
  return request(api_urls.getCourses)
}

function getTeachers(){
  return request(api_urls.getTeachers)
}

export {getCourses,getTeachers}
