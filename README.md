# 前端
工业物联网智能化生产线访问系统

## 技术架构 
React + Recoil + Webpack + Typescript + Antd

## 版本
Node 版本 V14.3.0
React 版本 V17.0.2 

## 目录结构
    build        // 编译打包后的目录
    config       // webpack配置
    public       // 静态目录
    index.html   // 入口文件html模板
    script       // 脚本目录
    src          // 源码目录
        /api           // 接口文件
        /assets        // 资源
        /components    // 组件
            /bizcomponents     // 业务组件
            /purecomponents    // UI组件
        /config        // 配置       
        /layouts       // 布局
        /locales       // 国际化
        /pages         // 应用模块
        /routers       // 路由配置
        /stores        // 状态存储
        /utils         // 工具包
        index.tsx       // 入口文件
        setupProxy.js   // webpack代理配置
    .eslintrc.js     // eslint配置
    Dockerfile       // Dockerfile配置
    nginx.conf       // nginx配置
    package.json     // package配置
    README.md        // README
    tsconfig.json    // ts配置


## 安装
npm install or yarn install

## 运行
npm start or yarn start
http://localhost:3080

## 生产环境打包
npm run build or yarn build
