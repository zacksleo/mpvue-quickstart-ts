import { Vue, Component } from 'vue-property-decorator'
import { wxp as wx } from '@minapp/wx/wxp'

declare module "vue/types/vue" {
    interface Vue {
        $mp: any;
    }
}

// 必须使用装饰器的方式来指定components
@Component({
    mpType: 'app', // mpvue特定
} as any)
class App extends Vue {
    // app hook
    onLaunch() {
        let opt = this.$root.$mp.appOptions
        console.log('onLaunch', opt)
    }

    onShow() {
        console.log('onShow')
    }

    onHide() {
        console.log('onHide')
    }
    created() {
        // 调用API从本地缓存中获取数据
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        console.log('app created and cache logs by setStorageSync')
    }
    mounted() { // vue hook
        console.log('mounted')
    }
}
export default App
