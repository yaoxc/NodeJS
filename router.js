// 我们要为
// 路由
// 提供请求的URL和其他需要的GET及POST参数，
// 随后路由需要根据这些数据来执行相应的代码。
// 即从 路由 获取 URL 和 参数信息, 根据这些信息决定执行哪些代码

// 我们需要的所有数据都会包含在request对象中,该对象作为onRequest()回调函数的第一个参数传递
// 但是为了解析这些数据，我们需要额外的Node.JS模块，它们分别是url和querystring模块
const rHelper = require('./routerHelp');

rHelper.start();





