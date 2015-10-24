/**
 * controller
 * @return
 */
module.exports = Controller("Admin/BaseController", function(){
  "use strict";
  return {
    _404Action: function(){
      this.end('not found');
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

          if(data[0].name == undefined){
            self.error(1001,'该帐号不存在').end()
          }
          if(data[0].status == 0){
            self.error(1002,'该帐号已经被禁用').end()
          }
          if(data[0].password != md5(md5(req.password))){
            self.error(1003,'密码错误').end()
          }
          //以下为登陆陈公共能
          self.success({msg:'登陆成功'}).end()
        });
      }
    }
  };
});
