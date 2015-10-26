/**
 * 项目里的Controller基类
 * 这里做一些通用的处理逻辑，其他Controller继承该类
 * @param  {[type]}
 * @return {[type]}         [description]
 */
module.exports = Controller(function(){
  'use strict';
  return {
    init: function(http){
      //var http = obj[0] ,self =obj[1];
      this.super("init", http);
      //return this.session("userInfo").then(function(data){
      //console.log(data);
      var cookies = http.cookie;
      var status = (function(cookies){
        return global.sig(cookies.name,cookies.thinkjs,'admin') == cookies.user_sig ? true : false;
      })(cookies);
      console.log('执行 base:init ::' +status);
      if(!status && http.action != 'login'){
        return this.redirect('/admin/index/login');
      }
    },
    _404Action: function(){
      this.display();
    }
  }
})
