

1.访问url时，dns解析发现指向cdn专用dns服务器，dns系统将域名解释权交给cname指向的cdn专用的dns服务器

2.cdn服务器把   全局负载均衡设备ip地址返回用户

3.用户 向全局负载均衡设备发送请求

4.全局设备  根据用户地址和用户请求的内容URL   选择一台  用户 所在区域的区域负载均衡设备，告诉用户向这台设备发起请求

5.区域负载均衡设备选择一台合适的缓存服务器来提供服务，将该缓存服务器的IP地址返回给全局负载均衡设备

6.全局负载均衡设备把服务器的IP地址返回给用户

7.用户向该缓存服务器发起请求，缓存服务器响应用户的请求，将用户所需内容发送至用户终端。

