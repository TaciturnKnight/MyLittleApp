// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'tntest-8g4nxwtj18f11f51'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  const users = db.collection('user')
  users.add({
    data: {
      openid: wxContext.OPENID,
      unionid: wxContext.UNIONID,
      appid: wxContext.APPID
    }
  }).then(res => {
    console.log(res)
  })
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}