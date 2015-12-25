var express = require('express');
var router = express.Router();

//数据库操作对象
var DbOpt = require("../models/Dbopt");
// 文档对象
var Content = require("../models/Content");
//文章类别对象
var ContentCategory = require("../models/ContentCategory");
//短id
var shortid = require('shortid');
//校验
var validator = require("validator");
//时间格式化
var moment = require('moment');
//站点配置
var settings = require("../models/db/settings");
var siteFunc = require("../models/db/siteFunc");
var url = require('url');
//缓存
var cache = require('../util/cache');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(
    'API状态正常'+
    '<ul>'+
    '<li><a href="/api/pagination?page=1" target="_blank">/api/pagination</a> (GET:page)</li>'+
    '<li><a href="/api/searchPagination?page=1" target="_blank">/api/searchPagination</a> (GET:page)</li>'+
    '</ul>'
  );
});
//获取总页数
router.get('/getTotalCount', function(req, res, next) {
  var page = parseInt(req.query.page) || 1,
      pageLen = 15;
  var totalCount = '';
  Content.getTotalCount(pageLen,function(count){
    totalCount = count;
    res.send({
      'title' : '总页数获取接口',
      'result' : totalCount
    })
  })
});

//分页数据获取
router.get('/pagination', function(req, res, next) {
  var page = parseInt(req.query.page) || 1,
      pageLen = 15;
  var totalCount = '';
  Content.getlist(page - 1,pageLen,function(result){
    var data = [];
    result.forEach(function(item){
      if(item.likeNum > 99){
        item.likeNum = '99+';
      }
      if(item.clikNum > 99){
        item.likeNum = '99+';
      }
      if(item.commentNum > 99){
        item.commentNum = '99+';
      }
      data.push(item);
    })
    res.send({
      'title' : '分页获取接口',
      'result' : data
    })
  })
});




module.exports = router;
