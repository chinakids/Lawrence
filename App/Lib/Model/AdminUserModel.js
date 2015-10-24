//模型定义
module.exports = Model(function () {
    return {
        //获取管理员用户列表
        getLists: function () {
          //实例化模型类
          return this.select().then(function(data) {
              return data;
          })
        },
        getUserByName: function(name){
          return this.where({name: name}).find().then(function(data) {
              return data || {};
          })
        }
    }
});
