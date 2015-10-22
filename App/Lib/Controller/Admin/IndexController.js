/**
 * controller
 * @return
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      Promise.all([D('AdminUser').getAdmin()]).then(function(data){
        console.log(data)
      });

      //render View/Home/index_index.html file
      this.display();
    }
  };
});
