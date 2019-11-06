var express = require('express');
var router = express.Router();
const { 
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog 
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

/* GET home page. */
router.get('/list', function (req, res, next) { // method == 'GET'
  let author = req.query.author || ''
  const keyword = req.query.keyword || ''

  // if (req.query.isadmin) {
  //   //管理员界面
  //   const loginCheckResult = loginCheck(req)
  //   if (loginCheckResult) {
  //     //未登录
  //     return loginCheckResult
  //   }
  //   //强制登陆自己的博客
  //   author = req.session.username
  // }

  const result = getList(author, keyword) // 返回 promise
  return result.then(listData => {
    res.json(
      new SuccessModel(listData)
    )
  })
});

router.get('/detail', function (req, res, next) { // method == 'GET'
  res.json({
    error: 0,
    data: "ok"
  })
});

module.exports = router;
