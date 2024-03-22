webpack的热更新⼜称热替换（Hot Module Replacement），缩写为HMR。 这个机制可以做到不⽤刷新浏览器⽽将新变更的模块替换掉旧的模块。
1 .serve 端

●
启动 webpack-dev-server服务器
●
创建webpack实例
●
创建server服务器
●
添加webpack的done事件回调
,编译完成向客户端发送消息
●
创建express应用app
●
设置文件系统为内存文件系统
●
添加 webpack-dev-middleware 中间件
●
中间件负责返回生成的文件
●
启动webpackli译
●
创建http服务器并启动服务
,使用sockjs在浏览器端和服务端之间建立一卞/vebsocket长连接
●
创建socket服务器

2. client 端
●
webpack-dev-server/clien端会监听至I」此hash消息
●
客户端收到ok消息后会执行reloadApp方法进行更新
●
在reloadApp中会进行判断，是否支持热更新，如果支持的话发生 webpackHotUpdate事件，如果不支持就直接刷新浏览器
●
在 webpack/hot/dev-server.js 会监听 webpackHotUpdate 事件
●
在check方法里会调用module.hot.check方法
●
HotModuleReplacement.runtime请求Manifest
●
通过调用 JsonpMainTemplate.runtime 的 hotDownloadManifest方法
●
调用JsonpMainTemplate.runtime的hotDownloadUpdateChunk方法通过JSONP请求 获取最新的模块代码
●
补丁js 取回来或会调用 Jsonp MainTemplate.runtime.js 的 webpackHotUpdate 方法
●
然后会调用 HotModuleReplacement.runtime.js 的 hotAddUpdateChunk方法动态更新 模块代码
●
然后调用hotApply方法进行热更

⾸先要知道server端和client端都做了处理⼯作：

1
第⼀步，在 webpack 的 watch 模式下，⽂件系统中某⼀个⽂件发⽣修改，webpack 监听到⽂件变化，根据配置⽂

件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。

1
第⼆步是 webpack-dev-server 和 webpack 之间的接⼝交互，⽽在这⼀步，主要是 dev-server 的中间件 webpack- dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调⽤ webpack 暴露的 API对代码变化进⾏监 控，并且告诉 webpack，将代码打包到内存中。
2
第三步是 webpack-dev-server 对⽂件变化的⼀个监控，这⼀步不同于第⼀步，并不是监控代码变化重新打包。当我们在配置⽂件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置⽂件夹中静态⽂件的变化，变化后会通知浏览器端对应⽤进⾏ live reload。注意，这⼉是浏览器刷新，和 HMR 是两个概念。
3
第四步也是 webpack-dev-server 代码的⼯作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建⽴⼀个 websocket ⻓连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态⽂件变化的信息。浏览器端根据这些 socket 消息进⾏不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后⾯的步骤根据这⼀ hash 值来进⾏模块热替换。
4
webpack-dev-server/client 端并不能够请求更新的代码，也不会执⾏热更模块操作，⽽把这些⼯作⼜交回给了webpack，webpack/hot/dev-server 的⼯作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进⾏模块热更新。当然如果仅仅是刷新浏览器，也就没有后⾯那些步骤了。
5
HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上⼀步传递给他的新模块的 hash 值，它通过JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回⼀个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。
6
⽽第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进⾏对⽐，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引⽤。
7
最后⼀步，当 HMR 失败后，回退到 live reload 操作，也就是进⾏浏览器刷新来获取最新打包代码。