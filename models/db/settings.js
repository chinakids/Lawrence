/**
 * Created by dora on 2015/4/8.
 * 创建数据库连接
 * 该模块只会被加载一次
 */

module.exports = {

  // debug 为 true 时，用于本地调试
  debug: false,
  session_secret: 'lawrence_secret', // 务必修改
  auth_cookie_name: 'lawrencecms',
  encrypt_key: 'lawrence',
  //    数据库配置
  URL: 'mongodb://127.0.0.1:27017/lawrencecms',
  DB: 'lawrencecms',
  HOST: '',
  PORT: 27017,
  USERNAME: '',
  PASSWORD: '',


  //    站点基础信息配置
  SITETITLE: 'KU二手街', // 站点名称
  SITEDOMAIN: 'http://www.lawrence.com', // 站点域名
  SITEICP: '#', // 站点备案号
  SITEVERSION: 'v1.0.9', // 静态资源版本戳
  SYSTEMMAIL: '494063570@qq.com', // 管理员个人邮箱
  UPDATEFOLDER: process.cwd() + '/public/upload', // 默认上传文件夹本地路径
  TEMPSTATICFOLDER: process.cwd() + '/public/themes/', // 模板静态文件路径
  DATAOPERATION: process.cwd() + '/models/db/bat', //数据库操作脚本目录
  DATABACKFORDER: '/Users/admin/mongodb/bak', // 服务端数据库操作脚本目录
  SYSTEMTEMPFORDER: process.cwd() + '/views/web/temp/', // 系统模板安装目录
  DORACMSAPI: 'http://api.html-js.cn', // 系统服务提供商
  CMSDISCRIPTION: '',
  SITEKEYWORDS: '',
  SITEBASICKEYWORDS: '', // 基础关键词


  SYSTEMMANAGE: new Array('sysTemManage', 'Lawrence后台管理'), // 后台模块(系统管理)
  ADMINUSERLIST: new Array('sysTemManage_user', '系统用户管理'),
  ADMINGROUPLIST: new Array('sysTemManage_uGroup', '系统用户组管理'),
  ADSLIST: new Array('sysTemManage_ads', '广告管理'),
  FILESLIST: new Array('sysTemManage_files', '文件管理'),
  DATAMANAGE: new Array('sysTemManage_data', '数据管理'), // 数据管理
  BACKUPDATA: new Array('sysTemManage_data_1', '数据备份'), // 数据备份
  SYSTEMLOGS: new Array('sysTemManage_logs', '操作日志'), // 系统操作日志


  CONTENTMANAGE: new Array('contentManage', '内容管理'), // 后台模块(内容管理)
  CONTENTLIST: new Array('contentManage_content', '文档管理'),
  CONTENTCATEGORYS: new Array('contentManage_cateGory', '文档类别管理'),
  CONTENTTAGS: new Array('contentManage_tag', '文档标签管理'), //标签管理
  CONTENTTEMPS: new Array('contentManage_temp', '文档模板管理'), //模板管理
  CONTENTTEMPITEMS: new Array('contentManage_tpItem', '文档模板单元管理'), //模板单元管理
  MESSAGEMANAGE: new Array('contentManage_msg', '留言管理'), // 留言管理
  NOTICEMANAGE: new Array('contentManage_notice', '消息管理'), // 消息管理
  SYSTEMNOTICE: new Array('contentManage_notice_1', '公告管理'), // 公告管理
  USERNOTICE: new Array('contentManage_notice_2', '用户消息'), // 用户消息
  SYSTEMBACKSTAGENOTICE: new Array('contentManage_notice_3', '系统消息'), // 系统消息

  USERMANAGE: new Array('userManage', '会员管理'), // 后台模块(会员管理)
  REGUSERSLIST: new Array('userManage_user', '注册用户管理'),

  //    本地缓存设置
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_psd: '%R3OeX*D#$yHhZR^',
  redis_db: 0,

  //    邮件相关设置
  site_email: 'xx',
  site_email_psd: 'xxx',
  email_findPsd: 'findPsd',
  email_reg_active: 'reg_active',
  email_notice_contentMsg: 'notice_contentMsg',
  email_notice_contentBug: 'notice_contentBug',
  email_notice_user_contentMsg: 'notice_user_contentMsg',
  email_notice_user_reg: 'notice_user_reg',


  //    信息提示相关
  system_illegal_param: '非法参数'
};
