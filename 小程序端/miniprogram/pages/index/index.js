Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    // 首页轮播图
    banner: ['../../images/banner1.jpg', '../../images/banner2.jpg', '../../images/banner3.jpg'],
    // 首页九大模块
    indexConfig: [
      {
        icon: '../../images/kuaidi.png',
        //text: 'Courier pick-up'
        text: '快递代取',
        url: '../getExpress/getExpress'
      },
      {
        icon: '../../images/daiji.png',
        //text: 'Express delivery'
        text: '快递代寄',
        url: '../expressReplace/expressReplace'
      },
      {
        icon: '../../images/dayin.png',
        //text: 'print'
        text: '打印服务',
        url: '../print/print'
      },
      {
        icon: '../../images/paotui.png',
        //text: 'running errands'
        text: '校园跑腿',
        url: '../run/run'
      },
      {
        icon: '../../images/bangsong.png',
        //text: 'deliver goods'
        text: '帮我送',
        url: '../helpMeGive/helpMeGive'
      },
      {
        icon: '../../images/youxi.png',
        //text: 'play along'
        text: '游戏陪玩',
        url: '../playGame/playGame'
      },
      {
        icon: '../../images/daiti.png',
        //text: 'replace'
        text: '代替服务',
        url: '../replaceMe/replaceMe'
      },
      {
        icon: '../../images/zujie.png',
        //text: 'rent'
        text: '租借服务',
        url: '../lease/lease'
      },
      {
        icon: '../../images/qita.png',
        //text: 'other'
        text: '其它服务',
        url: '../otherHelp/otherHelp'
      }
    ]
  },

  // 个人信息详情
  toDetail(e) {
    // 获取用户授权信息
    const userInfo = wx.getStorageSync('userInfo');
    const url = e.currentTarget.dataset.url;
    if (userInfo) { //不为空
      wx.navigateTo({
        url,
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '请前往个人中心登录',
      })
    }
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
	onLoad: function(options) {
    // 获取用户的主键（openid）
		const openid = wx.getStorageSync('openid');
    if (!openid) { //判断是否成功获取
      wx.cloud.callFunction({
        name: 'UserOpenId',
        success: (res) => { //函数执行成功的逻辑
          const {
            openid
          } = res.result;
          // 将用户的主键保存到用户本地
          wx.setStorageSync('openid', openid);
        }
      })
    }
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

