// pages/print/print.js
import { getTimeNow } from '../../utils/index';
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    printImg: '',
    address: '',
    userInfo: {},
    pageNum: null,
    remark: '',
    colorPrint: false,
    twoSided: false,
    // 文件路径
    path: '',
  },

  getTwoSided(e) {
    this.setData({
      twoSided: e.detail.value
    })
  },

  getColorPrint(e) {
    this.setData({
      colorPrint: e.detail.value
    })
  },

  submit() {
    const { printImg, address, userInfo, pageNum, colorPrint, remark, twoSided } = this.data;
    if (!printImg || !address || !pageNum) {
      wx.showToast({
        icon: 'none',
        title: '您填写的信息不全',
      })
      return;
    }
    db.collection('order').add({
      data: {
        // 模块的名字
        name: '打印服务',
        // 当前时间
        time: getTimeNow(),
        // 订单金额
        money: colorPrint ? ( 2 * pageNum + 3 ) : ( 0.5 * pageNum + 3 ),
        // 订单状态
        state: '待帮助',
        // 收件地址
        address,
        // 订单信息
        info: {
          // 打印原件
          printImg,
          // 页数
          pageNum,
          // 备注
          remark,
          // 是否彩印
          colorPrint,
          // 是否双面
          twoSided,
        },
        // 用户信息
        userInfo,
        // 用户手机号
        phone: wx.getStorageSync('phone'),
        createTime: db.serverDate()
      },
      success: (res) => {
        wx.switchTab({
          url: '../index/index',
        })
        wx.showToast({
          title: '发布成功',
        })
      }
    })
  },

  getRemark(e) {
    this.setData({
      remark: e.detail.value
    })
  },

  getPageNumber(e) {
    this.setData({
      pageNum: Number(e.detail.value)
    })
  },

  selectAddress() {
    wx.setStorageSync('urlNow', 'print')
    wx.redirectTo({
      url: '../address/address',
    })
  },

  getImg() {
    // 实现文件的上传
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success: (res) => {
        // 
        const { path, name } = res.tempFiles[0];
        this.setData({
          path,
        })
        wx.showLoading({
          title: '加载中',
        })
        const random = Math.floor(Math.random() * 1000);
        wx.cloud.uploadFile({
          cloudPath: `print/${random}${name}`,
          filePath: path,
          success: (res) => {
            let fileID = res.fileID;
            this.setData({
              printImg: fileID,
            })
            wx.hideLoading();
          },
          fail: (err) => {
            console.log(err);
          }
        })
      }
    })
  },

  preview() {
    wx.openDocument({
      filePath: this.data.path,
      success: function (res) {
        console.log('文档打开成功')
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const address = wx.getStorageSync('addressNow');
    const userInfo = wx.getStorageSync('userInfo');

    if (address) {
      const { build, houseNumber } = address;
      this.setData({
        address: `${build}-${houseNumber}`,
      })
    }
    this.setData({
      userInfo,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})