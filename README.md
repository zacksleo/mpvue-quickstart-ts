# mpvue-quickstart-ts

使用 Typescript 快速开始 mpvue 开发

```
vue init zacksleo/mpvue-quickstart-ts my-project
```

## 特性

+ mpvue
+ 使用[Fly.js](https://github.com/wendux/fly) 作为Http请求库，兼容小程序和Web
+ TSLint格式检查
+ vuex配置可选
+ 小程序API，TypeScript验证和提示支持，基于[@minapp/wx](https://github.com/qiu8310/minapp/tree/master/packages/minapp-wx)

## 如何使用

``` bash
$ npm install -g vue-cli
$ vue init zacksleo/mpvue-quickstart-ts my-project
$ cd my-project
$ npm install
$ npm run dev
```

## 注意事项

### 页面 Page

如果页面中，没有使用到组件，此时仍需要使用 @Component 进行装饰，如

```javascript
@Component
class Index extends Vue {
}
```

### 组件Props默认值

可使用属性定义的方式定义Props，并在其上方添加@Prop装饰，定义默认值，如

```javascript
  @Prop({ default: '1' })
  text: string;
```

### 引入外部样式

```html
<style>
@import "~weui-wxss/dist/style/weui.wxss";
</style>
```

## 参考文档

+ [quickstart](http://mpvue.com/mpvue/quickstart/)
+ [Vue官方文档](https://cn.vuejs.org/v2/guide/)
+ [vue-class-component](https://github.com/vuejs/vue-class-component)

## 参考项目

+ [mpvue/mpvue-quickstart](https://github.com/mpvue/mpvue-quickstart)
+ [WingGao/mpvue-ts-demo](https://github.com/WingGao/mpvue-ts-demo)
