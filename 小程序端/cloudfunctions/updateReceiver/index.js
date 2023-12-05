// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();

<<<<<<< HEAD
// 云函数入口函数：更新接单状态
=======
// 云函数入口函数
>>>>>>> e34e615e7597c9c587205243ee8999294c3af0c1
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