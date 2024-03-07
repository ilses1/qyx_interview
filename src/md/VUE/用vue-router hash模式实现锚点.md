路由跳转到目标页面时，页面会自动滚动到指定的锚点位置

1.路由设置hash模式

2.在跳转的地方设置$router.push跳转,path设置路由路径#组件名
youranchor组件名,为组件id
```
this.$router.push({ path: '/yourpath#youranchor' })
```

3.在目标页面设置锚点,在挂载后获取锚点元素,并滚动到锚点位置

```
mounted () {
  const anchor = document.getElementById('youranchor')
  if (anchor) {
    anchor.scrollIntoView()
  }
}
```
