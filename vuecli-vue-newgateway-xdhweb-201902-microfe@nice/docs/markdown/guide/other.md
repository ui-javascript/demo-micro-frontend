## 其他杂项

### Axios 拦截器
项目实际开发过程中，可能会涉及到对项目所有请求或响应进行统一过滤等相关处理，以减轻工程代码量和可控性的需求。<br/>
基于此种情况，这里讲一下【**XDH-WEB中如何两步配置使用 Axios 拦截器？**】
1. 在 `src/helper` 目录下新建一个文件  如：`src/helper/interceptors.js`, 文件写入内容如下：
```js
import axios from '../utils/axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```
2. 在 `src/main.js`  文件中引入，如下:
```js
import './helper/interceptors'
```

### History 模式
vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```
当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！
不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。

所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面

:::tip
具体更多相关配置参考[vue-router](https://router.vuejs.org/zh-cn/essentials/history-mode.html)官方配置,<br/>
注意: **history 模式 web 容器 默认服务指向直接到项目 index.html, 访问的url中不应该包含项目名称及项目文件夹目录**
:::

#### 补充 Tomcat 后端配置例子
1. conf/server.xml Host 节点 中间添加 Context节点, 如下：
```xml
 <Host name="localhost"  appBase="webapps" unpackWARs="true" autoDeploy="true">
      ...
      <Context path="" docBase="D:/apache-tomcat-7.0.85/webapps/web/" debug="0"/>
      ...
 </Host>
```
2. conf/web.xml  web-app 节点 中间添加 error-page 节点， 如下：
```xml
  <web-app>
      ...
      <error-page>
        <error-code>404</error-code>
        <location>/</location>
      </error-page>
    
  </web-app>
```

### GoJS破解方法
```js
a.ax = d[u.Da("7eba17a4ca3b1a8346")][u.Da("78a118b7")](d, u.wl, 4, 4);
a.ax = function(){return true;} // 暴力去水印
```

### Axios源码修改记录
由于axios对跨域发送验证信息存在bug，需要对源码进行改动，改了文件（ node_modules/axios/lib/adapters/xhr.js ）以下地方:

```js
   if (config.withCredentials) {
      request.withCredentials = true;
    }
```
移到以下代码的前面
```js
    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
```

变成
```js

    if (config.withCredentials) {
      request.withCredentials = true;
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
```

### ElementUI源码改动记录
解决跨域上传文件发送验证信息问题，修改了文件（ node_modules/element-ui/lib/element-ui.common.js）以下内容：
```js
  xhr.open('post', action, true);

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }
```
改成了
```js
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }
  xhr.open('post', action, true);
```

