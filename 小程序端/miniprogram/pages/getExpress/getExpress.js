// pages/getExpress/getExpress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [
      {
        name: '小件',
        type: '小件：手机手掌大小，重量在0.5kg以内，价格3元',
        money: 3,
      },
      {
        name: '中件',
        type: '中件：课本大小，重量在0.5kg到1.5kg，价格5元',
        money: 5
      },
      {
        name: '大件',
        type: '重量超过1.5kg，价格8元',
        money: 10
      }
    ],
    typeNow: 0,
    showMore: false,
    isReward: false,
    businessIndex: 0,
    businessArray: ['韵达快递', '圆通快递', '中通快递', '申通快递', '顺丰快递'],
    arriveIndex: 0,
    arriveArray: ['不限制','尽快送达', '今天中午', '今天晚上'],
    genderIndex: 0,
    genderArray: ['不限制性别', '仅限男生', '仅限女生'],
    numIndex: 0,
    numArray: [1,2,3,4,5,6,7],
    selectBusiness: false
  },

  bindExpressNumChange(e) {
    this.setData({
      numIndex: e.detail.value
    })
  },

  bindGenderChange(e) {
    this.setData({
      genderIndex: e.detail.value
    })
  },

  bindArriveChange(e) {
    this.setData({
      arriveIndex: e.detail.value
    })
  },

  bindBusinessChange(e) {
    this.setData({
      businessIndex: e.detail.value,
      selectBusiness: true
    })
  },

  selectAddress() {
    wx.navigateTo({
      url: '../address/address',
    })
  },

  handleChangeReward(e) {
    const value = e.detail.value;
    this.setData({
      isReward: value
    })
  },

  showMore() {
    this.setData({
      showMore: !this.data.showMore
    })
  },

  selectType(e) {
    const { id, tip } = e.currentTarget.dataset;
    this.setData({
      typeNow: id,
    })
    wx.showToast({
      icon: 'none',
      title: tip,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})