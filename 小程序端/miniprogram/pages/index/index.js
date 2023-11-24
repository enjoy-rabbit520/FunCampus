Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    banner: ['../../images/banner1.jpg', '../../images/banner2.jpg', '../../images/banner3.jpg'],
    indexConfig: [
      {
        icon: '../../images/kuaidi.png',
        //text: 'Courier pick-up'
        text: '快递代取'
      },
      {
        icon: '../../images/daiji.png',
        //text: 'Express delivery'
        text: '快递代寄'
      },
      {
        icon: '../../images/dayin.png',
        //text: 'print'
        text: '打印服务'
      },
      {
        icon: '../../images/paotui.png',
        //text: 'running errands'
        text: '校园跑腿'
      },
      {
        icon: '../../images/bangsong.png',
        //text: 'deliver goods'
        text: '帮我送'
      },
      {
        icon: '../../images/youxi.png',
        //text: 'play along'
        text: '游戏陪玩'
      },
      {
        icon: '../../images/daiti.png',
        //text: 'replace'
        text: '代替服务'
      },
      {
        icon: '../../images/zujie.png',
        //text: 'rent'
        text: '租借服务'
      },
      {
        icon: '../../images/qita.png',
        //text: 'other'
        text: '其他服务'
      }
    ]
  },
  
  /**
   * 首页点击公告栏，弹出公告的隐藏信息
   */
  showNotice() {
    wx.showModal({
      title: '公告',
      content: '关注公众号可享订单推送通知——接单员请务必添加本人qq: 2136585216'
    })
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// wx.request({
    //   url: 'http://localhost:3000/api/test',
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
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

