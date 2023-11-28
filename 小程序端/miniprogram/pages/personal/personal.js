// pages/personal/personal.js
/**
 * 在个人中心，添加管理员审核
 */
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUseGetUserProfile: false,
    },       

    applyOrder() {
      wx.navigateTo({
        url: '../applyOrder/applyOrder',
      })
    },

    login() {
        wx.navigateTo({
          url: '../login/login',
        })
    },

    toAbout() {
      wx.navigateTo({
        url: '../aboutAs/aboutAs',
      })
    },

    getWXCustomer() {
      wx.setClipboardData({
        data: '15218253371',
        success: () => {
          wx.showToast({
            title: '复制微信成功',
          })
        }
      })
    },

    updateInfo() {
      if(this.data.hasUserInfo) {
        wx.navigateTo({
          url: '../updateInfo/updateIinfo',
        })
      }
    },

    getPhoneNumber(e) {
      wx.cloud.callFunction({
        name: 'getUserPhone',
        data: {
          cloudID: e.detail.cloudID,
        },
        // 云函数执行成功后，才会执行
        success: (res) => {
          //wx.setStorageSync('phone', res.result.list[0].data.phoneNumber);
        },
      })
    },    
    
    getUserProfile() {
        console.log('hello');
        wx.getUserProfile({
          desc: '获取你的基本信息',
          success: (res) => {
              this.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
              })
              //console.log('success');
              wx.setStorageSync('userInfo', res.userInfo);
          }
          // error: (res) => {
          //     console.log('fail');
          // }
        })
    },


    // 旧接口
    // 这里做了个兼容
    getUserInfo(e) {
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        if(wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
        //console.log(this.data.canIUseGetUserProfile);
        const userInfo = wx.getStorageSync('userInfo');
        this.setData({
            hasUserInfo: !!userInfo,
            userInfo: userInfo,
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
        this.onLoad();
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