为了确保在dom更新完进行一些操作,所以要使用nexttick


原理:   浏览器异步队列
dom更新放到异步任务队列中,
nexttick把一个回调推到异步任务队列中,等待dom更新完执行

实现   promise.then   >  MutationObserver  >  setImmediate   >  setTimeout