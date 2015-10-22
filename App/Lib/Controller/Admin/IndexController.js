/**
 * controller
 * @return
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      var model = D('AdminUser');
      console.log(model)
      console.log(model.getAdmin())
      //render View/Home/index_index.html file
      this.display();
    }
  };
});
