## 常见问题

### 1、POST数据时，后端接口接收不到前端传递的参数。

前端框架在默认情况下，POST数据是以 application/json 的方式传输JSON字符串。如果后端对传递的数据不是反序列化JSON的，需要对接收参数的代码进行改造。

如果后端接口有某些原因不能修改，可以在前端发送的请求头做处理。

代码生成器的配置以表单的形式提交数据实例：

```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user/login',
    options: {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
}
```
:::tip
表单提交二进制流用 'Content-type': 'multipart/form-data'
:::

### 2、请求接口跨域报错

前后端分离开发模式，由于前后端可以进行单独部署，请求跨域问题很常见，解决方法主要有两种方式：

1. 采用nginx代理
2. 接口响应头开启Cross （推荐）

响应头需要做以下配置, 同时后端需要开放OPTIONS类型的请求，跨域带cookie的请求时，浏览器先试探性发送OPTIONS请求，成功后才发起真正的请求

```html
 Access-Control-Allow-Credentials:true
 Access-Control-Allow-Origin:请求的host
```

如：
```html
 Access-Control-Allow-Credentials:true
 Access-Control-Allow-Origin:http://www.fbknav.cn:98
```

:::tip
建议后端代码不要写死Access-Control-Allow-Origin，可以从请求头中动态获取 Origin
:::

如果接口不需跨域带cookie验证信息，可以简单设置
```html
 Access-Control-Allow-Origin: *
```
