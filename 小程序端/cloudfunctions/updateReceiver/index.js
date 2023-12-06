// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'hjy-exam-4gz65vhhfec7daea',
  traceUser: true,
})

const db = cloud.database();


// 云函数入口函数：更新接单员状态
exports.main = async (event, context) => {
  const { _id, allMoney, allCount, allOrder } = event;
  try {
    return await db.collection('orderReceive').doc(_id).update({
      data: {
        allMoney,
        allCount,
        allOrder
      }
    }) 
  } catch (error) {
    console.log(error);
  }
}