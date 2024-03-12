请求头;

Accept:浏览器能够处理的           内容类型
Accept-Charset:浏览器能够显示的        字符集
Accept-Encoding：浏览器能够处理的          压缩编码
Accept-Language：浏览器当前设置的          语言
Connection：浏览器与服务器之间          连接的类型
Cookie：当前页面设置的任何         Cookie
Host：发出请求的页面所在的          域
Referer：发出请求的页面的          URL
User-Agent：浏览器的用户           代理字符串


响应头:

Date：表示消息发送的时间，时间的描述格式由rfc822定义  发送的时间
server:                                      服务器名称
Connection：浏览器与服务器之间            连接的类型
Cache-Control：控制                        HTTP缓存
content-type:表示后面的                 文档属于什么MIME类型


Content-Type 属性值有以下四种
1.application/json     序列化后的字符串
2.text/xml           提交xml格式数据
3.multipart/form-data   post  提交表单数据
4.application/x-www-form-urlencoded       原生表单数据
