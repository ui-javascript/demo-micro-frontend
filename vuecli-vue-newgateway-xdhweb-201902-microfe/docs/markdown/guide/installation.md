## 安装

本节内容将介绍如何搭建以XDH-WEB框架为基础工程开发项目, 升级框架, 工程打包发布

### 开发机器环境准备

  1. 系统安装 [Node.js](https://nodejs.org/en/download/) v8.0 以上

  2. [Git](https://git-scm.com/downloads) 命令安装

  :::tip
   检查是否安装成功, 运行命令行工具 <br />
   **node.js** 执行 *node -v*  显示版本号即安装成功，如下
   ```base
   C:\Users>node -v
   v8.9.4
   ```
   **Git** 执行 *git --version*  显示版本号即安装成功，如下
   ```base
   C:\Users>git --version
   git version 2.8.1.windows.1
   ```
  :::

### 安装工程源码
  1. 在开发电脑上, 新建一个文件目录, 如：E:/demo
  2. 运行电脑命令行,进入新建目录, 如下：
  ```base
  E:\demo>
  ```
  3. 运行安装命令, 如下：
  ```base
  E:\demo> git clone https://gitee.com/newgateway/xdh-web.git
  ```
  :::tip
   **请根据相应的开发网络环境选择 clone 地址** <br />
   XDH-WEB 外网地址：[https://gitee.com/newgateway/xdh-web.git](https://gitee.com/newgateway/xdh-web.git) <br />
   XDH-WEB 内网地址：[]()
  :::

  4. 进入项目工程文件目录, 根据需要运行相关命令，参考 **[README](#/guide/readme)**
  
  :::tip
  提示<font color='green'> DONE  Compiled successfully </font> 后,
  表示启动成功, 通过浏览器访问 提示的相应地址运行,
  然后就可以愉快是使用 XDH-WEB 工程框架了！
  :::

### XDH-WEB框架升级
  打命令行工具, 进入到项目根目录, 执行 *npm run upgrade* , 如下:
  ```base
  E:\demo\xdh-web> npm run upgrade
  ```
  :::tip
  <font color='#F56C6C'> **建议按照目录结构规范编码, 不然执行此命令可能会造成代码遗失** </font>
  :::

### 工程打包发布
  
   1. 打命令行工具, 进入到项目根目录, 执行 *npm run build* , 如下:
   ```base
   E:\demo\xdh-web> npm run build
   ```
   2. 此时项目工程中会生成一个 xdh-web/dist 文件夹, 将此目录下文件全部拷贝至可访问的web服务容器即可

  :::tip
  **更多命令参考 [README](#/guide/readme)** 
  :::
