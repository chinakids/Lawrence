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
    postLoginAction: function(){
      if(this.isPost()){
        console.log('111')
      }
    }
  };
});
