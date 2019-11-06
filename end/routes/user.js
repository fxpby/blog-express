var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) { // method == 'GET'
  const { username, password } = req.body
  res.json({ // 自动解析成字符串返回
    error: 0,
    data: {
      username,
      password
    }
  })
});

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
