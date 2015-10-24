/**
 * controller
 * @return
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/index_index.html file
      this.display();
    },
    loginAction: function(){
      var that = this;
      if(that.isPost()){
        // this.end(md5(md5('pengyujie')));
        //console.log('111')
        var req = that.post();
        Promise.all([D('AdminUser').getUserByName(req.username)]).then(function(data){
          console.log(data)
          if(data[0].name == undefined){
            that.error(1001,'该帐号不存在').end()
          }
          if(data[0].status == 0){
            that.error(1002,'该帐号已经被禁用').end()
          }
          if(data[0].password != md5(md5(req.password))){
            that.error(1003,'密码错误').end()
          }
          //以下为登陆陈公共能
          that.success({msg:'登陆成功'}).end()
        });
      }
    }
  };
});
