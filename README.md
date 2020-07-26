# 十次方前端
## 1. Day 1 Node/Npm/webpack/ES6

<details> <summary>Note</summary>

- 需求架构 前后端分离的开发模式
- Node 模块化编程
- NPM
- webpack 的作用
- ES6 语法

NUXT,easy Mock,npm,axios,Mock.js,swagger,Webpack
### node.js
> http://nodejs.cn/api/

**服务端渲染:**
- 我们右键 “查看源代码” 发现，并没有我们写的 for 循环语句，而是直接的 10 条 Hello World ，这就说明这个循环是在服务端完成的，而非浏览器 (客户端) 来完成。

**获取参数**
- 使用`url`包

### 1.1 npm(node package manager)

相当于 maven
1. 初始化: `npm init`
2. 本地安装: `npm install express`,安装到当前目录

3. 全局安装:`npm install -g express`,使用 `npm root ‐g`查看全局安装目录
4. 批量下载

    进入目录(package.json所在的目录)输入命令 `npm install`
5. 运行工程 `npm run dev`
6. 编译工程 `npm run build`,调用 webpack 方法
7. 其实都是 `package.json`中定义的脚本.

版本号:
- **指定版本**:比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版 本。
- **波浪号(tilde)+指定版本**:比如`~1.2.2`，表示安装1.2.x的最新版本(不低于1.2.2)，但 是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
- **插入号(caret)+指定版本**:比如`ˆ1.2.2`，表示安装1.x.x的最新版本(不低于1.2.2)，但 是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插 入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来 程序的不兼容。
- **latest**:安装最新版本。


### 1.2 webpack
打包成单页 web 应用(single page web application，SPA)，就是只有一 张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面 的Web应用程序。

它将根据模块的依赖关系进行静态分 析，然后将这些模块按照指定的规则生成对应的静态资源。

安装 webpack
```js
npm install webpack -g
npm install webpack-cli -g
```

**打包 js**:
- 创建配置文件webpack.config.js ，该文件与src处于同级目录
- 创建配置文件

    ```js
    var path = require("path");
    module.exports = {
        entry: './src/main.js', output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js'
        }
    };
    ```

    以上代码的意思是:读取当前目录下src文件夹中的main.js(入口文件)内容，把对应的 js文件打包，打包后的文件放入当前目录的dist文件夹下，打包后的js文件名为bundle.js

打包 css: 需要引入 css-loader

- Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数， 返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。首先我们需要安装相关Loader插件，css-loader 是 将 css 装载到 javascript;style-loader 是让 javascript 认识css

`npm install style‐loader css‐loader ‐‐save‐dev`
### 1.3 ES6

编程语言JavaScript是ECMAScript的实现和扩展 。ECMAScript是由ECMA
(一个类似 W3C的标准组织)参与进行标准化的语法规范。

> 可以使用 `babel`进行转换

- var 和 let
- const
- 模板字符串`${}`
- 参数默认函数
- 箭头函数
  - 不需要 function 关键字来创建函数
  - 省略 return 关键字
  - 继承当前上下文的 this 关键字
- 对象初始化简写
- 解构赋值
- Spread Operator
    ```js
    const color = ['red', 'yellow']
    const colorful = [...color, 'green', 'pink']
    ```
- import & export
- Promise


</details>


## 2. Day 2 REST/swagger/mock.js/easy mock
- RESTful(表现层状态转化)
- swagger 编写文档
-
<details> <summary>Note</summary>

### 1. RESTFUL
(Resource)Representational State Transfer : 资源的表现层状态转化

### 2. Swagger
1. 下载 swagger-editor
2. 下载 http-server :`npm install -g http-server`
3. 使用 http-server 运行该文件夹: `http-server dir`
#### SwaggerUI
1. 本地安装 nginx
2. 下载 swaggerUI [源码](https://swagger.io/download-swagger-ui/)
3. 解压,将 dist 放到 nginx 的 html 目录中
4. 启动 nginx
5. 浏览 localhost

### Mock.js

### EasyMock
使用+本地部署

## 3. ELement UI 进行开发
- 查看 Vue-element-admin的文档

## 4. 路由和转态管理

</details>