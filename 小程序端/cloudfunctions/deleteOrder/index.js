// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();

<<<<<<< HEAD
// 云函数入口函数：删除订单
=======
// 云函数入口函数
>>>>>>> e34e615e7597c9c587205243ee8999294c3af0c1
exports.main = async (event, context) => {
  const { _id } = event;
  try {
    return await db.collection('order').doc(_id).remove() 
  } catch (error) {
    console.log(error);
  }
}