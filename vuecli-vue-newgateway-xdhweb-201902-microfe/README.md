## 新德汇前端基础框架（XDH-WEB v3.x）

基于Vue + ElementUI 的web项目工程框架，专注于公检法行业中台系统快速搭建，框架已在多个项目实战检验。

特色：搭配代码生成器，可生成api调用、vuex管理、模拟数据代码；

内置常用超过70个组件、扩展；子模块支持前端微服务，可以批量编译打包；独立开发、运行、部署；支持更新升级。

### 安装
```bash
git clone https://gitee.com/newgateway/xdh-web.git
npm run install
```
注意：码云上的依赖只支持node 8.x， 如果版本不符合可以用 npm install 安装

安装完依赖，需要初始化项目，依次运行以下命令
```bash
npm run fix
npm run build:libs
npm run jsdoc
npm run coder
```

项目初始化完成，就可以用 npm run dev 愉快的进入开发模式了，又或者用 npm run dev:docs 打开文档。


### 命令说明
#### 启动开发环境
```bash
npm run dev  或 npm run serve
```
两者区别：dev 预设了启动服务自动打开浏览器，即 npm run dev 等价于 npm run serve -- --open

#### 生产环境编译打包
```bash
npm run build
```

#### 整体编译打包，包含主应用和全部子应用
```bash
npm run release
```
该命令等价于 npm run fix && build:libs && npm run coder && npm run build && npm run app -- --build

#### 运行代码质量检查
```bash
npm run lint
```

#### 运行单元测试
```bash
npm run test:unit
```

#### 运行代码生成器
```bash
npm run coder
```

#### 安装依赖模块
```bash
npm run install
```
建议用 npm run install 从码云拉取

#### 升级框架
```bash
npm run upgrade
```
注意：xdh-web v2.x 不支持直接升级到v3.x， 需要使用手动升级脚本

#### 启动文档http服务
```bash
npm run server:docs
```

#### 启动预览打包后的站点http服务
```bash
npm run server:dist
```

#### 预编译公共类库、主题
```bash
npm run build:libs
```
如果element-ui 主题scss配置修改了，需要执行该命令重新生成文件

#### 启动文档开发环境服务
```bash
npm run dev:docs
```

#### 编译打包文档站点
```bash
npm run build:docs
```
由于开发环境docs占用系统资源，可以编译后，用 npm run server:docs 来预览文档

#### 生成注释帮助文档
```bash
npm run jsdoc
```
生成的文档集成在docs，可以用 npm run dev:docs 或 npm run server:docs 预览

#### 修复node_modules 类库的bug
```bash
npm run fix
```
修复 element-ui / axios / gojs

### 站点应用管理命令

框架支持多站点或目录分离打包，以满足编译非全局模块的快速响应需求。

#### 新增站点
```bash
npm run app -- --add [name] --port [port] --url [baseUrl] --out [outputDir]
```
- name： 站点名称，必填，
- port： 开发环境启动端口号，可选，默认：8001
- url:   网站部署目录路径，可选，默认: 与name相等
- out:   打包输出目录，依赖 config.outputDir， 可选，默认: 与name相等
##### 示例
```bash
npm run app -- --add myApp --port 12345 --url /topic --out /topic
```
注意：url 和 out 参数必须以 "/" 开始， 不能用相对路径, 建议 url 和 out 用相同的值，除非你清楚怎么部署。

#### 删除站点
```bash
npm run app -- --remove [name]
```
name： 站点名称，必填，

##### 示例
```bash
npm run app -- --remove myApp
```

#### 批量编译打包全部站点
```bash
npm run app -- --build
```

### 自动持续集成辅助命令
```bash
node bin -c [config] -a [app] -o [out] -u [url]
```
在与 jenkins 集成时，可以利用命令执行编译打包。参数：
- config 配置文件路径，可选，默认取：/public/config.js
- app 需要编译的子应用名称，可选，默认打包主应用
- out 打包输入目录，可选，默认 /dist
- url baseUrl，可选，默认取配置文件

