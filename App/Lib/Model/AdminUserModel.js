//模型定义
module.exports = Model(function () {
    return {
        //获取管理员用户列表
        getAdmin: function () {
            //实例化模型类
            return this.select().then(function(data) {
                return data;
            })
        }
    }
});
