// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'hjy-exam-4gz65vhhfec7daea',
  traceUser: true,
})
const db = cloud.database();

// 云函数入口函数：更新审核状态
exports.main = async (event, context) => {
  const { _id, receivePerson, state } = event;
  try {
    return await db.collection('order').doc(_id).update({
      data: {
        receivePerson,
        state
      }
    }) 
  } catch (error) {
    console.log(error);
  }
}