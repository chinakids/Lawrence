/**
 * controller
 * @return
 */
module.exports = Controller("Admin/BaseController", function(){
  "use strict";
  return {
    init: function(http){
      this.super('init',http);
      //if(http.action === 'Login'){return ;}
      // 通过获取 session 判断是否已经登录
      var self = this;
      //return this.session("userInfo").then(function(data){
      //console.log(data);
      var cookies = self.cookie();

      var status = (function(cookies){
        return global.sig(cookies.name,'admin') == cookies.user_sig ? true : false;
      })(cookies);

      if(!status){
        // 如果未登录跳转到登录页。由于 redirect 方法返回的是个 pendding promise，那么后面的 action 方法并不会被执行
        return self.redirect("/admin/login");
      }
      //})
    },
    indexAction: function(){
      // Promise.all([D('AdminUser').getAdmin()]).then(function(data){
      //   console.log(data)
      // });
      //render View/Home/index_index.html file
      this.display();
    }
  };
});
