
区别:
1.连接不同  http1.1默认长连接

2.资源请求不同   http1请求整个对象 http1.1支持请求资源的某个部分(range请求头)

3.缓存不同    http1 If-Modified-Since、Expires判断缓存
http1.1支持更多的缓存控制策略:etag,last-modified,cache-control

4.http1.1新增host字段,指定域名
5.http1.1 新增请求方法  put,head,options等