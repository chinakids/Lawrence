//模型定义
module.exports = Model(function () {
  return {
    getLists: function () {
      //实例化模型类
      return this.select().then(function(data) {
        return data;
      })
    }
  }
});
