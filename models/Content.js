/**
 * Created by Administrator on 2015/4/15.
 * 管理员用户组对象
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shortid = require('shortid');
var ContentCategory = require('./ContentCategory');
var ContentSchema = new Schema({
  _id: {
    type: String,
    unique: true,
    'default': shortid.generate
  },
  title: String,
  type: {
    type: String,
    default: "content"
  }, // 发布形式 默认为普通文档,约定 singer 为单页面文档
  category: {
    type: String,
    ref: 'ContentCategory'
  }, //文章类别
  sortPath: String, //存储所有父节点结构
  tags: String, // 标签
  keywords: String,
  sImg: {
    type: String,
    default: "/upload/images/defaultImg.jpg"
  }, // 文章小图
  discription: String,
  date: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }, // 更新时间
  author: {
    type: String
  },
  authorLogo:{
    type: String
  },
  state: {
    type: Boolean,
    default: true
  }, // 是否在前台显示，默认显示
  isTop: {
    type: Number,
    default: 0
  }, // 是否推荐，默认不推荐 0为不推荐，1为推荐
  clickNum: {
    type: Number,
    default: 1
  },
  price:{
    type:Number
  },
  sellState:{
    type: Number,
    default: 0
  },//交易状态 0为待售 1为售出
  callWay:{
    type: Number,
    default: 0
  },//联系方式 0为QQ 1为微信  2为电话
  callString:{
    type: String
  },
  location:{
    type: String
  },
  comments: {},
  commentNum: {
    type: Number,
    default: 0
  }, // 评论数
  likeNum: {
    type: Number,
    default: 0
  }, // 喜欢数
  likeUserIds: String, // 喜欢该文章的用户ID集合
  // from: {
  //   type: String,
  //   default: '1'
  // }
});



ContentSchema.statics = {
  //更新评论数
  updateCommentNum: function(contentId, key, callBack) {
    Content.findOne({
      '_id': contentId
    }, 'commentNum', function(err, doc) {
      if (err) {
        res.end(err)
      }
      if (key === 'add') {
        doc.commentNum = doc.commentNum + 1;
      } else if (key === 'del') {
        doc.commentNum = doc.commentNum - 1;
      }
      doc.save(function(err) {
        if (err) throw err;
        callBack();
      })
    })
  },
  getTotalCount: function(pageLen,callBack){
    Content
      .find({state:true})
      .populate('contentTemp')
      .exec(function(err, result) {
        if(err){
          res.send(err);
        }else{
          if(callBack) callBack(Math.ceil(result.length / pageLen));
        }
      })
  },
  getlist: function(page,pageLen,callBack){
    Content
      .find({state:true})
      .populate('contentTemp')
      .sort('-date')
      .skip(page * pageLen)
      .limit(pageLen)
      .exec(function(err, result) {
        if(err){
          res.send(err);
        }else{
          if(callBack) callBack(result);
        }
      })
  }
};



var Content = mongoose.model("Content", ContentSchema);

module.exports = Content;
