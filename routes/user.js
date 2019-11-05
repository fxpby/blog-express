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

module.exports = router;
