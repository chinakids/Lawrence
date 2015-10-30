/**
 * controller
 * @return
 */
module.exports = Controller("Admin/BaseController", function(){
  "use strict";
  return {
    indexAction: function(http){
      this.display();
    }
  };
});
