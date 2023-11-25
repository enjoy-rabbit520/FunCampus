// pages/personal/personal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUseGetUserProfile: false,
    },       
    
    getUserProfile() {
        wx.getUserProfile({
          desc: '获取用户信息',
          success: (res) => {
              this.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
              })
              wx.setStorageSync('userInfo', res.userInfo);
          }
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
        const userInfo = wx.getStorageSync('userInfo');
        console.log(userInfo, !!userInfo);
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