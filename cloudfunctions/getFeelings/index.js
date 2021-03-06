// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'tntest-8g4nxwtj18f11f51'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  const feelings = await db.collection('feel').get()
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    feelings
  }
}