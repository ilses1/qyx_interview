

超文本传输安全协议


HTTPS经由HTTP进行通信，利用SSL/TLS来加密数据包。在http和tcp之间增加了一层安全层,加密解密


TLS/SSL的功能实现主要依赖三类基本算法：
1.散列函数hash、
2.对称加密、
3.非对称加密

基于散列函数验证信息的完整性
对称加密算法采用协商的秘钥对数据加密
非对称加密实现身份认证和秘钥协商