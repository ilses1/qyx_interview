beforeEach  路由跳转前  用户身份验证,路由拦截

beforeResolve  导航被确认前  ,组件内守卫和异步路由组件被解析后调用

afterEach  路由跳转后执行   页面滚动,统计pv

组件内守卫:

beforeRouteEnter  进入路由前    与全局beforeEach比可以针对某个具体路由设置

beforeRouteUpdate   在路由更新时执行，比如路由参数发生变化时

beforeRouteLeave  在离开当前路由时执行，  页面数据 弹出提示 