浏览器刷新界面会向后端发送get请求,服务器没有对应的资源匹配这个请求

因为history模式下,路由是在前端路由实现的,没有对应的后端资源文件



解决方法:
后端配置,所有路由指向一个入口文件比如index.html页面,
由前端处理url请求,返回对应界面, 
具体配置看 后端服务器类型

nginx例子
```
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```
