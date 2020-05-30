# 64gua
以《易经64卦》作为例子，演示如何完成后端接口并实现前后端分离的方案。

# 如何运行？

### server
- 1、进入server文件夹： cd server

- 2、安装依赖： npm install

- 3、创建数据库并生成数据:
```
.\node_modules\.bin\sequelize seed:create
.\node_modules\.bin\sequelize db:migrate
.\node_modules\.bin\sequelize db:seed:all
```

- 4、启动服务：node app.js



### client
- 1、进入client文件夹: cd client

- 2、执行以下命令
```
npm install
npm run dev
```