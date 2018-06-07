import { Component,Vue } from 'vue-property-decorator';
import { wxp as wx } from '@minapp/wx/wxp';
import Card from '@/components/card.vue'; // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue'; // mpvue目前只支持的单文件组件

// 必须使用装饰器的方式来指定component
@Component({
    components: {
        Card,
        CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
    }
})

export default class extends Vue {
    motto: String = 'Hello World'
    userInfo: Object = {}

    onShow() { // 小程序 hook
        console.log('onShow')
    }
    created() {
        // 调用应用实例的方法获取全局数据
        this.getUserInfo()
    }
    mounted() { // vue hook
        console.log('mounted')
    }
    bindViewTap() {
        const url = '../logs/main'
        wx.navigateTo({ url })
    }

    getUserInfo() {
        // 调用登录接口
        wx.login().then(() => {
            wx.getUserInfo().then(res => {
                this.userInfo = res.userInfo;
                console.log(this.userInfo);
            });
        });
    }

    clickHandle(msg, ev) {
        console.log('clickHandle:', msg, ev)
    }

}