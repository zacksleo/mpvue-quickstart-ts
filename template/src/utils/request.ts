import { wxp as wx } from '@minapp/wx/wxp'
var Fly = require("flyio/dist/npm/wx");
var request = new Fly();

const API_GATEWAY = 'https://xxx.com/api/v1';

request.interceptors.request.use((request: any) => {
    wx.showNavigationBarLoading();
    request.baseURL = API_GATEWAY;
    return request
})

request.interceptors.response.use(
    (response: any) => {
        wx.hideNavigationBarLoading();
        return Promise.resolve(response.data)
    },
    (err) => {
        wx.hideNavigationBarLoading();
        wx.showToast({
            title: err.message,
            icon: 'none'
        })
        return Promise.resolve()
    }
)

export default request