/**
 * controller
 * @return
 */
module.exports = Controller("Admin/BaseController", function(){
  "use strict";
  return {
    init: function(http){
      this.super('init',http);
      var self = this;
      //return this.session("userInfo").then(function(data){
      //console.log(data);
      var cookies = self.cookie();

      var status = (function(cookies){
        return md5(md5(cookies.name+'this@is%admin_')) == cookies.user_sig ? true : false;
      })(cookies);

      if(status){
        // 如果未登录跳转到登录页。由于 redirect 方法返回的是个 pendding promise，那么后面的 action 方法并不会被执行
        return self.redirect("/admin/");
      }
    },
    indexAction: function(){
      //render View/Home/index_index.html file
      this.display();
    },
    loginAction: function(){
      var self = this;
      if(self.isPost()){
        // this.end(md5(md5('pengyujie')));
        //console.log('111')
        var req = self.post();
        Promise.all([D('AdminUser').getUserByName(req.username)]).then(function(data){
          //console.log(isEmpty(data[0]));
          if(isEmpty(data[0])){
            self.error(1001,'该帐号不存在').end()
          }
          if(data[0].status == 0){
            self.error(1002,'该帐号已经被禁用').end()
          }
          if(data[0].password != md5(md5(req.password))){
            self.error(1003,'密码错误').end()
          }
          //以下为登陆成功功能
          var mixinStr = 'this@is%admin_';
          self.cookie('name',data[0].name, {
            httponly: true
          });
          self.cookie("user_sig",md5(md5(data[0].name+mixinStr)), {
            httponly: true, //httponly
            timeout: req.remember == true ? 60*60*24*999 : 60*60*24*3 // 超时时间，单位秒
          });
          self.success({msg:'登录成功'}).end();
        });
      }
    },
    logoutAction: function(){
      this.cookie("user_sig", '').success({msg:'退出成功'})
    }
  };
});
