var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs')
var cookieParser = require('cookie-parser');
var logger = require('morgan'); // 记录日志
const cors = require('cors')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

// 引用路由
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');


var app = express();

// app.use(cors({  
//   origin:['http://localhost:8080'],
//   methods:['GET','POST'],
// }));


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

const ENV = process.env.NODE_ENV
if( ENV !== 'production'){
  // 开发 / 测试 环境
  app.use(logger('dev'));
}else{
  // 线上环境
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  app.use(logger('combined', {
    stream: writeStream
  }));
}
// app.use(logger('dev'));

app.use(express.json()); // content-type =='application/json'
app.use(express.urlencoded({ extended: false })); // 兼容其他格式
app.use(cookieParser());  // 解析 cookie
// app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件

const redisClient = require('./db/redis')
const sessionStore = new RedisStore({
  client: redisClient
})
app.use(session({
  secret: 'WyT_5875#', // 密匙
  cookie: {
    // path: '/',  // 默认配置
    // httpOnly: true, // 默认配置
    maxAge: 24 * 60 * 60 * 1000 // 24 小时后失效
  },
  store: sessionStore
}))

// 注册路由
// app.use('/', indexRouter);
// app.use('/users', usersRouter); // 父路径
app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
