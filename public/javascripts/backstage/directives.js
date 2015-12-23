/**
 * Created by Administrator on 2015/12/9.
 * doraCMS自定义指令
 */


//密码匹配校验
doraApp.directive('pwCheck', [function() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      var firstPassword = '#' + attrs.pwCheck;
      elem.add(firstPassword).on('keyup', function() {
        scope.$apply(function() {
          var v = elem.val() === $(firstPassword).val();
          ctrl.$setValidity('pwmatch', v);
        });
      });
    }
  }
}]);

//百度编辑器
doraApp.directive('ueditor', function($timeout) { //angular绑定ueditor
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {},
    link: function(scope, element, attrs, ctrl) {
      var id = 'ueditor_' + Date.now();
      element[0].id = id;
      var ue = UE.getEditor(id, {
        initialFrameWidth: '100%',
        initialFrameHeight: '300',
        autoHeightEnabled: true,
        allowDivTransToP: false,
        toolbars: [
          [
            //'anchor', //锚点
            'undo', //撤销
            'redo', //重做
            'bold', //加粗
            'indent', //首行缩进
            //'snapscreen', //截图
            'italic', //斜体
            'underline', //下划线
            'strikethrough', //删除线
            //'subscript', //下标
            //'fontborder', //字符边框
            //'superscript', //上标
            //'formatmatch', //格式刷
            //'source', //源代码
            //'blockquote', //引用
            'pasteplain', //纯文本粘贴模式
            //'selectall', //全选
            //'print', //打印
            'preview', //预览
            'horizontal', //分隔线
            'removeformat', //清除格式
            'time', //时间
            'date', //日期
            //'unlink', //取消链接
            // 'insertrow', //前插入行
            // 'insertcol', //前插入列
            // 'mergeright', //右合并单元格
            // 'mergedown', //下合并单元格
            // 'deleterow', //删除行
            // 'deletecol', //删除列
            // 'splittorows', //拆分成行
            // 'splittocols', //拆分成列
            // 'splittocells', //完全拆分单元格
            // 'deletecaption', //删除表格标题
            // 'inserttitle', //插入标题
            // 'mergecells', //合并多个单元格
            // 'deletetable', //删除表格
            'cleardoc', //清空文档
            // 'insertparagraphbeforetable', //"表格前插入行"
            // 'insertcode', //代码语言
            // 'fontfamily', //字体
            // 'fontsize', //字号
            // 'paragraph', //段落格式
            'simpleupload', //单图上传
            'insertimage', //多图上传
            // 'edittable', //表格属性
            // 'edittd', //单元格属性
            // 'link', //超链接
            'emotion', //表情
            // 'spechars', //特殊字符
            // 'searchreplace', //查询替换
            // 'map', //Baidu地图
            // 'gmap', //Google地图
            // 'insertvideo', //视频
            'justifyleft', //居左对齐
            'justifyright', //居右对齐
            'justifycenter', //居中对齐
            'justifyjustify', //两端对齐
            // 'forecolor', //字体颜色
            // 'backcolor', //背景色
            // 'insertorderedlist', //有序列表
            // 'insertunorderedlist', //无序列表
            'fullscreen', //全屏
            // 'directionalityltr', //从左向右输入
            // 'directionalityrtl', //从右向左输入
            // 'rowspacingtop', //段前距
            // 'rowspacingbottom', //段后距
            // 'pagebreak', //分页
            // 'insertframe', //插入Iframe
            'imagenone', //默认
            'imageleft', //左浮动
            'imageright', //右浮动
            // 'attachment', //附件
            'imagecenter', //居中
            //'wordimage', //图片转存
            // 'lineheight', //行间距
            // 'edittip ', //编辑提示
            // 'customstyle', //自定义标题
            //'autotypeset', //自动排版
            // 'webapp', //百度应用
            // 'touppercase', //字母大写
            // 'tolowercase', //字母小写
            // 'background', //背景
            // 'template', //模板
            // 'scrawl', //涂鸦
            // 'music', //音乐
            'inserttable', //插入表格
            'drafts', // 从草稿箱加载
            // 'charts', // 图表
            'help' //帮助
          ]
        ]
      });
      ue.ready(function() {
        ue.addListener('contentChange', function() {
          ctrl.$setViewValue(ue.getContent());
          if (!scope.$$phase) {
            scope.$apply();
          }
        });
      });
    }
  };
});

//ztree组件
doraApp.directive('tree', function() {
  return {
    require: '?ngModel',
    restrict: 'A',
    link: function($scope, element, attrs, ngModel) {
      var setting = {
        data: {
          key: {
            title: "t"
          },
          simpleData: {
            enable: true
          }
        },
        callback: {
          onClick: function(event, treeId, treeNode, clickFlag) {
            $scope.$apply(function() {
              ngModel.$setViewValue(treeNode);
            });
          }
        }
      };
      var zNodes = [{
        id: 1,
        pId: 0,
        name: "普通的父节点",
        t: "我很普通，随便点我吧",
        open: true
      }, {
        id: 11,
        pId: 1,
        name: "叶子节点 - 1",
        t: "我很普通，随便点我吧"
      }, {
        id: 12,
        pId: 1,
        name: "叶子节点 - 2",
        t: "我很普通，随便点我吧"
      }, {
        id: 13,
        pId: 1,
        name: "叶子节点 - 3",
        t: "我很普通，随便点我吧"
      }, {
        id: 2,
        pId: 0,
        name: "NB的父节点",
        t: "点我可以，但是不能点我的子节点，有本事点一个你试试看？",
        open: true
      }, {
        id: 21,
        pId: 2,
        name: "叶子节点2 - 1",
        t: "你哪个单位的？敢随便点我？小心点儿..",
        click: false
      }, {
        id: 22,
        pId: 2,
        name: "叶子节点2 - 2",
        t: "我有老爸罩着呢，点击我的小心点儿..",
        click: false
      }, {
        id: 23,
        pId: 2,
        name: "叶子节点2 - 3",
        t: "好歹我也是个领导，别普通群众就来点击我..",
        click: false
      }, {
        id: 3,
        pId: 0,
        name: "郁闷的父节点",
        t: "别点我，我好害怕...我的子节点随便点吧...",
        open: true,
        click: false
      }, {
        id: 31,
        pId: 3,
        name: "叶子节点3 - 1",
        t: "唉，随便点我吧"
      }, {
        id: 32,
        pId: 3,
        name: "叶子节点3 - 2",
        t: "唉，随便点我吧"
      }, {
        id: 33,
        pId: 3,
        name: "叶子节点3 - 3",
        t: "唉，随便点我吧"
      }];
      $.fn.zTree.init(element, setting, zNodes);
    }
  };
});
