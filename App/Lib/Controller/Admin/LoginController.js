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
      if(this.isPost()){
        this.end(md5(md5('pengyujie')));
        //console.log('111')
      }
    }
  };
});
