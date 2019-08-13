
## 约定

代码生成器生成的代码需要与后端接口有预先的约定

### 请求URL的约定

前后端分离开发最佳实践是采用RESTful的接口形式进行通信，在此我们对请求URL进行统一的规范约定

| 请求类型 | 前端约定的方法前缀 | 请求方法类型 | URL格式 | 示例 |
|----|----|----|----|----|
| 新增 | add | POST | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]| http://127.0.0.1:80/api/users |
| 更新 | update | PATCH | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]| http://127.0.0.1:80/api/users |
| 删除 | remove | DELETE | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]/\[主键ID\]| http://127.0.0.1:80/api/users/123 |
| 查询单个实体 | get | GET | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]/\[主键ID\]| http://127.0.0.1:80/api/users/123 |
| 分页查询多个实体 | fetch | GET | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]| http://127.0.0.1:80/api/users |
| 批量删除 | batch | POST | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]/remove| http://127.0.0.1:80/api/userss/remove |

### 请求传参的约定

GET和POST两种请求方式的的传参约定

| 请求方式 | 传参形式 | 示例 |
|----|----|----|
| GET | Url查询字符串，中文需要转码 | http://127.0.0.1:80/api/user/list?keyword=%E5%A7%93%E5%90%8D |
| DELETE | Url查询字符串，中文需要转码 | http://127.0.0.1:80/api/user/list?keyword=%E5%A7%93%E5%90%8D |
| POST | JSON格式字符串，请求头需要加上Content—Type=application/json | http://127.0.0.1:80/api/user/save <br> {"name":"kenny", "password":"123"} |
| PATCH | JSON格式字符串，请求头需要加上Content—Type=application/json | http://127.0.0.1:80/api/user/remove <br> {"name":"kenny", "password":"123"} |

### 分页查询多个实体，请求参数约定

| 参数名 | 说明 |
|----|----|
| limit | 每页几条数据 |
| page | 页码，从1开始 |


### 响应数据的约定


| 请求类型 | 成功响应 | 异常响应 |
|----|----|----|
| 新增 | `{"code": 0, "data": {...model}, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 更新 | `{"code": 0, "data": true, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 删除 | `{"code": 0, "data": true, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 查询单个实体 | `{"code": 0, "data": {...model}, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 分页查询多个实体 | `{"code": 0, "data": {"list": [{...model},...], "page":1, "pages": 1000, "total": 10000), "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 批量删除 | `{"code": 0, "data": true, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|

:::tip
新增的请求建议返回新增后的实体对象，便于前端实现增、删、改、查功能
:::

### 分页查询多个实体 响应示例
```json
{
  "msg": "成功",
  "code": 0,
  "data": {
    "limit": 10,
    "list": [{
      "appId": "9b2b8839bc8f4edbb9ef783cb9ea1d2f",
      "code": "navigation",
      "contextPath": "/navigation",
      "menus": null,
      "name": "后台管理",
      "orderNum": 1,
      "pkValue": "9b2b8839bc8f4edbb9ef783cb9ea1d2f",
      "remark": "3"
    }, {
      "appId": "384f5ee687f04cd9b4e6410350d4e07c",
      "code": "resource",
      "contextPath": "/resource",
      "menus": null,
      "name": "资源库",
      "orderNum": 2,
      "pkValue": "384f5ee687f04cd9b4e6410350d4e07c",
      "remark": null
    }, {
      "appId": "e9ce35e8731448de9ab0f94a1eaa4ff9",
      "code": "4",
      "contextPath": "3",
      "menus": null,
      "name": "12",
      "orderNum": 12,
      "pkValue": "e9ce35e8731448de9ab0f94a1eaa4ff9",
      "remark": "33"
    }],
    "page": 1,
    "pages": 1,
    "total": 3
  }
}
```

### 响应码code的约定

```html
0：执行成功
401：未登录（需要重新登录）
403：权限不足
500：系统内部错误（非业务代码里显式抛出的异常，例如由于数据不正确导致空指针异常、数据库异常等等）
```

### 请求跨域问题解决方案

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
