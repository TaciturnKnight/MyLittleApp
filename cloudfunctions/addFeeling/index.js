// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'tntest-8g4nxwtj18f11f51'
})

//
exports.main = async (event, context) => {
  console.log(event)
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  event.time = cloud.time
  db.collection('feel').add({
    data: event
  })
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}