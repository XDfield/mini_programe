// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: '_'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
    },

    bindPickerChange: function (e) {
        this.setData({
            id: e.detail.value
        })
    },
})
