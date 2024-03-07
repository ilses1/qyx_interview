后端配置:  对所有路径进行处理

安全性:   history模式会暴露服务器上文件路径,  注意服务器配置, 避免恶意请求导致安全问题

兼容性: history模式 使用pushstate,replaceState api  注意浏览器兼容性

打包发布:  配置正确 pulicpath


总:要对后端配置,注意安全性兼容性,打包时正确配置publicpath