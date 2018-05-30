import { wxp as wx } from '@minapp/wx/wxp'
import fly from 'flyio'

const request = fly;
const API_GATEWAY = 'https://wx.jgcjhg.com/dlkhgl/v1';

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