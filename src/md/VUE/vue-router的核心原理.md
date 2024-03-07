vue router是vue官方提供的路由管理器.
监听url变化,匹配路由规则,来展示不同组件内容,实现单页应用的路由控制


hash模式:  路由信息保存在url的hash部分,通过监听hashchange  进行路由控制
history模式:  路由信息保存在浏览器history api中  ,通过history.pushState和history.replaceState修改浏览器历史记录,实现路由控制