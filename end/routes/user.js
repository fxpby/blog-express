var express = require('express');
var router = express.Router();
const { login,reg } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/login', (req, res, next) => { // method == 'GET'
  const { username, password } = req.body
  const result = login(username, password)
  return result.then(data => {
    if (data.username) {
      // 设置 session
      req.session.username = data.username
      req.session.realname = data.realname

      res.json(
        new SuccessModel()
      )
      return
    }
    res.json(
      new ErrorModel('登录失败')
    )
  })
});

router.post('/reg', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const realname = req.body.realname
  const result = reg(username, password, realname)
  return result.then(data => {
    res.json(
      new SuccessModel(data)
    )
  })

})

// router.get('/login-test',(req, res, next) => {
//   if(req.session.username){
//     res.json({
//       errno: 0,
//       msg: "已登录"
//     })
//     return
//   }
//   res.json({
//     errno: -1,
//     msg: "未登录"
//   })
// })

// 测试 session
router.get('/session-test',(req, res, next) => {
  const session = req.session
  if(session.viewNum == null){
    session.viewNum = 0
  }
  session.viewNum++

  res.json({
    viewNum: session.viewNum
  })
})

module.exports = router;
